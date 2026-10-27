create or replace function public.snapshot_content_revision()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  revision_snapshot jsonb;
  linked_intervention_slugs jsonb;
begin
  if TG_TABLE_NAME = 'blog_posts' then
    select coalesce(
      jsonb_agg(link.intervention_slug order by link.position, link.intervention_slug),
      '[]'::jsonb
    )
    into linked_intervention_slugs
    from public.blog_intervention_links as link
    where link.blog_slug = old.slug;
    revision_snapshot := to_jsonb(old) || jsonb_build_object(
      'linked_intervention_slugs', linked_intervention_slugs
    );
  else
    revision_snapshot := to_jsonb(old);
  end if;

  insert into public.content_revisions (content_type, record_id, slug, snapshot)
  values (
    case TG_TABLE_NAME
      when 'blog_posts' then 'blog_post'
      when 'interventions' then 'intervention'
    end,
    old.id,
    old.slug,
    revision_snapshot
  );

  if TG_OP = 'DELETE' then
    return old;
  end if;
  return new;
end;
$$;
revoke execute on function public.snapshot_content_revision() from public, anon, authenticated;
create or replace function public.cms_create_blog_post(
  p_post jsonb,
  p_linked_intervention_slugs text[] default array[]::text[]
)
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  created_post public.blog_posts%rowtype;
begin
  insert into public.blog_posts (
    slug,
    title,
    description,
    status,
    published_at,
    reviewer_name,
    reviewed_at,
    seo_title,
    seo_description,
    content_blocks
  )
  values (
    p_post->>'slug',
    p_post->>'title',
    p_post->>'description',
    p_post->>'status',
    (p_post->>'published_at')::timestamptz,
    p_post->>'reviewer_name',
    (p_post->>'reviewed_at')::timestamptz,
    p_post->>'seo_title',
    p_post->>'seo_description',
    p_post->'content_blocks'
  )
  returning * into created_post;

  insert into public.blog_intervention_links (blog_slug, intervention_slug, position, context)
  select
    created_post.slug,
    links.intervention_slug,
    (row_number() over (order by links.first_position) - 1)::integer,
    'both'
  from (
    select btrim(item.slug) as intervention_slug, min(item.position) as first_position
    from unnest(coalesce(p_linked_intervention_slugs, array[]::text[]))
      with ordinality as item(slug, position)
    where nullif(btrim(item.slug), '') is not null
    group by btrim(item.slug)
  ) as links;

  return to_jsonb(created_post);
exception
  when unique_violation then
    raise exception using errcode = 'P0001', message = 'CMS_BLOG_SLUG_CONFLICT';
  when foreign_key_violation then
    raise exception using errcode = 'P0001', message = 'CMS_BLOG_INVALID_INTERVENTION';
  when check_violation or not_null_violation then
    raise exception using errcode = 'P0001', message = 'CMS_BLOG_INVALID';
end;
$$;
create or replace function public.cms_update_blog_post(
  p_slug text,
  p_expected_updated_at timestamptz,
  p_patch jsonb,
  p_linked_intervention_slugs text[] default null
)
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  current_post public.blog_posts%rowtype;
  updated_post public.blog_posts%rowtype;
begin
  select *
  into current_post
  from public.blog_posts
  where slug = p_slug
  for update;

  if not found then
    raise exception using errcode = 'P0001', message = 'CMS_BLOG_NOT_FOUND';
  end if;
  if current_post.updated_at is distinct from p_expected_updated_at then
    raise exception using errcode = 'P0001', message = 'CMS_BLOG_STALE';
  end if;

  update public.blog_posts
  set
    title = case when p_patch ? 'title' then p_patch->>'title' else current_post.title end,
    description = case when p_patch ? 'description' then p_patch->>'description' else current_post.description end,
    status = case when p_patch ? 'status' then p_patch->>'status' else current_post.status end,
    published_at = case
      when p_patch ? 'published_at' then (p_patch->>'published_at')::timestamptz
      else current_post.published_at
    end,
    reviewer_name = case when p_patch ? 'reviewer_name' then p_patch->>'reviewer_name' else current_post.reviewer_name end,
    reviewed_at = case
      when p_patch ? 'reviewed_at' then (p_patch->>'reviewed_at')::timestamptz
      else current_post.reviewed_at
    end,
    seo_title = case when p_patch ? 'seo_title' then p_patch->>'seo_title' else current_post.seo_title end,
    seo_description = case
      when p_patch ? 'seo_description' then p_patch->>'seo_description'
      else current_post.seo_description
    end,
    content_blocks = case
      when p_patch ? 'content_blocks' then p_patch->'content_blocks'
      else current_post.content_blocks
    end
  where id = current_post.id
  returning * into updated_post;

  if p_linked_intervention_slugs is not null then
    delete from public.blog_intervention_links where blog_slug = p_slug;

    insert into public.blog_intervention_links (blog_slug, intervention_slug, position, context)
    select
      p_slug,
      links.intervention_slug,
      (row_number() over (order by links.first_position) - 1)::integer,
      'both'
    from (
      select btrim(item.slug) as intervention_slug, min(item.position) as first_position
      from unnest(p_linked_intervention_slugs) with ordinality as item(slug, position)
      where nullif(btrim(item.slug), '') is not null
      group by btrim(item.slug)
    ) as links;
  end if;

  return to_jsonb(updated_post);
exception
  when foreign_key_violation then
    raise exception using errcode = 'P0001', message = 'CMS_BLOG_INVALID_INTERVENTION';
  when check_violation or not_null_violation then
    raise exception using errcode = 'P0001', message = 'CMS_BLOG_INVALID';
end;
$$;
revoke all on function public.cms_create_blog_post(jsonb, text[]) from public, anon, authenticated;
revoke all on function public.cms_update_blog_post(text, timestamptz, jsonb, text[]) from public, anon, authenticated;
grant execute on function public.cms_create_blog_post(jsonb, text[]) to service_role;
grant execute on function public.cms_update_blog_post(text, timestamptz, jsonb, text[]) to service_role;
do $$
begin
  if has_function_privilege('anon', 'public.cms_create_blog_post(jsonb,text[])', 'execute')
    or has_function_privilege('authenticated', 'public.cms_create_blog_post(jsonb,text[])', 'execute')
    or has_function_privilege('anon', 'public.cms_update_blog_post(text,timestamptz,jsonb,text[])', 'execute')
    or has_function_privilege('authenticated', 'public.cms_update_blog_post(text,timestamptz,jsonb,text[])', 'execute')
    or not has_function_privilege('service_role', 'public.cms_create_blog_post(jsonb,text[])', 'execute')
    or not has_function_privilege('service_role', 'public.cms_update_blog_post(text,timestamptz,jsonb,text[])', 'execute') then
    raise exception 'Transactional blog RPC privileges are invalid';
  end if;

  if exists (
    select 1
    from pg_catalog.pg_proc
    where oid in (
      'public.cms_create_blog_post(jsonb,text[])'::regprocedure,
      'public.cms_update_blog_post(text,timestamptz,jsonb,text[])'::regprocedure
    )
    and (
      not prosecdef
      or not coalesce(proconfig, array[]::text[]) @> array['search_path=pg_catalog, public']
    )
  ) then
    raise exception 'Transactional blog RPC security settings are invalid';
  end if;
end;
$$;

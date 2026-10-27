-- Named CMS identities, authorization roles and trustworthy write attribution.
create type public.cms_role as enum ('admin', 'editor', 'reviewer', 'intake');
create table public.cms_actors (
  id uuid primary key default gen_random_uuid(),
  user_id uuid null references auth.users(id) on delete restrict,
  display_name text not null check (nullif(btrim(display_name), '') is not null),
  role public.cms_role not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  deactivated_at timestamptz null,
  constraint cms_actors_deactivation_check check (active or deactivated_at is not null)
);
create unique index cms_actors_user_idx on public.cms_actors(user_id) where user_id is not null;
insert into public.cms_actors (id, user_id, display_name, role, active, deactivated_at)
values (
  '00000000-0000-0000-0000-000000000001',
  null,
  'Historique antérieur (non attribué)',
  'admin',
  false,
  now()
);
create function public.protect_cms_actor_identity()
returns trigger
language plpgsql
set search_path = pg_catalog, public
as $$
begin
  if tg_op = 'DELETE' then
    raise exception using errcode = '55000', message = 'cms_actor_records_are_immutable';
  end if;
  if new.id is distinct from old.id
    or new.user_id is distinct from old.user_id
    or new.display_name is distinct from old.display_name
    or new.created_at is distinct from old.created_at then
    raise exception using errcode = '55000', message = 'cms_actor_identity_is_immutable';
  end if;
  return new;
end;
$$;
create trigger trg_protect_cms_actor_identity
before update or delete on public.cms_actors
for each row execute function public.protect_cms_actor_identity();
create function public.is_active_cms_actor(p_actor_id uuid, p_roles public.cms_role[] default null)
returns boolean
language sql
stable
security definer
set search_path = pg_catalog, public
as $$
  select exists (
    select 1 from public.cms_actors actor
    where actor.id = p_actor_id
      and actor.active
      and actor.user_id is not null
      and (p_roles is null or actor.role = any(p_roles))
  );
$$;
create function public.current_cms_actor_id()
returns uuid
language plpgsql
stable
security definer
set search_path = pg_catalog, public
as $$
declare actor_id uuid := nullif(current_setting('cms.actor_id', true), '')::uuid;
begin
  if not public.is_active_cms_actor(actor_id, null) then
    raise exception using errcode = '42501', message = 'invalid_cms_actor';
  end if;
  return actor_id;
end;
$$;
create table public.cms_audit_events (
  id bigint generated always as identity primary key,
  actor_id uuid not null references public.cms_actors(id) on delete restrict,
  action text not null check (nullif(btrim(action), '') is not null),
  entity_type text not null check (nullif(btrim(entity_type), '') is not null),
  entity_id uuid null,
  entity_key text null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index cms_audit_events_entity_idx
  on public.cms_audit_events(entity_type, entity_id, created_at desc);
create index cms_audit_events_actor_idx on public.cms_audit_events(actor_id, created_at desc);
create function public.prevent_cms_audit_mutation()
returns trigger
language plpgsql
set search_path = pg_catalog
as $$
begin
  raise exception using errcode = '55000', message = 'cms_audit_events_are_append_only';
end;
$$;
create trigger trg_prevent_cms_audit_mutation
before update or delete on public.cms_audit_events
for each row execute function public.prevent_cms_audit_mutation();
alter table public.content_revisions
  add column actor_id uuid not null default '00000000-0000-0000-0000-000000000001'
    references public.cms_actors(id) on delete restrict;
alter table public.blog_posts
  add column created_by_actor_id uuid not null default '00000000-0000-0000-0000-000000000001'
    references public.cms_actors(id) on delete restrict,
  add column updated_by_actor_id uuid not null default '00000000-0000-0000-0000-000000000001'
    references public.cms_actors(id) on delete restrict,
  add column reviewed_by_actor_id uuid null references public.cms_actors(id) on delete restrict,
  add column clinical_safety_reviewed_at timestamptz null,
  add column clinical_safety_reviewed_by_actor_id uuid null references public.cms_actors(id) on delete restrict;
alter table public.interventions
  add column created_by_actor_id uuid not null default '00000000-0000-0000-0000-000000000001'
    references public.cms_actors(id) on delete restrict,
  add column updated_by_actor_id uuid not null default '00000000-0000-0000-0000-000000000001'
    references public.cms_actors(id) on delete restrict,
  add column reviewed_by_actor_id uuid null references public.cms_actors(id) on delete restrict,
  add column clinical_safety_reviewed_at timestamptz null,
  add column clinical_safety_reviewed_by_actor_id uuid null references public.cms_actors(id) on delete restrict;
alter table public.avant_apres_cases
  add column created_by_actor_id uuid not null default '00000000-0000-0000-0000-000000000001'
    references public.cms_actors(id) on delete restrict,
  add column updated_by_actor_id uuid not null default '00000000-0000-0000-0000-000000000001'
    references public.cms_actors(id) on delete restrict;
alter table public.booking_requests
  add column updated_by_actor_id uuid null references public.cms_actors(id) on delete restrict;
alter table public.blog_posts
  alter column created_by_actor_id set default public.current_cms_actor_id(),
  alter column updated_by_actor_id set default public.current_cms_actor_id();
drop policy if exists "Public can read published blog posts" on public.blog_posts;
create policy "Public can read reviewed blog posts"
on public.blog_posts for select
using (
  status = 'publie'
  and reviewed_by_actor_id is not null
  and nullif(btrim(reviewer_name), '') is not null
  and reviewed_at is not null
  and (
    lower(concat_ws(' ', title, description, content_blocks::text)) not like '%injection%'
    or (clinical_safety_reviewed_by_actor_id is not null and clinical_safety_reviewed_at is not null)
  )
);
drop policy if exists "Public can read published blog links" on public.blog_intervention_links;
create policy "Public can read reviewed blog links"
on public.blog_intervention_links for select
using (
  exists (
    select 1 from public.blog_posts post
    where post.slug = blog_slug
      and post.status = 'publie'
      and post.reviewed_by_actor_id is not null
      and post.reviewed_at is not null
      and (
        lower(concat_ws(' ', post.title, post.description, post.content_blocks::text)) not like '%injection%'
        or (post.clinical_safety_reviewed_by_actor_id is not null and post.clinical_safety_reviewed_at is not null)
      )
  )
  and exists (
    select 1 from public.interventions intervention
    where intervention.slug = intervention_slug and intervention.status = 'publie'
  )
);
drop policy if exists "Public can read published interventions" on public.interventions;
create policy "Public can read reviewed interventions"
on public.interventions for select
using (
  status = 'publie'
  and reviewed_by_actor_id is not null
  and nullif(btrim(reviewer_name), '') is not null
  and reviewed_at is not null
  and (
    category <> 'medecine-esthetique'
    or (
      slug not in ('injection-acide-hyaluronique', 'injection-toxine-botulique', 'skinbooster', 'mesotherapie')
      and lower(concat_ws(' ', slug, title, description, body_md, content_blocks::text, seo_page_data::text)) not like '%injection%'
    )
    or (clinical_safety_reviewed_by_actor_id is not null and clinical_safety_reviewed_at is not null)
  )
);
alter table public.interventions
  alter column created_by_actor_id drop default,
  alter column updated_by_actor_id drop default;
alter table public.avant_apres_cases
  alter column created_by_actor_id set default public.current_cms_actor_id(),
  alter column updated_by_actor_id set default public.current_cms_actor_id();
create or replace function public.snapshot_content_revision()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  revision_snapshot jsonb;
  linked_intervention_slugs jsonb;
  revision_actor_id uuid;
begin
  if tg_op = 'UPDATE' and to_jsonb(old) - 'updated_by_actor_id' = to_jsonb(new) - 'updated_by_actor_id' then
    return new;
  end if;

  revision_actor_id := coalesce(
    nullif(current_setting('cms.actor_id', true), '')::uuid,
    case when tg_op = 'UPDATE' then new.updated_by_actor_id else null end
  );
  if not public.is_active_cms_actor(revision_actor_id, null) then
    raise exception using errcode = '42501', message = 'invalid_cms_actor';
  end if;

  if tg_table_name = 'blog_posts' then
    select coalesce(jsonb_agg(link.intervention_slug order by link.position, link.intervention_slug), '[]'::jsonb)
    into linked_intervention_slugs
    from public.blog_intervention_links link where link.blog_slug = old.slug;
    revision_snapshot := to_jsonb(old) || jsonb_build_object('linked_intervention_slugs', linked_intervention_slugs);
  else
    revision_snapshot := to_jsonb(old);
  end if;

  insert into public.content_revisions (content_type, record_id, slug, snapshot, actor_id)
  values (
    case tg_table_name when 'blog_posts' then 'blog_post' when 'interventions' then 'intervention' end,
    old.id, old.slug, revision_snapshot, revision_actor_id
  );
  if tg_op = 'DELETE' then return old; end if;
  return new;
end;
$$;
alter table public.content_revisions alter column actor_id drop default;
-- Keep the already-tested P0 transactions as inaccessible implementation details.
alter function public.cms_create_blog_post(jsonb, text[]) rename to cms_create_blog_post_internal;
alter function public.cms_update_blog_post(text, timestamptz, jsonb, text[]) rename to cms_update_blog_post_internal;
alter function public.save_avant_apres_case(uuid, timestamptz, jsonb) rename to save_avant_apres_case_internal;
alter function public.delete_avant_apres_case(uuid, timestamptz) rename to delete_avant_apres_case_internal;
revoke all on function public.cms_create_blog_post_internal(jsonb, text[]) from public, anon, authenticated, service_role;
revoke all on function public.cms_update_blog_post_internal(text, timestamptz, jsonb, text[]) from public, anon, authenticated, service_role;
revoke all on function public.save_avant_apres_case_internal(uuid, timestamptz, jsonb) from public, anon, authenticated, service_role;
revoke all on function public.delete_avant_apres_case_internal(uuid, timestamptz) from public, anon, authenticated, service_role;
create function public.cms_create_blog_post(
  p_actor_id uuid,
  p_post jsonb,
  p_linked_intervention_slugs text[] default array[]::text[]
)
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  result jsonb;
  record_id uuid;
  actor_role public.cms_role;
  actor_name text;
  secured_post jsonb;
  requires_safety_review boolean;
begin
  if not public.is_active_cms_actor(p_actor_id, array['admin', 'editor', 'reviewer']::public.cms_role[]) then
    raise exception using errcode = '42501', message = 'invalid_cms_actor';
  end if;
  select role, display_name into actor_role, actor_name from public.cms_actors where id = p_actor_id;
  if p_post->>'status' = 'publie' and actor_role not in ('admin', 'reviewer') then
    raise exception using errcode = '42501', message = 'cms_publish_role_required';
  end if;
  secured_post := p_post || jsonb_build_object(
    'reviewer_name', case when p_post->>'status' = 'publie' then actor_name else null end,
    'reviewed_at', case when p_post->>'status' = 'publie' then to_jsonb(now()) else 'null'::jsonb end
  );
  requires_safety_review := lower(concat_ws(
    ' ', p_post->>'title', p_post->>'description', (p_post->'content_blocks')::text
  )) like '%injection%';
  if p_post->>'status' = 'publie' and requires_safety_review
    and nullif(p_post->>'clinical_safety_reviewed_by_actor_id', '') is null then
    raise exception using errcode = '23514', message = 'cms_injection_safety_review_required';
  end if;
  perform set_config('cms.actor_id', p_actor_id::text, true);
  result := public.cms_create_blog_post_internal(secured_post, p_linked_intervention_slugs);
  record_id := (result->>'id')::uuid;
  update public.blog_posts set
    created_by_actor_id = p_actor_id,
    updated_by_actor_id = p_actor_id,
    reviewed_by_actor_id = case when result->>'status' = 'publie' then p_actor_id else null end,
    clinical_safety_reviewed_at = case when result->>'status' = 'publie' and requires_safety_review then now() else null end,
    clinical_safety_reviewed_by_actor_id = case when result->>'status' = 'publie' and requires_safety_review then p_actor_id else null end
  where id = record_id;
  insert into public.cms_audit_events(actor_id, action, entity_type, entity_id, entity_key, metadata)
  values (p_actor_id, case when result->>'status' = 'publie' then 'publish' else 'create' end,
    'blog_post', record_id, result->>'slug', jsonb_build_object('status', result->>'status'));
  return (select to_jsonb(post) from public.blog_posts post where post.id = record_id);
end;
$$;
create function public.cms_update_blog_post(
  p_actor_id uuid,
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
  result jsonb;
  previous_status text;
  record_id uuid;
  resulting_status text;
  actor_role public.cms_role;
  actor_name text;
  secured_patch jsonb;
  requires_safety_review boolean;
begin
  if not public.is_active_cms_actor(p_actor_id, array['admin', 'editor', 'reviewer']::public.cms_role[]) then
    raise exception using errcode = '42501', message = 'invalid_cms_actor';
  end if;
  select id, status into record_id, previous_status from public.blog_posts where slug = p_slug;
  select role, display_name into actor_role, actor_name from public.cms_actors where id = p_actor_id;
  resulting_status := coalesce(p_patch->>'status', previous_status);
  if (previous_status = 'publie' or resulting_status = 'publie') and actor_role not in ('admin', 'reviewer') then
    raise exception using errcode = '42501', message = 'cms_publish_role_required';
  end if;
  secured_patch := p_patch || jsonb_build_object(
    'reviewer_name', case when resulting_status = 'publie' then actor_name else null end,
    'reviewed_at', case when resulting_status = 'publie' then to_jsonb(now()) else 'null'::jsonb end
  );
  requires_safety_review := lower(concat_ws(
    ' ', coalesce(p_patch->>'title', (select title from public.blog_posts where id = record_id)),
    coalesce(p_patch->>'description', (select description from public.blog_posts where id = record_id)),
    coalesce((p_patch->'content_blocks')::text, (select content_blocks::text from public.blog_posts where id = record_id))
  )) like '%injection%';
  if resulting_status = 'publie' and requires_safety_review
    and nullif(p_patch->>'clinical_safety_reviewed_by_actor_id', '') is null then
    raise exception using errcode = '23514', message = 'cms_injection_safety_review_required';
  end if;
  perform set_config('cms.actor_id', p_actor_id::text, true);
  result := public.cms_update_blog_post_internal(p_slug, p_expected_updated_at, secured_patch, p_linked_intervention_slugs);
  update public.blog_posts set
    updated_by_actor_id = p_actor_id,
    reviewed_by_actor_id = case when resulting_status = 'publie' then p_actor_id else null end,
    clinical_safety_reviewed_at = case when resulting_status = 'publie' and requires_safety_review then now() else null end,
    clinical_safety_reviewed_by_actor_id = case when resulting_status = 'publie' and requires_safety_review then p_actor_id else null end
  where id = record_id;
  insert into public.cms_audit_events(actor_id, action, entity_type, entity_id, entity_key, metadata)
  values (p_actor_id,
    case when previous_status <> 'publie' and result->>'status' = 'publie' then 'publish' else 'update' end,
    'blog_post', record_id, p_slug, jsonb_build_object('status', result->>'status'));
  return (select to_jsonb(post) from public.blog_posts post where post.id = record_id);
end;
$$;
create function public.cms_delete_blog_post(p_actor_id uuid, p_slug text)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare record_id uuid;
begin
  if not public.is_active_cms_actor(p_actor_id, array['admin', 'reviewer']::public.cms_role[]) then
    raise exception using errcode = '42501', message = 'invalid_cms_actor';
  end if;
  select id into record_id from public.blog_posts where slug = p_slug for update;
  if not found then return false; end if;
  perform set_config('cms.actor_id', p_actor_id::text, true);
  delete from public.blog_posts where id = record_id;
  insert into public.cms_audit_events(actor_id, action, entity_type, entity_id, entity_key)
  values (p_actor_id, 'delete', 'blog_post', record_id, p_slug);
  return true;
end;
$$;
create function public.save_avant_apres_case(
  p_actor_id uuid,
  p_case_id uuid,
  p_expected_updated_at timestamptz,
  p_payload jsonb
)
returns uuid
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  result_id uuid;
  previous_status text;
  actor_role public.cms_role;
begin
  if not public.is_active_cms_actor(p_actor_id, array['admin', 'editor', 'reviewer']::public.cms_role[]) then
    raise exception using errcode = '42501', message = 'invalid_cms_actor';
  end if;
  if p_case_id is not null then select status into previous_status from public.avant_apres_cases where id = p_case_id; end if;
  select role into actor_role from public.cms_actors where id = p_actor_id;
  if (previous_status = 'publie' or p_payload->>'status' = 'publie') and actor_role not in ('admin', 'reviewer') then
    raise exception using errcode = '42501', message = 'cms_publish_role_required';
  end if;
  perform set_config('cms.actor_id', p_actor_id::text, true);
  result_id := public.save_avant_apres_case_internal(p_case_id, p_expected_updated_at, p_payload);
  update public.avant_apres_cases set
    created_by_actor_id = coalesce(created_by_actor_id, p_actor_id), updated_by_actor_id = p_actor_id
  where id = result_id;
  insert into public.cms_audit_events(actor_id, action, entity_type, entity_id, metadata)
  values (p_actor_id,
    case when p_payload->>'status' = 'publie' and coalesce(previous_status, '') <> 'publie' then 'publish'
      when previous_status = 'publie' and p_payload->>'status' = 'brouillon' then 'unpublish'
      when p_case_id is null then 'create' else 'update' end,
    'avant_apres_case', result_id, jsonb_build_object('status', p_payload->>'status'));
  return result_id;
end;
$$;
create function public.delete_avant_apres_case(
  p_actor_id uuid,
  p_case_id uuid,
  p_expected_updated_at timestamptz
)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare deleted boolean;
begin
  if not public.is_active_cms_actor(p_actor_id, array['admin', 'reviewer']::public.cms_role[]) then
    raise exception using errcode = '42501', message = 'invalid_cms_actor';
  end if;
  deleted := public.delete_avant_apres_case_internal(p_case_id, p_expected_updated_at);
  if deleted then
    insert into public.cms_audit_events(actor_id, action, entity_type, entity_id)
    values (p_actor_id, 'delete', 'avant_apres_case', p_case_id);
  end if;
  return deleted;
end;
$$;
create function public.cms_save_intervention(
  p_actor_id uuid,
  p_slug text,
  p_expected_updated_at timestamptz,
  p_payload jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  current_row public.interventions%rowtype;
  saved_row public.interventions%rowtype;
  previous_status text;
  resulting_status text;
  actor_role public.cms_role;
  actor_name text;
  requires_safety_review boolean;
begin
  if not public.is_active_cms_actor(p_actor_id, array['admin', 'editor', 'reviewer']::public.cms_role[]) then
    raise exception using errcode = '42501', message = 'invalid_cms_actor';
  end if;
  select role, display_name into actor_role, actor_name from public.cms_actors where id = p_actor_id;
  if p_expected_updated_at is null then
    resulting_status := p_payload->>'status';
    if resulting_status = 'publie' and actor_role not in ('admin', 'reviewer') then
      raise exception using errcode = '42501', message = 'cms_publish_role_required';
    end if;
    requires_safety_review := p_payload->>'category' = 'medecine-esthetique'
      and (
        p_slug in ('injection-acide-hyaluronique', 'injection-toxine-botulique', 'skinbooster', 'mesotherapie')
        or lower(concat_ws(' ', p_slug, p_payload->>'title', p_payload->>'description', p_payload->>'body_md', (p_payload->'content_blocks')::text, (p_payload->'seo_page_data')::text)) like '%injection%'
      );
    if resulting_status = 'publie' and requires_safety_review
      and nullif(p_payload->>'clinical_safety_reviewed_by_actor_id', '') is null then
      raise exception using errcode = '23514', message = 'cms_injection_safety_review_required';
    end if;
    insert into public.interventions (
      slug, category, title, description, body_md, content_blocks, "order", status,
      reviewer_name, reviewed_at, seo_title, seo_description, template_kind,
      hero_image_src, hero_image_alt, seo_page_data, created_by_actor_id, updated_by_actor_id,
      reviewed_by_actor_id, clinical_safety_reviewed_at, clinical_safety_reviewed_by_actor_id
    ) values (
      p_slug, p_payload->>'category', p_payload->>'title', p_payload->>'description', p_payload->>'body_md',
      p_payload->'content_blocks', (p_payload->>'order')::integer, p_payload->>'status',
      case when resulting_status = 'publie' then actor_name else null end,
      case when resulting_status = 'publie' then now() else null end,
      p_payload->>'seo_title', p_payload->>'seo_description', p_payload->>'template_kind',
      p_payload->>'hero_image_src', p_payload->>'hero_image_alt', p_payload->'seo_page_data', p_actor_id, p_actor_id,
      case when resulting_status = 'publie' then p_actor_id else null end,
      case when resulting_status = 'publie' and requires_safety_review then now() else null end,
      case when resulting_status = 'publie' and requires_safety_review then p_actor_id else null end
    ) returning * into saved_row;
  else
    select * into current_row from public.interventions where slug = p_slug for update;
    if not found then raise exception using errcode = 'P0002', message = 'cms_intervention_not_found'; end if;
    if current_row.updated_at is distinct from p_expected_updated_at then
      raise exception using errcode = '40001', message = 'cms_intervention_stale';
    end if;
    previous_status := current_row.status;
    resulting_status := coalesce(p_payload->>'status', previous_status);
    if (previous_status = 'publie' or resulting_status = 'publie') and actor_role not in ('admin', 'reviewer') then
      raise exception using errcode = '42501', message = 'cms_publish_role_required';
    end if;
    requires_safety_review := coalesce(p_payload->>'category', current_row.category) = 'medecine-esthetique'
      and (
        p_slug in ('injection-acide-hyaluronique', 'injection-toxine-botulique', 'skinbooster', 'mesotherapie')
        or lower(concat_ws(
          ' ', p_slug, coalesce(p_payload->>'title', current_row.title),
          coalesce(p_payload->>'description', current_row.description),
          coalesce(p_payload->>'body_md', current_row.body_md),
          coalesce((p_payload->'content_blocks')::text, current_row.content_blocks::text),
          coalesce((p_payload->'seo_page_data')::text, current_row.seo_page_data::text)
        )) like '%injection%'
      );
    if resulting_status = 'publie' and requires_safety_review
      and nullif(p_payload->>'clinical_safety_reviewed_by_actor_id', '') is null then
      raise exception using errcode = '23514', message = 'cms_injection_safety_review_required';
    end if;
    update public.interventions set
      category = case when p_payload ? 'category' then p_payload->>'category' else current_row.category end,
      title = case when p_payload ? 'title' then p_payload->>'title' else current_row.title end,
      description = case when p_payload ? 'description' then p_payload->>'description' else current_row.description end,
      body_md = case when p_payload ? 'body_md' then p_payload->>'body_md' else current_row.body_md end,
      content_blocks = case when p_payload ? 'content_blocks' then p_payload->'content_blocks' else current_row.content_blocks end,
      "order" = case when p_payload ? 'order' then (p_payload->>'order')::integer else current_row."order" end,
      status = case when p_payload ? 'status' then p_payload->>'status' else current_row.status end,
      reviewer_name = case when resulting_status = 'publie' then actor_name else null end,
      reviewed_at = case when resulting_status = 'publie' then now() else null end,
      reviewed_by_actor_id = case when resulting_status = 'publie' then p_actor_id else null end,
      clinical_safety_reviewed_at = case when resulting_status = 'publie' and requires_safety_review then now() else null end,
      clinical_safety_reviewed_by_actor_id = case when resulting_status = 'publie' and requires_safety_review then p_actor_id else null end,
      seo_title = case when p_payload ? 'seo_title' then p_payload->>'seo_title' else current_row.seo_title end,
      seo_description = case when p_payload ? 'seo_description' then p_payload->>'seo_description' else current_row.seo_description end,
      template_kind = case when p_payload ? 'template_kind' then p_payload->>'template_kind' else current_row.template_kind end,
      hero_image_src = case when p_payload ? 'hero_image_src' then p_payload->>'hero_image_src' else current_row.hero_image_src end,
      hero_image_alt = case when p_payload ? 'hero_image_alt' then p_payload->>'hero_image_alt' else current_row.hero_image_alt end,
      seo_page_data = case when p_payload ? 'seo_page_data' then p_payload->'seo_page_data' else current_row.seo_page_data end,
      updated_by_actor_id = p_actor_id, updated_at = now()
    where id = current_row.id returning * into saved_row;
  end if;
  insert into public.cms_audit_events(actor_id, action, entity_type, entity_id, entity_key, metadata)
  values (p_actor_id,
    case when saved_row.status = 'publie' and coalesce(previous_status, '') <> 'publie' then 'publish'
      when p_expected_updated_at is null then 'create' else 'update' end,
    'intervention', saved_row.id, saved_row.slug, jsonb_build_object('status', saved_row.status));
  return to_jsonb(saved_row);
end;
$$;
create function public.cms_delete_intervention(p_actor_id uuid, p_slug text)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare record_id uuid;
begin
  if not public.is_active_cms_actor(p_actor_id, array['admin', 'reviewer']::public.cms_role[]) then
    raise exception using errcode = '42501', message = 'invalid_cms_actor';
  end if;
  select id into record_id from public.interventions where slug = p_slug for update;
  if not found then return false; end if;
  perform set_config('cms.actor_id', p_actor_id::text, true);
  delete from public.interventions where id = record_id;
  insert into public.cms_audit_events(actor_id, action, entity_type, entity_id, entity_key)
  values (p_actor_id, 'delete', 'intervention', record_id, p_slug);
  return true;
end;
$$;
create function public.cms_update_booking_status(
  p_actor_id uuid, p_booking_id uuid, p_status text, p_expected_updated_at timestamptz
)
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare saved public.booking_requests%rowtype;
begin
  if not public.is_active_cms_actor(p_actor_id, array['admin', 'intake']::public.cms_role[]) then
    raise exception using errcode = '42501', message = 'invalid_cms_actor';
  end if;
  update public.booking_requests set status = p_status, updated_by_actor_id = p_actor_id
  where id = p_booking_id and updated_at = p_expected_updated_at returning * into saved;
  if not found then raise exception using errcode = '40001', message = 'cms_booking_stale'; end if;
  insert into public.cms_audit_events(actor_id, action, entity_type, entity_id, metadata)
  values (p_actor_id, 'status_update', 'booking_request', p_booking_id, jsonb_build_object('status', p_status));
  return jsonb_build_object('status', saved.status, 'updated_at', saved.updated_at);
end;
$$;
alter table public.cms_actors enable row level security;
alter table public.cms_audit_events enable row level security;
revoke all on public.cms_actors, public.cms_audit_events from public, anon, authenticated;
grant select, insert, update on public.cms_actors to service_role;
grant select, insert on public.cms_audit_events to service_role;
grant select, insert on public.content_revisions to service_role;
revoke all on function public.protect_cms_actor_identity() from public, anon, authenticated;
revoke all on function public.prevent_cms_audit_mutation() from public, anon, authenticated;
revoke all on function public.is_active_cms_actor(uuid, public.cms_role[]) from public, anon, authenticated;
revoke all on function public.current_cms_actor_id() from public, anon, authenticated;
grant execute on function public.current_cms_actor_id() to service_role;
revoke all on function public.cms_create_blog_post(uuid, jsonb, text[]) from public, anon, authenticated;
revoke all on function public.cms_update_blog_post(uuid, text, timestamptz, jsonb, text[]) from public, anon, authenticated;
revoke all on function public.cms_delete_blog_post(uuid, text) from public, anon, authenticated;
revoke all on function public.save_avant_apres_case(uuid, uuid, timestamptz, jsonb) from public, anon, authenticated;
revoke all on function public.delete_avant_apres_case(uuid, uuid, timestamptz) from public, anon, authenticated;
revoke all on function public.cms_save_intervention(uuid, text, timestamptz, jsonb) from public, anon, authenticated;
revoke all on function public.cms_delete_intervention(uuid, text) from public, anon, authenticated;
revoke all on function public.cms_update_booking_status(uuid, uuid, text, timestamptz) from public, anon, authenticated;
grant execute on function public.cms_create_blog_post(uuid, jsonb, text[]) to service_role;
grant execute on function public.cms_update_blog_post(uuid, text, timestamptz, jsonb, text[]) to service_role;
grant execute on function public.cms_delete_blog_post(uuid, text) to service_role;
grant execute on function public.save_avant_apres_case(uuid, uuid, timestamptz, jsonb) to service_role;
grant execute on function public.delete_avant_apres_case(uuid, uuid, timestamptz) to service_role;
grant execute on function public.cms_save_intervention(uuid, text, timestamptz, jsonb) to service_role;
grant execute on function public.cms_delete_intervention(uuid, text) to service_role;
grant execute on function public.cms_update_booking_status(uuid, uuid, text, timestamptz) to service_role;

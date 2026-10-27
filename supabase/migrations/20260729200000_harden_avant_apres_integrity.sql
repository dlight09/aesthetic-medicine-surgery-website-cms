-- Expand-contract integrity model for avant/apres. Legacy path/category columns remain readable.

create table public.avant_apres_case_interventions (
  case_id uuid not null references public.avant_apres_cases(id) on delete cascade,
  intervention_id uuid not null references public.interventions(id) on delete restrict,
  association_order integer not null default 1 check (association_order > 0),
  is_primary boolean not null default false,
  created_at timestamptz not null default now(),
  primary key (case_id, intervention_id)
);
create unique index avant_apres_case_interventions_one_primary_idx
  on public.avant_apres_case_interventions(case_id)
  where is_primary;
create index avant_apres_case_interventions_intervention_idx
  on public.avant_apres_case_interventions(intervention_id, case_id);
insert into public.avant_apres_case_interventions (case_id, intervention_id, is_primary)
select c.id, i.id, true
from public.avant_apres_cases c
join public.interventions i
  on i.category = c.intervention_category and i.slug = c.intervention_slug
on conflict (case_id, intervention_id) do update set is_primary = true;
create table public.avant_apres_media_assets (
  id uuid primary key default gen_random_uuid(),
  bucket text not null,
  path text not null,
  owner_case_id uuid null references public.avant_apres_cases(id) on delete set null,
  content_type text null,
  original_filename text null,
  byte_size bigint null check (byte_size is null or byte_size >= 0),
  status text not null default 'pending' check (status in ('pending', 'attached', 'deleting')),
  is_legacy_shared boolean not null default false,
  created_at timestamptz not null default now(),
  attached_at timestamptz null,
  unique (bucket, path)
);
create table public.avant_apres_media_deletion_queue (
  asset_id uuid primary key references public.avant_apres_media_assets(id) on delete cascade,
  delete_after timestamptz not null default (now() + interval '24 hours'),
  attempts integer not null default 0 check (attempts >= 0),
  last_error text null,
  created_at timestamptz not null default now()
);
create index avant_apres_media_deletion_queue_due_idx
  on public.avant_apres_media_deletion_queue(delete_after);
alter table public.avant_apres_cases
  add column before_asset_id uuid null references public.avant_apres_media_assets(id) on delete restrict,
  add column after_asset_id uuid null references public.avant_apres_media_assets(id) on delete restrict;
alter table public.avant_apres_case_media_sets
  add column before_asset_id uuid null references public.avant_apres_media_assets(id) on delete restrict,
  add column after_asset_id uuid null references public.avant_apres_media_assets(id) on delete restrict;
with paths as (
  select id as case_id, before_path as path from public.avant_apres_cases where nullif(before_path, '') is not null
  union all
  select id, after_path from public.avant_apres_cases where nullif(after_path, '') is not null
  union all
  select case_id, before_path from public.avant_apres_case_media_sets where nullif(before_path, '') is not null
  union all
  select case_id, after_path from public.avant_apres_case_media_sets where nullif(after_path, '') is not null
), ownership as (
  select path, count(distinct case_id) as owner_count, min(case_id::text)::uuid as only_owner
  from paths
  group by path
)
insert into public.avant_apres_media_assets (
  bucket, path, owner_case_id, status, is_legacy_shared, attached_at
)
select
  'avant-apres',
  path,
  case when owner_count = 1 then only_owner else null end,
  'attached',
  owner_count > 1,
  now()
from ownership
on conflict (bucket, path) do nothing;
update public.avant_apres_cases c
set before_asset_id = a.id
from public.avant_apres_media_assets a
where a.bucket = 'avant-apres' and a.path = c.before_path and c.before_asset_id is null;
update public.avant_apres_cases c
set after_asset_id = a.id
from public.avant_apres_media_assets a
where a.bucket = 'avant-apres' and a.path = c.after_path and c.after_asset_id is null;
update public.avant_apres_case_media_sets m
set before_asset_id = a.id
from public.avant_apres_media_assets a
where a.bucket = 'avant-apres' and a.path = m.before_path and m.before_asset_id is null;
update public.avant_apres_case_media_sets m
set after_asset_id = a.id
from public.avant_apres_media_assets a
where a.bucket = 'avant-apres' and a.path = m.after_path and m.after_asset_id is null;
alter table public.avant_apres_case_interventions enable row level security;
alter table public.avant_apres_media_assets enable row level security;
alter table public.avant_apres_media_deletion_queue enable row level security;
drop policy if exists "Public can read published avant_apres_cases" on public.avant_apres_cases;
drop policy if exists "Public can read patient context for published cases" on public.avant_apres_case_patient_context;
drop policy if exists "Public can read procedures for published cases" on public.avant_apres_case_procedures;
drop policy if exists "Public can read media sets for published cases" on public.avant_apres_case_media_sets;
drop policy if exists "Public can read tags for published cases" on public.avant_apres_case_tags;
revoke all on public.avant_apres_cases from anon, authenticated;
revoke all on public.avant_apres_case_patient_context from anon, authenticated;
revoke all on public.avant_apres_case_procedures from anon, authenticated;
revoke all on public.avant_apres_case_media_sets from anon, authenticated;
revoke all on public.avant_apres_case_tags from anon, authenticated;
revoke all on public.avant_apres_case_interventions from anon, authenticated;
revoke all on public.avant_apres_media_assets from anon, authenticated;
revoke all on public.avant_apres_media_deletion_queue from anon, authenticated;
grant select, insert, update, delete on public.avant_apres_cases to service_role;
grant select, insert, update, delete on public.avant_apres_case_patient_context to service_role;
grant select, insert, update, delete on public.avant_apres_case_procedures to service_role;
grant select, insert, update, delete on public.avant_apres_case_media_sets to service_role;
grant select, insert, update, delete on public.avant_apres_case_tags to service_role;
grant select, insert, update, delete on public.avant_apres_case_interventions to service_role;
grant select, insert, update, delete on public.avant_apres_media_assets to service_role;
grant select, insert, update, delete on public.avant_apres_media_deletion_queue to service_role;
create or replace function public.save_avant_apres_case(
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
  v_case_id uuid := coalesce(p_case_id, gen_random_uuid());
  v_current public.avant_apres_cases%rowtype;
  v_category text := nullif(btrim(p_payload->>'intervention_category'), '');
  v_slug text := nullif(btrim(p_payload->>'intervention_slug'), '');
  v_status text := case when p_payload->>'status' = 'publie' then 'publie' else 'brouillon' end;
  v_case_number integer;
  v_primary_count integer := 0;
  v_item jsonb;
  v_intervention_id uuid;
  v_asset_id uuid;
  v_before_asset_id uuid;
  v_after_asset_id uuid;
  v_before_path text;
  v_after_path text;
  v_cover jsonb;
  v_old_assets uuid[] := array[]::uuid[];
begin
  if p_case_id is not null then
    select * into v_current from public.avant_apres_cases where id = p_case_id for update;
    if not found then raise exception using errcode = 'P0002', message = 'avant_apres_case_not_found'; end if;
    if p_expected_updated_at is null or v_current.updated_at is distinct from p_expected_updated_at then
      raise exception using errcode = '40001', message = 'avant_apres_case_stale';
    end if;
    select coalesce(array_agg(asset_id), array[]::uuid[]) into v_old_assets
    from (
      select before_asset_id as asset_id from public.avant_apres_cases where id = v_case_id
      union select after_asset_id from public.avant_apres_cases where id = v_case_id
      union select before_asset_id from public.avant_apres_case_media_sets where case_id = v_case_id
      union select after_asset_id from public.avant_apres_case_media_sets where case_id = v_case_id
    ) old_refs where asset_id is not null;
  elsif p_expected_updated_at is not null then
    raise exception using errcode = '22023', message = 'expected_updated_at_not_allowed_on_create';
  end if;

  if nullif(btrim(p_payload->>'title'), '') is null then
    raise exception using errcode = '23514', message = 'avant_apres_title_required';
  end if;
  if v_category is null or v_slug is null then
    raise exception using errcode = '23514', message = 'avant_apres_primary_intervention_required';
  end if;
  if v_status = 'publie' and not (
    coalesce((p_payload->>'consent')::boolean, false)
    and nullif(p_payload->>'consent_date', '') is not null
  ) then
    raise exception using errcode = '23514', message = 'avant_apres_dated_consent_required';
  end if;

  v_cover := coalesce((
    select value from jsonb_array_elements(coalesce(p_payload->'media_sets', '[]'::jsonb))
    where coalesce((value->>'is_cover')::boolean, false)
    order by coalesce((value->>'set_order')::integer, 1) limit 1
  ), (p_payload->'media_sets')->0);
  v_before_path := coalesce(nullif(btrim(p_payload->>'before_path'), ''), nullif(btrim(v_cover->>'before_path'), ''));
  v_after_path := coalesce(nullif(btrim(p_payload->>'after_path'), ''), nullif(btrim(v_cover->>'after_path'), ''));

  if v_status = 'publie' and (v_before_path is null or v_after_path is null) then
    raise exception using errcode = '23514', message = 'avant_apres_complete_media_required';
  end if;

  if v_before_path is not null then
    v_before_asset_id := nullif(p_payload->>'before_asset_id', '')::uuid;
    select id into v_before_asset_id from public.avant_apres_media_assets
    where bucket = coalesce(nullif(p_payload->>'media_bucket', ''), 'avant-apres')
      and path = v_before_path and (v_before_asset_id is null or id = v_before_asset_id) and status <> 'deleting';
    if not found then raise exception using errcode = '23503', message = 'avant_apres_before_asset_not_registered'; end if;
  end if;
  if v_after_path is not null then
    v_after_asset_id := nullif(p_payload->>'after_asset_id', '')::uuid;
    select id into v_after_asset_id from public.avant_apres_media_assets
    where bucket = coalesce(nullif(p_payload->>'media_bucket', ''), 'avant-apres')
      and path = v_after_path and (v_after_asset_id is null or id = v_after_asset_id) and status <> 'deleting';
    if not found then raise exception using errcode = '23503', message = 'avant_apres_after_asset_not_registered'; end if;
  end if;

  perform pg_advisory_xact_lock(hashtextextended(v_category || ':' || v_slug, 0));
  if p_case_id is null or v_current.intervention_category is distinct from v_category or v_current.intervention_slug is distinct from v_slug then
    select coalesce(max(case_number), 0) + 1 into v_case_number
    from public.avant_apres_cases
    where intervention_category = v_category and intervention_slug = v_slug and id <> v_case_id;
  else
    v_case_number := v_current.case_number;
  end if;

  if p_case_id is null then
    insert into public.avant_apres_cases (
      id, title, description, intervention_category, intervention_slug, case_number, status,
      consent, consent_date, internal_ref, before_path, after_path, before_asset_id, after_asset_id,
      family_key, summary, clinical_context, result_overview, featured
    ) values (
      v_case_id, btrim(p_payload->>'title'), nullif(p_payload->>'description', ''), v_category, v_slug,
      v_case_number, v_status, coalesce((p_payload->>'consent')::boolean, false),
      nullif(p_payload->>'consent_date', '')::date, nullif(p_payload->>'internal_ref', ''),
      v_before_path, v_after_path, v_before_asset_id, v_after_asset_id, nullif(p_payload->>'family_key', ''),
      nullif(p_payload->>'summary', ''), nullif(p_payload->>'clinical_context', ''),
      nullif(p_payload->>'result_overview', ''), coalesce((p_payload->>'featured')::boolean, false)
    );
  else
    update public.avant_apres_cases set
      title = btrim(p_payload->>'title'), description = nullif(p_payload->>'description', ''),
      intervention_category = v_category, intervention_slug = v_slug, case_number = v_case_number,
      status = v_status, consent = coalesce((p_payload->>'consent')::boolean, false),
      consent_date = nullif(p_payload->>'consent_date', '')::date,
      internal_ref = nullif(p_payload->>'internal_ref', ''), before_path = v_before_path,
      after_path = v_after_path, before_asset_id = v_before_asset_id, after_asset_id = v_after_asset_id,
      family_key = nullif(p_payload->>'family_key', ''), summary = nullif(p_payload->>'summary', ''),
      clinical_context = nullif(p_payload->>'clinical_context', ''),
      result_overview = nullif(p_payload->>'result_overview', ''),
      featured = coalesce((p_payload->>'featured')::boolean, false)
    where id = v_case_id;
  end if;

  delete from public.avant_apres_case_interventions where case_id = v_case_id;
  if jsonb_array_length(coalesce(p_payload->'interventions', '[]'::jsonb)) > 0 then
    for v_item in select value from jsonb_array_elements(p_payload->'interventions') loop
      v_intervention_id := nullif(v_item->>'intervention_id', '')::uuid;
      if not exists (select 1 from public.interventions where id = v_intervention_id) then
        raise exception using errcode = '23503', message = 'avant_apres_intervention_not_found';
      end if;
      insert into public.avant_apres_case_interventions(case_id, intervention_id, association_order, is_primary)
      values (v_case_id, v_intervention_id, coalesce((v_item->>'association_order')::integer, 1), coalesce((v_item->>'is_primary')::boolean, false));
      if coalesce((v_item->>'is_primary')::boolean, false) then v_primary_count := v_primary_count + 1; end if;
    end loop;
  else
    select id into v_intervention_id from public.interventions where category = v_category and slug = v_slug;
    if not found then raise exception using errcode = '23503', message = 'avant_apres_primary_intervention_not_found'; end if;
    insert into public.avant_apres_case_interventions(case_id, intervention_id, is_primary)
    values (v_case_id, v_intervention_id, true);
    v_primary_count := 1;
  end if;
  if v_primary_count <> 1 then
    raise exception using errcode = '23514', message = 'avant_apres_exactly_one_primary_intervention_required';
  end if;
  if not exists (
    select 1 from public.avant_apres_case_interventions ci join public.interventions i on i.id = ci.intervention_id
    where ci.case_id = v_case_id and ci.is_primary and i.category = v_category and i.slug = v_slug
  ) then
    raise exception using errcode = '23514', message = 'avant_apres_primary_intervention_mismatch';
  end if;

  delete from public.avant_apres_case_patient_context where case_id = v_case_id;
  if jsonb_typeof(p_payload->'patient_context') = 'object' then
    v_item := p_payload->'patient_context';
    insert into public.avant_apres_case_patient_context (
      case_id, patient_sex, patient_age, weight_kg, smoking_status, pregnancies_count,
      post_bariatric, revision_case, prior_surgery, history_notes
    ) values (
      v_case_id, nullif(v_item->>'patient_sex', ''), nullif(v_item->>'patient_age', '')::integer,
      nullif(v_item->>'weight_kg', '')::numeric, nullif(v_item->>'smoking_status', ''),
      nullif(v_item->>'pregnancies_count', '')::integer, nullif(v_item->>'post_bariatric', '')::boolean,
      nullif(v_item->>'revision_case', '')::boolean, nullif(v_item->>'prior_surgery', '')::boolean,
      nullif(v_item->>'history_notes', '')
    );
  end if;

  delete from public.avant_apres_case_procedures where case_id = v_case_id;
  for v_item in select value from jsonb_array_elements(coalesce(p_payload->'procedures', '[]'::jsonb)) loop
    if nullif(btrim(v_item->>'label'), '') is not null then
      insert into public.avant_apres_case_procedures (
        case_id, procedure_order, procedure_family_key, intervention_category,
        intervention_slug, label, technique_notes, is_primary
      ) values (
        v_case_id, coalesce((v_item->>'procedure_order')::integer, 1),
        nullif(v_item->>'procedure_family_key', ''), nullif(v_item->>'intervention_category', ''),
        nullif(v_item->>'intervention_slug', ''), btrim(v_item->>'label'),
        nullif(v_item->>'technique_notes', ''), coalesce((v_item->>'is_primary')::boolean, false)
      );
    end if;
  end loop;

  delete from public.avant_apres_case_media_sets where case_id = v_case_id;
  for v_item in select value from jsonb_array_elements(coalesce(p_payload->'media_sets', '[]'::jsonb)) loop
    v_before_path := nullif(btrim(v_item->>'before_path'), '');
    v_after_path := nullif(btrim(v_item->>'after_path'), '');
    if v_before_path is null or v_after_path is null then
      raise exception using errcode = '23514', message = 'avant_apres_media_pair_incomplete';
    end if;
    v_before_asset_id := nullif(v_item->>'before_asset_id', '')::uuid;
    select id into v_before_asset_id from public.avant_apres_media_assets
      where bucket = coalesce(nullif(p_payload->>'media_bucket', ''), 'avant-apres') and path = v_before_path
        and (v_before_asset_id is null or id = v_before_asset_id) and status <> 'deleting';
    if not found then raise exception using errcode = '23503', message = 'avant_apres_media_asset_not_registered'; end if;
    v_after_asset_id := nullif(v_item->>'after_asset_id', '')::uuid;
    select id into v_after_asset_id from public.avant_apres_media_assets
      where bucket = coalesce(nullif(p_payload->>'media_bucket', ''), 'avant-apres') and path = v_after_path
        and (v_after_asset_id is null or id = v_after_asset_id) and status <> 'deleting';
    if not found then raise exception using errcode = '23503', message = 'avant_apres_media_asset_not_registered'; end if;
    insert into public.avant_apres_case_media_sets (
      id, case_id, set_order, label, view_key, result_delay_value, result_delay_unit,
      result_delay_label, before_path, after_path, before_asset_id, after_asset_id, is_cover, public_note
    ) values (
      coalesce(nullif(v_item->>'id', '')::uuid, gen_random_uuid()), v_case_id,
      coalesce((v_item->>'set_order')::integer, 1), nullif(v_item->>'label', ''),
      nullif(v_item->>'view_key', ''), nullif(v_item->>'result_delay_value', '')::integer,
      nullif(v_item->>'result_delay_unit', ''), nullif(v_item->>'result_delay_label', ''),
      v_before_path, v_after_path, v_before_asset_id, v_after_asset_id,
      coalesce((v_item->>'is_cover')::boolean, false), nullif(v_item->>'public_note', '')
    );
  end loop;
  if v_status = 'publie' and not exists (
    select 1 from public.avant_apres_case_media_sets where case_id = v_case_id and is_cover
  ) then
    raise exception using errcode = '23514', message = 'avant_apres_cover_media_required';
  end if;

  delete from public.avant_apres_case_tags where case_id = v_case_id;
  for v_item in select value from jsonb_array_elements(coalesce(p_payload->'tags', '[]'::jsonb)) loop
    if nullif(btrim(v_item #>> '{}'), '') is not null then
      insert into public.avant_apres_case_tags(case_id, tag_key)
      values (v_case_id, btrim(v_item #>> '{}')) on conflict do nothing;
    end if;
  end loop;

  for v_asset_id in
    select distinct asset_id from (
      select before_asset_id as asset_id from public.avant_apres_cases where id = v_case_id
      union select after_asset_id from public.avant_apres_cases where id = v_case_id
      union select before_asset_id from public.avant_apres_case_media_sets where case_id = v_case_id
      union select after_asset_id from public.avant_apres_case_media_sets where case_id = v_case_id
    ) refs where asset_id is not null
  loop
    if exists (
      select 1 from public.avant_apres_media_assets
      where id = v_asset_id and status = 'deleting'
    ) then raise exception using errcode = '55000', message = 'avant_apres_asset_deletion_in_progress'; end if;
    update public.avant_apres_media_assets set
      owner_case_id = case when is_legacy_shared then owner_case_id else v_case_id end,
      status = 'attached', attached_at = coalesce(attached_at, now())
    where id = v_asset_id and (owner_case_id is null or owner_case_id = v_case_id or is_legacy_shared);
    if not found then raise exception using errcode = '23514', message = 'avant_apres_asset_owned_by_another_case'; end if;
    delete from public.avant_apres_media_deletion_queue where asset_id = v_asset_id;
  end loop;

  for v_asset_id in select unnest(v_old_assets) loop
    if not exists (
      select 1 from public.avant_apres_cases where before_asset_id = v_asset_id or after_asset_id = v_asset_id
      union all
      select 1 from public.avant_apres_case_media_sets where before_asset_id = v_asset_id or after_asset_id = v_asset_id
    ) then
      insert into public.avant_apres_media_deletion_queue(asset_id, delete_after)
      values (v_asset_id, now() + interval '24 hours')
      on conflict (asset_id) do update set delete_after = excluded.delete_after, last_error = null;
    end if;
  end loop;

  return v_case_id;
end;
$$;
create or replace function public.delete_avant_apres_case(
  p_case_id uuid,
  p_expected_updated_at timestamptz
)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_current public.avant_apres_cases%rowtype;
  v_assets uuid[];
  v_asset_id uuid;
begin
  select * into v_current from public.avant_apres_cases where id = p_case_id for update;
  if not found then return false; end if;
  if p_expected_updated_at is null or v_current.updated_at is distinct from p_expected_updated_at then
    raise exception using errcode = '40001', message = 'avant_apres_case_stale';
  end if;
  select coalesce(array_agg(asset_id), array[]::uuid[]) into v_assets from (
    select before_asset_id as asset_id from public.avant_apres_cases where id = p_case_id
    union select after_asset_id from public.avant_apres_cases where id = p_case_id
    union select before_asset_id from public.avant_apres_case_media_sets where case_id = p_case_id
    union select after_asset_id from public.avant_apres_case_media_sets where case_id = p_case_id
  ) refs where asset_id is not null;
  delete from public.avant_apres_cases where id = p_case_id;
  for v_asset_id in select unnest(v_assets) loop
    if not exists (
      select 1 from public.avant_apres_cases where before_asset_id = v_asset_id or after_asset_id = v_asset_id
      union all
      select 1 from public.avant_apres_case_media_sets where before_asset_id = v_asset_id or after_asset_id = v_asset_id
    ) then
      insert into public.avant_apres_media_deletion_queue(asset_id, delete_after)
      values (v_asset_id, now() + interval '24 hours')
      on conflict (asset_id) do update set delete_after = excluded.delete_after, last_error = null;
    end if;
  end loop;
  return true;
end;
$$;
create or replace function public.claim_avant_apres_media_deletions(p_limit integer default 25)
returns table(asset_id uuid, bucket text, path text)
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
begin
  return query
  with due as (
    select q.asset_id
    from public.avant_apres_media_deletion_queue q
    join public.avant_apres_media_assets a on a.id = q.asset_id
    where q.delete_after <= now() and a.status <> 'deleting'
      and not exists (select 1 from public.avant_apres_cases c where c.before_asset_id = q.asset_id or c.after_asset_id = q.asset_id)
      and not exists (select 1 from public.avant_apres_case_media_sets m where m.before_asset_id = q.asset_id or m.after_asset_id = q.asset_id)
    order by q.delete_after
    for update of q skip locked
    limit greatest(1, least(coalesce(p_limit, 25), 100))
  ), claimed as (
    update public.avant_apres_media_assets a set status = 'deleting'
    from due where a.id = due.asset_id
    returning a.id, a.bucket, a.path
  )
  select claimed.id, claimed.bucket, claimed.path from claimed;
end;
$$;
create or replace function public.complete_avant_apres_media_deletion(p_asset_id uuid, p_error text default null)
returns void
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
begin
  if p_error is null then
    delete from public.avant_apres_media_assets where id = p_asset_id and status = 'deleting';
  else
    update public.avant_apres_media_assets set status = 'pending' where id = p_asset_id and status = 'deleting';
    update public.avant_apres_media_deletion_queue
    set attempts = attempts + 1, last_error = left(p_error, 1000),
        delete_after = now() + least(interval '24 hours', interval '15 minutes' * power(2, least(attempts, 6)))
    where asset_id = p_asset_id;
  end if;
end;
$$;
revoke all on function public.save_avant_apres_case(uuid, timestamptz, jsonb) from public, anon, authenticated;
revoke all on function public.delete_avant_apres_case(uuid, timestamptz) from public, anon, authenticated;
revoke all on function public.claim_avant_apres_media_deletions(integer) from public, anon, authenticated;
revoke all on function public.complete_avant_apres_media_deletion(uuid, text) from public, anon, authenticated;
grant execute on function public.save_avant_apres_case(uuid, timestamptz, jsonb) to service_role;
grant execute on function public.delete_avant_apres_case(uuid, timestamptz) to service_role;
grant execute on function public.claim_avant_apres_media_deletions(integer) to service_role;
grant execute on function public.complete_avant_apres_media_deletion(uuid, text) to service_role;

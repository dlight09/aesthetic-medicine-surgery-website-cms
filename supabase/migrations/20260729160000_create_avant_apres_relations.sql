create table if not exists public.avant_apres_case_procedures (
  id uuid primary key default gen_random_uuid(),
  case_id uuid not null references public.avant_apres_cases(id) on delete cascade,
  procedure_order int not null default 1,
  procedure_family_key text null,
  intervention_category text null,
  intervention_slug text null,
  label text not null,
  technique_notes text null,
  is_primary boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.avant_apres_case_media_sets (
  id uuid primary key default gen_random_uuid(),
  case_id uuid not null references public.avant_apres_cases(id) on delete cascade,
  set_order int not null default 1,
  label text null,
  view_key text null,
  result_delay_value int null,
  result_delay_unit text null,
  result_delay_label text null,
  before_path text not null,
  after_path text not null,
  is_cover boolean not null default false,
  public_note text null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint avant_apres_case_media_sets_result_delay_unit_check
    check (result_delay_unit in ('days', 'weeks', 'months', 'years') or result_delay_unit is null)
);

create table if not exists public.avant_apres_case_tags (
  case_id uuid not null references public.avant_apres_cases(id) on delete cascade,
  tag_key text not null,
  created_at timestamptz not null default now(),
  primary key (case_id, tag_key)
);

create index if not exists avant_apres_case_procedures_case_id_idx
  on public.avant_apres_case_procedures(case_id, procedure_order);

create index if not exists avant_apres_case_media_sets_case_id_idx
  on public.avant_apres_case_media_sets(case_id, set_order);

create index if not exists avant_apres_case_tags_case_id_idx
  on public.avant_apres_case_tags(case_id);

alter table public.avant_apres_case_procedures enable row level security;
alter table public.avant_apres_case_media_sets enable row level security;
alter table public.avant_apres_case_tags enable row level security;

drop policy if exists "Public can read procedures for published cases" on public.avant_apres_case_procedures;
create policy "Public can read procedures for published cases"
on public.avant_apres_case_procedures
for select
using (
  exists (
    select 1 from public.avant_apres_cases c
    where c.id = case_id and c.status = 'publie' and c.consent = true
  )
);

drop policy if exists "Public can read media sets for published cases" on public.avant_apres_case_media_sets;
create policy "Public can read media sets for published cases"
on public.avant_apres_case_media_sets
for select
using (
  exists (
    select 1 from public.avant_apres_cases c
    where c.id = case_id and c.status = 'publie' and c.consent = true
  )
);

drop policy if exists "Public can read tags for published cases" on public.avant_apres_case_tags;
create policy "Public can read tags for published cases"
on public.avant_apres_case_tags
for select
using (
  exists (
    select 1 from public.avant_apres_cases c
    where c.id = case_id and c.status = 'publie' and c.consent = true
  )
);

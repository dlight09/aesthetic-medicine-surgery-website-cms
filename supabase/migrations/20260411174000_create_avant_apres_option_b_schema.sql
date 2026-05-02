create extension if not exists pgcrypto;

create table if not exists public.avant_apres_cases (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text null,
  intervention_category text null,
  intervention_slug text null,
  case_number int null,
  status text not null default 'brouillon',
  consent boolean not null default false,
  consent_date date null,
  internal_ref text null,
  before_path text null,
  after_path text null,
  family_key text null,
  summary text null,
  clinical_context text null,
  result_overview text null,
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint avant_apres_cases_status_check check (status in ('brouillon', 'publie'))
);

create table if not exists public.avant_apres_case_patient_context (
  case_id uuid primary key references public.avant_apres_cases(id) on delete cascade,
  patient_sex text null,
  patient_age int null,
  weight_kg numeric(6,2) null,
  smoking_status text null,
  pregnancies_count int null,
  post_bariatric boolean null,
  revision_case boolean null,
  prior_surgery boolean null,
  history_notes text null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint avant_apres_case_patient_context_smoking_status_check
    check (smoking_status in ('smoker', 'non_smoker', 'former', 'unknown') or smoking_status is null)
);

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

create index if not exists avant_apres_cases_status_idx on public.avant_apres_cases(status);
create index if not exists avant_apres_cases_category_idx on public.avant_apres_cases(intervention_category);
create index if not exists avant_apres_cases_slug_idx on public.avant_apres_cases(intervention_slug);
create index if not exists avant_apres_cases_updated_at_idx on public.avant_apres_cases(updated_at desc);

create index if not exists avant_apres_case_procedures_case_id_idx
  on public.avant_apres_case_procedures(case_id, procedure_order);
create index if not exists avant_apres_case_media_sets_case_id_idx
  on public.avant_apres_case_media_sets(case_id, set_order);
create index if not exists avant_apres_case_tags_case_id_idx
  on public.avant_apres_case_tags(case_id);
create index if not exists avant_apres_case_tags_tag_key_idx
  on public.avant_apres_case_tags(tag_key);

drop trigger if exists trg_avant_apres_cases_updated_at on public.avant_apres_cases;
create trigger trg_avant_apres_cases_updated_at
before update on public.avant_apres_cases
for each row execute function public.set_updated_at();

drop trigger if exists trg_avant_apres_case_patient_context_updated_at on public.avant_apres_case_patient_context;
create trigger trg_avant_apres_case_patient_context_updated_at
before update on public.avant_apres_case_patient_context
for each row execute function public.set_updated_at();

drop trigger if exists trg_avant_apres_case_procedures_updated_at on public.avant_apres_case_procedures;
create trigger trg_avant_apres_case_procedures_updated_at
before update on public.avant_apres_case_procedures
for each row execute function public.set_updated_at();

drop trigger if exists trg_avant_apres_case_media_sets_updated_at on public.avant_apres_case_media_sets;
create trigger trg_avant_apres_case_media_sets_updated_at
before update on public.avant_apres_case_media_sets
for each row execute function public.set_updated_at();

alter table public.avant_apres_cases enable row level security;
alter table public.avant_apres_case_patient_context enable row level security;
alter table public.avant_apres_case_procedures enable row level security;
alter table public.avant_apres_case_media_sets enable row level security;
alter table public.avant_apres_case_tags enable row level security;

drop policy if exists "Public can read published avant_apres_cases" on public.avant_apres_cases;
create policy "Public can read published avant_apres_cases"
on public.avant_apres_cases
for select
using (status = 'publie' and consent = true);

drop policy if exists "Public can read patient context for published cases" on public.avant_apres_case_patient_context;
create policy "Public can read patient context for published cases"
on public.avant_apres_case_patient_context
for select
using (
  exists (
    select 1
    from public.avant_apres_cases c
    where c.id = case_id and c.status = 'publie' and c.consent = true
  )
);

drop policy if exists "Public can read procedures for published cases" on public.avant_apres_case_procedures;
create policy "Public can read procedures for published cases"
on public.avant_apres_case_procedures
for select
using (
  exists (
    select 1
    from public.avant_apres_cases c
    where c.id = case_id and c.status = 'publie' and c.consent = true
  )
);

drop policy if exists "Public can read media sets for published cases" on public.avant_apres_case_media_sets;
create policy "Public can read media sets for published cases"
on public.avant_apres_case_media_sets
for select
using (
  exists (
    select 1
    from public.avant_apres_cases c
    where c.id = case_id and c.status = 'publie' and c.consent = true
  )
);

drop policy if exists "Public can read tags for published cases" on public.avant_apres_case_tags;
create policy "Public can read tags for published cases"
on public.avant_apres_case_tags
for select
using (
  exists (
    select 1
    from public.avant_apres_cases c
    where c.id = case_id and c.status = 'publie' and c.consent = true
  )
);

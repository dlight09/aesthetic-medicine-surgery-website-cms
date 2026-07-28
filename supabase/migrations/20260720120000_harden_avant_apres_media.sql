create unique index if not exists avant_apres_cases_intervention_case_number_key
  on public.avant_apres_cases (intervention_category, intervention_slug, case_number)
  where intervention_category is not null
    and intervention_slug is not null
    and case_number is not null;

alter table public.avant_apres_cases
  drop constraint if exists avant_apres_cases_case_number_check;

alter table public.avant_apres_cases
  add constraint avant_apres_cases_case_number_check
  check (case_number is null or case_number > 0);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'avant-apres',
  'avant-apres',
  false,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set
  public = false,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

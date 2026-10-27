drop policy if exists "Public can read patient context for published cases"
  on public.avant_apres_case_patient_context;
comment on table public.avant_apres_case_patient_context is
  'Private clinical context. Public pages receive an explicit allowlisted case projection from the server.';

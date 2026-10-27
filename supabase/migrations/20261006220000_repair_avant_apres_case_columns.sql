-- The table may predate the expanded case model because its original migration used
-- CREATE TABLE IF NOT EXISTS. Ensure the columns required by the transactional RPC exist.
alter table public.avant_apres_cases
  add column if not exists family_key text null,
  add column if not exists summary text null,
  add column if not exists clinical_context text null,
  add column if not exists result_overview text null,
  add column if not exists featured boolean not null default false;

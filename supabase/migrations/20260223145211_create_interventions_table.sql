create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.interventions (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  category text not null,
  title text not null,
  description text not null,
  body_md text not null,
  "order" int null,
  status text not null default 'brouillon',
  seo_title text null,
  seo_description text null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint interventions_status_check check (status in ('brouillon', 'publie')),
  constraint interventions_category_check check (
    category in (
      'medecine-esthetique',
      'visage',
      'silhouette',
      'seins',
      'chirurgie-reparatrice',
      'chirurgie-de-la-main',
      'intime'
    )
  )
);

drop trigger if exists trg_interventions_updated_at on public.interventions;
create trigger trg_interventions_updated_at
before update on public.interventions
for each row execute function public.set_updated_at();

create index if not exists interventions_status_idx on public.interventions(status);
create index if not exists interventions_category_idx on public.interventions(category);
create index if not exists interventions_category_order_idx on public.interventions(category, "order");
create index if not exists interventions_updated_at_idx on public.interventions(updated_at desc);

alter table public.interventions enable row level security;

drop policy if exists "Public can read published interventions" on public.interventions;
create policy "Public can read published interventions"
on public.interventions
for select
using (status = 'publie');

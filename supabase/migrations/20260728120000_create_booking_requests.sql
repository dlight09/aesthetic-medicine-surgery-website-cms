create table if not exists public.booking_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  message text not null,
  photo_paths text[] not null default '{}',
  consent_at timestamptz not null,
  status text not null default 'nouveau',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint booking_requests_status_check check (status in ('nouveau', 'contacte', 'planifie', 'cloture'))
);

create index if not exists booking_requests_created_at_idx
  on public.booking_requests(created_at desc);

drop trigger if exists trg_booking_requests_updated_at on public.booking_requests;
create trigger trg_booking_requests_updated_at
before update on public.booking_requests
for each row execute function public.set_updated_at();

alter table public.booking_requests enable row level security;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'booking-media',
  'booking-media',
  false,
  3145728,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set
  public = false,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

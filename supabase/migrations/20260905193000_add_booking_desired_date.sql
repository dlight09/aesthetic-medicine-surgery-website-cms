alter table public.booking_requests
  add column if not exists desired_date date;

alter table public.booking_requests
  add column if not exists age smallint;

alter table public.booking_requests
  add constraint booking_requests_age_check
    check (age is null or (age > 0 and age <= 120));

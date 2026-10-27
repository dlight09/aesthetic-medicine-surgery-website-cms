alter table public.booking_requests
  add column if not exists upload_token_hash text null,
  add column if not exists media_uploaded_at timestamptz null;
update public.booking_requests
set media_uploaded_at = coalesce(media_uploaded_at, updated_at, created_at)
where cardinality(photo_paths) = 0;
create index if not exists booking_requests_email_created_at_idx
  on public.booking_requests(email, created_at desc);

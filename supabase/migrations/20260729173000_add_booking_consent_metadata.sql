alter table public.booking_requests
  add column if not exists photo_consent_at timestamptz,
  add column if not exists policy_version text;
comment on column public.booking_requests.photo_consent_at is
  'Date of consent to process optional photos; null when no photos were submitted.';
comment on column public.booking_requests.policy_version is
  'Version of the privacy and consent information accepted on submission.';

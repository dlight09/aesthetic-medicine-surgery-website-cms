alter table public.booking_requests
  add column if not exists weight_kg numeric,
  add column if not exists height_cm numeric,
  add column if not exists has_medical_history boolean,
  add column if not exists medical_history text,
  add column if not exists previous_surgeries text,
  add column if not exists daily_medications text,
  add column if not exists smoking_status text,
  add column if not exists intervention_category text;

alter table public.booking_requests
  add constraint booking_requests_weight_kg_check
    check (weight_kg is null or (weight_kg > 0 and weight_kg <= 500)),
  add constraint booking_requests_height_cm_check
    check (height_cm is null or (height_cm > 0 and height_cm <= 300)),
  add constraint booking_requests_smoking_status_check
    check (smoking_status is null or smoking_status in ('yes', 'no')),
  add constraint booking_requests_intervention_category_check
    check (
      intervention_category is null or intervention_category in (
        'medecine-esthetique',
        'visage',
        'silhouette',
        'seins',
        'chirurgie-reparatrice',
        'chirurgie-de-la-main',
        'intime'
      )
    );

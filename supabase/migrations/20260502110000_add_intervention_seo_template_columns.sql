alter table public.interventions
add column if not exists template_kind text not null default 'legacy_blocks',
add column if not exists hero_image_src text null,
add column if not exists hero_image_alt text null,
add column if not exists seo_page_data jsonb null;

alter table public.interventions
drop constraint if exists interventions_template_kind_check;

alter table public.interventions
add constraint interventions_template_kind_check
check (template_kind in ('legacy_blocks', 'seo_v1'));

create index if not exists interventions_template_kind_idx
on public.interventions(template_kind);

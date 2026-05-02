alter table public.interventions
drop constraint if exists interventions_template_kind_check;

alter table public.interventions
add constraint interventions_template_kind_check
check (template_kind in ('legacy_blocks', 'seo_v1', 'seo_v2'));

alter table public.interventions
add column if not exists content_blocks jsonb null;

create index if not exists interventions_content_blocks_gin_idx
on public.interventions
using gin (content_blocks);

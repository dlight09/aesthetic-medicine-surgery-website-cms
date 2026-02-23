create extension if not exists pgcrypto;

-- Reuse set_updated_at() trigger function if present.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null,
  status text not null default 'brouillon',
  published_at timestamptz null,
  seo_title text null,
  seo_description text null,
  content_blocks jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint blog_posts_status_check check (status in ('brouillon', 'publie'))
);

drop trigger if exists trg_blog_posts_updated_at on public.blog_posts;
create trigger trg_blog_posts_updated_at
before update on public.blog_posts
for each row execute function public.set_updated_at();

create index if not exists blog_posts_status_idx on public.blog_posts(status);
create index if not exists blog_posts_published_at_idx on public.blog_posts(published_at desc);
create index if not exists blog_posts_updated_at_idx on public.blog_posts(updated_at desc);
create index if not exists blog_posts_blocks_gin_idx on public.blog_posts using gin (content_blocks);

create table if not exists public.blog_intervention_links (
  blog_slug text not null references public.blog_posts(slug) on delete cascade,
  intervention_slug text not null references public.interventions(slug) on delete cascade,
  position int not null default 0,
  context text not null default 'both',
  created_at timestamptz not null default now(),
  constraint blog_intervention_links_context_check check (context in ('from_blog', 'from_intervention', 'both')),
  primary key (blog_slug, intervention_slug)
);

create index if not exists blog_intervention_links_blog_idx on public.blog_intervention_links(blog_slug, position);
create index if not exists blog_intervention_links_intervention_idx on public.blog_intervention_links(intervention_slug, position);

alter table public.blog_posts enable row level security;
alter table public.blog_intervention_links enable row level security;

drop policy if exists "Public can read published blog posts" on public.blog_posts;
create policy "Public can read published blog posts"
on public.blog_posts
for select
using (status = 'publie');

drop policy if exists "Public can read published blog links" on public.blog_intervention_links;
create policy "Public can read published blog links"
on public.blog_intervention_links
for select
using (
  exists (select 1 from public.blog_posts bp where bp.slug = blog_slug and bp.status = 'publie')
  and exists (select 1 from public.interventions i where i.slug = intervention_slug and i.status = 'publie')
);

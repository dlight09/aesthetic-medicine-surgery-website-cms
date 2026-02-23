import type { APIRoute } from 'astro';
import { requireCmsAuth } from '@/lib/cms/auth';
import { coerceBlogBlocks } from '@/lib/cms/blogBlocks';
import {
  deleteBlogPostBySlug,
  getCmsBlogPostBySlug,
  setBlogInterventionLinks,
  updateBlogPostBySlug,
} from '@/lib/cms/blog';
import type { BlogStatus } from '@/lib/cms/blog';

function parsePublishedAt(value: unknown) {
  if (value === null) return null;
  if (value === undefined) return undefined;
  if (typeof value !== 'string') return null;
  const v = value.trim();
  if (!v) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) {
    const d = new Date(`${v}T00:00:00.000Z`);
    if (!Number.isNaN(d.getTime())) return d.toISOString();
  }
  const d = new Date(v);
  if (!Number.isNaN(d.getTime())) return d.toISOString();
  return null;
}

export const GET: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;
  const slug = context.params.slug;
  if (!slug) return new Response('Missing slug', { status: 400 });
  const item = await getCmsBlogPostBySlug(slug);
  if (!item) return new Response('Not found', { status: 404 });
  return new Response(JSON.stringify(item), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};

export const PUT: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;
  const slug = context.params.slug;
  if (!slug) return new Response('Missing slug', { status: 400 });

  const body = await context.request.json().catch(() => null);
  if (!body || typeof body !== 'object') return new Response('Invalid payload', { status: 400 });

  const status: BlogStatus | undefined =
    (body as any).status === 'publie'
      ? 'publie'
      : (body as any).status === 'brouillon'
        ? 'brouillon'
        : undefined;
  const published_at = parsePublishedAt((body as any).published_at);

  const payload = {
    title: typeof (body as any).title === 'string' ? (body as any).title.trim() : undefined,
    description:
      typeof (body as any).description === 'string' ? (body as any).description.trim() : undefined,
    seo_title:
      typeof (body as any).seo_title === 'string'
        ? (body as any).seo_title.trim() || null
        : undefined,
    seo_description:
      typeof (body as any).seo_description === 'string'
        ? (body as any).seo_description.trim() || null
        : undefined,
    content_blocks:
      (body as any).content_blocks !== undefined
        ? (coerceBlogBlocks((body as any).content_blocks) ?? [])
        : undefined,
    status,
    published_at,
  };

  const linked_intervention_slugs = Array.isArray((body as any).linked_intervention_slugs)
    ? (body as any).linked_intervention_slugs
        .map((s: any) => String(s ?? ''))
        .filter((s: string) => s.trim())
    : null;

  if (payload.status === 'publie') {
    const current = await getCmsBlogPostBySlug(slug);
    if (!current) return new Response('Not found', { status: 404 });
    const nextTitle = payload.title ?? current.title;
    const nextDescription = payload.description ?? current.description;
    const nextBlocks = payload.content_blocks ?? current.content_blocks;
    if (!nextTitle || !nextDescription || !Array.isArray(nextBlocks) || nextBlocks.length === 0) {
      return new Response('Missing required fields for publish', { status: 400 });
    }
  }

  const updated = await updateBlogPostBySlug(slug, payload);
  if (linked_intervention_slugs) {
    await setBlogInterventionLinks({
      blog_slug: slug,
      intervention_slugs: linked_intervention_slugs,
    });
  }
  return new Response(JSON.stringify(updated), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};

export const DELETE: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;
  const slug = context.params.slug;
  if (!slug) return new Response('Missing slug', { status: 400 });
  await deleteBlogPostBySlug(slug);
  return new Response(null, { status: 204 });
};

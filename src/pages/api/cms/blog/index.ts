import type { APIRoute } from 'astro';
import { requireCmsAuth } from '@/lib/cms/auth';
import { coerceBlogBlocks, defaultBlogBlocks } from '@/lib/cms/blogBlocks';
import { createBlogPost, listCmsBlogPosts, setBlogInterventionLinks } from '@/lib/cms/blog';

function slugify(input: string) {
  return (input ?? '')
    .toLowerCase()
    .trim()
    .replace(/[’']/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function parsePublishedAt(value: unknown) {
  if (typeof value !== 'string') return null;
  const v = value.trim();
  if (!v) return null;
  // Accept YYYY-MM-DD
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
  const items = await listCmsBlogPosts();
  return new Response(JSON.stringify(items), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};

export const POST: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;

  const body = await context.request.json().catch(() => null);
  if (!body || typeof body !== 'object') return new Response('Invalid payload', { status: 400 });

  const title = typeof (body as any).title === 'string' ? (body as any).title.trim() : '';
  const description =
    typeof (body as any).description === 'string' ? (body as any).description.trim() : '';
  const rawSlug = typeof (body as any).slug === 'string' ? (body as any).slug : '';
  const slug = slugify(rawSlug || title);
  const status = (body as any).status === 'publie' ? 'publie' : 'brouillon';
  const published_at = parsePublishedAt((body as any).published_at);
  const seo_title =
    typeof (body as any).seo_title === 'string' ? (body as any).seo_title.trim() || null : null;
  const seo_description =
    typeof (body as any).seo_description === 'string'
      ? (body as any).seo_description.trim() || null
      : null;

  const content_blocks = coerceBlogBlocks((body as any).content_blocks) ?? defaultBlogBlocks();
  const linked_intervention_slugs = Array.isArray((body as any).linked_intervention_slugs)
    ? (body as any).linked_intervention_slugs
        .map((s: any) => String(s ?? ''))
        .filter((s: string) => s.trim())
    : [];

  if (!slug) return new Response('Missing required fields', { status: 400 });

  if (status === 'publie') {
    if (!title || !description || !content_blocks.length) {
      return new Response('Missing required fields for publish', { status: 400 });
    }
  }

  try {
    const created = await createBlogPost({
      slug,
      title: title || '(Sans titre)',
      description: description || '',
      status,
      published_at: published_at ?? (status === 'publie' ? new Date().toISOString() : null),
      seo_title,
      seo_description,
      content_blocks,
    });

    await setBlogInterventionLinks({
      blog_slug: created.slug,
      intervention_slugs: linked_intervention_slugs,
    });

    return new Response(JSON.stringify(created), {
      status: 201,
      headers: { 'content-type': 'application/json' },
    });
  } catch (err: any) {
    const msg = String(err?.message ?? '');
    if (msg.toLowerCase().includes('duplicate') || msg.toLowerCase().includes('unique')) {
      return new Response('Slug already exists', { status: 409 });
    }
    throw err;
  }
};

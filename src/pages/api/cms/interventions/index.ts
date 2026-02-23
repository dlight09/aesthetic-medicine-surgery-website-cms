import type { APIRoute } from 'astro';
import { requireCmsAuth } from '@/lib/cms/auth';
import { interventionCategoryKeys, type InterventionCategoryKey } from '@/lib/interventions';
import { createIntervention, listCmsInterventions } from '@/lib/cms/interventions';
import { defaultInterventionMarkdownTemplate } from '@/lib/cms/interventionTemplate';

function slugify(input: string) {
  return (input ?? '')
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function isCategory(value: string): value is InterventionCategoryKey {
  return (interventionCategoryKeys as readonly string[]).includes(value);
}

export const GET: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;
  const items = await listCmsInterventions();
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

  const title = typeof body.title === 'string' ? body.title.trim() : '';
  const description = typeof body.description === 'string' ? body.description.trim() : '';
  const rawSlug = typeof body.slug === 'string' ? body.slug : '';
  const slug = slugify(rawSlug || title);
  const category =
    typeof body.category === 'string' && isCategory(body.category) ? body.category : '';
  const status = body.status === 'publie' ? 'publie' : 'brouillon';

  const order =
    typeof body.order === 'number'
      ? Math.trunc(body.order)
      : typeof body.order === 'string' && body.order.trim()
        ? Number.parseInt(body.order, 10)
        : null;

  const seo_title = typeof body.seo_title === 'string' ? body.seo_title.trim() || null : null;
  const seo_description =
    typeof body.seo_description === 'string' ? body.seo_description.trim() || null : null;
  const body_md =
    typeof body.body_md === 'string' && body.body_md.trim()
      ? body.body_md
      : defaultInterventionMarkdownTemplate();

  if (!slug || !category) return new Response('Missing required fields', { status: 400 });

  if (status === 'publie') {
    if (!title || !description || !body_md.trim()) {
      return new Response('Missing required fields for publish', { status: 400 });
    }
  }

  try {
    const created = await createIntervention({
      slug,
      category: category as InterventionCategoryKey,
      title: title || '(Sans titre)',
      description: description || '',
      body_md,
      order: Number.isFinite(order as number) ? (order as number) : null,
      status: status as 'brouillon' | 'publie',
      seo_title,
      seo_description,
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

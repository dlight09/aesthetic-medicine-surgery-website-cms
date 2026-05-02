import type { APIRoute } from 'astro';
import { requireCmsAuth } from '@/lib/cms/auth';
import { interventionCategoryKeys, type InterventionCategoryKey } from '@/lib/interventions';
import { createIntervention, listCmsInterventions } from '@/lib/cms/interventions';
import { defaultInterventionMarkdownTemplate } from '@/lib/cms/interventionTemplate';
import { coerceBlocks, defaultInterventionBlocks } from '@/lib/cms/interventionBlocks';
import {
  coerceSeoTemplateV2Data,
  type InterventionTemplateKind,
} from '@/lib/cms/interventionSeoTemplate';

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
  const template_kind: InterventionTemplateKind =
    body.template_kind === 'seo_v2'
      ? 'seo_v2'
      : body.template_kind === 'seo_v1'
        ? 'seo_v1'
        : 'legacy_blocks';
  const hero_image_src =
    typeof body.hero_image_src === 'string' ? body.hero_image_src.trim() || null : null;
  const hero_image_alt =
    typeof body.hero_image_alt === 'string' ? body.hero_image_alt.trim() || null : null;
  const seo_page_data = coerceSeoTemplateV2Data((body as any).seo_page_data, {
    hero_image_src,
    hero_image_alt,
  });
  const content_blocks = coerceBlocks(body.content_blocks) ?? null;
  const body_md =
    typeof body.body_md === 'string' && body.body_md.trim()
      ? body.body_md
      : defaultInterventionMarkdownTemplate();

  const finalBlocks = content_blocks ?? defaultInterventionBlocks();

  if (!slug || !category) return new Response('Missing required fields', { status: 400 });

  if (status === 'publie') {
    if (template_kind === 'seo_v1' || template_kind === 'seo_v2') {
      const hasTemplate =
        !!seo_page_data &&
        !!seo_page_data.breadcrumb &&
        !!seo_page_data.h1 &&
        !!seo_page_data.intro &&
        seo_page_data.quickFacts.length === 4 &&
        seo_page_data.sections.length === 9 &&
        seo_page_data.faq.length > 0;
      if (!hasTemplate)
        return new Response('Missing required SEO template fields for publish', { status: 400 });
    } else {
      if (!title || !description || (!body_md.trim() && !finalBlocks.length)) {
        return new Response('Missing required fields for publish', { status: 400 });
      }
    }
  }

  try {
    const created = await createIntervention({
      slug,
      category: category as InterventionCategoryKey,
      title: title || '(Sans titre)',
      description: description || '',
      body_md,
      content_blocks: finalBlocks,
      order: Number.isFinite(order as number) ? (order as number) : null,
      status: status as 'brouillon' | 'publie',
      seo_title,
      seo_description,
      template_kind,
      hero_image_src,
      hero_image_alt,
      seo_page_data,
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

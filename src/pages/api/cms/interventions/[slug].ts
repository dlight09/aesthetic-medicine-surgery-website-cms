import type { APIRoute } from 'astro';
import { requireCmsAuth } from '@/lib/cms/auth';
import { interventionCategoryKeys, type InterventionCategoryKey } from '@/lib/interventions';
import {
  deleteInterventionBySlug,
  getCmsInterventionBySlug,
  updateInterventionBySlug,
} from '@/lib/cms/interventions';
import { coerceBlocks } from '@/lib/cms/interventionBlocks';
import { coerceSeoTemplateV2Data } from '@/lib/cms/interventionSeoTemplate';

function isCategory(value: string): value is InterventionCategoryKey {
  return (interventionCategoryKeys as readonly string[]).includes(value);
}

export const GET: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;
  const slug = context.params.slug;
  if (!slug) return new Response('Missing slug', { status: 400 });
  const item = await getCmsInterventionBySlug(slug);
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

  const status =
    body.status === 'publie' ? 'publie' : body.status === 'brouillon' ? 'brouillon' : undefined;
  const category =
    typeof body.category === 'string'
      ? isCategory(body.category)
        ? body.category
        : undefined
      : undefined;
  const order =
    typeof body.order === 'number'
      ? Math.trunc(body.order)
      : typeof body.order === 'string' && body.order.trim()
        ? Number.parseInt(body.order, 10)
        : undefined;

  const payload = {
    title: typeof body.title === 'string' ? body.title.trim() : undefined,
    description: typeof body.description === 'string' ? body.description.trim() : undefined,
    body_md: typeof body.body_md === 'string' ? body.body_md : undefined,
    content_blocks:
      body.content_blocks !== undefined ? coerceBlocks(body.content_blocks) : undefined,
    category,
    order: Number.isFinite(order as number)
      ? (order as number)
      : order === undefined
        ? undefined
        : null,
    status: status as 'brouillon' | 'publie' | undefined,
    seo_title: typeof body.seo_title === 'string' ? body.seo_title.trim() || null : undefined,
    seo_description:
      typeof body.seo_description === 'string' ? body.seo_description.trim() || null : undefined,
    template_kind:
      body.template_kind === 'seo_v2'
        ? ('seo_v2' as const)
        : body.template_kind === 'seo_v1'
          ? ('seo_v1' as const)
          : body.template_kind === 'legacy_blocks'
            ? ('legacy_blocks' as const)
            : undefined,
    hero_image_src:
      typeof body.hero_image_src === 'string' ? body.hero_image_src.trim() || null : undefined,
    hero_image_alt:
      typeof body.hero_image_alt === 'string' ? body.hero_image_alt.trim() || null : undefined,
    seo_page_data:
      body.seo_page_data !== undefined
        ? coerceSeoTemplateV2Data(body.seo_page_data, {
            hero_image_src:
              typeof body.hero_image_src === 'string' ? body.hero_image_src.trim() || null : null,
            hero_image_alt:
              typeof body.hero_image_alt === 'string' ? body.hero_image_alt.trim() || null : null,
          })
        : undefined,
  };

  // If publishing, validate required fields using current + payload.
  const nextStatus = payload.status;
  if (nextStatus === 'publie') {
    const current = await getCmsInterventionBySlug(slug);
    if (!current) return new Response('Not found', { status: 404 });
    const nextTitle = payload.title ?? current.title;
    const nextDescription = payload.description ?? current.description;
    const nextBody = payload.body_md ?? current.body_md;
    const nextBlocks = payload.content_blocks ?? current.content_blocks;
    const nextTemplateKind = payload.template_kind ?? current.template_kind;
    const nextSeoPageData = payload.seo_page_data ?? current.seo_page_data;
    if (nextTemplateKind === 'seo_v1' || nextTemplateKind === 'seo_v2') {
      const hasTemplate =
        !!nextSeoPageData &&
        !!nextSeoPageData.breadcrumb &&
        !!nextSeoPageData.h1 &&
        !!nextSeoPageData.intro &&
        nextSeoPageData.quickFacts.length === 4 &&
        nextSeoPageData.sections.length === 9 &&
        nextSeoPageData.faq.length > 0;
      if (!hasTemplate)
        return new Response('Missing required SEO template fields for publish', { status: 400 });
    } else {
      const hasBlocks = Array.isArray(nextBlocks) && nextBlocks.length > 0;
      if (!nextTitle || !nextDescription || (!nextBody?.trim() && !hasBlocks)) {
        return new Response('Missing required fields for publish', { status: 400 });
      }
    }
  }

  const updated = await updateInterventionBySlug(slug, payload);
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
  await deleteInterventionBySlug(slug);
  return new Response(null, { status: 204 });
};

import type { APIRoute } from 'astro';
import { requireCmsAuth } from '@/lib/cms/auth';
import { seoInterventionPages } from '@/lib/interventions/seoPages';
import { interventionCategories, type InterventionCategoryKey } from '@/lib/interventions';
import {
  createIntervention,
  getCmsInterventionBySlug,
  updateInterventionBySlug,
} from '@/lib/cms/interventions';

function normalize(value: string) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

const categoryByLabel = new Map<string, InterventionCategoryKey>(
  interventionCategories.map((c) => [normalize(c.title), c.key]),
);

function inferCategoryKey(page: { categoryLabel: string; breadcrumb: string }) {
  const fromLabel = categoryByLabel.get(normalize(page.categoryLabel));
  if (fromLabel) return fromLabel;

  const breadcrumb = normalize(page.breadcrumb);
  if (breadcrumb.includes('medecine esthetique')) return 'medecine-esthetique';
  if (breadcrumb.includes('visage')) return 'visage';
  if (breadcrumb.includes('silhouette')) return 'silhouette';
  if (breadcrumb.includes('seins')) return 'seins';
  if (breadcrumb.includes('chirurgie reparatrice')) return 'chirurgie-reparatrice';
  if (breadcrumb.includes('chirurgie de la main')) return 'chirurgie-de-la-main';
  if (breadcrumb.includes('intime')) return 'intime';
  return null;
}

export const POST: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;

  const body = await context.request.json().catch(() => ({}));
  const publish = body?.publish !== false;

  const report: {
    created: string[];
    updated: string[];
    skipped: { slug: string; reason: string }[];
  } = {
    created: [],
    updated: [],
    skipped: [],
  };

  for (const [slug, page] of Object.entries(seoInterventionPages)) {
    const category = inferCategoryKey(page);
    if (!category) {
      report.skipped.push({ slug, reason: 'Unable to infer category' });
      continue;
    }

    const categoryThumb =
      interventionCategories.find((c) => c.key === category)?.thumbnailSrc ?? null;
    const payload = {
      category,
      title: page.h1 || slug,
      description: page.intro || '',
      seo_title: page.h1 || null,
      seo_description: page.intro || null,
      template_kind: 'seo_v2' as const,
      hero_image_src: categoryThumb,
      hero_image_alt: page.h1 || 'Intervention',
      seo_page_data: page,
      body_md: '',
      content_blocks: [],
      order: null,
      status: publish ? ('publie' as const) : ('brouillon' as const),
    };

    const existing = await getCmsInterventionBySlug(slug);
    if (!existing) {
      await createIntervention({ slug, ...payload });
      report.created.push(slug);
      continue;
    }

    await updateInterventionBySlug(slug, payload);
    report.updated.push(slug);
  }

  return new Response(JSON.stringify(report), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};

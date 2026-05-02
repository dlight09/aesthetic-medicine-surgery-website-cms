import type { APIRoute } from 'astro';
import { requireCmsAuth } from '@/lib/cms/auth';
import { listCmsInterventions, updateInterventionBySlug } from '@/lib/cms/interventions';
import { coerceSeoTemplateV2Data } from '@/lib/cms/interventionSeoTemplate';

export const POST: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;

  const items = await listCmsInterventions();
  const report = { migrated: [] as string[], skipped: [] as string[] };

  for (const item of items) {
    if (!item.seo_page_data) {
      report.skipped.push(item.slug);
      continue;
    }
    const normalized = coerceSeoTemplateV2Data(item.seo_page_data, {
      hero_image_src: item.hero_image_src,
      hero_image_alt: item.hero_image_alt,
    });
    if (!normalized) {
      report.skipped.push(item.slug);
      continue;
    }
    await updateInterventionBySlug(item.slug, {
      template_kind: 'seo_v2',
      seo_page_data: normalized,
      hero_image_src: normalized.hero.imageSrc || item.hero_image_src,
      hero_image_alt: normalized.hero.imageAlt || item.hero_image_alt,
    });
    report.migrated.push(item.slug);
  }

  return new Response(JSON.stringify(report), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};

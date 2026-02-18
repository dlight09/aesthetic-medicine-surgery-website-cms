import type { APIRoute } from 'astro';
import { listPublicAvantApresCases } from '@/lib/cms/avantApres';

export const GET: APIRoute = async ({ url }) => {
  const interventionCategory = url.searchParams.get('intervention_category');
  const interventionSlug = url.searchParams.get('intervention_slug');
  const limitParam = url.searchParams.get('limit');
  const limit = limitParam ? Number.parseInt(limitParam, 10) : undefined;

  let items = await listPublicAvantApresCases();
  if (interventionCategory) {
    items = items.filter((item) => item.intervention_category === interventionCategory);
  }
  if (interventionSlug) {
    items = items.filter((item) => item.intervention_slug === interventionSlug);
  }
  if (Number.isFinite(limit)) {
    items = items.slice(0, limit as number);
  }

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-store',
    },
  });
};

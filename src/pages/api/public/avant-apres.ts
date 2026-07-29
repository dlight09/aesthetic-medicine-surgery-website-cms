import type { APIRoute } from 'astro';
import { listPublicAvantApresCasesPage } from '@/lib/cms/avantApres';

export const GET: APIRoute = async ({ url }) => {
  const interventionCategory = url.searchParams.get('intervention_category');
  const interventionSlug = url.searchParams.get('intervention_slug');
  const limitParam = url.searchParams.get('limit');
  const offsetParam = url.searchParams.get('offset');
  const requestedLimit = limitParam ? Number.parseInt(limitParam, 10) : 12;
  const requestedOffset = offsetParam ? Number.parseInt(offsetParam, 10) : 0;
  const limit = Number.isFinite(requestedLimit) ? Math.min(Math.max(requestedLimit, 1), 24) : 12;
  const offset = Number.isFinite(requestedOffset) ? Math.max(requestedOffset, 0) : 0;
  const page = await listPublicAvantApresCasesPage({
    interventionCategory,
    interventionSlug,
    offset,
    limit,
  });

  return new Response(JSON.stringify(page), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-store',
    },
  });
};

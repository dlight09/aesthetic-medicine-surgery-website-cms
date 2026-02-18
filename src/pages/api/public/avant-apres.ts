import type { APIRoute } from 'astro';
import { listPublicAvantApresCasesFiltered } from '@/lib/cms/avantApres';

export const GET: APIRoute = async ({ url }) => {
  const interventionCategory = url.searchParams.get('intervention_category');
  const interventionSlug = url.searchParams.get('intervention_slug');
  const limitParam = url.searchParams.get('limit');
  const limit = limitParam ? Number.parseInt(limitParam, 10) : undefined;

  const items = await listPublicAvantApresCasesFiltered({
    interventionCategory: interventionCategory || null,
    interventionSlug: interventionSlug || null,
    limit: Number.isFinite(limit) ? limit : undefined,
  });

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-store',
    },
  });
};

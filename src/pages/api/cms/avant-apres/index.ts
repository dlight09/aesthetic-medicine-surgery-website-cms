import type { APIRoute } from 'astro';
import { requireCmsAuth } from '@/lib/cms/auth';
import { createAvantApresCase, listCmsAvantApresCases } from '@/lib/cms/avantApres';

export const GET: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;
  const items = await listCmsAvantApresCases();
  return new Response(JSON.stringify(items), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};

export const POST: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;

  const body = await context.request.json().catch(() => null);
  if (!body || typeof body !== 'object') {
    return new Response('Invalid payload', { status: 400 });
  }

  const title = typeof body.title === 'string' ? body.title.trim() : '';
  const before_path = typeof body.before_path === 'string' ? body.before_path : '';
  const after_path = typeof body.after_path === 'string' ? body.after_path : '';
  if (!title || !before_path || !after_path) {
    return new Response('Missing required fields', { status: 400 });
  }

  const status = body.status === 'publie' ? 'publie' : 'brouillon';
  const payload = {
    title,
    description: typeof body.description === 'string' ? body.description : null,
    intervention_category:
      typeof body.intervention_category === 'string' && body.intervention_category.trim()
        ? body.intervention_category
        : null,
    intervention_slug:
      typeof body.intervention_slug === 'string' && body.intervention_slug.trim()
        ? body.intervention_slug
        : null,
    status: status as 'brouillon' | 'publie',
    consent: Boolean(body.consent),
    consent_date: typeof body.consent_date === 'string' ? body.consent_date : null,
    internal_ref: typeof body.internal_ref === 'string' ? body.internal_ref : null,
    before_path,
    after_path,
  };

  const created = await createAvantApresCase(payload);
  return new Response(JSON.stringify(created), {
    status: 201,
    headers: { 'content-type': 'application/json' },
  });
};

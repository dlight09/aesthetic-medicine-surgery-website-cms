import type { APIRoute } from 'astro';
import { requireCmsAuth } from '@/lib/cms/auth';
import {
  deleteAvantApresCase,
  getCmsAvantApresCase,
  updateAvantApresCase,
} from '@/lib/cms/avantApres';

export const GET: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;

  const id = context.params.id;
  if (!id) return new Response('Missing id', { status: 400 });
  const item = await getCmsAvantApresCase(id);
  if (!item) return new Response('Not found', { status: 404 });
  return new Response(JSON.stringify(item), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};

export const PUT: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;

  const id = context.params.id;
  if (!id) return new Response('Missing id', { status: 400 });

  const body = await context.request.json().catch(() => null);
  if (!body || typeof body !== 'object') {
    return new Response('Invalid payload', { status: 400 });
  }

  const status =
    body.status === 'publie' ? 'publie' : body.status === 'brouillon' ? 'brouillon' : undefined;
  const interventionCategory =
    typeof body.intervention_category === 'string'
      ? body.intervention_category
      : body.intervention_category === null
        ? null
        : undefined;
  const interventionSlug =
    typeof body.intervention_slug === 'string'
      ? body.intervention_slug
      : body.intervention_slug === null
        ? null
        : undefined;
  const payload = {
    title: typeof body.title === 'string' ? body.title.trim() : undefined,
    description: typeof body.description === 'string' ? body.description : undefined,
    zone: typeof body.zone === 'string' ? body.zone : undefined,
    intervention_category: interventionCategory,
    intervention_slug: interventionSlug,
    status: status as 'brouillon' | 'publie' | undefined,
    consent: typeof body.consent === 'boolean' ? body.consent : undefined,
    consent_date: typeof body.consent_date === 'string' ? body.consent_date : undefined,
    internal_ref: typeof body.internal_ref === 'string' ? body.internal_ref : undefined,
    before_path: typeof body.before_path === 'string' ? body.before_path : undefined,
    after_path: typeof body.after_path === 'string' ? body.after_path : undefined,
    caption: typeof body.caption === 'string' ? body.caption : undefined,
  };

  const updated = await updateAvantApresCase(id, payload);
  return new Response(JSON.stringify(updated), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};

export const DELETE: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;

  const id = context.params.id;
  if (!id) return new Response('Missing id', { status: 400 });
  await deleteAvantApresCase(id);
  return new Response(null, { status: 204 });
};

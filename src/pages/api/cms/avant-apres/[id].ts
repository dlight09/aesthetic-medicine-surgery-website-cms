import type { APIRoute } from 'astro';
import { requireCmsAuth } from '@/lib/cms/auth';
import {
  deleteAvantApresCase,
  getCmsAvantApresCase,
  updateAvantApresCase,
} from '@/lib/cms/avantApres';

function parseOptionalString(value: unknown) {
  return typeof value === 'string' ? value : undefined;
}

function parseOptionalNumber(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined;
}

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
    description: parseOptionalString(body.description),
    intervention_category: interventionCategory,
    intervention_slug: interventionSlug,
    case_number: parseOptionalNumber(body.case_number),
    status: status as 'brouillon' | 'publie' | undefined,
    consent: typeof body.consent === 'boolean' ? body.consent : undefined,
    consent_date: parseOptionalString(body.consent_date),
    internal_ref: parseOptionalString(body.internal_ref),
    before_path: parseOptionalString(body.before_path),
    after_path: parseOptionalString(body.after_path),
    family_key: parseOptionalString(body.family_key),
    summary: parseOptionalString(body.summary),
    clinical_context: parseOptionalString(body.clinical_context),
    result_overview: parseOptionalString(body.result_overview),
    featured: typeof body.featured === 'boolean' ? body.featured : undefined,
    patient_context:
      'patient_context' in body
        ? body.patient_context && typeof body.patient_context === 'object'
          ? {
              patient_sex: parseOptionalString(body.patient_context.patient_sex),
              patient_age: parseOptionalNumber(body.patient_context.patient_age),
              weight_kg: parseOptionalNumber(body.patient_context.weight_kg),
              smoking_status:
                body.patient_context.smoking_status === 'smoker' ||
                body.patient_context.smoking_status === 'non_smoker' ||
                body.patient_context.smoking_status === 'former' ||
                body.patient_context.smoking_status === 'unknown'
                  ? body.patient_context.smoking_status
                  : undefined,
              pregnancies_count: parseOptionalNumber(body.patient_context.pregnancies_count),
              post_bariatric:
                typeof body.patient_context.post_bariatric === 'boolean'
                  ? body.patient_context.post_bariatric
                  : undefined,
              revision_case:
                typeof body.patient_context.revision_case === 'boolean'
                  ? body.patient_context.revision_case
                  : undefined,
              prior_surgery:
                typeof body.patient_context.prior_surgery === 'boolean'
                  ? body.patient_context.prior_surgery
                  : undefined,
              history_notes: parseOptionalString(body.patient_context.history_notes),
            }
          : null
        : undefined,
    procedures: Array.isArray(body.procedures) ? body.procedures : undefined,
    media_sets: Array.isArray(body.media_sets) ? body.media_sets : undefined,
    tags: Array.isArray(body.tags)
      ? body.tags.filter((t: unknown) => typeof t === 'string')
      : undefined,
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

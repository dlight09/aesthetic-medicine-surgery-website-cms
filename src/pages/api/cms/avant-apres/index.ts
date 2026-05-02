import type { APIRoute } from 'astro';
import { requireCmsAuth } from '@/lib/cms/auth';
import { createAvantApresCase, listCmsAvantApresCases } from '@/lib/cms/avantApres';

function parseOptionalString(value: unknown) {
  return typeof value === 'string' ? value : null;
}

function parseOptionalNumber(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

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
  const mediaSets = Array.isArray(body.media_sets) ? body.media_sets : [];
  const hasMediaSets = mediaSets.length > 0;

  if (!title || (!hasMediaSets && (!before_path || !after_path))) {
    return new Response('Missing required fields', { status: 400 });
  }

  const status = body.status === 'publie' ? 'publie' : 'brouillon';
  const payload = {
    title,
    description: parseOptionalString(body.description),
    intervention_category:
      typeof body.intervention_category === 'string' && body.intervention_category.trim()
        ? body.intervention_category
        : null,
    intervention_slug:
      typeof body.intervention_slug === 'string' && body.intervention_slug.trim()
        ? body.intervention_slug
        : null,
    case_number: null,
    status: status as 'brouillon' | 'publie',
    consent: Boolean(body.consent),
    consent_date: parseOptionalString(body.consent_date),
    internal_ref: parseOptionalString(body.internal_ref),
    before_path,
    after_path,
    family_key: parseOptionalString(body.family_key),
    summary: parseOptionalString(body.summary),
    clinical_context: parseOptionalString(body.clinical_context),
    result_overview: parseOptionalString(body.result_overview),
    featured: Boolean(body.featured),
    patient_context:
      body.patient_context && typeof body.patient_context === 'object'
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
                : null,
            pregnancies_count: parseOptionalNumber(body.patient_context.pregnancies_count),
            post_bariatric:
              typeof body.patient_context.post_bariatric === 'boolean'
                ? body.patient_context.post_bariatric
                : null,
            revision_case:
              typeof body.patient_context.revision_case === 'boolean'
                ? body.patient_context.revision_case
                : null,
            prior_surgery:
              typeof body.patient_context.prior_surgery === 'boolean'
                ? body.patient_context.prior_surgery
                : null,
            history_notes: parseOptionalString(body.patient_context.history_notes),
          }
        : null,
    procedures: Array.isArray(body.procedures) ? body.procedures : [],
    media_sets: hasMediaSets ? mediaSets : [],
    tags: Array.isArray(body.tags) ? body.tags.filter((t: unknown) => typeof t === 'string') : [],
  };

  const created = await createAvantApresCase(payload);
  return new Response(JSON.stringify(created), {
    status: 201,
    headers: { 'content-type': 'application/json' },
  });
};

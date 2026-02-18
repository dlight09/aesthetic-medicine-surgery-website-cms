import type { APIRoute } from 'astro';
import { requireCmsAuth } from '@/lib/cms/auth';
import { createAvantApresCase, listCmsAvantApresCases } from '@/lib/cms/avantApres';
import { getSupabaseAdmin } from '@/lib/cms/supabase';

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

  const supabase = getSupabaseAdmin();
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
  const caseNumber =
    typeof body.case_number === 'number' && Number.isFinite(body.case_number)
      ? body.case_number
      : typeof body.case_number === 'string' && body.case_number.trim()
        ? Number.parseInt(body.case_number, 10)
        : null;
  let resolvedCaseNumber = Number.isFinite(caseNumber) ? caseNumber : null;
  if (!resolvedCaseNumber && body.intervention_category && body.intervention_slug) {
    const { data: lastCase, error: caseError } = await supabase
      .from('avant_apres_cases')
      .select('case_number')
      .eq('intervention_category', body.intervention_category)
      .eq('intervention_slug', body.intervention_slug)
      .order('case_number', { ascending: false })
      .limit(1);
    if (caseError) throw caseError;
    const lastNumber = lastCase?.[0]?.case_number ?? 0;
    resolvedCaseNumber = Number.isFinite(lastNumber) ? lastNumber + 1 : 1;
  }

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
    case_number: resolvedCaseNumber,
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

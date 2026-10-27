import { getAvantApresBucket, getSupabaseAdmin, getSupabasePublicRead } from './supabase';
import { getCmsActor } from './actor';

export type AvantApresStatus = 'brouillon' | 'publie';

export type AvantApresPatientContext = {
  case_id: string;
  patient_sex: string | null;
  patient_age: number | null;
  weight_kg: number | null;
  smoking_status: 'smoker' | 'non_smoker' | 'former' | 'unknown' | null;
  pregnancies_count: number | null;
  post_bariatric: boolean | null;
  revision_case: boolean | null;
  prior_surgery: boolean | null;
  history_notes: string | null;
  created_at: string;
  updated_at: string;
};

export type AvantApresCaseProcedure = {
  id: string;
  case_id: string;
  procedure_order: number;
  procedure_family_key: string | null;
  intervention_category: string | null;
  intervention_slug: string | null;
  label: string;
  technique_notes: string | null;
  is_primary: boolean;
  created_at: string;
  updated_at: string;
};

export type AvantApresCaseMediaSet = {
  id: string;
  case_id: string;
  set_order: number;
  label: string | null;
  view_key: string | null;
  result_delay_value: number | null;
  result_delay_unit: 'days' | 'weeks' | 'months' | 'years' | null;
  result_delay_label: string | null;
  media_mode: 'pair' | 'comparison';
  before_path: string;
  after_path: string;
  is_cover: boolean;
  public_note: string | null;
  created_at: string;
  updated_at: string;
};

export type AvantApresCaseMediaSetView = AvantApresCaseMediaSet & {
  beforeUrl: string;
  afterUrl: string;
};

export type AvantApresCase = {
  id: string;
  title: string;
  description: string | null;
  intervention_category: string | null;
  intervention_slug: string | null;
  case_number: number | null;
  status: AvantApresStatus;
  consent: boolean;
  consent_date: string | null;
  internal_ref: string | null;
  before_path: string;
  after_path: string;
  family_key: string | null;
  summary: string | null;
  clinical_context: string | null;
  result_overview: string | null;
  featured: boolean;
  created_at: string;
  updated_at: string;
};

export type AvantApresCaseView = AvantApresCase & {
  beforeUrl: string;
  afterUrl: string;
  patient_context: AvantApresPatientContext | null;
  procedures: AvantApresCaseProcedure[];
  media_sets: AvantApresCaseMediaSetView[];
  tags: string[];
};

const tableName = 'avant_apres_cases';
const patientContextTable = 'avant_apres_case_patient_context';
const proceduresTable = 'avant_apres_case_procedures';
const mediaSetsTable = 'avant_apres_case_media_sets';
const tagsTable = 'avant_apres_case_tags';
const signedUrlTtl = 600;

type CaseInput = Omit<AvantApresCase, 'id' | 'created_at' | 'updated_at'>;

type CreateOrUpdatePayload = Partial<CaseInput> & {
  replace_cover?: boolean;
  patient_context?: Partial<
    Omit<AvantApresPatientContext, 'case_id' | 'created_at' | 'updated_at'>
  > | null;
  procedures?: Array<
    Partial<Omit<AvantApresCaseProcedure, 'id' | 'case_id' | 'created_at' | 'updated_at'>> & {
      label: string;
    }
  >;
  media_sets?: Array<
    Partial<Omit<AvantApresCaseMediaSet, 'id' | 'case_id' | 'created_at' | 'updated_at'>> & {
      before_path: string;
      after_path: string;
    }
  >;
  tags?: string[];
};

function isMissingTableError(error: unknown, table: string) {
  if (!error || typeof error !== 'object') return false;
  const e = error as { code?: string; message?: string };
  return e.code === 'PGRST205' && typeof e.message === 'string' && e.message.includes(table);
}

type SupabaseClient = ReturnType<typeof getSupabaseAdmin>;

async function signedUrl(path: string, supabase: SupabaseClient = getSupabaseAdmin()) {
  const bucket = getAvantApresBucket();
  try {
    const { data, error } = await supabase.storage.from(bucket).createSignedUrl(path, signedUrlTtl);
    if (error || !data?.signedUrl) return '';
    return data.signedUrl;
  } catch {
    return '';
  }
}

async function mediaSetWithUrls(
  item: AvantApresCaseMediaSet,
  supabase: SupabaseClient = getSupabaseAdmin(),
): Promise<AvantApresCaseMediaSetView> {
  const [beforeUrl, afterUrl] = await Promise.all([
    signedUrl(item.before_path, supabase),
    signedUrl(item.after_path, supabase),
  ]);
  return { ...item, beforeUrl, afterUrl };
}

function asCase(item: Record<string, unknown>): AvantApresCase {
  return {
    id: String(item.id),
    title: String(item.title ?? ''),
    description: typeof item.description === 'string' ? item.description : null,
    intervention_category:
      typeof item.intervention_category === 'string' ? item.intervention_category : null,
    intervention_slug: typeof item.intervention_slug === 'string' ? item.intervention_slug : null,
    case_number: typeof item.case_number === 'number' ? item.case_number : null,
    status: item.status === 'publie' ? 'publie' : 'brouillon',
    consent: Boolean(item.consent),
    consent_date: typeof item.consent_date === 'string' ? item.consent_date : null,
    internal_ref: typeof item.internal_ref === 'string' ? item.internal_ref : null,
    before_path: typeof item.before_path === 'string' ? item.before_path : '',
    after_path: typeof item.after_path === 'string' ? item.after_path : '',
    family_key: typeof item.family_key === 'string' ? item.family_key : null,
    summary: typeof item.summary === 'string' ? item.summary : null,
    clinical_context: typeof item.clinical_context === 'string' ? item.clinical_context : null,
    result_overview: typeof item.result_overview === 'string' ? item.result_overview : null,
    featured: Boolean(item.featured),
    created_at: String(item.created_at ?? ''),
    updated_at: String(item.updated_at ?? ''),
  };
}

function normalizeMediaSets(payload: CreateOrUpdatePayload['media_sets']) {
  const items = (payload ?? [])
    .map((item, idx) => ({
      set_order: typeof item.set_order === 'number' ? item.set_order : idx + 1,
      label: typeof item.label === 'string' ? item.label : null,
      view_key:
        item.media_mode === 'comparison'
          ? 'comparison'
          : typeof item.view_key === 'string'
            ? item.view_key
            : null,
      result_delay_value:
        typeof item.result_delay_value === 'number' ? item.result_delay_value : null,
      result_delay_unit:
        item.result_delay_unit === 'days' ||
        item.result_delay_unit === 'weeks' ||
        item.result_delay_unit === 'months' ||
        item.result_delay_unit === 'years'
          ? item.result_delay_unit
          : null,
      result_delay_label:
        typeof item.result_delay_label === 'string' ? item.result_delay_label : null,
      before_path: String(item.before_path ?? '').trim(),
      after_path: String(item.after_path ?? '').trim(),
      is_cover: Boolean(item.is_cover),
      public_note: typeof item.public_note === 'string' ? item.public_note : null,
    }))
    .filter((item) => item.before_path && item.after_path);

  if (!items.length) return [];
  if (!items.some((item) => item.is_cover)) items[0].is_cover = true;
  return items;
}

function asMediaSet(item: Record<string, unknown>): AvantApresCaseMediaSet {
  return {
    ...(item as unknown as Omit<AvantApresCaseMediaSet, 'media_mode'>),
    media_mode: item.view_key === 'comparison' ? 'comparison' : 'pair',
  };
}

function normalizeProcedures(payload: CreateOrUpdatePayload['procedures']) {
  const items = (payload ?? [])
    .map((item, idx) => ({
      procedure_order: typeof item.procedure_order === 'number' ? item.procedure_order : idx + 1,
      procedure_family_key:
        typeof item.procedure_family_key === 'string' ? item.procedure_family_key : null,
      intervention_category:
        typeof item.intervention_category === 'string' ? item.intervention_category : null,
      intervention_slug: typeof item.intervention_slug === 'string' ? item.intervention_slug : null,
      label: String(item.label ?? '').trim(),
      technique_notes: typeof item.technique_notes === 'string' ? item.technique_notes : null,
      is_primary: Boolean(item.is_primary),
    }))
    .filter((item) => item.label);

  if (!items.length) return [];
  if (!items.some((item) => item.is_primary)) items[0].is_primary = true;
  return items;
}

async function loadRelations(caseIds: string[], supabase: SupabaseClient = getSupabaseAdmin()) {
  if (!caseIds.length) {
    return {
      patientContextByCase: new Map<string, AvantApresPatientContext>(),
      proceduresByCase: new Map<string, AvantApresCaseProcedure[]>(),
      mediaSetsByCase: new Map<string, AvantApresCaseMediaSet[]>(),
      tagsByCase: new Map<string, string[]>(),
    };
  }

  const [patientContextRes, proceduresRes, mediaSetsRes, tagsRes] = await Promise.all([
    supabase.from(patientContextTable).select('*').in('case_id', caseIds),
    supabase
      .from(proceduresTable)
      .select('*')
      .in('case_id', caseIds)
      .order('procedure_order', { ascending: true }),
    supabase
      .from(mediaSetsTable)
      .select('*')
      .in('case_id', caseIds)
      .order('set_order', { ascending: true }),
    supabase.from(tagsTable).select('case_id, tag_key').in('case_id', caseIds),
  ]);

  if (patientContextRes.error && !isMissingTableError(patientContextRes.error, patientContextTable)) {
    throw patientContextRes.error;
  }
  if (proceduresRes.error && !isMissingTableError(proceduresRes.error, proceduresTable)) {
    throw proceduresRes.error;
  }
  if (mediaSetsRes.error && !isMissingTableError(mediaSetsRes.error, mediaSetsTable)) {
    throw mediaSetsRes.error;
  }
  if (tagsRes.error && !isMissingTableError(tagsRes.error, tagsTable)) {
    throw tagsRes.error;
  }

  const patientContextByCase = new Map<string, AvantApresPatientContext>();
  ((patientContextRes.error ? [] : patientContextRes.data) ?? []).forEach((row) => {
    patientContextByCase.set(String(row.case_id), row as AvantApresPatientContext);
  });

  const proceduresByCase = new Map<string, AvantApresCaseProcedure[]>();
  ((proceduresRes.error ? [] : proceduresRes.data) ?? []).forEach((row) => {
    const key = String(row.case_id);
    const list = proceduresByCase.get(key) ?? [];
    list.push(row as AvantApresCaseProcedure);
    proceduresByCase.set(key, list);
  });

  const mediaSetsByCase = new Map<string, AvantApresCaseMediaSet[]>();
  ((mediaSetsRes.error ? [] : mediaSetsRes.data) ?? []).forEach((row) => {
    const key = String(row.case_id);
    const list = mediaSetsByCase.get(key) ?? [];
    list.push(asMediaSet(row as Record<string, unknown>));
    mediaSetsByCase.set(key, list);
  });

  const tagsByCase = new Map<string, string[]>();
  ((tagsRes.error ? [] : tagsRes.data) ?? []).forEach((row) => {
    const key = String(row.case_id);
    const list = tagsByCase.get(key) ?? [];
    if (typeof row.tag_key === 'string' && row.tag_key.trim()) list.push(row.tag_key.trim());
    tagsByCase.set(key, list);
  });

  return { patientContextByCase, proceduresByCase, mediaSetsByCase, tagsByCase };
}

async function buildCaseView(
  item: AvantApresCase,
  relations: Awaited<ReturnType<typeof loadRelations>>,
  supabase: SupabaseClient = getSupabaseAdmin(),
) {
  const mediaSets = relations.mediaSetsByCase.get(item.id) ?? [];
  const coverSet = mediaSets.find((set) => set.is_cover) ?? mediaSets[0] ?? null;
  const coverBeforePath = coverSet?.before_path ?? item.before_path;
  const coverAfterPath = coverSet?.after_path ?? item.after_path;

  const [beforeUrl, afterUrl, mediaSetViews] = await Promise.all([
    coverBeforePath ? signedUrl(coverBeforePath, supabase) : Promise.resolve(''),
    coverAfterPath ? signedUrl(coverAfterPath, supabase) : Promise.resolve(''),
    Promise.all(mediaSets.map((set) => mediaSetWithUrls(set, supabase))),
  ]);

  return {
    ...item,
    beforeUrl,
    afterUrl,
    patient_context: relations.patientContextByCase.get(item.id) ?? null,
    procedures: relations.proceduresByCase.get(item.id) ?? [],
    media_sets: mediaSetViews,
    tags: relations.tagsByCase.get(item.id) ?? [],
  } as AvantApresCaseView;
}

async function loadGalleryRelations(
  caseIds: string[],
  supabase: SupabaseClient = getSupabaseAdmin(),
) {
  if (!caseIds.length) {
    return {
      patientContextByCase: new Map<string, AvantApresPatientContext>(),
      coverMediaByCase: new Map<string, AvantApresCaseMediaSet>(),
    };
  }

  const [patientContextRes, coverMediaRes] = await Promise.all([
    supabase.from(patientContextTable).select('*').in('case_id', caseIds),
    supabase
      .from(mediaSetsTable)
      .select('*')
      .in('case_id', caseIds)
      .eq('is_cover', true)
      .order('set_order', { ascending: true }),
  ]);
  if (
    patientContextRes.error &&
    !isMissingTableError(patientContextRes.error, patientContextTable)
  ) {
    throw patientContextRes.error;
  }
  if (coverMediaRes.error && !isMissingTableError(coverMediaRes.error, mediaSetsTable)) {
    throw coverMediaRes.error;
  }

  const patientContextByCase = new Map<string, AvantApresPatientContext>();
  ((patientContextRes.error ? [] : patientContextRes.data) ?? []).forEach((row) => {
    patientContextByCase.set(String(row.case_id), row as AvantApresPatientContext);
  });
  const coverMediaByCase = new Map<string, AvantApresCaseMediaSet>();
  ((coverMediaRes.error ? [] : coverMediaRes.data) ?? []).forEach((row) => {
    const media = asMediaSet(row as Record<string, unknown>);
    if (!coverMediaByCase.has(media.case_id)) coverMediaByCase.set(media.case_id, media);
  });
  return { patientContextByCase, coverMediaByCase };
}

async function buildGalleryCaseView(
  item: AvantApresCase,
  relations: Awaited<ReturnType<typeof loadGalleryRelations>>,
  supabase: SupabaseClient = getSupabaseAdmin(),
) {
  const coverSet = relations.coverMediaByCase.get(item.id) ?? null;
  const beforePath = coverSet?.before_path ?? item.before_path;
  const afterPath = coverSet?.after_path ?? item.after_path;
  const beforeUrl = beforePath ? await signedUrl(beforePath, supabase) : '';
  const afterUrl =
    afterPath === beforePath ? beforeUrl : afterPath ? await signedUrl(afterPath, supabase) : '';
  const mediaSets = coverSet
    ? [{ ...coverSet, beforeUrl, afterUrl }]
    : [];

  return {
    ...item,
    beforeUrl,
    afterUrl,
    patient_context: relations.patientContextByCase.get(item.id) ?? null,
    procedures: [],
    media_sets: mediaSets,
    tags: [],
  } as AvantApresCaseView;
}

export async function listCmsAvantApresCases() {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .order('updated_at', { ascending: false });
  if (error) throw error;

  const cases = (data ?? []).map((row) => asCase(row as Record<string, unknown>));
  const relations = await loadRelations(cases.map((item) => item.id));
  return await Promise.all(cases.map((item) => buildCaseView(item, relations)));
}

export async function getCmsAvantApresCase(id: string) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from(tableName).select('*').eq('id', id).maybeSingle();
  if (error) throw error;
  if (!data) return null;

  const item = asCase(data as Record<string, unknown>);
  const relations = await loadRelations([id]);
  return await buildCaseView(item, relations);
}

export type PublicAvantApresCasesPageOptions = {
  interventionCategory?: string | null;
  interventionSlug?: string | null;
  offset?: number;
  limit?: number;
};

export async function listPublicAvantApresCasesPage({
  interventionCategory,
  interventionSlug,
  offset = 0,
  limit,
}: PublicAvantApresCasesPageOptions = {}) {
  try {
    const supabase = getSupabasePublicRead();
    let query = supabase
      .from(tableName)
      .select('*', { count: 'exact' })
      .eq('status', 'publie')
      .eq('consent', true);
    if (interventionCategory) query = query.eq('intervention_category', interventionCategory);
    if (interventionSlug) query = query.eq('intervention_slug', interventionSlug);
    query =
      interventionCategory || interventionSlug
        ? query.order('case_number', { ascending: true })
        : query.order('updated_at', { ascending: false });
    if (typeof limit === 'number') query = query.range(offset, offset + limit - 1);

    const { data, error, count } = await query;

    if (error) throw error;

    const cases = (data ?? []).map((row) => asCase(row as Record<string, unknown>));
    const relations = await loadGalleryRelations(cases.map((item) => item.id), supabase);
    return {
      items: await Promise.all(cases.map((item) => buildGalleryCaseView(item, relations, supabase))),
      total: count ?? 0,
    };
  } catch {
    return { items: [], total: 0 };
  }
}

export async function listPublicAvantApresCases(options?: PublicAvantApresCasesPageOptions) {
  const page = await listPublicAvantApresCasesPage(options);
  return page.items;
}

export async function listPublicAvantApresCaseReferences() {
  try {
    const supabase = getSupabasePublicRead();
    const { data, error } = await supabase
      .from(tableName)
      .select('intervention_category, intervention_slug, case_number')
      .eq('status', 'publie')
      .eq('consent', true);
    if (error) throw error;
    return (data ?? []).map((item) => ({
      intervention_category:
        typeof item.intervention_category === 'string' ? item.intervention_category : null,
      intervention_slug: typeof item.intervention_slug === 'string' ? item.intervention_slug : null,
      case_number: typeof item.case_number === 'number' ? item.case_number : null,
    }));
  } catch {
    return [];
  }
}

export async function getPublicAvantApresCase(id: string) {
  try {
    const supabase = getSupabasePublicRead();
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .eq('id', id)
      .eq('status', 'publie')
      .eq('consent', true)
      .maybeSingle();

    if (error) throw error;
    if (!data) return null;

    const item = asCase(data as Record<string, unknown>);
    const relations = await loadRelations([id], supabase);
    return await buildCaseView(item, relations, supabase);
  } catch {
    return null;
  }
}

export async function createAvantApresCase(payload: CreateOrUpdatePayload) {
  const supabase = getSupabaseAdmin();
  const actor = await getCmsActor(['admin', 'editor', 'reviewer']);
  const rpcPayload = buildRpcPayload(payload);
  const { data: caseId, error } = await supabase.rpc('save_avant_apres_case', {
    p_actor_id: actor.id,
    p_case_id: null,
    p_expected_updated_at: null,
    p_payload: rpcPayload,
  });
  if (error) throw error;
  const created = await getCmsAvantApresCase(String(caseId));
  if (!created) throw new Error('Unable to load created case');
  return created;
}

export async function updateAvantApresCase(id: string, payload: CreateOrUpdatePayload) {
  const supabase = getSupabaseAdmin();
  const current = await getCmsAvantApresCase(id);
  if (!current) throw new Error('Case not found');
  const actor = await getCmsActor(['admin', 'editor', 'reviewer']);
  const rpcPayload = buildRpcPayload(payload, current);
  await registerMissingLegacyAssets(id, rpcPayload.media_sets);
  const { error } = await supabase.rpc('save_avant_apres_case', {
    p_actor_id: actor.id,
    p_case_id: id,
    p_expected_updated_at: current.updated_at,
    p_payload: rpcPayload,
  });
  if (error) throw error;
  const updated = await getCmsAvantApresCase(id);
  if (!updated) throw new Error('Unable to load updated case');
  return updated;
}

export async function deleteAvantApresCase(id: string) {
  const supabase = getSupabaseAdmin();
  const actor = await getCmsActor(['admin', 'reviewer']);
  const item = await getCmsAvantApresCase(id);
  if (!item) return;
  const { error } = await supabase.rpc('delete_avant_apres_case', {
    p_actor_id: actor.id,
    p_case_id: id,
    p_expected_updated_at: item.updated_at,
  });
  if (error) throw error;
}

function buildRpcPayload(payload: CreateOrUpdatePayload, current?: AvantApresCaseView) {
  const value = <K extends keyof CreateOrUpdatePayload>(key: K) =>
    key in payload ? payload[key] : current?.[key as keyof AvantApresCaseView];

  let mediaSets = normalizeMediaSets(
    (payload.media_sets ?? current?.media_sets) as CreateOrUpdatePayload['media_sets'],
  );
  if (current && payload.replace_cover && payload.media_sets) {
    const replacement = normalizeMediaSets(payload.media_sets)[0];
    if (!replacement) throw new Error('A replacement cover is required');
    const currentSets = normalizeMediaSets(
      current.media_sets as CreateOrUpdatePayload['media_sets'],
    );
    const coverIndex = currentSets.findIndex((item) => item.is_cover);
    if (coverIndex >= 0) currentSets[coverIndex] = { ...replacement, is_cover: true };
    else currentSets.unshift({ ...replacement, is_cover: true });
    mediaSets = currentSets;
  }

  const cover = mediaSets.find((item) => item.is_cover) ?? mediaSets[0];
  return {
    title: String(value('title') ?? '').trim(),
    description: value('description') ?? null,
    intervention_category: value('intervention_category') ?? null,
    intervention_slug: value('intervention_slug') ?? null,
    status: value('status') === 'publie' ? 'publie' : 'brouillon',
    consent: Boolean(value('consent')),
    consent_date: value('consent_date') ?? null,
    internal_ref: value('internal_ref') ?? null,
    before_path: value('before_path') || cover?.before_path || '',
    after_path: value('after_path') || cover?.after_path || '',
    family_key: value('family_key') ?? null,
    summary: value('summary') ?? null,
    clinical_context: value('clinical_context') ?? null,
    result_overview: value('result_overview') ?? null,
    featured: Boolean(value('featured')),
    patient_context: value('patient_context') ?? null,
    procedures: normalizeProcedures(
      (payload.procedures ?? current?.procedures) as CreateOrUpdatePayload['procedures'],
    ),
    media_sets: mediaSets,
    tags: Array.from(
      new Set(((payload.tags ?? current?.tags) ?? []).map((tag) => String(tag).trim()).filter(Boolean)),
    ),
  };
}

async function registerMissingLegacyAssets(
  caseId: string,
  mediaSets: ReturnType<typeof normalizeMediaSets>,
) {
  const paths = Array.from(
    new Set(mediaSets.flatMap((item) => [item.before_path, item.after_path]).filter(Boolean)),
  );
  if (!paths.length) return;

  const supabase = getSupabaseAdmin();
  const bucket = getAvantApresBucket();
  const { data, error } = await supabase
    .from('avant_apres_media_assets')
    .select('path')
    .eq('bucket', bucket)
    .in('path', paths);
  if (error) throw error;

  const existing = new Set((data ?? []).map((item) => String(item.path)));
  const missing = paths.filter((path) => !existing.has(path));
  if (!missing.length) return;
  const { error: insertError } = await supabase.from('avant_apres_media_assets').insert(
    missing.map((path) => ({
      bucket,
      path,
      owner_case_id: caseId,
      status: 'attached',
      attached_at: new Date().toISOString(),
    })),
  );
  if (insertError) throw insertError;
}

import type { InterventionCategoryKey } from '@/lib/interventions';
import type { SeoInterventionPageData } from '@/lib/interventions/seoPages';
import { getSupabaseAdmin, getSupabasePublicRead } from './supabase';
import type { InterventionContentBlock } from './interventionBlocks';
import type { InterventionTemplateKind } from './interventionSeoTemplate';
import { getCmsActor } from './actor';

export type InterventionStatus = 'brouillon' | 'publie';

export type CmsIntervention = {
  id: string;
  slug: string;
  category: InterventionCategoryKey;
  title: string;
  description: string;
  body_md: string;
  content_blocks: InterventionContentBlock[] | null;
  order: number | null;
  status: InterventionStatus;
  seo_title: string | null;
  seo_description: string | null;
  template_kind: InterventionTemplateKind;
  hero_image_src: string | null;
  hero_image_alt: string | null;
  seo_page_data: SeoInterventionPageData | null;
  created_at: string;
  updated_at: string;
};

const tableName = 'interventions';

export async function listCmsInterventions() {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .order('updated_at', { ascending: false });
  if (error) throw error;
  return (data ?? []) as CmsIntervention[];
}

export async function getCmsInterventionBySlug(slug: string) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from(tableName).select('*').eq('slug', slug).maybeSingle();
  if (error) throw error;
  return (data as CmsIntervention | null) ?? null;
}

export async function listPublicInterventions(category?: InterventionCategoryKey) {
  const supabase = getSupabasePublicRead();
  let query = supabase.from(tableName).select('*').eq('status', 'publie');
  if (category) query = query.eq('category', category);
  const { data, error } = await query
    .order('order', { ascending: true })
    .order('updated_at', { ascending: false });
  if (error) throw error;
  return (data ?? []) as CmsIntervention[];
}

export async function getPublicInterventionBySlug(params: {
  slug: string;
  category: InterventionCategoryKey;
  includeDraft?: boolean;
}) {
  const { slug, category, includeDraft } = params;
  const supabase = getSupabasePublicRead();
  let query = supabase.from(tableName).select('*').eq('slug', slug).eq('category', category);
  if (!includeDraft) query = query.eq('status', 'publie');
  const { data, error } = await query.maybeSingle();
  if (error) throw error;
  return (data as CmsIntervention | null) ?? null;
}

export async function createIntervention(
  payload: Omit<CmsIntervention, 'id' | 'created_at' | 'updated_at'>,
) {
  const supabase = getSupabaseAdmin();
  const actor = await getCmsActor(['admin', 'editor', 'reviewer']);
  const auditedPayload =
    payload.status === 'publie'
      ? { ...payload, clinical_safety_reviewed_by_actor_id: actor.id }
      : payload;
  const { data, error } = await supabase.rpc('cms_save_intervention', {
    p_actor_id: actor.id,
    p_slug: payload.slug,
    p_expected_updated_at: null,
    p_payload: auditedPayload,
  });
  if (error) throw error;
  return data as CmsIntervention;
}

export async function updateInterventionBySlug(
  slug: string,
  payload: Partial<Omit<CmsIntervention, 'id' | 'slug' | 'created_at' | 'updated_at'>>,
  expectedUpdatedAt: string,
) {
  const supabase = getSupabaseAdmin();
  const actor = await getCmsActor(['admin', 'editor', 'reviewer']);
  const auditedPayload =
    payload.status === 'publie'
      ? { ...payload, clinical_safety_reviewed_by_actor_id: actor.id }
      : payload;
  const { data, error } = await supabase.rpc('cms_save_intervention', {
    p_actor_id: actor.id,
    p_slug: slug,
    p_expected_updated_at: expectedUpdatedAt,
    p_payload: auditedPayload,
  });
  if (error) throw error;
  return data as CmsIntervention;
}

export async function deleteInterventionBySlug(slug: string) {
  const supabase = getSupabaseAdmin();
  const actor = await getCmsActor(['admin', 'reviewer']);
  const { error } = await supabase.rpc('cms_delete_intervention', {
    p_actor_id: actor.id,
    p_slug: slug,
  });
  if (error) throw error;
}

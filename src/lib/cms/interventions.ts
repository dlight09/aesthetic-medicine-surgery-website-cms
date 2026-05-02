import type { InterventionCategoryKey } from '@/lib/interventions';
import type { SeoInterventionPageData } from '@/lib/interventions/seoPages';
import { getSupabaseAdmin } from './supabase';
import type { InterventionContentBlock } from './interventionBlocks';
import type { InterventionTemplateKind } from './interventionSeoTemplate';

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
  const supabase = getSupabaseAdmin();
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
  const supabase = getSupabaseAdmin();
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
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from(tableName)
    .insert({ ...payload, updated_at: now })
    .select('*')
    .single();
  if (error) throw error;
  return data as CmsIntervention;
}

export async function updateInterventionBySlug(
  slug: string,
  payload: Partial<Omit<CmsIntervention, 'id' | 'slug' | 'created_at' | 'updated_at'>>,
) {
  const supabase = getSupabaseAdmin();
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from(tableName)
    .update({ ...payload, updated_at: now })
    .eq('slug', slug)
    .select('*')
    .single();
  if (error) throw error;
  return data as CmsIntervention;
}

export async function deleteInterventionBySlug(slug: string) {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from(tableName).delete().eq('slug', slug);
  if (error) throw error;
}

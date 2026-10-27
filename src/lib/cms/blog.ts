import { getSupabaseAdmin, getSupabasePublicRead } from './supabase';
import { getCmsActor } from './actor';
import type { BlogBlock } from './blogBlocks';

export type BlogStatus = 'brouillon' | 'publie';

export type CmsBlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  status: BlogStatus;
  published_at: string | null;
  seo_title: string | null;
  seo_description: string | null;
  content_blocks: BlogBlock[];
  created_at: string;
  updated_at: string;
};

const tableName = 'blog_posts';
const linkTable = 'blog_intervention_links';

export async function listCmsBlogPosts() {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .order('updated_at', { ascending: false });
  if (error) throw error;
  return (data ?? []) as CmsBlogPost[];
}

export async function getCmsBlogPostBySlug(slug: string) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from(tableName).select('*').eq('slug', slug).maybeSingle();
  if (error) throw error;
  return (data as CmsBlogPost | null) ?? null;
}

export async function listPublicBlogPosts() {
  const supabase = getSupabasePublicRead();
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .eq('status', 'publie')
    .order('published_at', { ascending: false })
    .order('updated_at', { ascending: false });
  if (error) throw error;
  return (data ?? []) as CmsBlogPost[];
}

export async function getPublicBlogPostBySlug(params: { slug: string; includeDraft?: boolean }) {
  const supabase = getSupabasePublicRead();
  let query = supabase.from(tableName).select('*').eq('slug', params.slug);
  if (!params.includeDraft) query = query.eq('status', 'publie');
  const { data, error } = await query.maybeSingle();
  if (error) throw error;
  return (data as CmsBlogPost | null) ?? null;
}

export async function createBlogPost(
  payload: Omit<CmsBlogPost, 'id' | 'created_at' | 'updated_at'>,
  linkedInterventionSlugs: string[],
) {
  const supabase = getSupabaseAdmin();
  const actor = await getCmsActor(['admin', 'editor', 'reviewer']);
  const auditedPayload =
    payload.status === 'publie'
      ? { ...payload, clinical_safety_reviewed_by_actor_id: actor.id }
      : payload;
  const { data, error } = await supabase.rpc('cms_create_blog_post', {
    p_actor_id: actor.id,
    p_post: auditedPayload,
    p_linked_intervention_slugs: linkedInterventionSlugs,
  });
  if (error) throw error;
  return data as CmsBlogPost;
}

export async function updateBlogPostBySlug(
  slug: string,
  payload: Partial<Omit<CmsBlogPost, 'id' | 'slug' | 'created_at' | 'updated_at'>>,
  expectedUpdatedAt: string,
  linkedInterventionSlugs: string[] | null,
) {
  const supabase = getSupabaseAdmin();
  const actor = await getCmsActor(['admin', 'editor', 'reviewer']);
  const auditedPayload =
    payload.status === 'publie'
      ? { ...payload, clinical_safety_reviewed_by_actor_id: actor.id }
      : payload;
  const { data, error } = await supabase.rpc('cms_update_blog_post', {
    p_actor_id: actor.id,
    p_slug: slug,
    p_expected_updated_at: expectedUpdatedAt,
    p_patch: auditedPayload,
    p_linked_intervention_slugs: linkedInterventionSlugs,
  });
  if (error) throw error;
  return data as CmsBlogPost;
}

export async function deleteBlogPostBySlug(slug: string) {
  const supabase = getSupabaseAdmin();
  const actor = await getCmsActor(['admin', 'reviewer']);
  const { error } = await supabase.rpc('cms_delete_blog_post', {
    p_actor_id: actor.id,
    p_slug: slug,
  });
  if (error) throw error;
}

export async function listLinkedInterventionSlugsForBlog(blog_slug: string) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(linkTable)
    .select('intervention_slug, position')
    .eq('blog_slug', blog_slug)
    .order('position', { ascending: true });
  if (error) throw error;
  return (data ?? []).map((x: any) => String(x.intervention_slug));
}

export async function listLinkedBlogSlugsForIntervention(intervention_slug: string) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(linkTable)
    .select('blog_slug, position')
    .eq('intervention_slug', intervention_slug)
    .order('position', { ascending: true });
  if (error) throw error;
  return (data ?? []).map((x: any) => String(x.blog_slug));
}

export async function listPublicLinkedInterventionSlugsForBlog(blog_slug: string) {
  const supabase = getSupabasePublicRead();
  const { data, error } = await supabase
    .from(linkTable)
    .select('intervention_slug, position')
    .eq('blog_slug', blog_slug)
    .order('position', { ascending: true });
  if (error) throw error;
  return (data ?? []).map((x: any) => String(x.intervention_slug));
}

export async function listPublicLinkedBlogSlugsForIntervention(intervention_slug: string) {
  const supabase = getSupabasePublicRead();
  const { data, error } = await supabase
    .from(linkTable)
    .select('blog_slug, position')
    .eq('intervention_slug', intervention_slug)
    .order('position', { ascending: true });
  if (error) throw error;
  return (data ?? []).map((x: any) => String(x.blog_slug));
}

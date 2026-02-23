import { getSupabaseAdmin } from './supabase';
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
  const supabase = getSupabaseAdmin();
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
  const supabase = getSupabaseAdmin();
  let query = supabase.from(tableName).select('*').eq('slug', params.slug);
  if (!params.includeDraft) query = query.eq('status', 'publie');
  const { data, error } = await query.maybeSingle();
  if (error) throw error;
  return (data as CmsBlogPost | null) ?? null;
}

export async function createBlogPost(
  payload: Omit<CmsBlogPost, 'id' | 'created_at' | 'updated_at'>,
) {
  const supabase = getSupabaseAdmin();
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from(tableName)
    .insert({ ...payload, updated_at: now })
    .select('*')
    .single();
  if (error) throw error;
  return data as CmsBlogPost;
}

export async function updateBlogPostBySlug(
  slug: string,
  payload: Partial<Omit<CmsBlogPost, 'id' | 'slug' | 'created_at' | 'updated_at'>>,
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
  return data as CmsBlogPost;
}

export async function deleteBlogPostBySlug(slug: string) {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from(tableName).delete().eq('slug', slug);
  if (error) throw error;
}

export async function setBlogInterventionLinks(params: {
  blog_slug: string;
  intervention_slugs: string[];
}) {
  const supabase = getSupabaseAdmin();
  const blog_slug = params.blog_slug;
  const slugs = Array.from(
    new Set(params.intervention_slugs.map((s) => String(s).trim()).filter(Boolean)),
  );

  const del = await supabase.from(linkTable).delete().eq('blog_slug', blog_slug);
  if (del.error) throw del.error;
  if (!slugs.length) return;

  const rows = slugs.map((intervention_slug, idx) => ({
    blog_slug,
    intervention_slug,
    position: idx,
    context: 'both',
  }));
  const ins = await supabase.from(linkTable).insert(rows);
  if (ins.error) throw ins.error;
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

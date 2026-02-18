import { getAvantApresBucket, getSupabaseAdmin } from './supabase';

export type AvantApresStatus = 'brouillon' | 'publie';

export type AvantApresCase = {
  id: string;
  title: string;
  description: string | null;
  intervention_category: string | null;
  intervention_slug: string | null;
  status: AvantApresStatus;
  consent: boolean;
  consent_date: string | null;
  internal_ref: string | null;
  before_path: string;
  after_path: string;
  created_at: string;
  updated_at: string;
};

export type AvantApresCaseView = AvantApresCase & {
  beforeUrl: string;
  afterUrl: string;
};

const tableName = 'avant_apres_cases';
const signedUrlTtl = 600;

async function signedUrl(path: string) {
  const supabase = getSupabaseAdmin();
  const bucket = getAvantApresBucket();
  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(path, signedUrlTtl);
  if (error || !data?.signedUrl) throw error ?? new Error('Signed URL error');
  return data.signedUrl;
}

async function withUrls(item: AvantApresCase): Promise<AvantApresCaseView> {
  const [beforeUrl, afterUrl] = await Promise.all([
    signedUrl(item.before_path),
    signedUrl(item.after_path),
  ]);
  return { ...item, beforeUrl, afterUrl };
}

export async function listCmsAvantApresCases() {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .order('updated_at', { ascending: false });

  if (error) throw error;
  return await Promise.all((data ?? []).map((item) => withUrls(item as AvantApresCase)));
}

export async function getCmsAvantApresCase(id: string) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.from(tableName).select('*').eq('id', id).maybeSingle();
  if (error) throw error;
  return data ? await withUrls(data as AvantApresCase) : null;
}

export async function listPublicAvantApresCases() {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .eq('status', 'publie')
    .eq('consent', true)
    .order('updated_at', { ascending: false });

  if (error) throw error;
  return await Promise.all((data ?? []).map((item) => withUrls(item as AvantApresCase)));
}

export async function getPublicAvantApresCase(id: string) {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .eq('id', id)
    .eq('status', 'publie')
    .eq('consent', true)
    .maybeSingle();

  if (error) throw error;
  return data ? await withUrls(data as AvantApresCase) : null;
}

export async function createAvantApresCase(
  payload: Omit<AvantApresCase, 'id' | 'created_at' | 'updated_at'>,
) {
  const supabase = getSupabaseAdmin();
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from(tableName)
    .insert({ ...payload, updated_at: now })
    .select('*')
    .single();

  if (error) throw error;
  return await withUrls(data as AvantApresCase);
}

export async function updateAvantApresCase(
  id: string,
  payload: Partial<Omit<AvantApresCase, 'id' | 'created_at' | 'updated_at'>>,
) {
  const supabase = getSupabaseAdmin();
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from(tableName)
    .update({ ...payload, updated_at: now })
    .eq('id', id)
    .select('*')
    .single();

  if (error) throw error;
  return await withUrls(data as AvantApresCase);
}

export async function deleteAvantApresCase(id: string) {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from(tableName).delete().eq('id', id);
  if (error) throw error;
}

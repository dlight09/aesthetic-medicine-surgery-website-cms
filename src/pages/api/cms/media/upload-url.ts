import type { APIRoute } from 'astro';
import { randomUUID } from 'node:crypto';
import { requireCmsAuth } from '@/lib/cms/auth';
import { getCmsMediaBucket, getSupabaseAdmin } from '@/lib/cms/supabase';

function getPublicObjectUrl(params: { supabaseUrl: string; bucket: string; path: string }) {
  const { supabaseUrl, bucket, path } = params;
  const base = supabaseUrl.replace(/\/$/, '');
  return `${base}/storage/v1/object/public/${bucket}/${path}`;
}

export const POST: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;

  const body = await context.request.json().catch(() => null);
  const fileName = typeof body?.fileName === 'string' ? body.fileName : '';
  if (!fileName) return new Response('Invalid payload', { status: 400 });

  const ext = fileName.split('.').pop()?.toLowerCase() ?? 'jpg';
  const safeExt = ext.length > 0 && ext.length <= 6 ? ext : 'jpg';
  const path = `interventions/${randomUUID()}.${safeExt}`;

  const supabase = getSupabaseAdmin();
  const bucket = getCmsMediaBucket();
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUploadUrl(path, { upsert: false });

  if (error || !data?.signedUrl) {
    return new Response('Upload URL error', { status: 500 });
  }

  // Note: this URL only works if the bucket is public.
  const publicUrl = getPublicObjectUrl({
    supabaseUrl: import.meta.env.SUPABASE_URL,
    bucket,
    path,
  });

  return new Response(JSON.stringify({ path, signedUrl: data.signedUrl, publicUrl }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};

import type { APIRoute } from 'astro';
import { randomUUID } from 'node:crypto';
import { requireCmsAuth } from '@/lib/cms/auth';
import { getAvantApresBucket, getSupabaseAdmin } from '@/lib/cms/supabase';

export const POST: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;

  const body = await context.request.json().catch(() => null);
  const fileName = typeof body?.fileName === 'string' ? body.fileName : '';
  const kind = body?.kind === 'before' || body?.kind === 'after' ? body.kind : '';
  const contentType = typeof body?.contentType === 'string' ? body.contentType : '';
  const allowedTypes = new Map([
    ['image/jpeg', 'jpg'],
    ['image/png', 'png'],
    ['image/webp', 'webp'],
  ]);

  if (!fileName || !kind || !allowedTypes.has(contentType)) {
    return new Response('Invalid payload', { status: 400 });
  }

  const path = `cases/${randomUUID()}/${kind}.${allowedTypes.get(contentType)}`;

  const supabase = getSupabaseAdmin();
  const bucket = getAvantApresBucket();
  const { data, error } = await supabase.storage
    .from(bucket)
    .createSignedUploadUrl(path, { upsert: false });

  if (error || !data?.signedUrl) {
    return new Response('Upload URL error', { status: 500 });
  }

  return new Response(JSON.stringify({ path, signedUrl: data.signedUrl }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};

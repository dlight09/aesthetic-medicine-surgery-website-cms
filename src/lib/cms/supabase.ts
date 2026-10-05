import { createClient } from '@supabase/supabase-js';

let cachedClient: ReturnType<typeof createClient<any>> | null = null;
let cachedPublicReadClient: ReturnType<typeof createClient<any>> | null = null;

const defaultPublicReadTimeoutMs = 5000;

function getEnvVar(key: keyof ImportMetaEnv) {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export function getSupabaseAdmin() {
  if (cachedClient) return cachedClient;
  const url = getEnvVar('SUPABASE_URL');
  const serviceRoleKey = getEnvVar('SUPABASE_SERVICE_ROLE_KEY');
  cachedClient = createClient<any>(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
  return cachedClient;
}

function getPublicReadTimeoutMs() {
  const value = Number(import.meta.env.SUPABASE_PUBLIC_READ_TIMEOUT_MS);
  return Number.isFinite(value) && value > 0 ? value : defaultPublicReadTimeoutMs;
}

const publicReadFetch: typeof fetch = async (input, init) => {
  const controller = new AbortController();
  const upstreamSignal = init?.signal ?? (input instanceof Request ? input.signal : undefined);
  const abortFromUpstream = () => controller.abort(upstreamSignal?.reason);
  if (upstreamSignal?.aborted) abortFromUpstream();
  else upstreamSignal?.addEventListener('abort', abortFromUpstream, { once: true });

  const timeout = setTimeout(
    () => controller.abort(new Error('Supabase public read timed out')),
    getPublicReadTimeoutMs(),
  );

  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
    upstreamSignal?.removeEventListener('abort', abortFromUpstream);
  }
};

export function getSupabasePublicRead() {
  if (cachedPublicReadClient) return cachedPublicReadClient;
  const url = getEnvVar('SUPABASE_URL');
  const serviceRoleKey = getEnvVar('SUPABASE_SERVICE_ROLE_KEY');
  cachedPublicReadClient = createClient<any>(url, serviceRoleKey, {
    auth: { persistSession: false },
    global: { fetch: publicReadFetch },
  });
  return cachedPublicReadClient;
}

export function getAvantApresBucket() {
  return import.meta.env.SUPABASE_AVANT_APRES_BUCKET ?? 'avant-apres';
}

export function getCmsMediaBucket() {
  return import.meta.env.SUPABASE_CMS_MEDIA_BUCKET ?? 'cms-media';
}

export function getBookingMediaBucket() {
  return import.meta.env.SUPABASE_BOOKING_MEDIA_BUCKET ?? 'booking-media';
}

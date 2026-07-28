import { createClient } from '@supabase/supabase-js';

let cachedClient: ReturnType<typeof createClient<any>> | null = null;

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

export function getAvantApresBucket() {
  return import.meta.env.SUPABASE_AVANT_APRES_BUCKET ?? 'avant-apres';
}

export function getCmsMediaBucket() {
  return import.meta.env.SUPABASE_CMS_MEDIA_BUCKET ?? 'cms-media';
}

export function getBookingMediaBucket() {
  return import.meta.env.SUPABASE_BOOKING_MEDIA_BUCKET ?? 'booking-media';
}

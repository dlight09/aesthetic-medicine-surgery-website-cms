/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_SERVICE_ROLE_KEY: string;
  readonly SUPABASE_AVANT_APRES_BUCKET?: string;
  readonly SUPABASE_CMS_MEDIA_BUCKET?: string;
  readonly SUPABASE_BOOKING_MEDIA_BUCKET?: string;
  readonly SUPABASE_PUBLIC_READ_TIMEOUT_MS?: string;
  readonly BLOG_PREVIEW_SERIES_2?: string;
  readonly VERCEL_ENV?: string;
  readonly CMS_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

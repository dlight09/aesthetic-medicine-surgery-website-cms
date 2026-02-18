/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_SERVICE_ROLE_KEY: string;
  readonly SUPABASE_AVANT_APRES_BUCKET?: string;
  readonly CMS_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

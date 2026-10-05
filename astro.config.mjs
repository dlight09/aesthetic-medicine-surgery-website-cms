import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:4321');

const redirectPaths = new Set([
  '/consultation/',
  '/dr-sirine-soussi-profil/',
  '/dr-sirine-soussi-profil-3/',
]);

export default defineConfig({
  site,
  output: 'server',
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return !pathname.startsWith('/cms/') && !redirectPaths.has(pathname);
      },
    }),
  ],
});

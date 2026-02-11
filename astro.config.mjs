import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'http://localhost:4321';

export default defineConfig({
  site,
  integrations: [tailwind(), sitemap()],
});

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        paper: 'rgb(var(--c-paper) / <alpha-value>)',
        sand: 'rgb(var(--c-sand) / <alpha-value>)',
        copper: 'rgb(var(--c-copper) / <alpha-value>)',
        'copper-deep': 'rgb(var(--c-copper-deep) / <alpha-value>)',
        mist: 'rgb(var(--c-mist) / <alpha-value>)'
      },
      fontFamily: {
        display: ['Andale Mono', 'AndaleMono', 'monospace'],
        body: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        soft: '0 14px 38px rgba(17, 24, 39, 0.08)',
        lift: '0 24px 60px rgba(17, 24, 39, 0.12)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  },
  plugins: []
};

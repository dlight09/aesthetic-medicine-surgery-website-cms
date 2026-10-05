# Dr Sirine Soussi Website and CMS

Astro website and Supabase-backed CMS for Dr Sirine Soussi. The public site covers the practice profile, interventions, medical content, appointment requests, and a consent-gated Avant/Apres gallery. The CMS manages interventions, blog posts, bookings, and gallery cases.

## Start Here

- `docs/next-session-handoff.md`: current worktree state, risks, decisions, and ordered next steps
- `docs/site-edits-checklist.md`: requested site changes and completion status
- `PRODUCT.md`: audience, product purpose, voice, and compliance principles
- `DESIGN.md`: current public design tokens and component rules
- `docs/agentic-workflow.md`: broader delivery and quality workflow

## Local Development

Requirements: Node.js and npm. Supabase credentials are needed for live CMS data.

```bash
npm ci
npm run dev -- --host 0.0.0.0
```

The local URL is normally `http://localhost:4321/`. Start from `.env.example` and keep real credentials only in ignored local environment files.

Public routes perform server-side Supabase reads with a bounded timeout and existing local or empty-state fallbacks. Set `SUPABASE_PUBLIC_READ_TIMEOUT_MS` to override the default 5-second limit; CMS writes, booking submissions, and uploads are not subject to this public-read timeout.

## Verification

```bash
npm run check
npm run build
bash scripts/verify_placeholders.sh
```

## Sources Of Truth

- Shared practice contact details: `src/lib/site.ts`
- Public design tokens: `src/styles/global.css` and `tailwind.config.mjs`
- Local intervention content: `src/content/interventions/`
- Supabase schema history: `supabase/migrations/`
- Runtime CMS access: `src/lib/cms/`

## Safety Rules

- Do not delete or rewrite existing Supabase content without explicit approval.
- Do not remove tracked clinical preview media until consent, retention, and replacement status are confirmed.
- Preserve existing paired Avant/Apres cases while the proposed one-image CMS flow is being decided.
- Do not publish placeholders, unsupported outcome claims, or guaranteed-result language.
- Keep generated intervention photography until the final visual pass, as requested.

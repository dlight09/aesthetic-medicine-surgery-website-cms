# Agentic Workflow (Codex + GPT-5.2 + GitOps)

This document defines an agentic workflow to produce a French medical website with:

- premium UX
- fast static performance
- strong SEO
- strict medical/compliance guardrails
- clean git history and PR-based delivery

It is tool-agnostic: you can run it manually or automate parts of it.

## Principles

- One source of truth for public content (no copy scattered across components).
- No medical promises: no guaranteed outcomes, no before/after without consent and disclaimers.
- Mobile-first conversion: persistent, simple CTAs (Call / WhatsApp).
- SEO is designed, not added later.
- Shipping is gated by checklists.

## Agents (roles)

Each agent has a narrow responsibility and produces a concrete artifact.

### Model Router (Codex vs GPT-5.2)

Responsibilities:

- Route tasks to the best model.
- Enforce guardrails (compliance text stays on GPT-5.2).

Default routing:

- Codex: implementation, refactors, tests, build fixes, file-level edits.
- GPT-5.2: information architecture, French medical copy, SEO strategy, compliance, UX critique.

Configuration lives in `agentic/router.json`.

### Content Strategist

- Define sitemap, navigation, and page objectives.
- Produce page-by-page section outlines.

Artifact:

- `docs/content-outline.md` (to be created when starting the site)

### FR Medical Copywriter

- Write French content per page and per intervention.
- Create FAQ blocks aligned with SEO and compliance.

Artifact:

- `content/` markdown files (to be created with the site scaffold)

### Compliance Guard (Medical)

- Validate claims, tone, before/after rules, consent language.
- Produce required disclaimers and legal page requirements.

Artifact:

- `docs/compliance-checklist.md` (to be created when starting the site)

### Visual / UX Designer

- Define visual direction (type, colors, spacing, components).
- Ensure mobile CTA behavior.

Artifact:

- `docs/design-system.md` (to be created when starting the site)

### SEO Specialist

- Define titles/meta/OG patterns.
- Define schema usage (FAQ, LocalBusiness/MedicalOrganization as appropriate).
- Plan internal linking.

Artifact:

- `docs/seo-pack.md` (to be created when starting the site)

### Build Engineer

- Implement the site (static-first), content collections, templates.
- Accessibility and performance baked in.

Artifact:

- code changes

### QA / Perf

- Run checks: links, responsive, Lighthouse, accessibility.
- Validate placeholder blocklists.

Artifact:

- `docs/qa-report.md` (optional)

### Git Connector (GitOps)

- Ensure the repo is connected to GitHub and has a clean PR flow.
- Provide branch and commit conventions.

Artifact:

- PR template, contribution rules, optional CI.

## Phases and Gates

### Phase 1: Discovery

Inputs required (even if placeholders temporarily):

- name (official spelling)
- phone (international format)
- WhatsApp number
- country/city and address
- office hours
- services list (interventions)

Gate:

- sitemap agreed
- CTA strategy agreed (Call + WhatsApp)

### Phase 2: Content Plan

Artifacts:

- page outlines
- intervention page template (sections)

Gate:

- compliance guard approves the template sections and disclaimers

### Phase 3: Visual Direction

Artifacts:

- design tokens (palette, type, spacing)
- component list (header/footer/hero/cards/faq)

Gate:

- mobile nav + sticky CTA behavior approved

### Phase 4: Build

Artifacts:

- site scaffold + layouts + content collections

Gate:

- SEO pack implemented (titles/meta/OG/sitemap)
- accessibility baseline met

### Phase 5: QA / Release

Gate checklist:

- no placeholder phone/address/hours remain (run `scripts/verify_placeholders.sh`)
- before/after page contains required disclaimers and consent policy
- all pages have unique titles and meta descriptions
- broken links = 0

## GitOps rules

- Work on feature branches.
- PRs must include:
  - what changed and why
  - QA steps
  - compliance notes (if medical copy)

See `.github/pull_request_template.md`.

## How to use the router

Route a task:

```bash
python3 scripts/model_router.py "write homepage hero copy" \
  --risk compliance \
  --type copy
```

Expected output: recommended model + short instructions.

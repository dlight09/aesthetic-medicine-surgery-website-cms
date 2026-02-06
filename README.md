# Aesthetic Medicine & Surgery Website CMS

This repository is intentionally set up to support an agentic, quality-first workflow for building a French medical website (Dr Sirine Soussi) with strong SEO, performance, and compliance guardrails.

## What lives where

- `docs/agentic-workflow.md`: the workflow (agents, phases, gates, checklists)
- `agentic/router.json`: model routing rules (Codex vs GPT-5.2)
- `scripts/model_router.py`: small helper to pick a model for a task
- `scripts/gitops_status.sh`: sanity checks for git + GitHub CLI
- `scripts/verify_placeholders.sh`: blocks shipping with placeholder phone/address
- `.github/`: PR template (and optional issue templates)

## Quick start (workflow)

1) Read `docs/agentic-workflow.md`.
2) Put project facts (phone, WhatsApp, address, legal details) into the content source of truth (to be added when the site scaffold exists).
3) Use `scripts/model_router.py` to route work to Codex (code) or GPT-5.2 (copy/SEO/compliance).
4) Before pushing/releasing, run `scripts/verify_placeholders.sh`.

## Notes

- The repo starts empty on purpose: we add the site scaffold only after content + compliance gates are defined.
- Do not publish with placeholders (phone/address/hours). The placeholder check is designed to fail CI once we add CI.

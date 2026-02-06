# Contributing

## Working agreement

- Use feature branches (no direct commits to `main`).
- Keep medical/compliance-sensitive copy conservative.
- Prefer a single source of truth for public content.

## Model routing

Use `scripts/model_router.py` to decide whether a task should be handled as code (Codex) or general (GPT-5.2).

Examples:

```bash
python3 scripts/model_router.py "Write FR homepage hero copy" --type copy --risk compliance
python3 scripts/model_router.py "Implement content collections" --type code --risk normal
```

## GitOps

- Use PRs.
- Fill in `.github/pull_request_template.md`.
- Run `scripts/verify_placeholders.sh` before release.

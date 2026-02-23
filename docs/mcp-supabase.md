# Supabase MCP

This repo uses Supabase for CMS data. If you use an MCP-capable AI client (Cursor, Claude, Windsurf, etc.), you can connect it to Supabase via the official Supabase MCP server.

## Recommended configuration

- Project-scoped: set `project_ref` so the assistant only sees this project.
- Read-only by default: set `read_only=true` to prevent mutations.
- Minimal tools: start with `features=database,docs,development`.

Example MCP server URL:

```
https://mcp.supabase.com/mcp?project_ref=<PROJECT_REF>&read_only=true&features=database,docs,development
```

`<PROJECT_REF>` is in Supabase Dashboard -> Project settings -> General -> Project ID.

## Cursor

This repo includes a ready-to-edit config file at `.cursor/mcp.json`.

1. The project id is already filled in. If you need to change it, edit the URLs.
2. Restart Cursor.

This repo defines two servers:

- `supabase_readonly`: safe default.
- `supabase_admin`: allows write tools like `apply_migration`.

## Allowing write actions (optional)

If you want the AI to apply migrations or edit Supabase resources, use the `supabase_admin` server (no `read_only=true`) and keep feature groups scoped.

Security notes:

- Prefer using a dev project/branch.
- Keep "confirm tool calls" enabled in your client.

## CMS media bucket

Intervention blocks support image upload via `POST /api/cms/media/upload-url`.

- Create a Supabase Storage bucket named `cms-media` (or set `SUPABASE_CMS_MEDIA_BUCKET`).
- Set the bucket to public if you want stable public URLs.

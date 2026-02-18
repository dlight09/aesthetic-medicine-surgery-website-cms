import type { APIContext } from 'astro';

export function isCmsAuthed(context: APIContext) {
  return context.cookies.get('cms_auth')?.value === 'true';
}

export function requireCmsAuth(context: APIContext) {
  if (!isCmsAuthed(context)) {
    return new Response('Unauthorized', { status: 401 });
  }
  return null;
}

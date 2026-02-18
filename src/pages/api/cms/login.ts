import type { APIRoute } from 'astro';

export const POST: APIRoute = async (context) => {
  const password = import.meta.env.CMS_PASSWORD;
  const body = await context.request.json().catch(() => ({}));
  const provided = typeof body?.password === 'string' ? body.password : '';

  if (!password || provided !== password) {
    return new Response('Unauthorized', { status: 401 });
  }

  const secure = context.url.protocol === 'https:';
  context.cookies.set('cms_auth', 'true', {
    httpOnly: true,
    sameSite: 'lax',
    secure,
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return new Response(null, { status: 204 });
};

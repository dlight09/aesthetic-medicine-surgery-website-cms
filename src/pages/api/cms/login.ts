import type { APIRoute } from 'astro';
import { createCmsSession } from '@/lib/cms/auth';

export const POST: APIRoute = async (context) => {
  const password = import.meta.env.CMS_PASSWORD;
  const body = await context.request.json().catch(() => ({}));
  const provided = typeof body?.password === 'string' ? body.password : '';

  if (!password || provided !== password) {
    return new Response('Unauthorized', { status: 401 });
  }

  const secure = context.url.protocol === 'https:';
  const session = createCmsSession();
  context.cookies.set('cms_auth', session.token, {
    httpOnly: true,
    sameSite: 'lax',
    secure,
    path: '/',
    maxAge: session.maxAge,
  });

  return new Response(null, { status: 204 });
};

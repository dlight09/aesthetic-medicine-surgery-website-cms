import type { APIRoute } from 'astro';
import { createCmsSession, verifyCmsPassword } from '@/lib/cms/auth';
import { getCmsActor } from '@/lib/cms/actor';

export const POST: APIRoute = async (context) => {
  const body = await context.request.json().catch(() => ({}));
  const provided = typeof body?.password === 'string' ? body.password : '';

  if (!verifyCmsPassword(provided)) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    await getCmsActor();
  } catch {
    return new Response('CMS actor configuration is unavailable', { status: 503 });
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

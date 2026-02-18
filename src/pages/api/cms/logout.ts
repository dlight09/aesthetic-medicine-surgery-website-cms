import type { APIRoute } from 'astro';

export const POST: APIRoute = async (context) => {
  const secure = context.url.protocol === 'https:';
  context.cookies.set('cms_auth', '', {
    httpOnly: true,
    sameSite: 'lax',
    secure,
    path: '/',
    maxAge: 0,
  });

  return new Response(null, { status: 204 });
};

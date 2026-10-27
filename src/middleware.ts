import { defineMiddleware } from 'astro:middleware';
import { isCmsAuthed } from '@/lib/cms/auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;
  const isCmsPage = pathname === '/cms' || pathname.startsWith('/cms/');
  const isCmsApi = pathname.startsWith('/api/cms/');
  const isLogin = pathname === '/cms/login' || pathname === '/cms/login/';

  if (isCmsPage && !isLogin && !isCmsAuthed(context)) {
    return context.redirect('/cms/login');
  }

  if (isCmsApi && context.request.method !== 'GET') {
    const origin = context.request.headers.get('origin');
    const fetchSite = context.request.headers.get('sec-fetch-site');
    if (origin !== context.url.origin || (fetchSite && fetchSite !== 'same-origin')) {
      return new Response('Forbidden', { status: 403 });
    }
  }

  const response = await next();
  if (isCmsPage || isCmsApi) {
    response.headers.set('Cache-Control', 'no-store');
  }
  return response;
});

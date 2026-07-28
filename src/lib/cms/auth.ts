import type { APIContext } from 'astro';
import { createHmac, timingSafeEqual } from 'node:crypto';

const sessionName = 'cms_auth';
const sessionMaxAgeSeconds = 60 * 60 * 24 * 7;

type CookieContext = Pick<APIContext, 'cookies'>;

function signSession(expiresAt: number, secret: string) {
  return createHmac('sha256', secret).update(`cms-session:${expiresAt}`).digest('base64url');
}

export function createCmsSession() {
  const secret = import.meta.env.CMS_PASSWORD;
  if (!secret) throw new Error('CMS_PASSWORD is required');

  const expiresAt = Math.floor(Date.now() / 1000) + sessionMaxAgeSeconds;
  return {
    token: `${expiresAt}.${signSession(expiresAt, secret)}`,
    maxAge: sessionMaxAgeSeconds,
  };
}

export function isCmsAuthed(context: CookieContext) {
  const secret = import.meta.env.CMS_PASSWORD;
  const token = context.cookies.get(sessionName)?.value;
  if (!secret || !token) return false;

  const [expiresAtRaw, signature] = token.split('.');
  const expiresAt = Number(expiresAtRaw);
  if (!Number.isSafeInteger(expiresAt) || expiresAt <= Math.floor(Date.now() / 1000) || !signature) return false;

  const expected = signSession(expiresAt, secret);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  return signatureBuffer.length === expectedBuffer.length && timingSafeEqual(signatureBuffer, expectedBuffer);
}

export function requireCmsAuth(context: APIContext) {
  if (!isCmsAuthed(context)) {
    return new Response('Unauthorized', { status: 401 });
  }
  return null;
}

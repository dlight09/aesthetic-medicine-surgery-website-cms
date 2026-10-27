import type { APIRoute } from 'astro';
import { requireCmsAuth } from '@/lib/cms/auth';
import { updateBookingStatus, type BookingStatus } from '@/lib/cms/bookings';

const statuses: BookingStatus[] = ['nouveau', 'contacte', 'planifie', 'cloture'];

export const PUT: APIRoute = async (context) => {
  const auth = requireCmsAuth(context);
  if (auth) return auth;

  const id = context.params.id;
  if (!id) return new Response('Missing id', { status: 400 });
  const body = await context.request.json().catch(() => null);
  const status = body?.status as BookingStatus;
  const expectedUpdatedAt =
    typeof body?.expected_updated_at === 'string' ? body.expected_updated_at : '';
  if (!statuses.includes(status) || !expectedUpdatedAt) {
    return new Response('Invalid payload', { status: 400 });
  }

  const updated = await updateBookingStatus(id, status, expectedUpdatedAt);
  return new Response(JSON.stringify(updated), {
    headers: { 'content-type': 'application/json' },
  });
};

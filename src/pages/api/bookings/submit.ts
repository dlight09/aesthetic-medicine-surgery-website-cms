import type { APIRoute } from 'astro';
import { randomUUID } from 'node:crypto';
import { getBookingMediaBucket, getSupabaseAdmin } from '@/lib/cms/supabase';

const allowedTypes = new Map([
  ['image/jpeg', 'jpg'],
  ['image/png', 'png'],
  ['image/webp', 'webp'],
]);
const maxPhotos = 5;
const maxPhotoSize = 3 * 1024 * 1024;

type Photo = { name: string; type: string; size: number };

function readText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  const fullName = readText(body?.fullName, 120);
  const email = readText(body?.email, 254).toLowerCase();
  const phone = readText(body?.phone, 40);
  const message = readText(body?.message, 3000);
  const consent = body?.consent === true;
  const website = readText(body?.website, 200);
  const photos = Array.isArray(body?.photos) ? body.photos : [];

  if (website) return new Response(null, { status: 204 });
  if (!fullName || !/^\S+@\S+\.\S+$/.test(email) || !phone || !message || !consent) {
    return new Response('Veuillez renseigner tous les champs obligatoires et accepter le traitement de vos informations.', { status: 400 });
  }
  if (!photos.length) return new Response('Ajoutez au moins une photo à votre demande.', { status: 400 });
  if (photos.length > maxPhotos) return new Response(`Vous pouvez joindre jusqu'à ${maxPhotos} photos.`, { status: 400 });

  const validPhotos = photos.every((photo: Photo) =>
    photo && typeof photo.name === 'string' && allowedTypes.has(photo.type) &&
    typeof photo.size === 'number' && photo.size > 0 && photo.size <= maxPhotoSize,
  );
  if (!validPhotos) return new Response('Les photos doivent être au format JPG, PNG ou WebP et ne pas dépasser 3 Mo.', { status: 400 });

  const supabase = getSupabaseAdmin();
  const { data: booking, error: bookingError } = await supabase
    .from('booking_requests')
    .insert({ full_name: fullName, email, phone, message, consent_at: new Date().toISOString() })
    .select('id')
    .single();

  if (bookingError || !booking) return new Response('La demande n’a pas pu être enregistrée.', { status: 500 });

  const uploads = await Promise.all(photos.map(async (photo: Photo) => {
    const path = `requests/${booking.id}/${randomUUID()}.${allowedTypes.get(photo.type)}`;
    const { data, error } = await supabase.storage.from(getBookingMediaBucket()).createSignedUploadUrl(path, { upsert: false });
    if (error || !data?.signedUrl) throw new Error('Upload URL error');
    return { path, signedUrl: data.signedUrl };
  })).catch(() => null);

  if (!uploads) {
    await supabase.from('booking_requests').delete().eq('id', booking.id);
    return new Response('Les liens d’envoi des photos n’ont pas pu être créés.', { status: 500 });
  }

  const paths = uploads.map((upload) => upload.path);
  if (paths.length) {
    const { error } = await supabase.from('booking_requests').update({ photo_paths: paths }).eq('id', booking.id);
    if (error) return new Response('La demande n’a pas pu être finalisée.', { status: 500 });
  }

  return new Response(JSON.stringify({ uploads }), {
    status: 201,
    headers: { 'content-type': 'application/json' },
  });
};

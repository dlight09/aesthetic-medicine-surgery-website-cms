import type { APIRoute } from 'astro';
import { randomUUID } from 'node:crypto';
import { getBookingMediaBucket, getSupabaseAdmin } from '@/lib/cms/supabase';
import { interventionCategoryKeys } from '@/lib/interventions';

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

function readOptionalNumber(value: unknown, max: number) {
  if (value === null || value === undefined || value === '') return null;
  const number = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(number) && number > 0 && number <= max ? number : NaN;
}

function readOptionalDate(value: unknown) {
  const date = readText(value, 10);
  if (!date) return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  if (!match) return undefined;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return parsed.getUTCFullYear() === year && parsed.getUTCMonth() === month - 1 && parsed.getUTCDate() === day ? date : undefined;
}

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  const fullName = readText(body?.fullName, 120);
  const email = readText(body?.email, 254).toLowerCase();
  const phone = readText(body?.phone, 40);
  const message = readText(body?.message, 3000);
  const age = readOptionalNumber(body?.age, 120);
  const weightKg = readOptionalNumber(body?.weightKg, 500);
  const heightCm = readOptionalNumber(body?.heightCm, 300);
  const medicalHistory = readText(body?.medicalHistory, 3000);
  const dailyMedications = readText(body?.dailyMedications, 3000);
  const smokingStatus = readText(body?.smokingStatus, 3);
  const interventionCategory = readText(body?.interventionCategory, 80);
  const desiredDate = readOptionalDate(body?.desiredDate);
  const consent = body?.consent === true;
  const website = readText(body?.website, 200);
  const photos = Array.isArray(body?.photos) ? body.photos : [];

  if (website) return new Response(null, { status: 204 });
  if (
    !fullName ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    !phone ||
    !message ||
    age === null ||
    weightKg === null ||
    heightCm === null ||
    !medicalHistory ||
    !dailyMedications ||
    !smokingStatus ||
    !interventionCategory ||
    !consent
  ) {
    return new Response('Veuillez renseigner tous les champs obligatoires et accepter le traitement de vos informations.', { status: 400 });
  }
  if (!interventionCategoryKeys.includes(interventionCategory as (typeof interventionCategoryKeys)[number])) {
    return new Response('Sélectionnez un type de chirurgie valide.', { status: 400 });
  }
  if (desiredDate === undefined) return new Response('La date souhaitée n’est pas valide.', { status: 400 });
  if (Number.isNaN(age) || Number.isNaN(weightKg) || Number.isNaN(heightCm)) {
    return new Response('L’âge, le poids et la taille doivent être des nombres positifs valides.', { status: 400 });
  }
  if (!['yes', 'no'].includes(smokingStatus)) {
    return new Response('Les informations médicales sélectionnées ne sont pas valides.', { status: 400 });
  }
  if (photos.length > maxPhotos) return new Response(`Vous pouvez joindre jusqu'à ${maxPhotos} photos.`, { status: 400 });

  const validPhotos = photos.every((photo: Photo) =>
    photo && typeof photo.name === 'string' && allowedTypes.has(photo.type) &&
    typeof photo.size === 'number' && photo.size > 0 && photo.size <= maxPhotoSize,
  );
  if (!validPhotos) return new Response('Les photos doivent être au format JPG, PNG ou WebP et ne pas dépasser 3 Mo.', { status: 400 });

  if (import.meta.env.VERCEL_ENV === 'preview' || import.meta.env.BLOG_PREVIEW_SERIES_2 === 'true') {
    return new Response(JSON.stringify({ uploads: [], preview: true }), {
      status: 201,
      headers: { 'content-type': 'application/json' },
    });
  }

  const supabase = getSupabaseAdmin();
  const { data: booking, error: bookingError } = await supabase
    .from('booking_requests')
    .insert({
      full_name: fullName,
      email,
      phone,
      message,
      age,
      weight_kg: weightKg,
      height_cm: heightCm,
      medical_history: medicalHistory,
      daily_medications: dailyMedications,
      smoking_status: smokingStatus,
      intervention_category: interventionCategory,
      desired_date: desiredDate,
      consent_at: new Date().toISOString(),
    })
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

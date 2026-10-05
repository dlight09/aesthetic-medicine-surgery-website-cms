import { getBookingMediaBucket, getSupabaseAdmin } from '@/lib/cms/supabase';

export type BookingStatus = 'nouveau' | 'contacte' | 'planifie' | 'cloture';

export type BookingRequest = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  message: string;
  age: number | null;
  weight_kg: number | null;
  height_cm: number | null;
  has_medical_history: boolean | null;
  medical_history: string | null;
  previous_surgeries: string | null;
  daily_medications: string | null;
  smoking_status: 'yes' | 'no' | null;
  intervention_category: string | null;
  desired_date: string | null;
  photo_paths: string[];
  consent_at: string;
  status: BookingStatus;
  created_at: string;
};

export async function listBookingRequests() {
  const { data, error } = await getSupabaseAdmin()
    .from('booking_requests')
    .select('id, full_name, email, phone, message, age, weight_kg, height_cm, has_medical_history, medical_history, previous_surgeries, daily_medications, smoking_status, intervention_category, desired_date, photo_paths, consent_at, status, created_at')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data ?? []) as BookingRequest[];
}

export async function getBookingRequest(id: string) {
  const { data, error } = await getSupabaseAdmin()
    .from('booking_requests')
    .select('id, full_name, email, phone, message, age, weight_kg, height_cm, has_medical_history, medical_history, previous_surgeries, daily_medications, smoking_status, intervention_category, desired_date, photo_paths, consent_at, status, created_at')
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  return data as BookingRequest | null;
}

export async function getBookingPhotoUrls(paths: string[]) {
  if (!paths.length) return [];
  const { data, error } = await getSupabaseAdmin()
    .storage
    .from(getBookingMediaBucket())
    .createSignedUrls(paths, 60 * 15);

  if (error) throw error;
  return (data ?? []).map((item) => item.signedUrl).filter(Boolean);
}

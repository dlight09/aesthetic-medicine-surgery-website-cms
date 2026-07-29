import { createClient } from '@supabase/supabase-js';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

const sourceRoot = path.resolve('public/images/beforeandafter');
const bucket = process.env.SUPABASE_AVANT_APRES_BUCKET ?? 'avant-apres';
const consentDate = '2026-07-29';
const shouldApply = process.argv.includes('--apply');
const mediaTypes = new Map([
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.png', 'image/png'],
  ['.webp', 'image/webp'],
]);

const samples = [
  { source: 'abdominoplastie/cas 1', category: 'silhouette', slug: 'abdominoplastie' },
  { source: 'Lifting visage/cas 1', category: 'visage', slug: 'lifting-cervico-facial' },
  { source: 'Rhinoplastie/cas 1', category: 'visage', slug: 'rhinoplastie' },
  { source: 'reduction mammaire/cas 1', category: 'seins', slug: 'reduction-mammaire' },
  { source: 'lip lift/cas 1', category: 'visage', slug: 'lip-lift' },
  { source: 'Protheses mammaires/cas 1', category: 'seins', slug: 'augmentation-mammaire-par-protheses' },
];

function sortNaturally(items) {
  return [...items].sort((a, b) => a.localeCompare(b, 'fr', { numeric: true, sensitivity: 'base' }));
}

async function sampleImages(source) {
  const folder = path.join(sourceRoot, source);
  return sortNaturally(await readdir(folder)).filter((file) => mediaTypes.has(path.extname(file).toLowerCase())).map((file) => path.join(folder, file));
}

async function removeSample(supabase, internalRef) {
  const { data, error } = await supabase.from('avant_apres_cases').select('id, before_path, after_path').eq('internal_ref', internalRef);
  if (error) throw error;
  for (const existing of data ?? []) {
    const { data: mediaSets, error: mediaError } = await supabase.from('avant_apres_case_media_sets').select('before_path, after_path').eq('case_id', existing.id);
    if (mediaError) throw mediaError;
    const paths = [...new Set([existing.before_path, existing.after_path, ...(mediaSets ?? []).flatMap((set) => [set.before_path, set.after_path])].filter(Boolean))];
    const { error: deleteError } = await supabase.from('avant_apres_cases').delete().eq('id', existing.id);
    if (deleteError) throw deleteError;
    if (paths.length) {
      const { error: storageError } = await supabase.storage.from(bucket).remove(paths);
      if (storageError) throw storageError;
    }
  }
}

async function nextCaseNumber(supabase, category, slug) {
  const { data, error } = await supabase.from('avant_apres_cases').select('case_number').eq('intervention_category', category).eq('intervention_slug', slug);
  if (error) throw error;
  return (data ?? []).reduce((highest, item) => Math.max(highest, item.case_number ?? 0), 0) + 1;
}

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.');
const supabase = createClient(url, key, { auth: { persistSession: false } });

const prepared = await Promise.all(samples.map(async (sample) => ({ ...sample, images: await sampleImages(sample.source) })));
const { data: interventions, error: interventionError } = await supabase.from('interventions').select('category, slug, title');
if (interventionError) throw interventionError;
for (const sample of prepared) {
  sample.intervention = (interventions ?? []).find((item) => item.category === sample.category && item.slug === sample.slug);
  if (!sample.intervention) throw new Error(`Intervention CMS introuvable: ${sample.category}/${sample.slug}`);
  if (!sample.images.length) throw new Error(`Aucune image importable: ${sample.source}`);
}

console.table(prepared.map((sample) => ({ source: sample.source, intervention: sample.intervention.title, views: sample.images.length, cover: path.basename(sample.images[0]) })));
if (!shouldApply) {
  console.log('Dry run only. Run with --apply to import or refresh these six samples.');
  process.exit(0);
}

for (const sample of prepared) {
  const internalRef = `SAMPLE-${sample.source}`;
  await removeSample(supabase, internalRef);
  const caseId = randomUUID();
  const basePath = `samples/${caseId}`;
  const mediaSets = [];
  for (const [index, sourceImage] of sample.images.entries()) {
    const ext = path.extname(sourceImage).toLowerCase();
    const objectPath = `${basePath}/view-${index + 1}${ext}`;
    const { error: uploadError } = await supabase.storage.from(bucket).upload(objectPath, await readFile(sourceImage), {
      contentType: mediaTypes.get(ext),
      upsert: false,
    });
    if (uploadError) throw uploadError;
    mediaSets.push({
      case_id: caseId,
      set_order: index + 1,
      label: index === 0 ? 'Vue principale' : `Vue ${index + 1}`,
      view_key: 'comparison',
      before_path: objectPath,
      after_path: objectPath,
      is_cover: index === 0,
    });
  }
  const cover = mediaSets[0];
  const caseNumber = await nextCaseNumber(supabase, sample.category, sample.slug);
  const { error: caseError } = await supabase.from('avant_apres_cases').insert({
    id: caseId,
    title: sample.intervention.title,
    intervention_category: sample.category,
    intervention_slug: sample.slug,
    case_number: caseNumber,
    status: 'publie',
    consent: true,
    consent_date: consentDate,
    internal_ref: internalRef,
    before_path: cover.before_path,
    after_path: cover.after_path,
  });
  if (caseError) throw caseError;
  const { error: mediaError } = await supabase.from('avant_apres_case_media_sets').insert(mediaSets);
  if (mediaError) throw mediaError;
  const { error: procedureError } = await supabase.from('avant_apres_case_procedures').insert({
    case_id: caseId,
    procedure_order: 1,
    procedure_family_key: sample.slug,
    intervention_category: sample.category,
    intervention_slug: sample.slug,
    label: sample.intervention.title,
    is_primary: true,
  });
  if (procedureError) throw procedureError;
  const { error: tagError } = await supabase.from('avant_apres_case_tags').insert([
    { case_id: caseId, tag_key: 'sample-import' },
    { case_id: caseId, tag_key: 'a-verifier' },
  ]);
  if (tagError) throw tagError;
}

console.log('Imported six sample cases. All cover choices remain tagged a-verifier in the CMS.');

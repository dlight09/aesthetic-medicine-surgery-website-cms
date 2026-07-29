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
const videoExtensions = new Set(['.mov', '.mp4']);
const sampleSources = new Set([
  'abdominoplastie/cas 1',
  'Lifting visage/cas 1',
  'Rhinoplastie/cas 1',
  'reduction mammaire/cas 1',
  'lip lift/cas 1',
  'Protheses mammaires/cas 1',
]);

const sourceMappings = new Map([
  ['abdominoplastie', { category: 'silhouette', slug: 'abdominoplastie' }],
  ['blepharoplastie', { category: 'visage', slug: 'blepharoplastie' }],
  ['body lift', { category: 'silhouette', slug: 'body-lift' }],
  ['gynecomastie', { category: 'seins', slug: 'gynecomastie' }],
  ['lifting prothese seins', { category: 'seins', slug: 'lifting-mammaire' }],
  ['lifting visage', { category: 'visage', slug: 'lifting-cervico-facial' }],
  ['lip lift', { category: 'visage', slug: 'lip-lift' }],
  ['lipofilling', { category: 'silhouette', slug: 'lipofilling-des-fesses' }],
  ['lipofilling visage', { category: 'visage', slug: 'lipofilling-du-visage' }],
  ['liposuccion', { category: 'silhouette', slug: 'lipoaspiration' }],
  ['liposuccion double menton', { category: 'visage', slug: 'lipoaspiration-du-cou' }],
  ['mommy makeover', { category: 'silhouette', slug: 'abdominoplastie' }],
  ['protheses mammaires', { category: 'seins', slug: 'augmentation-mammaire-par-protheses' }],
  ['reduction mammaire', { category: 'seins', slug: 'reduction-mammaire' }],
  ['rhinoplastie', { category: 'visage', slug: 'rhinoplastie' }],
]);

function sortNaturally(items) {
  return [...items].sort((a, b) => a.localeCompare(b, 'fr', { numeric: true, sensitivity: 'base' }));
}

function sourceKey(folder) {
  return path.relative(sourceRoot, folder).split(path.sep).join('/');
}

function mappingFor(source) {
  if (source.includes('/acide hyaluronique/')) {
    return { category: 'medecine-esthetique', slug: 'injection-acide-hyaluronique' };
  }
  return sourceMappings.get(source.split('/')[0].toLowerCase()) ?? null;
}

async function listCaseFolders(directory = sourceRoot) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile());
  const childFolders = entries.filter((entry) => entry.isDirectory());
  const nested = await Promise.all(childFolders.map((entry) => listCaseFolders(path.join(directory, entry.name))));
  return files.length ? [directory, ...nested.flat()] : nested.flat();
}

async function loadCases() {
  const folders = await listCaseFolders();
  return Promise.all(
    folders.map(async (folder) => {
      const source = sourceKey(folder);
      const files = sortNaturally(await readdir(folder)).map((name) => path.join(folder, name));
      return {
        source,
        images: files.filter((file) => mediaTypes.has(path.extname(file).toLowerCase())),
        videos: files.filter((file) => videoExtensions.has(path.extname(file).toLowerCase())),
        mapping: mappingFor(source),
      };
    }),
  );
}

async function nextCaseNumber(supabase, category, slug) {
  const { data, error } = await supabase
    .from('avant_apres_cases')
    .select('case_number')
    .eq('intervention_category', category)
    .eq('intervention_slug', slug);
  if (error) throw error;
  return (data ?? []).reduce((highest, item) => Math.max(highest, item.case_number ?? 0), 0) + 1;
}

async function importCase(supabase, item, intervention) {
  const internalRef = `IMPORT-${item.source}`;
  const { data: existing, error: existingError } = await supabase
    .from('avant_apres_cases')
    .select('id')
    .eq('internal_ref', internalRef)
    .maybeSingle();
  if (existingError) throw existingError;
  if (existing) return 'skipped';

  const caseId = randomUUID();
  const basePath = `cases/${caseId}`;
  const uploadedPaths = [];
  try {
    const mediaSets = [];
    for (const [index, sourceImage] of item.images.entries()) {
      const extension = path.extname(sourceImage).toLowerCase();
      const objectPath = `${basePath}/view-${index + 1}${extension}`;
      const { error: uploadError } = await supabase.storage.from(bucket).upload(objectPath, await readFile(sourceImage), {
        contentType: mediaTypes.get(extension),
        upsert: false,
      });
      if (uploadError) throw uploadError;
      uploadedPaths.push(objectPath);
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
    const caseNumber = await nextCaseNumber(supabase, item.mapping.category, item.mapping.slug);
    const { error: caseError } = await supabase.from('avant_apres_cases').insert({
      id: caseId,
      title: intervention.title,
      intervention_category: item.mapping.category,
      intervention_slug: item.mapping.slug,
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
      intervention_category: item.mapping.category,
      intervention_slug: item.mapping.slug,
      label: intervention.title,
      is_primary: true,
    });
    if (procedureError) throw procedureError;
    const tags = ['bulk-import', 'a-verifier'];
    if (item.videos.length) tags.push('video-non-importee');
    const { error: tagError } = await supabase
      .from('avant_apres_case_tags')
      .insert(tags.map((tag_key) => ({ case_id: caseId, tag_key })));
    if (tagError) throw tagError;
    return 'imported';
  } catch (error) {
    if (uploadedPaths.length) await supabase.storage.from(bucket).remove(uploadedPaths);
    throw error;
  }
}

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.');
const supabase = createClient(url, key, { auth: { persistSession: false } });
const allCases = await loadCases();
const importableCases = allCases.filter((item) => !sampleSources.has(item.source) && item.images.length);
const videoOnlyCases = allCases.filter((item) => !item.images.length && item.videos.length);
const unmappedCases = importableCases.filter((item) => !item.mapping);

const { data: interventions, error: interventionError } = await supabase
  .from('interventions')
  .select('category, slug, title');
if (interventionError) throw interventionError;
const interventionByRef = new Map((interventions ?? []).map((item) => [`${item.category}/${item.slug}`, item]));
const missingInterventions = importableCases.filter(
  (item) => item.mapping && !interventionByRef.has(`${item.mapping.category}/${item.mapping.slug}`),
);

console.table(importableCases.map((item) => ({
  source: item.source,
  intervention: item.mapping ? `${item.mapping.category}/${item.mapping.slug}` : 'NON MAPPÉ',
  images: item.images.length,
  videos: item.videos.length,
})));
console.log(JSON.stringify({
  existingSamples: sampleSources.size,
  remainingImageCases: importableCases.length,
  videoOnlyCases: videoOnlyCases.map((item) => item.source),
  unmappedCases: unmappedCases.map((item) => item.source),
  missingInterventions: missingInterventions.map((item) => item.source),
}, null, 2));

if (unmappedCases.length || missingInterventions.length) {
  throw new Error('Resolve the listed mappings before importing.');
}
if (!shouldApply) {
  console.log('Dry run only. Run with --apply to import the remaining image-backed cases.');
  process.exit(0);
}

let imported = 0;
let skipped = 0;
for (const item of importableCases) {
  const intervention = interventionByRef.get(`${item.mapping.category}/${item.mapping.slug}`);
  const outcome = await importCase(supabase, item, intervention);
  if (outcome === 'imported') imported += 1;
  else skipped += 1;
}
console.log(`Imported ${imported} cases and skipped ${skipped} already-imported cases.`);

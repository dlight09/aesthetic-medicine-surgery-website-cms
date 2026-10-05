import { createClient } from '@supabase/supabase-js';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

const sourceRoot = path.resolve('public/preview/avant-apres/curated');
const bucket = process.env.SUPABASE_AVANT_APRES_BUCKET ?? 'avant-apres';
const actorId = process.env.CMS_ACTOR_ID ?? 'cbfce7db-da9d-4159-ad0e-cb3e8fe9fc43';
const shouldApply = process.argv.includes('--apply');
const mappings = new Map([
  ['abdo-c01', { category: 'silhouette', slug: 'abdominoplastie' }],
  ['abdo-c02', { category: 'silhouette', slug: 'abdominoplastie' }],
  ['breast-c01', { category: 'seins', slug: 'reduction-mammaire' }],
  ['rhino-c02', { category: 'visage', slug: 'rhinoplastie' }],
  ['male-c01', { category: 'seins', slug: 'gynecomastie' }],
]);

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.');
const supabase = createClient(url, key, { auth: { persistSession: false } });

const manifest = JSON.parse(await readFile(path.join(sourceRoot, 'manifest.json'), 'utf8'));
const { data: interventions, error: interventionError } = await supabase
  .from('interventions')
  .select('category, slug, title');
if (interventionError) throw interventionError;
const interventionByRef = new Map(
  (interventions ?? []).map((item) => [`${item.category}/${item.slug}`, item]),
);

const prepared = await Promise.all(
  manifest.map(async (item) => {
    const mapping = mappings.get(item.id);
    if (!mapping) throw new Error(`No intervention mapping for ${item.id}`);
    const intervention = interventionByRef.get(`${mapping.category}/${mapping.slug}`);
    if (!intervention) throw new Error(`Intervention not found: ${mapping.category}/${mapping.slug}`);
    const images = [item.before, item.after].map((source) =>
      path.join('public', source.replace(/^\//, '').replace(/^preview\//, 'preview/')),
    );
    await Promise.all(images.map((image) => readFile(image)));
    return { ...item, ...mapping, intervention, images, internalRef: `CURATED-${item.id}` };
  }),
);

const { data: existingCases, error: existingError } = await supabase
  .from('avant_apres_cases')
  .select('id, internal_ref')
  .in('internal_ref', prepared.map((item) => item.internalRef));
if (existingError) throw existingError;
const existingRefs = new Set((existingCases ?? []).map((item) => item.internal_ref));

console.table(
  prepared.map((item) => ({
    source: item.id,
    intervention: `${item.category}/${item.slug}`,
    views: item.images.length,
    status: existingRefs.has(item.internalRef) ? 'already imported' : 'ready',
  })),
);

if (!shouldApply) {
  console.log('Dry run only. Run with --apply to publish the ready cases.');
  process.exit(0);
}

async function nextCaseNumber(category, slug) {
  const { data, error } = await supabase
    .from('avant_apres_cases')
    .select('case_number')
    .eq('intervention_category', category)
    .eq('intervention_slug', slug);
  if (error) throw error;
  return (data ?? []).reduce((highest, item) => Math.max(highest, item.case_number ?? 0), 0) + 1;
}

let imported = 0;
let skipped = 0;
for (const item of prepared) {
  if (existingRefs.has(item.internalRef)) {
    skipped += 1;
    continue;
  }

  const caseId = randomUUID();
  const basePath = `cases/${caseId}`;
  const uploadedPaths = [];
  let caseCreated = false;
  try {
    const mediaSets = [];
    for (const [index, sourceImage] of item.images.entries()) {
      const objectPath = `${basePath}/view-${index + 1}.jpg`;
      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(objectPath, await readFile(sourceImage), {
          contentType: 'image/jpeg',
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
        result_delay_label: item.result_delay_label ?? null,
        is_cover: index === 0,
      });
    }

    const cover = mediaSets[0];
    const caseNumber = await nextCaseNumber(item.category, item.slug);
    const { error: caseError } = await supabase.from('avant_apres_cases').insert({
      id: caseId,
      title: item.intervention.title,
      description: item.title,
      intervention_category: item.category,
      intervention_slug: item.slug,
      case_number: caseNumber,
      status: 'publie',
      consent: true,
      consent_date: null,
      internal_ref: item.internalRef,
      before_path: cover.before_path,
      after_path: cover.after_path,
      created_by_actor_id: actorId,
      updated_by_actor_id: actorId,
    });
    if (caseError) throw caseError;
    caseCreated = true;

    const { error: mediaError } = await supabase
      .from('avant_apres_case_media_sets')
      .insert(mediaSets);
    if (mediaError) throw mediaError;
    const { error: procedureError } = await supabase
      .from('avant_apres_case_procedures')
      .insert({
        case_id: caseId,
        procedure_order: 1,
        procedure_family_key: item.family,
        intervention_category: item.category,
        intervention_slug: item.slug,
        label: item.intervention.title,
        is_primary: true,
      });
    if (procedureError) throw procedureError;
    const { error: tagError } = await supabase
      .from('avant_apres_case_tags')
      .insert({ case_id: caseId, tag_key: 'curated-import' });
    if (tagError) throw tagError;
    imported += 1;
  } catch (error) {
    if (caseCreated) await supabase.from('avant_apres_cases').delete().eq('id', caseId);
    if (uploadedPaths.length) await supabase.storage.from(bucket).remove(uploadedPaths);
    throw error;
  }
}

console.log(`Published ${imported} curated cases and skipped ${skipped} existing cases.`);

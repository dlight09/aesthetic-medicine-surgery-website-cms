import type { AvantApresCaseView } from './avantApres';

type PreviewSeed = {
  id: string;
  family: string;
  title: string;
  before: string;
  after: string;
  result_delay_label: string;
  intervention_category: string;
  case_number: number;
};

const previewSeeds: PreviewSeed[] = [
  {
    id: 'preview-abdo-c01',
    family: 'abdominoplastie',
    title: 'Abdominoplastie avec cure de diastasis',
    before: '/preview/avant-apres/curated/abdo-c01/before.jpg',
    after: '/preview/avant-apres/curated/abdo-c01/after.jpg',
    result_delay_label: '3 mois',
    intervention_category: 'silhouette',
    case_number: 1,
  },
  {
    id: 'preview-abdo-c02',
    family: 'abdominoplastie',
    title: 'Abdominoplastie avec liposuccion associee',
    before: '/preview/avant-apres/curated/abdo-c02/before.jpg',
    after: '/preview/avant-apres/curated/abdo-c02/after.jpg',
    result_delay_label: '4 mois',
    intervention_category: 'silhouette',
    case_number: 2,
  },
  {
    id: 'preview-abdo-c03',
    family: 'abdominoplastie',
    title: 'Abdominoplastie post-grossesse',
    before: '/preview/avant-apres/curated/abdo-c03/before.jpg',
    after: '/preview/avant-apres/curated/abdo-c03/after.jpg',
    result_delay_label: '3 mois',
    intervention_category: 'silhouette',
    case_number: 3,
  },
  {
    id: 'preview-breast-c01',
    family: 'chirurgie-mammaire',
    title: 'Reduction mammaire',
    before: '/preview/avant-apres/curated/breast-c01/before.jpg',
    after: '/preview/avant-apres/curated/breast-c01/after.jpg',
    result_delay_label: '3 mois',
    intervention_category: 'seins',
    case_number: 1,
  },
  {
    id: 'preview-breast-c02',
    family: 'chirurgie-mammaire',
    title: 'Augmentation mammaire',
    before: '/preview/avant-apres/curated/breast-c02/before.jpg',
    after: '/preview/avant-apres/curated/breast-c02/after.jpg',
    result_delay_label: '3 mois',
    intervention_category: 'seins',
    case_number: 2,
  },
  {
    id: 'preview-face-c01',
    family: 'lifting-visage',
    title: 'Lifting cervico-facial',
    before: '/preview/avant-apres/curated/face-c01/before.jpg',
    after: '/preview/avant-apres/curated/face-c01/after.jpg',
    result_delay_label: '6 mois',
    intervention_category: 'visage',
    case_number: 1,
  },
  {
    id: 'preview-face-c02',
    family: 'lifting-visage',
    title: 'Lifting visage et cou',
    before: '/preview/avant-apres/curated/face-c02/before.jpg',
    after: '/preview/avant-apres/curated/face-c02/after.jpg',
    result_delay_label: '7 mois',
    intervention_category: 'visage',
    case_number: 2,
  },
  {
    id: 'preview-rhino-c01',
    family: 'rhinoplastie',
    title: 'Rhinoplastie primaire',
    before: '/preview/avant-apres/curated/rhino-c01/before.jpg',
    after: '/preview/avant-apres/curated/rhino-c01/after.jpg',
    result_delay_label: '10 jours',
    intervention_category: 'visage',
    case_number: 1,
  },
  {
    id: 'preview-rhino-c02',
    family: 'rhinoplastie',
    title: 'Septorhinoplastie',
    before: '/preview/avant-apres/curated/rhino-c02/before.jpg',
    after: '/preview/avant-apres/curated/rhino-c02/after.jpg',
    result_delay_label: '3 mois',
    intervention_category: 'visage',
    case_number: 2,
  },
  {
    id: 'preview-male-c01',
    family: 'chirurgie-homme',
    title: 'Gynecomastie et liposuccion',
    before: '/preview/avant-apres/curated/male-c01/before.jpg',
    after: '/preview/avant-apres/curated/male-c01/after.jpg',
    result_delay_label: '4 semaines',
    intervention_category: 'silhouette',
    case_number: 1,
  },
];

export function getPreviewAvantApresCases(): AvantApresCaseView[] {
  return previewSeeds.map((seed) => ({
    id: seed.id,
    title: seed.title,
    description: 'Extrait du portfolio PDF pour previsualisation uniquement.',
    intervention_category: seed.intervention_category,
    intervention_slug: null,
    case_number: seed.case_number,
    status: 'publie',
    consent: true,
    consent_date: null,
    internal_ref: `PDF-${seed.id}`,
    before_path: seed.before,
    after_path: seed.after,
    family_key: seed.family,
    summary: seed.title,
    clinical_context: 'Contenu de previsualisation issu du CV PDF. Remplacement HQ prevu.',
    result_overview: null,
    featured: false,
    created_at: new Date('2026-04-11T00:00:00.000Z').toISOString(),
    updated_at: new Date('2026-04-11T00:00:00.000Z').toISOString(),
    beforeUrl: seed.before,
    afterUrl: seed.after,
    patient_context: {
      case_id: seed.id,
      patient_sex: null,
      patient_age: null,
      weight_kg: null,
      smoking_status: 'unknown',
      pregnancies_count: null,
      post_bariatric: null,
      revision_case: null,
      prior_surgery: null,
      history_notes: null,
      created_at: new Date('2026-04-11T00:00:00.000Z').toISOString(),
      updated_at: new Date('2026-04-11T00:00:00.000Z').toISOString(),
    },
    procedures: [
      {
        id: `${seed.id}-proc-01`,
        case_id: seed.id,
        procedure_order: 1,
        procedure_family_key: seed.family,
        intervention_category: seed.intervention_category,
        intervention_slug: null,
        label: seed.title,
        technique_notes: null,
        is_primary: true,
        created_at: new Date('2026-04-11T00:00:00.000Z').toISOString(),
        updated_at: new Date('2026-04-11T00:00:00.000Z').toISOString(),
      },
    ],
    media_sets: [
      {
        id: `${seed.id}-set-01`,
        case_id: seed.id,
        set_order: 1,
        label: 'Vue principale',
        view_key: 'front',
        result_delay_value: null,
        result_delay_unit: null,
        result_delay_label: seed.result_delay_label,
        media_mode: 'pair',
        before_path: seed.before,
        after_path: seed.after,
        is_cover: true,
        public_note: null,
        created_at: new Date('2026-04-11T00:00:00.000Z').toISOString(),
        updated_at: new Date('2026-04-11T00:00:00.000Z').toISOString(),
        beforeUrl: seed.before,
        afterUrl: seed.after,
      },
    ],
    tags: ['pdf-preview'],
  }));
}

export function getPreviewAvantApresCaseById(id: string) {
  return getPreviewAvantApresCases().find((item) => item.id === id) ?? null;
}

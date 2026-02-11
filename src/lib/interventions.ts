export const interventionCategories = [
  {
    key: 'medecine-esthetique',
    title: 'Medecine esthetique',
    description: 'Injectables et soins de la peau.',
    thumbnailSrc: '/images/thumbnails/medecine-esthetique.webp',
  },
  {
    key: 'visage',
    title: 'Visage',
    description: 'Rajeunissement et harmonisation du visage.',
    thumbnailSrc: '/images/thumbnails/visage.webp',
  },
  {
    key: 'silhouette',
    title: 'Silhouette',
    description: 'Contour du corps et relachement cutane.',
    thumbnailSrc: '/images/thumbnails/silhouette.webp',
  },
  {
    key: 'seins',
    title: 'Seins',
    description: 'Augmentation, reduction, lifting, reconstruction.',
    thumbnailSrc: '/images/thumbnails/seins.webp',
  },
  {
    key: 'chirurgie-reparatrice',
    title: 'Chirurgie reparatrice',
    description: 'Tumeurs cutanees, brulures, sequelles.',
    thumbnailSrc: '/images/thumbnails/chirurgie-reparatrice.webp',
  },
  {
    key: 'chirurgie-de-la-main',
    title: 'Chirurgie de la main',
    description: 'Pathologies, traumatologie et sequelles.',
    thumbnailSrc: '/images/thumbnails/chirurgie-de-la-main.webp',
  },
  {
    key: 'intime',
    title: 'Intime',
    description: 'Interventions intimes (information et indication).',
    thumbnailSrc: '/images/thumbnails/intime.webp',
  },
] as const;

export type InterventionCategoryKey = (typeof interventionCategories)[number]['key'];

export const interventionCategoryKeys = interventionCategories.map(
  (c) => c.key,
) as InterventionCategoryKey[];

export const interventionCategoryMeta = Object.fromEntries(
  interventionCategories.map((c) => [c.key, { title: c.title, description: c.description }]),
) as Record<InterventionCategoryKey, { title: string; description: string }>;

// Fallback lists used when a category has no content entries yet.
export const interventionCategoryFallbackList: Partial<Record<InterventionCategoryKey, string[]>> =
  {
    visage: [
      'Lifting cervico-facial',
      'Lipoaspiration du cou',
      'Rhinoplastie',
      'Blepharoplastie (paupiers)',
      'Otoplastie',
      'Lipofilling du visage',
      'Lip lift',
      'Lifting temporal',
      'Genioplastie',
    ],
    silhouette: [
      'Abdominoplastie inversee',
      'Lipoaspiration',
      'Lifting des bras',
      'Lifting des cuisses',
      'Lipofilling fesses',
      'Body lift',
      'Protheses de mollets',
    ],
    seins: [
      'Protheses mammaires',
      "Reduction mammaire (correction de l'hypertrophie)",
      'Lifting mammaire',
      'Lipofilling mammaire',
      'Gynecomastie',
      'Mamelons invagines',
    ],
    'chirurgie-reparatrice': [
      'Malformations congenitales',
      'Tumeur benigne et cancer de la peau',
      'Sequelles de brulures',
      'Chirurgie des escarres',
      'Lambeau cutane',
    ],
    'chirurgie-de-la-main': [
      'Maladie de Dupuytren',
      'Main rhumatoide (PR - polyarthrite rhumatoide)',
      'Pseudarthrose du scaphoide',
      'Chirurgie traumatique de la main',
    ],
    intime: [
      'Chirurgie esthetique de la verge',
      'Nymphoplastie (petites levres)',
      'Chirurgie esthetique des grandes levres',
      'Hymenoplastie',
      'Vaginoplastie',
    ],
  };

export function interventionCategoryHref(category: InterventionCategoryKey) {
  return `/interventions/${category}`;
}

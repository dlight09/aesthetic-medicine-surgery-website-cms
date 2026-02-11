export const interventionCategories = [
  {
    key: 'medecine-esthetique',
    title: 'Médecine esthétique',
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
    description: 'Contour du corps et relâchement cutané.',
    thumbnailSrc: '/images/thumbnails/silhouette.webp',
  },
  {
    key: 'seins',
    title: 'Seins',
    description: 'Augmentation, réduction, lifting, reconstruction.',
    thumbnailSrc: '/images/thumbnails/seins.webp',
  },
  {
    key: 'chirurgie-reparatrice',
    title: 'Chirurgie réparatrice',
    description: 'Tumeurs cutanées, brûlures, séquelles.',
    thumbnailSrc: '/images/thumbnails/chirurgie-reparatrice.webp',
  },
  {
    key: 'chirurgie-de-la-main',
    title: 'Chirurgie de la main',
    description: 'Pathologies, traumatologie et séquelles.',
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
      'Abdominoplastie inversée',
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
      'Lambeau cutané',
    ],
    'chirurgie-de-la-main': [
      'Maladie de Dupuytren',
      'Main rhumatoïde (PR - polyarthrite rhumatoïde)',
      'Pseudarthrose du scaphoïde',
      'Chirurgie traumatique de la main',
    ],
    intime: [
      'Chirurgie esthétique de la verge',
      'Nymphoplastie (petites lèvres)',
      'Chirurgie esthétique des grandes lèvres',
      'Hymenoplastie',
      'Vaginoplastie',
    ],
  };

export function interventionCategoryHref(category: InterventionCategoryKey) {
  return `/interventions/${category}`;
}

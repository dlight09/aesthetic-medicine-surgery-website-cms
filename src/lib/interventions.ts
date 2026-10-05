export type InterventionImage = {
  src: string;
  width: number;
  height: number;
  position?: string;
};

export const interventionImages = {
  abdomen: { src: '/images/interventions/abdomen.webp', width: 900, height: 884 },
  bras: { src: '/images/interventions/bras.webp', width: 272, height: 275 },
  chirurgieReparatrice: {
    src: '/images/interventions/chirurgie-reparatrice.webp',
    width: 720,
    height: 480,
  },
  chirurgieMain: {
    src: '/images/interventions/chirurgie-de-la-main.webp',
    width: 720,
    height: 480,
  },
  fesses: { src: '/images/interventions/fesses.webp', width: 270, height: 275 },
  intime: { src: '/images/interventions/intime.webp', width: 720, height: 480 },
  levres: { src: '/images/interventions/levres.webp', width: 281, height: 250 },
  medecineEsthetique: {
    src: '/images/interventions/medecine-esthetique.webp',
    width: 1125,
    height: 900,
  },
  membres: { src: '/images/interventions/membres.webp', width: 279, height: 260 },
  mommyMakeover: { src: '/images/interventions/mommy-makeover.webp', width: 384, height: 380 },
  oreilles: { src: '/images/interventions/oreilles.webp', width: 288, height: 280 },
  paupieres: { src: '/images/interventions/paupieres.webp', width: 273, height: 275 },
  rajeunissementVisage: {
    src: '/images/interventions/rajeunissement-du-visage.webp',
    width: 386,
    height: 390,
  },
  rhinoplastie: { src: '/images/interventions/rhinoplastie.webp', width: 382, height: 410 },
  seins: { src: '/images/interventions/seins.webp', width: 380, height: 420 },
} as const satisfies Record<string, InterventionImage>;

export const interventionCategories = [
  {
    key: 'medecine-esthetique',
    title: 'Médecine esthétique',
    description: 'Injectables et soins de la peau.',
    thumbnailSrc: '/images/thumbnails/medecine-esthetique.webp',
    presentationImage: interventionImages.medecineEsthetique,
  },
  {
    key: 'visage',
    title: 'Visage',
    description: 'Rajeunissement et harmonisation du visage.',
    thumbnailSrc: '/images/thumbnails/visage.webp',
    presentationImage: interventionImages.rajeunissementVisage,
  },
  {
    key: 'silhouette',
    title: 'Silhouette',
    description: 'Contour du corps et relâchement cutané.',
    thumbnailSrc: '/images/thumbnails/silhouette.webp',
    presentationImage: interventionImages.mommyMakeover,
  },
  {
    key: 'seins',
    title: 'Seins',
    description: 'Augmentation, réduction, lifting, reconstruction.',
    thumbnailSrc: '/images/thumbnails/seins.webp',
    presentationImage: interventionImages.seins,
  },
  {
    key: 'chirurgie-reparatrice',
    title: 'Chirurgie réparatrice',
    description: 'Tumeurs cutanées, brûlures, séquelles.',
    thumbnailSrc: '/images/thumbnails/chirurgie-reparatrice.webp',
    presentationImage: interventionImages.chirurgieReparatrice,
  },
  {
    key: 'chirurgie-de-la-main',
    title: 'Chirurgie de la main',
    description: 'Pathologies, traumatologie et séquelles.',
    thumbnailSrc: '/images/thumbnails/chirurgie-de-la-main.webp',
    presentationImage: interventionImages.chirurgieMain,
  },
  {
    key: 'intime',
    title: 'Intime',
    description: 'Interventions intimes (information et indication).',
    thumbnailSrc: '/images/thumbnails/intime.webp',
    presentationImage: interventionImages.intime,
  },
] as const;

const interventionThumbnailBySlug: Record<string, InterventionImage> = {
  'injection-toxine-botulique': interventionImages.medecineEsthetique,
  'injection-acide-hyaluronique': interventionImages.medecineEsthetique,
  skinbooster: interventionImages.medecineEsthetique,
  mesotherapie: interventionImages.medecineEsthetique,
  rhinoplastie: interventionImages.rhinoplastie,
  blepharoplastie: interventionImages.paupieres,
  'blepharoplastie-paupieres': interventionImages.paupieres,
  genioplastie: interventionImages.rhinoplastie,
  otoplastie: interventionImages.oreilles,
  'lip-lift': interventionImages.levres,
  'lifting-cervico-facial': interventionImages.rajeunissementVisage,
  'lifting-temporal': interventionImages.rajeunissementVisage,
  'lipoaspiration-du-cou': interventionImages.rajeunissementVisage,
  'lipofilling-du-visage': interventionImages.rajeunissementVisage,
  abdominoplastie: interventionImages.abdomen,
  'body-lift': interventionImages.mommyMakeover,
  'lifting-des-bras': interventionImages.bras,
  'lifting-des-cuisses': interventionImages.membres,
  lipoaspiration: interventionImages.abdomen,
  'protheses-de-mollets': interventionImages.membres,
  'lipofilling-des-fesses': interventionImages.fesses,
  'augmentation-mammaire-par-protheses': interventionImages.seins,
  'correction-du-mamelon-invagine': interventionImages.seins,
  gynecomastie: interventionImages.seins,
  'lifting-mammaire': interventionImages.seins,
  'lipofilling-mammaire': interventionImages.seins,
  'reduction-mammaire': interventionImages.seins,
  'chirurgie-des-petites-levres': interventionImages.intime,
  'lipofilling-du-penis': interventionImages.intime,
};

export function getInterventionThumbnail(slug: string) {
  return interventionThumbnailBySlug[slug] ?? null;
}

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
      'Blépharoplastie (paupières)',
      'Otoplastie',
      'Lipofilling du visage',
      'Lip lift',
      'Lifting temporal',
      'Génioplastie',
    ],
    silhouette: [
      'Abdominoplastie inversée',
      'Lipoaspiration',
      'Lifting des bras',
      'Lifting des cuisses',
      'Lipofilling fesses',
      'Body lift',
      'Prothèses de mollets',
    ],
    seins: [
      'Prothèses mammaires',
      "Réduction mammaire (correction de l'hypertrophie)",
      'Lifting mammaire',
      'Lipofilling mammaire',
      'Gynécomastie',
      'Mamelons invaginés',
    ],
    'chirurgie-reparatrice': [
      'Malformations congénitales',
      'Tumeurs cutanées bénignes et cancers de la peau',
      'Séquelles de brûlures',
      'Chirurgie des escarres',
      'Lambeaux cutanés',
    ],
    'chirurgie-de-la-main': [
      'Maladie de Dupuytren',
      'Main polytraumatisée',
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

export const cmsBookings = [
  {
    id: 'bk-1042',
    patientName: 'Amina B.',
    phone: '+216 99 123 456',
    channel: 'WhatsApp',
    category: 'Visage',
    desiredDate: '12/03/2026',
    status: 'Nouveau',
    updatedAt: '11/02/2026',
  },
  {
    id: 'bk-1038',
    patientName: 'Hedi M.',
    phone: '+216 98 222 110',
    channel: 'Telephone',
    category: 'Chirurgie de la main',
    desiredDate: '15/03/2026',
    status: 'Contacte',
    updatedAt: '10/02/2026',
  },
  {
    id: 'bk-1031',
    patientName: 'Salma R.',
    phone: '+216 55 770 884',
    channel: 'Telephone',
    category: 'Silhouette',
    desiredDate: '20/03/2026',
    status: 'Planifie',
    updatedAt: '09/02/2026',
  },
];

export const cmsBlogPosts = [
  {
    slug: 'preparation-consultation',
    title: 'Bien preparer sa consultation',
    description: 'Les informations utiles pour une premiere consultation claire et sereine.',
    date: '10/02/2026',
    status: 'Brouillon',
  },
  {
    slug: 'suite-post-op',
    title: 'Suites operatoires: ce qu’il faut savoir',
    description: 'Conseils generaux et signes a surveiller.',
    date: '05/02/2026',
    status: 'Publie',
  },
];

export const cmsInterventions = [
  {
    slug: 'lifting-cervico-facial',
    title: 'Lifting cervico-facial',
    category: 'Visage',
    order: 1,
    status: 'Publie',
  },
  {
    slug: 'injection-acide-hyaluronique',
    title: 'Injection d’acide hyaluronique',
    category: 'Medecine esthetique',
    order: 2,
    status: 'Publie',
  },
  {
    slug: 'main-dupuytren',
    title: 'Maladie de Dupuytren',
    category: 'Chirurgie de la main',
    order: 3,
    status: 'Brouillon',
  },
];

export const cmsAvantApres = [
  {
    id: 'aa-202',
    title: 'Rhinoplastie - 6 mois',
    category: 'Visage',
    consent: true,
    status: 'Publie',
    updatedAt: '08/02/2026',
    beforeThumb: '/images/placeholders/clinic.jpeg',
    afterThumb: '/images/placeholders/skin.jpg',
  },
  {
    id: 'aa-199',
    title: 'Reduction mammaire',
    category: 'Seins',
    consent: true,
    status: 'Brouillon',
    updatedAt: '07/02/2026',
    beforeThumb: '/images/placeholders/surgery.jpg',
    afterThumb: '/images/placeholders/clinic.jpeg',
  },
];

export type ContactInfo = {
  phoneDisplay: string;
  phoneE164: string;
  whatsappE164: string;
  addressLines: string[];
  hoursLines: string[];
  city: string;
  country: string;
};

export const site = {
  name: 'Dr Sirine Soussi',
  tagline: 'Chirurgie plastique, esthétique et reconstructrice - Chirurgie de la main',
  description:
    'Site d’information médicale: chirurgie plastique, esthétique, reconstructrice et chirurgie de la main. Prise de rendez-vous par téléphone ou WhatsApp.',
  locale: 'fr_FR',
  contact: {
    phoneDisplay: '+216 52 233 333',
    phoneE164: '+21652233333',
    whatsappE164: '+21652233333',
    addressLines: [
      'Immeuble Ben Cheikh, 1er étage',
      'Rue du Lac Turkana, Les Berges du Lac 1, Tunis',
    ],
    hoursLines: ['Sur rendez-vous', 'Consultation individuelle'],
    city: 'Tunis',
    country: 'Tunisie',
  } satisfies ContactInfo,
  links: {
    tel: 'tel:+21652233333',
    whatsapp: 'https://wa.me/21652233333',
  },
};

export function buildTitle(pageTitle?: string) {
  if (!pageTitle) return site.name;
  return `${pageTitle} | ${site.name}`;
}

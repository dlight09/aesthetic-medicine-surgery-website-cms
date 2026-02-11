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
    // Placeholders (do not ship to production)
    phoneDisplay: '+216 99 999 999',
    phoneE164: '+21699999999',
    whatsappE164: '+21699999999',
    addressLines: ['99 Rue Exemple', '1000 Tunis, Tunisie'],
    hoursLines: ['Lun-Ven 09:00-18:00'],
    city: 'Tunis',
    country: 'Tunisie',
  } satisfies ContactInfo,
  links: {
    tel: 'tel:+21699999999',
    whatsapp: 'https://wa.me/21699999999',
  },
};

export function buildTitle(pageTitle?: string) {
  if (!pageTitle) return site.name;
  return `${pageTitle} | ${site.name}`;
}

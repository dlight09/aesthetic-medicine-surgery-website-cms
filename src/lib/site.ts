export type ContactInfo = {
  phoneDisplay: string;
  phoneE164: string;
  whatsappE164: string;
  email: string;
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
    email: 'dr.sirine.soussi@gmail.com',
    addressLines: [
      '1.1 Rue du Lac Turkana',
      'Berges du Lac 1, Tunis',
    ],
    hoursLines: ['Sur rendez-vous', 'Consultation individuelle'],
    city: 'Tunis',
    country: 'Tunisie',
  } satisfies ContactInfo,
  links: {
    tel: 'tel:+21652233333',
    whatsapp: 'https://wa.me/21652233333',
    email: 'mailto:dr.sirine.soussi@gmail.com',
    maps: 'https://maps.app.goo.gl/LcTcf3bbCtPNa6px6',
    mapsEmbed: 'https://www.google.com/maps?cid=17448948987352639458&output=embed',
  },
};

export function buildTitle(pageTitle?: string) {
  if (!pageTitle) return site.name;
  if (pageTitle.toLocaleLowerCase('fr').includes(site.name.toLocaleLowerCase('fr'))) return pageTitle;
  return `${pageTitle} | ${site.name}`;
}

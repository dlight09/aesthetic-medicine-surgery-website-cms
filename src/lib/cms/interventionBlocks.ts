export type InterventionContentBlock =
  | {
      type: 'section';
      heading: string;
      body: string;
    }
  | {
      type: 'procedure';
      heading: string;
      avant: string;
      pendant: string;
      apres: string;
    }
  | {
      type: 'bullets';
      heading: string;
      items: string[];
    }
  | {
      type: 'faq';
      heading: string;
      items: { question: string; answer: string }[];
    }
  | {
      type: 'image';
      heading: string;
      url: string;
      alt: string;
      caption?: string;
      layout?: 'full' | 'card' | 'left' | 'right';
    }
  | {
      type: 'cta';
      heading: string;
      body: string;
      button_label: string;
      button_href: string;
    };

export const interventionBlockTypes = [
  'section',
  'procedure',
  'bullets',
  'faq',
  'image',
  'cta',
] as const;

export function defaultInterventionBlocks(): InterventionContentBlock[] {
  return [
    {
      type: 'bullets',
      heading: 'En bref',
      items: [
        'Objectif: ',
        'Zones: ',
        'Duree de seance: ',
        'Suites habituelles: ',
        'Resultat: progressif, variable selon les patients',
        'Duree / entretien: ',
      ],
    },
    {
      type: 'section',
      heading: 'Objectif',
      body: "Decrire l'objectif en termes simples, sans promesse ni garantie, avec une approche naturelle et personnalisee.",
    },
    {
      type: 'section',
      heading: 'Pour qui ?',
      body: "L'indication depend de l'examen clinique, de l'anatomie, de la qualite cutanee et des attentes. Une consultation est indispensable a Tunis (Tunisie).",
    },
    {
      type: 'bullets',
      heading: 'Contre-indications et precautions',
      items: [
        'Infection/inflammation sur la zone: reporter',
        'Grossesse/allaitement: a discuter selon acte',
        'Troubles de la coagulation / anticoagulants: au cas par cas',
        'Autres antecedents et traitements: a signaler en consultation',
      ],
    },
    {
      type: 'procedure',
      heading: 'Déroulé',
      avant: '- Analyse et plan de traitement\n- Informations et consignes',
      pendant: '- Geste ciblé, progressif, quantités adaptées\n- Mesures de confort si besoin',
      apres: '- Recommandations immédiates (sport, chaleur/hammam, maquillage, soins)',
    },
    {
      type: 'section',
      heading: 'Suites',
      body: '- Frequent: rougeurs, oedeme, petits bleus possibles\n- Quand recontacter: douleur importante, signe inhabituel, evolution inquietante',
    },
    {
      type: 'section',
      heading: 'Risques / effets indesirables possibles',
      body: 'Comme tout acte medical, des effets transitoires peuvent survenir. Des complications plus rares existent et sont expliquees en consultation.',
    },
    {
      type: 'section',
      heading: 'Resultat et duree',
      body: "Le resultat s'installe progressivement et reste variable selon les patients, les zones et le protocole.",
    },
    {
      type: 'section',
      heading: 'Alternatives',
      body: "Selon l'objectif: options non injectables ou autres techniques (a discuter en consultation).",
    },
    {
      type: 'faq',
      heading: 'Questions frequentes',
      items: [
        {
          question: 'Est-ce que le resultat est naturel ?',
          answer:
            "L'objectif est un resultat harmonieux, adapte a votre visage et a votre peau, apres une evaluation personnalisee.",
        },
        {
          question: 'Est-ce douloureux ?',
          answer: 'La sensibilite varie. Des mesures de confort peuvent etre proposees.',
        },
        {
          question: 'Y a-t-il un arret social ?',
          answer:
            'Souvent non, mais des marques transitoires sont possibles. Les suites varient selon les patients et les zones.',
        },
        {
          question: 'Combien de temps cela dure ?',
          answer:
            "La duree est variable selon les patients et l'indication. L'entretien se discute au cas par cas.",
        },
      ],
    },
  ];
}

export function coerceBlocks(value: unknown): InterventionContentBlock[] | null {
  if (value === null || value === undefined) return null;
  if (!Array.isArray(value)) return null;
  const blocks: any[] = value;
  const out: InterventionContentBlock[] = [];
  for (const raw of blocks) {
    if (!raw || typeof raw !== 'object') continue;
    const type = (raw as any).type;
    if (type === 'section') {
      const heading = String((raw as any).heading ?? '').trim();
      const body = String((raw as any).body ?? '');
      if (!heading) continue;
      out.push({ type, heading, body });
      continue;
    }
    if (type === 'procedure') {
      const heading = String((raw as any).heading ?? '').trim() || 'Déroulé';
      const avant = String((raw as any).avant ?? '');
      const pendant = String((raw as any).pendant ?? '');
      const apres = String((raw as any).apres ?? '');
      out.push({ type, heading, avant, pendant, apres });
      continue;
    }
    if (type === 'bullets') {
      const heading = String((raw as any).heading ?? '').trim();
      const items = Array.isArray((raw as any).items)
        ? (raw as any).items.map((x: any) => String(x ?? '')).filter((x: string) => x.trim())
        : [];
      if (!heading) continue;
      out.push({ type, heading, items });
      continue;
    }
    if (type === 'faq') {
      const heading = String((raw as any).heading ?? '').trim() || 'Questions frequentes';
      const items = Array.isArray((raw as any).items) ? (raw as any).items : [];
      const normalized = items
        .map((i: any) => ({
          question: String(i?.question ?? '').trim(),
          answer: String(i?.answer ?? ''),
        }))
        .filter((i: any) => i.question);
      out.push({ type, heading, items: normalized });
      continue;
    }
    if (type === 'image') {
      const heading = String((raw as any).heading ?? '').trim();
      const url = String((raw as any).url ?? '').trim();
      const alt = String((raw as any).alt ?? '').trim();
      const caption = typeof (raw as any).caption === 'string' ? (raw as any).caption : undefined;
      const layout = (raw as any).layout;
      const safeLayout =
        layout === 'card' || layout === 'left' || layout === 'right' || layout === 'full'
          ? layout
          : undefined;
      if (!url || !alt) continue;
      out.push({ type, heading, url, alt, caption, layout: safeLayout });
      continue;
    }
    if (type === 'cta') {
      const heading = String((raw as any).heading ?? '').trim();
      const body = String((raw as any).body ?? '');
      const button_label = String((raw as any).button_label ?? '').trim();
      const button_href = String((raw as any).button_href ?? '').trim();
      if (!heading || !button_label || !button_href) continue;
      out.push({ type, heading, body, button_label, button_href });
      continue;
    }
  }
  return out;
}

export type PremiumInterventionPageData = {
  categoryLabel: string;
  titleStart: string;
  titleEmphasis: string;
  heroDescription: string;
  heroImageSrc: string;
  heroImageAlt: string;
  quickFacts: {
    icon: 'target' | 'schedule' | 'event_available' | 'healing';
    label: string;
    text: string;
  }[];
  objectiveParagraphs: string[];
  forWho: string[];
  processParagraphs: string[];
  contraindicationIntro: string;
  contraindications: string[];
  risksText: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaEmphasis: string;
  ctaBody: string;
};

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDwFFjDwZLWb0YpaNbtL15mmQ_OPwo7OEMk67IvQvgkJ6qe3nBNaX0UnZzfTpHIM8QKpfJuHxvusOjHrs4oqikCls0mBxnBNwUyjyJCdFo94ACaqQV8-Fy8Lkse_GhTI3J0U_N7gZtjcxiYi5KnviOiDDdn-OP7qh3wZh0fV7EVEsi_-1_Epn0io1Ye1z_xdfhJtsBz83jf8ww5onilAgU05kBYJdpJN5vzkPZCdVB0laKf9mnSVwLXXGFTLEEgKvyqUBRRSkQmTAr2';

export const premiumInterventionPages: Record<string, PremiumInterventionPageData> = {
  'injection-acide-hyaluronique': {
    categoryLabel: 'Médecine esthétique',
    titleStart: "Injection d'acide",
    titleEmphasis: 'hyaluronique',
    heroDescription:
      "Restaurer certains volumes, améliorer des contours et préserver l'expression avec une approche précise, progressive et personnalisée.",
    heroImageSrc: heroImage,
    heroImageAlt: 'Ambiance de consultation esthétique',
    quickFacts: [
      {
        icon: 'target',
        label: 'Objectif',
        text: "Corriger certains volumes et améliorer l'harmonie du visage de manière mesurée.",
      },
      {
        icon: 'schedule',
        label: 'Durée',
        text: 'La séance dure généralement entre 20 et 45 minutes selon les zones traitées.',
      },
      {
        icon: 'event_available',
        label: 'Résultat',
        text: "Progressif après l'acte, avec un rendu qui se stabilise dans les jours suivants.",
      },
      {
        icon: 'healing',
        label: 'Suites',
        text: 'Rougeurs, œdème modéré ou ecchymoses possibles, le plus souvent transitoires.',
      },
    ],
    objectiveParagraphs: [
      "L'acide hyaluronique est naturellement présent dans l'organisme. En médecine esthétique, il est utilisé pour corriger des creux, harmoniser les volumes et améliorer la qualité de peau selon l'indication.",
      "La stratégie repose sur une analyse morphologique et une approche mesurée : l'objectif est un résultat naturel, cohérent avec votre visage et vos attentes.",
    ],
    forWho: [
      'Correction de certains sillons ou plis marqués.',
      'Restauration de volumes (pommettes, tempes, menton) selon indication.',
      "Recherche d'un rendu harmonieux sans transformation excessive.",
    ],
    processParagraphs: [
      "Après l'analyse clinique, les points d'injection sont définis selon les zones concernées. Le geste est réalisé progressivement, avec contrôle de la symétrie et des volumes.",
      "Des rougeurs discrètes, un œdème modéré ou des ecchymoses peuvent apparaître, puis s'atténuer. Les consignes post-acte sont adaptées à votre situation.",
    ],
    contraindicationIntro:
      'La sécurité de nos patientes est prioritaire. Les injections sont déconseillées dans certaines situations et doivent toujours être validées en consultation.',
    contraindications: [
      'Grossesse et allaitement',
      'Infection ou inflammation cutanée active',
      'Certaines maladies auto-immunes',
      'Antécédents de réactions inflammatoires sévères',
    ],
    risksText:
      "Bien que rares avec un praticien expérimenté, certains risques existent : ecchymoses, asymétrie temporaire ou réaction inflammatoire. Les signes d'alerte et la conduite à tenir sont expliqués avant le geste.",
    faq: [
      {
        q: 'Est-ce douloureux ?',
        a: 'La sensibilité varie selon les zones. Le geste est réalisé de façon progressive et des mesures de confort peuvent être proposées.',
      },
      {
        q: "Combien de temps l'effet dure-t-il ?",
        a: 'La durée est variable selon les zones, le produit utilisé et votre profil. Le suivi est défini au cas par cas en consultation.',
      },
      {
        q: 'Peut-on reprendre ses activités rapidement ?',
        a: 'Dans de nombreux cas oui, avec quelques consignes post-acte personnalisées pour optimiser les suites.',
      },
    ],
    ctaTitle: 'Prête à sublimer',
    ctaEmphasis: 'votre beauté naturelle ?',
    ctaBody:
      'Un premier diagnostic personnalisé permet de définir une indication adaptée à votre visage, vos attentes et votre sécurité.',
  },
  'injection-toxine-botulique': {
    categoryLabel: 'Médecine esthétique',
    titleStart: 'Injection de toxine',
    titleEmphasis: 'botulique',
    heroDescription:
      "Atténuer les rides d'expression de façon subtile, en respectant la dynamique du visage et l'équilibre des traits.",
    heroImageSrc: heroImage,
    heroImageAlt: 'Consultation pour injection de toxine botulique',
    quickFacts: [
      {
        icon: 'target',
        label: 'Objectif',
        text: "Diminuer certaines rides d'expression sans figer le visage.",
      },
      {
        icon: 'schedule',
        label: 'Durée',
        text: 'Séance généralement courte, adaptée aux zones traitées.',
      },
      {
        icon: 'event_available',
        label: 'Résultat',
        text: 'Installation progressive avec résultat individualisé.',
      },
      {
        icon: 'healing',
        label: 'Suites',
        text: 'Rougeurs discrètes ou petits bleus possibles, le plus souvent transitoires.',
      },
    ],
    objectiveParagraphs: [
      "La toxine botulique agit sur l'hypercontraction de certains muscles responsables des rides d'expression. L'objectif est d'adoucir les traits sans altérer l'expressivité.",
      'Le plan de traitement est personnalisé selon votre mobilité musculaire, votre peau et le rendu recherché.',
    ],
    forWho: [
      "Rides d'expression marquées au front, à la glabelle ou à la patte d'oie.",
      'Patientes recherchant un résultat harmonieux et progressif.',
      'Personnes souhaitant une prise en charge non chirurgicale.',
    ],
    processParagraphs: [
      "La consultation permet d'identifier les zones pertinentes et de définir des doses adaptées. Le geste est ciblé et progressif.",
      "Après l'acte, des suites simples peuvent survenir. Les recommandations post-injection sont expliquées pour sécuriser le résultat.",
    ],
    contraindicationIntro:
      "Certaines situations nécessitent de reporter ou d'adapter le geste. L'indication est toujours validée après évaluation clinique.",
    contraindications: [
      'Grossesse et allaitement',
      'Infection locale sur la zone traitée',
      'Certaines pathologies neuromusculaires',
      'Traitements ou antécédents médicaux à signaler',
    ],
    risksText:
      'Comme tout acte médical, des effets indésirables peuvent exister. Ils sont le plus souvent transitoires. Les situations inhabituelles et la conduite à tenir sont abordées en consultation.',
    faq: [
      {
        q: 'Le visage sera-t-il figé ?',
        a: "Non, l'objectif est d'atténuer l'excès de contraction tout en conservant l'expression du visage.",
      },
      {
        q: 'En combien de temps voit-on le résultat ?',
        a: "L'effet n'est pas immédiat. Il s'installe progressivement après l'injection.",
      },
      {
        q: 'Faut-il prévoir un arrêt social ?',
        a: 'Dans la majorité des cas, non. Les suites dépendent des zones et de la sensibilité individuelle.',
      },
    ],
    ctaTitle: 'Envie de lisser',
    ctaEmphasis: 'vos expressions sans rigidité ?',
    ctaBody:
      'Une consultation permet de définir une indication précise et un plan personnalisé selon votre anatomie et vos objectifs.',
  },
  skinbooster: {
    categoryLabel: 'Médecine esthétique',
    titleStart: 'Skinbooster :',
    titleEmphasis: 'hydratation avancée',
    heroDescription:
      "Améliorer la qualité de peau, l'éclat et la souplesse avec une approche progressive, centrée sur l'hydratation cutanée.",
    heroImageSrc: heroImage,
    heroImageAlt: 'Soin de skinbooster en consultation esthétique',
    quickFacts: [
      {
        icon: 'target',
        label: 'Objectif',
        text: 'Soutenir la qualité de peau et l’hydratation profonde.',
      },
      {
        icon: 'schedule',
        label: 'Durée',
        text: 'Séance rapide, selon les zones et le protocole défini.',
      },
      {
        icon: 'event_available',
        label: 'Résultat',
        text: 'Effet progressif, discret et évolutif au fil des séances.',
      },
      {
        icon: 'healing',
        label: 'Suites',
        text: 'Petites marques transitoires possibles après la séance.',
      },
    ],
    objectiveParagraphs: [
      "Le skinbooster vise à améliorer certains paramètres de qualité cutanée comme l'éclat, la souplesse et la texture.",
      'Le protocole est ajusté à votre peau et à vos priorités pour obtenir un rendu naturel, sans transformation excessive.',
    ],
    forWho: [
      'Peaux déshydratées ou en perte d’éclat.',
      'Patientes recherchant une amélioration progressive et subtile.',
      'Approche non chirurgicale centrée sur la qualité cutanée.',
    ],
    processParagraphs: [
      'La consultation définit les zones, le rythme et le nombre de séances selon les besoins de peau.',
      "Les suites sont généralement courtes. Des rougeurs discrètes ou de petites ecchymoses peuvent apparaître puis s'atténuer.",
    ],
    contraindicationIntro:
      "Le protocole est adapté selon le terrain cutané. Certaines situations imposent de reporter la séance ou de revoir l'indication.",
    contraindications: [
      'Grossesse et allaitement',
      'Infection ou irritation cutanée active',
      'Troubles de la coagulation',
      'Antécédents médicaux à signaler',
    ],
    risksText:
      'Des effets secondaires transitoires peuvent survenir. Les risques rares et les signes nécessitant un avis rapide sont détaillés en consultation.',
    faq: [
      {
        q: 'Le skinbooster remplace-t-il un comblement ?',
        a: 'Non. Il améliore surtout la qualité de peau et ne vise pas une correction volumétrique majeure.',
      },
      {
        q: 'Combien de séances faut-il ?',
        a: 'Le nombre de séances est individualisé selon la zone traitée et les objectifs.',
      },
      {
        q: 'Le résultat est-il naturel ?',
        a: 'Oui, le rendu recherché est progressif, discret et adapté à votre peau.',
      },
    ],
    ctaTitle: 'Prête à améliorer',
    ctaEmphasis: 'votre qualité de peau ?',
    ctaBody:
      'La consultation permet de construire un protocole personnalisé selon votre peau, vos attentes et vos antécédents.',
  },
  mesotherapie: {
    categoryLabel: 'Médecine esthétique',
    titleStart: 'Mésothérapie :',
    titleEmphasis: 'approche progressive',
    heroDescription:
      'Soutenir la qualité cutanée avec des micro-injections superficielles, dans un protocole personnalisé et encadré.',
    heroImageSrc: heroImage,
    heroImageAlt: 'Séance de mésothérapie en cabinet',
    quickFacts: [
      {
        icon: 'target',
        label: 'Objectif',
        text: 'Soutenir la qualité de peau de façon progressive.',
      },
      {
        icon: 'schedule',
        label: 'Durée',
        text: 'Durée variable selon les zones et le protocole retenu.',
      },
      {
        icon: 'event_available',
        label: 'Résultat',
        text: 'Évolution progressive, avec réévaluation au fil des séances.',
      },
      {
        icon: 'healing',
        label: 'Suites',
        text: 'Rougeurs ponctuelles ou sensibilité locale possibles.',
      },
    ],
    objectiveParagraphs: [
      'La mésothérapie repose sur des micro-injections superficielles pour améliorer certains paramètres de peau selon indication.',
      "L'objectif est un résultat progressif et cohérent avec votre profil cutané, sans promesse standardisée.",
    ],
    forWho: [
      'Peaux en recherche de soutien cutané progressif.',
      'Patientes souhaitant un protocole non chirurgical.',
      'Indications validées au cas par cas après examen clinique.',
    ],
    processParagraphs: [
      "Après la consultation, les zones et le protocole sont définis selon l'indication clinique.",
      'Des suites simples peuvent apparaître. Les recommandations post-acte sont données selon votre situation.',
    ],
    contraindicationIntro:
      'La sécurité repose sur une évaluation complète des antécédents, traitements et facteurs de risque avant toute séance.',
    contraindications: [
      'Grossesse et allaitement',
      'Infection ou inflammation active',
      'Allergies et traitements à discuter',
      'Peaux très réactives : précautions spécifiques',
    ],
    risksText:
      "Comme pour tout acte médical, des effets secondaires existent. Ils sont expliqués avec les signes d'alerte et la conduite à tenir.",
    faq: [
      {
        q: 'Quelle différence avec un skinbooster ?',
        a: 'Les objectifs et protocoles ne sont pas identiques. Le choix dépend de votre indication clinique.',
      },
      {
        q: 'Est-ce douloureux ?',
        a: 'La sensibilité varie selon les zones. Des mesures de confort peuvent être proposées.',
      },
      {
        q: 'Quand voit-on les effets ?',
        a: "L'évolution est progressive et s'apprécie avec le recul des séances.",
      },
    ],
    ctaTitle: 'Vous souhaitez une',
    ctaEmphasis: 'prise en charge personnalisée ?',
    ctaBody:
      "La mésothérapie se décide en consultation, avec une information claire sur l'indication, les limites et les suites.",
  },
};

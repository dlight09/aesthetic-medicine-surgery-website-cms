import type { CmsBlogPost } from './cms/blog';

const publishedAt = '2026-09-26T09:00:00.000Z';

type ApprovedBlogPost = CmsBlogPost & {
  interventionSlugs: string[];
  primaryKeyword: string;
};

function post(
  order: number,
  data: Omit<ApprovedBlogPost, 'id' | 'status' | 'published_at' | 'created_at' | 'updated_at'>,
): ApprovedBlogPost {
  const timestamp = new Date(Date.parse(publishedAt) - (order - 1) * 60_000).toISOString();
  return {
    id: `preview-series-2-${String(order).padStart(2, '0')}`,
    status: 'publie',
    published_at: timestamp,
    created_at: timestamp,
    updated_at: timestamp,
    ...data,
  };
}

export const approvedBlogPreviewPosts: ApprovedBlogPost[] = [
  post(1, {
    slug: 'deep-plane-facelift-tunisie',
    title: 'Deep Plane Facelift : effet de mode ou véritable évolution du lifting ?',
    description:
      'Qu’est-ce qu’un Deep Plane Facelift ? Comprendre ses principes, ses indications et pourquoi la technique doit toujours s’adapter au visage.',
    seo_title: 'Deep Plane Facelift en Tunisie | Dr Sirine Soussi',
    seo_description:
      'Qu’est-ce qu’un Deep Plane Facelift ? Comprendre ses principes, ses indications et pourquoi la technique doit toujours s’adapter au visage.',
    interventionSlugs: ['lifting-cervico-facial'],
    primaryKeyword: 'Deep Plane Facelift Tunisie',
    content_blocks: [
      {
        type: 'image',
        url: '/images/blog/deep-plane-facelift.webp',
        alt: 'Illustration d’un visage et du cou avec des flèches montrant le repositionnement des tissus lors d’un lifting deep plane',
        layout: 'full',
      },
      {
        type: 'paragraph',
        text: 'Le terme « Deep Plane Facelift » est devenu très présent sur les réseaux sociaux. Pourtant, il ne désigne pas simplement un lifting « plus puissant ». Il correspond à une manière d’aborder les plans profonds du visage afin de repositionner les tissus relâchés sans faire reposer le résultat sur une traction excessive de la peau.',
      },
      {
        type: 'section',
        heading: 'Qu’est-ce que le plan profond ?',
        text: 'Sous la peau du visage se trouvent plusieurs couches anatomiques, dont le SMAS et des structures de soutien plus profondes. Le lifting deep plane consiste à libérer et repositionner certains de ces tissus afin de restaurer plus directement leur position.',
      },
      {
        type: 'section',
        heading: 'Pourquoi cette approche peut-elle donner un résultat naturel ?',
        text: 'Lorsque le travail est réalisé dans les plans profonds, la peau peut être redrapée avec moins de tension. L’objectif est de restaurer les volumes et les contours plutôt que de donner un aspect « tiré ».',
      },
      {
        type: 'section',
        heading: 'Est-ce la meilleure technique pour tout le monde ?',
        text: 'Non. Un nom de technique ne doit jamais devenir une indication. La qualité de la peau, le relâchement du cou, les bajoues, le tiers moyen, les volumes et les antécédents chirurgicaux doivent être analysés individuellement.',
      },
      {
        type: 'section',
        heading: 'Deep plane ne signifie pas transformation radicale',
        text: 'Un lifting réussi doit préserver les expressions et l’identité du visage. La profondeur de la dissection n’a de sens que si elle permet une correction adaptée, maîtrisée et harmonieuse.',
      },
      {
        type: 'section',
        heading: 'Une technique au service d’un projet',
        text: 'Je préfère considérer le Deep Plane Facelift comme un outil parmi les techniques de rajeunissement facial. Le véritable enjeu reste de choisir le bon geste, au bon niveau, pour le bon visage.',
      },
    ],
  }),
  post(2, {
    slug: 'rhinoplastie-preservation-tunisie',
    title: 'Rhinoplastie de préservation : pour qui et pourquoi ?',
    description:
      'La rhinoplastie de préservation cherche à conserver certaines structures du nez. Découvrez ses principes, ses avantages et ses limites.',
    seo_title: 'Rhinoplastie de préservation en Tunisie | Dr Sirine Soussi',
    seo_description:
      'La rhinoplastie de préservation cherche à conserver certaines structures du nez. Découvrez ses principes, ses avantages et ses limites.',
    interventionSlugs: ['rhinoplastie'],
    primaryKeyword: 'rhinoplastie de préservation Tunisie',
    content_blocks: [
      {
        type: 'image',
        url: '/images/blog/rhinoplastie-preservation.webp',
        alt: 'Profil d’une femme avec le contour du nez tracé pour illustrer la rhinoplastie de préservation',
        layout: 'full',
      },
      {
        type: 'paragraph',
        text: 'La rhinoplastie de préservation repose sur une idée simple : lorsqu’une structure du nez est saine et harmonieuse, il n’est pas toujours nécessaire de la démonter pour la reconstruire.',
      },
      {
        type: 'section',
        heading: 'Que cherche-t-on à préserver ?',
        text: 'Selon l’anatomie, certaines techniques permettent de conserver davantage le dorsum nasal, les attaches naturelles et certains éléments de soutien. Cela diffère des approches classiques où la bosse peut être retirée puis le toit nasal reconstruit.',
      },
      {
        type: 'section',
        heading: 'Quels sont les avantages potentiels ?',
        text: 'Préserver certaines structures peut contribuer à maintenir des lignes naturelles et à limiter certaines irrégularités. Mais le bénéfice dépend entièrement de l’anatomie initiale et de la maîtrise technique.',
      },
      {
        type: 'section',
        heading: 'Tous les nez sont-ils candidats ?',
        text: 'Non. Une déviation importante, une anatomie complexe, une pointe nécessitant une reconstruction ou une rhinoplastie secondaire peuvent nécessiter une approche structurelle différente.',
      },
      {
        type: 'section',
        heading: 'Pourquoi j’utilise volontiers une approche hybride',
        text: 'Opposer « préservation » et « structurelle » est souvent trop simpliste. Dans de nombreux cas, la stratégie la plus logique consiste à préserver certaines zones et à reconstruire ou renforcer celles qui en ont besoin.',
      },
      {
        type: 'section',
        heading: 'La technique doit s’adapter au nez',
        text: 'Le patient ne devrait jamais être sélectionné pour correspondre à une technique à la mode. C’est l’analyse du nez, de sa fonction et du résultat recherché qui doit déterminer la méthode.',
      },
    ],
  }),
  post(3, {
    slug: 'liposuccion-vaser-tunisie',
    title: 'Liposuccion VASER : quelles différences avec une liposuccion classique ?',
    description:
      'VASER, liposuccion assistée et liposuccion classique : comprendre les différences et pourquoi la technologie ne remplace jamais l’indication.',
    seo_title: 'Liposuccion VASER en Tunisie | Dr Sirine Soussi',
    seo_description:
      'VASER, liposuccion assistée et liposuccion classique : comprendre les différences et pourquoi la technologie ne remplace jamais l’indication.',
    interventionSlugs: ['lipoaspiration'],
    primaryKeyword: 'liposuccion VASER Tunisie',
    content_blocks: [
      {
        type: 'image',
        url: '/images/blog/liposuccion-vaser.webp',
        alt: 'Illustration d’une liposuccion VASER de l’abdomen avec émulsification et aspiration de la graisse',
        layout: 'full',
      },
      {
        type: 'paragraph',
        text: 'La liposuccion a beaucoup évolué et différentes technologies peuvent aujourd’hui assister le chirurgien. Parmi elles, le VASER utilise une énergie ultrasonique afin de faciliter le traitement du tissu graisseux avant son aspiration.',
      },
      {
        type: 'section',
        heading: 'Que fait réellement le VASER ?',
        text: 'L’énergie ultrasonique est utilisée pour préparer la graisse dans la zone traitée. L’aspiration reste ensuite réalisée chirurgicalement. Le VASER n’est donc pas une technique « sans chirurgie ».',
      },
      {
        type: 'section',
        heading: 'Est-ce forcément mieux qu’une liposuccion classique ?',
        text: 'Non. Le résultat dépend surtout de l’indication, de la qualité cutanée, de la répartition graisseuse, de la technique du chirurgien et du respect des volumes et zones traités.',
      },
      {
        type: 'section',
        heading: 'Peut-on traiter tout le corps en une seule fois ?',
        text: 'La liposuccion n’est pas une course au nombre de zones. Multiplier les territoires augmente la durée opératoire, les pertes liquidiennes et les contraintes de récupération. Je préfère limiter les gestes à ce qui peut être traité raisonnablement et en sécurité.',
      },
      {
        type: 'section',
        heading: 'Et si la peau est relâchée ?',
        text: 'Retirer de la graisse ne suffit pas toujours lorsque la peau présente un relâchement important. Selon les cas, une technologie de rétraction cutanée ou une chirurgie d’exérèse peut être discutée.',
      },
      {
        type: 'section',
        heading: 'La technologie reste un outil',
        text: 'Une machine ne remplace ni l’analyse anatomique ni le jugement chirurgical. Le choix entre VASER, assistance mécanique ou technique conventionnelle dépend du cas et du résultat recherché.',
      },
    ],
  }),
  post(5, {
    slug: 'j-plasma-relachement-cutane-tunisie',
    title: 'J-Plasma et relâchement cutané : dans quelles indications ?',
    description:
      'Le J-Plasma peut accompagner certaines chirurgies de silhouette lorsque le relâchement cutané est modéré. Découvrez ses indications et ses limites.',
    seo_title: 'J-Plasma et relâchement cutané en Tunisie | Dr Soussi',
    seo_description:
      'Le J-Plasma peut accompagner certaines chirurgies de silhouette lorsque le relâchement cutané est modéré. Découvrez ses indications et ses limites.',
    interventionSlugs: ['lipoaspiration', 'lifting-des-bras'],
    primaryKeyword: 'J-Plasma Tunisie',
    content_blocks: [
      {
        type: 'image',
        url: '/images/blog/j-plasma-relachement-cutane.webp',
        alt: 'Illustration d’un traitement de rétraction cutanée de l’abdomen par J-Plasma',
        layout: 'full',
      },
      {
        type: 'paragraph',
        text: 'Après une liposuccion, la capacité de la peau à se rétracter varie considérablement d’une personne à l’autre. L’âge, la qualité cutanée, les grossesses, les variations pondérales et les interventions antérieures jouent un rôle important.',
      },
      {
        type: 'section',
        heading: 'Quel est l’objectif du J-Plasma ?',
        text: 'Le J-Plasma, également appelé plasma d’hélium associé à une énergie de radiofréquence selon le dispositif utilisé, vise à produire une contraction contrôlée des tissus sous-cutanés.',
      },
      {
        type: 'section',
        heading: 'Dans quels cas peut-il être intéressant ?',
        text: 'Il peut être discuté lorsque le relâchement est léger à modéré et que l’on souhaite compléter une liposuccion. Les bras, l’abdomen ou certaines zones de la silhouette peuvent être concernés selon l’indication.',
      },
      {
        type: 'section',
        heading: 'Peut-il remplacer une abdominoplastie ou un lifting des bras ?',
        text: 'Non lorsque l’excès cutané est important. Une technologie de rétraction ne peut pas supprimer plusieurs centimètres de peau excédentaire. Dans ces situations, une chirurgie avec cicatrice peut donner un résultat plus cohérent.',
      },
      {
        type: 'section',
        heading: 'Pourquoi l’indication est-elle essentielle ?',
        text: 'Promettre un effet de lifting sans cicatrice à une patiente présentant un véritable excès de peau risque de créer une déception. Il faut distinguer relâchement modéré et excès cutané réel.',
      },
      {
        type: 'section',
        heading: 'Choisir le geste le plus adapté',
        text: 'Mon objectif n’est pas d’utiliser une technologie parce qu’elle est disponible, mais uniquement lorsqu’elle apporte un bénéfice pertinent dans la stratégie globale.',
      },
    ],
  }),
  post(4, {
    slug: 'changer-implants-mammaires-10-ans',
    title: 'Implants mammaires : faut-il vraiment les changer tous les 10 ans ?',
    description:
      'Les implants mammaires ne sont pas des dispositifs à vie, mais doivent-ils être remplacés automatiquement après 10 ans ? Explications.',
    seo_title: 'Faut-il changer ses implants mammaires tous les 10 ans ? | Dr Soussi',
    seo_description:
      'Les implants mammaires ne sont pas des dispositifs à vie, mais doivent-ils être remplacés automatiquement après 10 ans ? Explications.',
    interventionSlugs: ['augmentation-mammaire-par-protheses'],
    primaryKeyword: 'changement implants mammaires',
    content_blocks: [
      {
        type: 'image',
        url: '/images/blog/changer-implants-mammaires.webp',
        alt: 'Deux implants mammaires illustrant le suivi et le remplacement éventuel des prothèses',
        layout: 'full',
      },
      {
        type: 'paragraph',
        text: 'La règle selon laquelle des implants mammaires devraient obligatoirement être changés tous les dix ans est encore très répandue. En réalité, la situation est plus nuancée.',
      },
      {
        type: 'section',
        heading: 'Un implant n’est pas un dispositif définitif',
        text: 'Une augmentation mammaire avec prothèses implique un suivi à long terme et la possibilité d’une nouvelle intervention au cours de la vie. Cela ne signifie pas qu’un remplacement doit être programmé automatiquement à une date anniversaire.',
      },
      {
        type: 'section',
        heading: 'Pourquoi peut-on avoir besoin d’une reprise ?',
        text: 'Une réintervention peut être discutée en cas de rupture, contracture capsulaire, déplacement de l’implant, modification du sein avec le temps, grossesse, variation de poids ou simplement désir de changer de volume ou de retirer les implants.',
      },
      {
        type: 'section',
        heading: 'Le sein change même si l’implant ne change pas',
        text: 'La peau et la glande mammaire continuent de vieillir. Une poitrine augmentée peut donc évoluer avec les grossesses, l’allaitement, les variations pondérales et la ménopause.',
      },
      {
        type: 'section',
        heading: 'Le suivi est essentiel',
        text: 'Le contrôle clinique et l’imagerie adaptée permettent d’évaluer l’état des implants et des seins. Le calendrier de surveillance dépend notamment du type d’implant et des recommandations applicables.',
      },
      {
        type: 'section',
        heading: 'Une décision individualisée',
        text: 'Remplacer un implant simplement parce qu’il atteint dix ans n’est pas la même chose que réopérer pour une indication médicale ou esthétique précise. La décision doit être prise après examen.',
      },
    ],
  }),
  post(6, {
    slug: 'reprise-augmentation-mammaire-tunisie',
    title: 'Reprise d’augmentation mammaire : changer les implants ne suffit pas toujours',
    description:
      'Malposition, ptose, coque ou changement de volume : pourquoi une reprise mammaire peut nécessiter plus qu’un simple changement d’implants.',
    seo_title: 'Reprise augmentation mammaire en Tunisie | Dr Sirine Soussi',
    seo_description:
      'Malposition, ptose, coque ou changement de volume : pourquoi une reprise mammaire peut nécessiter plus qu’un simple changement d’implants.',
    interventionSlugs: ['augmentation-mammaire-par-protheses', 'lifting-mammaire'],
    primaryKeyword: 'reprise augmentation mammaire Tunisie',
    content_blocks: [
      {
        type: 'image',
        url: '/images/blog/reprise-augmentation-mammaire.webp',
        alt: 'Illustration des problèmes pouvant motiver une reprise d’augmentation mammaire : ptose, coque, asymétrie ou changement de loge',
        layout: 'full',
      },
      {
        type: 'paragraph',
        text: 'Lorsqu’une augmentation mammaire ancienne ne correspond plus au résultat souhaité, la première idée est souvent de « changer les prothèses ». Pourtant, le problème ne vient pas toujours de l’implant lui-même.',
      },
      {
        type: 'section',
        heading: 'Il faut analyser l’enveloppe mammaire',
        text: 'Avec le temps, la peau, la glande et le sillon sous-mammaire peuvent évoluer. Grossesses, variations de poids et vieillissement peuvent modifier la relation entre l’implant et les tissus.',
      },
      {
        type: 'section',
        heading: 'Le problème peut venir de la loge',
        text: 'Un implant peut être trop bas, trop latéral ou présenter une position inadaptée. Une reprise peut alors nécessiter un travail de la loge et pas uniquement le remplacement de la prothèse.',
      },
      {
        type: 'section',
        heading: 'Et en cas de ptose ?',
        text: 'Lorsque le sein est descendu autour de l’implant, un lifting mammaire peut être nécessaire. Mettre simplement un implant plus volumineux pour « remplir » la peau peut alourdir davantage le sein.',
      },
      {
        type: 'section',
        heading: 'La capsule doit parfois être traitée',
        text: 'En présence d’une contracture capsulaire ou d’autres anomalies de la capsule, la stratégie doit être adaptée au contexte clinique et aux examens.',
      },
      {
        type: 'section',
        heading: 'Une reprise sur mesure',
        text: 'Une chirurgie mammaire secondaire doit répondre à plusieurs questions : état des implants, qualité des tissus, position du sillon, capsule, volume souhaité et cicatrices existantes. C’est cette analyse qui détermine le plan opératoire.',
      },
    ],
  }),
  post(7, {
    slug: 'abdominoplastie-apres-grossesse-tunisie',
    title: 'Abdominoplastie après grossesse : quand peut-on l’envisager ?',
    description:
      'Diastasis, excès de peau, poids stable : quand envisager une abdominoplastie après une grossesse et pourquoi il faut laisser le corps se stabiliser.',
    seo_title: 'Abdominoplastie après grossesse en Tunisie | Dr Sirine Soussi',
    seo_description:
      'Diastasis, excès de peau, poids stable : quand envisager une abdominoplastie après une grossesse et pourquoi il faut laisser le corps se stabiliser.',
    interventionSlugs: ['abdominoplastie'],
    primaryKeyword: 'abdominoplastie après grossesse',
    content_blocks: [
      {
        type: 'image',
        url: '/images/blog/abdominoplastie-apres-grossesse.webp',
        alt: 'Illustration anatomique de la paroi abdominale et du relâchement cutané après une grossesse',
        layout: 'full',
      },
      {
        type: 'paragraph',
        text: 'Après une grossesse, l’abdomen peut présenter un excès cutané, un relâchement de la paroi, un diastasis des muscles droits ou des amas graisseux localisés. Lorsque ces modifications persistent, une abdominoplastie peut être discutée.',
      },
      {
        type: 'section',
        heading: 'Pourquoi ne pas opérer trop tôt ?',
        text: 'Le corps continue d’évoluer après l’accouchement. Le poids, les hormones, la peau et la paroi abdominale ont besoin de temps pour se stabiliser. Une intervention réalisée trop précocement risque de traiter une anatomie encore changeante.',
      },
      {
        type: 'section',
        heading: 'Quel rôle joue le poids ?',
        text: 'Un poids stable, proche de l’objectif personnel de la patiente, facilite une indication plus précise et contribue à la stabilité du résultat.',
      },
      {
        type: 'section',
        heading: 'Et si une nouvelle grossesse est prévue ?',
        text: 'Une grossesse après abdominoplastie reste possible, mais elle peut distendre à nouveau la peau et la paroi abdominale. Lorsque d’autres grossesses sont envisagées à court ou moyen terme, il est généralement plus logique de différer l’intervention.',
      },
      {
        type: 'section',
        heading: 'Liposuccion ou abdominoplastie ?',
        text: 'La liposuccion traite la graisse, pas un excès important de peau ni un diastasis. Lorsque plusieurs problèmes coexistent, une abdominoplastie associée à une liposuccion ciblée peut être plus adaptée.',
      },
      {
        type: 'section',
        heading: 'Une chirurgie de reconstruction de la silhouette',
        text: 'L’objectif n’est pas de retrouver artificiellement un « corps d’avant », mais de corriger de manière réaliste les modifications anatomiques persistantes après les grossesses.',
      },
    ],
  }),
  post(8, {
    slug: 'chirurgie-apres-perte-poids-tunisie',
    title: 'Après une perte de poids importante : quelles chirurgies et dans quel ordre ?',
    description:
      'Abdomen, seins, bras, cuisses : après une perte de poids importante, comment organiser les chirurgies de remodelage corporel en toute sécurité ?',
    seo_title: 'Chirurgie après perte de poids en Tunisie | Dr Sirine Soussi',
    seo_description:
      'Abdomen, seins, bras, cuisses : après une perte de poids importante, comment organiser les chirurgies de remodelage corporel en toute sécurité ?',
    interventionSlugs: ['body-lift', 'lifting-des-bras', 'lifting-des-cuisses'],
    primaryKeyword: 'chirurgie après perte de poids Tunisie',
    content_blocks: [
      {
        type: 'image',
        url: '/images/blog/chirurgie-apres-perte-poids.webp',
        alt: 'Illustration des zones pouvant présenter un excès cutané après une perte de poids importante',
        layout: 'full',
      },
      {
        type: 'paragraph',
        text: 'Une perte de poids importante peut améliorer considérablement la santé et la mobilité, mais laisser des excès cutanés au niveau de l’abdomen, des seins, des bras, des cuisses ou du dos.',
      },
      {
        type: 'section',
        heading: 'Pourquoi attendre un poids stable ?',
        text: 'Si le poids continue de diminuer, la quantité et la localisation de l’excès cutané peuvent encore changer. Une période de stabilité permet de mieux planifier la chirurgie et d’éviter d’opérer une silhouette en pleine évolution.',
      },
      {
        type: 'section',
        heading: 'Peut-on tout corriger en une seule intervention ?',
        text: 'Rarement de manière raisonnable lorsque plusieurs régions présentent un excès important. Chaque lifting corporel augmente la durée opératoire, les cicatrices et les contraintes de récupération.',
      },
      {
        type: 'section',
        heading: 'Comment choisir l’ordre ?',
        text: 'La priorité dépend de la gêne fonctionnelle, de l’importance de l’excès cutané, des attentes et des associations chirurgicales possibles. L’abdomen peut être prioritaire chez une patiente, tandis que les seins ou les bras le seront chez une autre.',
      },
      {
        type: 'section',
        heading: 'Les cicatrices sont-elles inévitables ?',
        text: 'Retirer un excès de peau important implique une cicatrice. L’enjeu est donc de placer cette cicatrice de la manière la plus discrète possible et de trouver un équilibre entre la longueur de la cicatrice et la qualité du remodelage.',
      },
      {
        type: 'section',
        heading: 'Penser le projet sur plusieurs étapes',
        text: 'Après un amaigrissement majeur, la chirurgie de silhouette doit souvent être envisagée comme un parcours. Fractionner les gestes peut permettre une récupération plus sûre et des résultats mieux maîtrisés.',
      },
    ],
  }),
].sort((a, b) => Date.parse(b.published_at ?? '') - Date.parse(a.published_at ?? ''));

export const useApprovedBlogPreview =
  import.meta.env.BLOG_PREVIEW_SERIES_2 === 'true' || import.meta.env.VERCEL_ENV === 'preview';

export function getApprovedBlogPreviewPost(slug: string) {
  return approvedBlogPreviewPosts.find((item) => item.slug === slug) ?? null;
}

export function getApprovedBlogPreviewInterventionSlugs(slug: string) {
  return getApprovedBlogPreviewPost(slug)?.interventionSlugs ?? [];
}

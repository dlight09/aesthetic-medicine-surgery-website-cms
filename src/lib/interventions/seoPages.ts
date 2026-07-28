export type SeoInterventionPageData = {
  breadcrumb: string;
  categoryLabel: string;
  h1: string;
  intro: string;
  quickFacts: { value: string; label: string }[];
  sections: {
    key: string;
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
  faq: { question: string; answer: string }[];
};

export const seoInterventionPages: Record<string, SeoInterventionPageData> = {
  "abdominoplastie": {
    "breadcrumb": "Interventions › Silhouette › Abdominoplastie",
    "categoryLabel": "Silhouette",
    "h1": "Abdominoplastie - Chirurgie du ventre plat Tunis",
    "intro": "L'abdominoplastie, également appelée plastie abdominale ou chirurgie du ventre plat, est l'intervention de référence pour corriger durablement le relâchement cutané abdominal, le diastasis des muscles grands droits et les vergetures sous-ombilicales. Ces situations - fréquentes après une grossesse ou un amaigrissement important - ne peuvent être corrigées ni par le sport, ni par un régime. Réalisée sous anesthésie générale à Tunis, l'abdominoplastie permet de retrouver un ventre plat, tonique et harmonieux, avec une cicatrice basse dissimulée dans le maillot de bain.",
    "quickFacts": [
      {
        "value": "2–3h",
        "label": "Durée"
      },
      {
        "value": "Générale",
        "label": "Anesthésie"
      },
      {
        "value": "1 nuit",
        "label": "Hospitalisation"
      },
      {
        "value": "4–6 sem.",
        "label": "Convalescence"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE L'ABDOMINOPLASTIE ?",
        "paragraphs": [
          "L'abdominoplastie, ou plastie abdominale, remodèle la paroi abdominale par trois gestes complémentaires : la résection de l'excès de peau et de graisse sous-cutanée, la plication (resserrement) des muscles grands droits en cas de diastasis, et le repositionnement du nombril. Le résultat est un ventre plat, une taille affinée et une silhouette harmonisée.",
          "Elle ne se substitue pas à une perte de poids : elle traite les séquelles que ni le sport ni le régime ne peuvent corriger. La décision est prise après un examen clinique précis qui évalue la qualité de la peau, le degré de relâchement musculaire et la quantité de tissu à réséquer.",
          "L'abdominoplastie et la lipoaspiration se complètent parfaitement. Une lipoaspiration des flancs peut être associée dans le même temps opératoire pour affiner la taille et optimiser l'harmonie du résultat. Ce point est évalué lors de la consultation."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "L'abdominoplastie est contre-indiquée en cas de projet de grossesse à court terme - une grossesse après l'intervention peut altérer le résultat. Elle est également déconseillée en cas d'obésité active, de pathologie vasculaire abdominale ou de cicatrices abdominales complexes. Ces éléments sont évalués lors de la consultation."
        ],
        "bullets": [
          "Excès de peau abdominal après grossesse(s) ou amaigrissement important",
          "Diastasis des muscles grands droits - ventre bombé malgré un poids normal",
          "Vergetures importantes situées sous le nombril",
          "Poids stable depuis au moins 6 mois, sans projet de grossesse à court terme",
          "Non-fumeuse ou sevrée depuis au moins 1 mois"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "La consultation comprend un examen clinique debout et couché : évaluation de la quantité et de la qualité de peau en excès, recherche d'un diastasis par palpation, analyse des cicatrices existantes (césarienne, appendicite) et de la morphologie globale. Nous discutons ensemble de vos attentes et du plan chirurgical le plus adapté à votre anatomie.",
          "Selon votre cas, je peux vous proposer une abdominoplastie standard, une mini-abdominoplastie (excès limité sous le nombril), ou une abdominoplastie haute tension pour un résultat plus marqué. Une lipoaspiration associée est discutée si nécessaire.",
          "Délai légal de réflexion de 15 jours entre la remise du devis et l'intervention. Un compte-rendu de consultation et un devis détaillé vous sont remis à l'issue de chaque consultation."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique complet et consultation anesthésique dans les 30 jours précédant l'intervention",
          "Tabac : Arrêt total du tabac au moins 1 mois avant et 1 mois après - risque majeur de nécrose cutanée",
          "Médicaments : Arrêt de l'aspirine, des anti-inflammatoires et de la vitamine E 10 jours avant",
          "Contraception : Arrêt de la contraception orale si possible 1 mois avant - à valider avec votre médecin traitant",
          "Jeûne : Jeûne strict à partir de minuit la veille de l'intervention",
          "Gaine : Achat d'une gaine abdominale de maintien sur prescription - à porter dès le lendemain",
          "Domicile : Préparer votre domicile en position semi-assise - installer les essentiels à portée de main",
          "Organisation : Prévoir un accompagnateur pour le retour et une aide les premiers jours"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'abdominoplastie est réalisée sous anesthésie générale, en position allongée. Elle comprend quatre temps opératoires : une incision horizontale basse tracée au-dessus du pubis (dissimulée dans le maillot), le décollement du lambeau cutané jusqu'aux côtes, la plication des muscles grands droits si diastasis présent, et la résection de l'excès de peau avec repositionnement du nombril à sa hauteur anatomique.",
          "L'incision est tracée méticuleusement pour être la plus basse et la plus courte possible. Le nombril est repositionné dans une nouvelle boutonnière cutanée, avec un soin particulier apporté à son aspect naturel. La fermeture est réalisée couche par couche avec une suture intradermique soignée.",
          "La cicatrice est horizontale, basse, tracée au niveau du pli pubien. Elle est conçue pour être entièrement dissimulée sous les sous-vêtements et le maillot de bain. Sa qualité évolue favorablement sur 12 à 18 mois."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "1 nuit en clinique - sortie le lendemain matin après visite",
          "Accompagnateur obligatoire pour le retour à domicile",
          "Arrêt de travail de 2 à 3 semaines selon l'activité professionnelle",
          "Conduite déconseillée pendant les 10 premiers jours",
          "Position semi-fléchie recommandée les 5 à 7 premiers jours"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J3 : Douleurs modérées, position semi-fléchie. Gaine abdominale en place. Premiers soins infirmiers des cicatrices.",
          "Semaine 1–2 : Résorption progressive des ecchymoses. Marche possible dès J2 mais position redressée progressive. Soins quotidiens des cicatrices.",
          "Semaine 3–4 : Reprise des activités légères. Port de gaine obligatoire. Reprise d'un travail de bureau possible dès S3.",
          "Mois 1–3 : Disparition de l'œdème résiduel. Assouplissement de la cicatrice. Massage cicatriciel recommandé dès J21.",
          "Mois 3–6 : Résultat définitif. Reprise progressive du sport (marche, natation). Musculation abdominale après le 6e mois."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION DANS LE TEMPS",
        "paragraphs": [
          "Le résultat est visible dès les premières semaines et s'apprécie pleinement à 6 mois, une fois l'œdème résorbé et les cicatrices stabilisées : ventre plat, taille affinée, vergetures sous-ombilicales effacées. La durabilité est excellente à poids stable - une prise de poids ou une grossesse ultérieure peut en altérer le bénéfice.",
          "Les cicatrices évoluent sur 12 à 18 mois, passant du rouge rosé au blanc nacré. Leur qualité finale dépend du terrain cutané, de l'arrêt du tabac et de la régularité des soins post-opératoires."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome post-opératoire",
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Réaction à l'anesthésie",
          "RISQUES GÉNÉRAUX : Thrombose veineuse (prévention anticoagulants)",
          "RISQUES GÉNÉRAUX : Cicatrice hypertrophique ou chéloïde",
          "RISQUES SPÉCIFIQUES : Nécrose cutanée partielle (tabagisme ++)",
          "RISQUES SPÉCIFIQUES : Désunion de cicatrice dans le pli pubien",
          "RISQUES SPÉCIFIQUES : Asymétrie du nombril ou cicatrice ombelicale inesthétique",
          "RISQUES SPÉCIFIQUES : Hypo-sensibilité cutanée sous-ombilicale (transitoire)",
          "RISQUES SPÉCIFIQUES : Sérome (épanchement liquidien sous le lambeau)",
          "RISQUES SPÉCIFIQUES : Correction insuffisante nécessitant une retouche",
          "RISQUES SPÉCIFIQUES : L'arrêt total du tabac est la mesure préventive la plus efficace contre la nécrose cutanée - complication rare mais grave. C'est une exigence absolue dans ma pratique : je n'opère pas les patientes non sevrées."
        ]
      }
    ],
    "faq": [
      {
        "question": "L'abdominoplastie fait-elle maigrir ?",
        "answer": "Non. Elle traite l'excès de peau et le relâchement musculaire - pas la surcharge pondérale. Elle se pratique idéalement sur un poids stable et ne remplace pas une perte de poids. On estime une perte de 2 à 4 kg de tissu résécqué en moyenne, non significative sur le poids global."
      },
      {
        "question": "Peut-on associer une liposuccion à l'abdominoplastie ?",
        "answer": "Oui, dans certains cas. Une lipoaspiration des flancs peut être réalisée dans le même temps pour affiner la taille et optimiser l'harmonie. Cette décision est prise en consultation selon votre morphologie et la vascularisation du lambeau cutané."
      },
      {
        "question": "Combien de temps faut-il porter la gaine ?",
        "answer": "La gaine abdominale est portée en continu pendant 4 à 6 semaines, puis progressivement allégée. Elle est indispensable pour limiter l'œdème, soutenir la paroi abdominale et améliorer la qualité cicatricielle."
      },
      {
        "question": "Peut-on tomber enceinte après une abdominoplastie ?",
        "answer": "Une grossesse après abdominoplastie est possible, mais elle peut modifier le résultat. Il est fortement recommandé d'attendre d'avoir terminé ses grossesses avant de recourir à cette intervention."
      },
      {
        "question": "Quand peut-on reprendre le sport ?",
        "answer": "Les activités douces (marche, natation) sont reprises progressivement à partir du 3e mois. La musculation abdominale et les sports à impact sont déconseillés avant le 6e mois pour respecter la consolidation de la plication musculaire."
      }
    ]
  },
  "augmentation-mammaire-par-protheses": {
    "breadcrumb": "Interventions › Seins › Augmentation mammaire par prothèses",
    "categoryLabel": "Seins",
    "h1": "Augmentation mammaire par prothèses - Tunis",
    "intro": "L'augmentation mammaire par pose de prothèses est l'une des interventions de chirurgie esthétique les plus réalisées dans le monde. Elle permet d'augmenter le volume de la poitrine, de corriger une hypotrophie mammaire, de rééquilibrer une asymétrie ou de redonner du galbe après une perte de volume consécutive à une grossesse ou un amaigrissement. Réalisée sous anesthésie générale, elle offre des résultats naturels et durables lorsque le choix des implants et la technique chirurgicale sont parfaitement adaptés à votre morphologie.",
    "quickFacts": [
      {
        "value": "1h–1h30",
        "label": "Durée"
      },
      {
        "value": "Générale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire\nou 1 nuit",
        "label": "Hospitalisation"
      },
      {
        "value": "4–6 sem.",
        "label": "Convalescence"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE L'AUGMENTATION MAMMAIRE PAR PROTHÈSES ?",
        "paragraphs": [
          "La pose d'implants mammaires consiste à placer une prothèse en gel de silicone cohésif derrière la glande mammaire ou sous le muscle grand pectoral, selon votre morphologie et le résultat souhaité. Les implants utilisés sont des dispositifs médicaux certifiés, dont les caractéristiques - volume, forme, projection, texture - sont choisies spécifiquement pour chaque patiente en consultation.",
          "L'objectif n'est pas d'obtenir un résultat spectaculaire à tout prix, mais une poitrine proportionnée, naturelle, en harmonie avec votre silhouette. C'est cette philosophie qui guide chacune de mes indications : proposer le bon implant pour la bonne patiente, sans excès.",
          "Les prothèses mammaires utilisées sont en gel de silicone cohésif de dernière génération, certifiées CE et conformes aux normes européennes les plus strictes. Elles ne contiennent pas de silicone liquide."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "L'augmentation mammaire est contre-indiquée en cas de suspicion de lésion mammaire non explorée, de grossesse ou d'allaitement en cours, de tabagisme non sevré, ou d'antécédents de pathologie du tissu conjonctif. Un bilan sénologique (échographie mammaire) est systématiquement requis avant toute décision."
        ],
        "bullets": [
          "L'augmentation mammaire est indiquée dans les situations suivantes :",
          "Hypotrophie mammaire constitutionnelle - poitrine naturellement petite ou peu développée",
          "Perte de volume après grossesse, allaitement ou amaigrissement important",
          "Asymétrie mammaire notable nécessitant une correction",
          "Seins tubéreux ou morphologie mammaire particulière nécessitant un remodelage",
          "Patiente majeure, stable psychologiquement, avec des attentes réalistes et clairement exprimées"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "La consultation est un moment fondamental. Je prends le temps d'écouter vos attentes, d'examiner votre poitrine - volume, forme, asymétrie, qualité cutanée, distance inter-mamelonnaire, morphologie thoracique - et de définir avec vous le projet chirurgical le plus adapté.",
          "Le choix de la prothèse fait l'objet d'une discussion approfondie : forme ronde ou anatomique (en goutte d'eau), volume en centilitres, projection, texture lisse ou micro-texturée, et position de mise en place. Des essayeurs de volumes peuvent être utilisés pour vous aider à visualiser le résultat attendu.",
          "Le choix de la voie d'abord - sous-mammaire (dans le pli naturel), péri-aréolaire (autour de l'aréole) ou axillaire (dans le creux de l'aisselle) - est décidé en fonction de votre anatomie et de vos préférences esthétiques concernant la cicatrice.",
          "Délai légal de réflexion de 15 jours obligatoire entre la remise du devis et l'intervention. Un compte-rendu de consultation et un devis détaillé vous sont remis."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique complet et consultation anesthésique dans les 30 jours précédant l'intervention",
          "Imagerie : Échographie mammaire ou mammographie selon l'âge et les antécédents",
          "Tabac : Arrêt total du tabac au moins 1 mois avant et 1 mois après",
          "Médicaments : Arrêt de l'aspirine, des anti-inflammatoires et de la vitamine E 10 jours avant",
          "Contraception : Arrêt de la contraception orale si possible 1 mois avant - à discuter avec votre médecin",
          "Jeûne : Jeûne strict à partir de minuit la veille de l'intervention",
          "Soutien-gorge : Prévoir un soutien-gorge de contention sans armatures sur prescription, à porter dès le réveil",
          "Organisation : Prévoir un accompagnateur pour le retour - levée des bras déconseillée les premiers jours"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention dure entre 1 heure et 1h30 sous anesthésie générale. Elle se déroule en position semi-assise, ce qui permet au chirurgien d'évaluer la symétrie et le positionnement des implants en conditions proches de la position debout.",
          "Après réalisation de l'incision choisie, une loge est créée pour accueillir l'implant. Selon les cas, la prothèse est placée en position rétro-glandulaire (entre la glande et le muscle), rétro-musculaire (sous le muscle grand pectoral) ou en dual-plane (hybride des deux). Chaque position présente ses avantages selon votre morphologie et la quantité de tissu mammaire disponible.",
          "L'implant est mis en place et ajusté, la symétrie est vérifiée. La fermeture est réalisée couche par couche avec un soin particulier apporté à la tension et à la qualité de la suture cutanée.",
          "Position rétro-glandulaire : résultat plus naturel, récupération plus rapide. Conseillée si vous avez une glande mammaire suffisante pour couvrir l'implant. Position rétro-musculaire : implant mieux couvert, moins palpable. Conseillée pour les poitrines hypotrophiques à faible tissu glandulaire."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "Ambulatoire dans la majorité des cas (retour à domicile le soir) ou 1 nuit en clinique selon les préférences",
          "Accompagnateur obligatoire pour le retour à domicile",
          "Arrêt de travail de 5 à 10 jours selon l'activité professionnelle",
          "Conduite déconseillée pendant 7 jours",
          "Éviter tout port de charges et mouvements de levée des bras les 3 premières semaines"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J3 : Douleurs modérées à type de tension ou de courbatures thoraciques. Traitement antalgique adapté. Soutien-gorge de contention en place 24h/24.",
          "Semaine 1–2 : Régression des ecchymoses et de la sensation de tension. Les bras retrouvent progressivement leur mobilité. Soin des cicatrices dès J8.",
          "Semaine 2–4 : Reprise des activités légères. Le soutien-gorge sans armatures est maintenu 6 semaines. Les implants commencent à se placer naturellement.",
          "Mois 1–3 : L'œdème résiduel se résorbe. Les prothèses s'assouplit et descendent légèrement pour adopter leur position définitive.",
          "Mois 3–6 : Résultat définitif apprécié. Reprise sportive progressive à partir du 2e mois (sport doux) et du 3e mois (sport intensif)."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION DANS LE TEMPS",
        "paragraphs": [
          "Le résultat est immédiatement visible, mais il faut attendre 3 à 6 mois pour apprécier le résultat définitif, une fois les prothèses bien positionnées et l'œdème résorbé. La poitrine est alors plus volumineuse, galbée, proportionnée - et naturelle au toucher.",
          "Les cicatrices évoluent favorablement sur 12 à 18 mois. Bien placées et soignées, elles deviennent discrètes voire imperceptibles selon la voie d'abord choisie.",
          "Les implants en silicone cohésif de dernière génération n'ont pas de durée de vie fixe. Ils ne doivent pas être changés systématiquement. Un suivi annuel par échographie est recommandé pour s'assurer de leur bon état."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome post-opératoire",
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Réaction à l'anesthésie",
          "RISQUES GÉNÉRAUX : Thrombose veineuse (prévention par anticoagulants)",
          "RISQUES SPÉCIFIQUES : Coque péri-prothétique (capsule fibreuse autour de l'implant)",
          "RISQUES SPÉCIFIQUES : Asymétrie de position ou de volume",
          "RISQUES SPÉCIFIQUES : Hypo-sensibilité du mamelon (transitoire ou persistante)",
          "RISQUES SPÉCIFIQUES : Rupture de l'implant (exceptionnelle avec les implants actuels)",
          "RISQUES SPÉCIFIQUES : Rippling (plissement visible ou palpable)",
          "RISQUES SPÉCIFIQUES : Infection péri-prothétique nécessitant l'ablation temporaire",
          "RISQUES SPÉCIFIQUES : La coque péri-prothétique (contracture capsulaire) est la complication la plus fréquente à long terme. Elle se manifeste par un durcissement progressif du sein. Sa prévention passe par le choix d'implants de qualité, une technique rigoureuse et un suivi régulier."
        ]
      }
    ],
    "faq": [
      {
        "question": "Prothèse ronde ou anatomique - quelle différence ?",
        "answer": "Les prothèses rondes remplissent davantage le décolleté et donnent une poitrine plus galbée en haut. Les prothèses anatomiques (en forme de goutte) reproduisent la pente naturelle du sein et donnent un résultat plus discret. Le choix dépend de votre morphologie et de vos attentes - il est fait ensemble en consultation."
      },
      {
        "question": "Faut-il changer les prothèses au bout de 10 ans ?",
        "answer": "Non, cette idée est dépassée. Les implants en silicone cohésif modernes n'ont pas de durée de vie fixe. Ils sont changés uniquement en cas de complication ou de désir de changement de volume. Un suivi annuel par échographie est suffisant."
      },
      {
        "question": "L'augmentation mammaire empêche-t-elle l'allaitement ?",
        "answer": "Dans la grande majorité des cas, non. Les implants placés en rétro-glandulaire ou rétro-musculaire n'interfèrent pas avec la glande mammaire ni les canaux galactophores. La voie péri-aréolaire peut, dans certains cas, affecter la sensibilité du mamelon."
      },
      {
        "question": "Peut-on faire une mammographie avec des prothèses ?",
        "answer": "Oui. Il est important de signaler la présence de prothèses au radiologue, qui adaptera le protocole de la mammographie. Les implants ne masquent pas complètement le tissu mammaire, mais nécessitent des incidences supplémentaires."
      },
      {
        "question": "Quelle taille de prothèse choisir ?",
        "answer": "Le volume ne se choisit pas en bonnets mais en centilitres (cc), sur la base de vos mensurations thoraciques, de la largeur de votre base mammaire et de votre objectif esthétique. Des essayeurs de volume sont disponibles en consultation pour vous aider à visualiser le résultat."
      },
      {
        "question": "Quand peut-on reprendre le sport après une augmentation mammaire ?",
        "answer": "Les activités douces (marche) peuvent reprendre dès 2 à 3 semaines. La natation est possible à partir du 2e mois. Les sports intenses sollicitant les pectoraux (musculation, crossfit) sont déconseillés avant le 3e mois."
      }
    ]
  },
  "blepharoplastie": {
    "breadcrumb": "Interventions › Visage › Blépharoplastie",
    "categoryLabel": "Visage",
    "h1": "Blépharoplastie - Chirurgie des paupières Tunis",
    "intro": "La blépharoplastie est la chirurgie des paupières - l'une des interventions de rajeunissement facial les plus efficaces et les plus demandées. Elle permet de corriger les paupières tombantes, les poches sous les yeux, et l'excès de peau qui donne un regard fatigué, vieilli ou triste. Discrète, précise, avec des résultats immédiats et durables, la chirurgie des paupières redonne au regard son éclat naturel. Elle peut être réalisée sur les paupières supérieures, inférieures, ou les quatre à la fois.",
    "quickFacts": [
      {
        "value": "45min–1h30",
        "label": "Durée"
      },
      {
        "value": "Locale\nou générale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire",
        "label": "Hospitalisation"
      },
      {
        "value": "1–3 mois",
        "label": "Résultat définitif"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LA BLÉPHAROPLASTIE ?",
        "paragraphs": [
          "La blépharoplastie consiste à corriger les anomalies des paupières liées au vieillissement ou à l'hérédité. Sur les paupières supérieures, elle traite l'excès de peau (dermatochalasis), les poches graisseuses internes, et le ptosis (chute de la paupière par faiblesse du muscle releveur). Sur les paupières inférieures, elle traite les poches à graisse (graisses herniées) et les cernes creux.",
          "On distingue deux techniques pour les paupières inférieures : la voie cutanée (incision sous le cil, pour les cas avec excès cutané associé) et la voie transconjonctivale (incision à l'intérieur de la paupière, sans cicatrice visible - idéale pour les jeunes patients ayant des poches sans excès cutané).",
          "La blépharoplastie est souvent associée au lifting cervico-facial pour un rajeunissement global du visage, ou à un lipofilling des creux palpébraux (cernes creux) pour un résultat plus complet et plus naturel."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "Avant toute blépharoplastie inférieure, un test de Schirmer (mesure de la sécrétion lacrymale) et une évaluation du tonus palpébral sont recommandés. Un œil sec sévère ou un tonus palpébral insuffisant peuvent contre-indiquer certaines techniques. Ces éléments sont évalués en consultation."
        ],
        "bullets": [
          "Paupières supérieures tombantes donnant un regard lourd ou triste",
          "Excès de peau supérieure gênant le champ visuel (indication fonctionnelle)",
          "Poches à graisse sous les yeux persistantes malgré le repos",
          "Cernes creux ou sillons lacrymo-jugaux marqués (lipofilling associé)",
          "Ptosis (paupière tombante par faiblesse musculaire) - correction du muscle releveur"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "L'examen clinique évalue l'excès cutané de chaque paupière, la quantité et la localisation des poches graisseuses, la tonicité du muscle orbiculaire, la présence d'un ptosis associé, et la qualité du film lacrymal. L'asymétrie entre les deux côtés est analysée avec précision. Le projet chirurgical est établi ensemble, avec une explication détaillée de la technique, des cicatrices et du résultat attendu.",
          "Délai légal de 15 jours entre la remise du devis et l'intervention."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique et consultation anesthésique (si anesthésie générale)",
          "Tabac : Arrêt du tabac au moins 1 mois avant",
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant - risque d'hématome majoré",
          "Jeûne : Jeûne à partir de minuit si anesthésie générale - pas nécessaire si anesthésie locale pure",
          "Lentilles : Enlever les lentilles de contact avant l'intervention et les 2 semaines suivantes",
          "Maquillage : Éviter le maquillage les yeux le jour de l'intervention"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "Blépharoplastie supérieure : réalisée sous anesthésie locale avec ou sans sédation, elle dure 45 minutes à 1 heure. L'incision est tracée dans le pli naturel de la paupière supérieure, invisible à l'ouverture de l'œil. L'excès cutané est réséqué avec précision, les poches graisseuses retirées ou redistribuées, et la fermeture réalisée avec des sutures très fines. En cas de ptosis, une plication du muscle releveur est réalisée dans le même temps.",
          "Blépharoplastie inférieure par voie transconjonctivale : l'incision est réalisée à l'intérieur de la paupière, sans cicatrice visible. Les poches graisseuses sont retirées ou redistribuées dans le sillon lacrymo-jugal. Un lipofilling peut être associé pour corriger les creux. Cette technique est idéale pour les patients jeunes sans excès cutané.",
          "Blépharoplastie inférieure par voie cutanée : l'incision sous-ciliaire (dans le pli sous les cils) permet de réséquer l'excès de peau en association avec le traitement des poches. Elle est indiquée en cas de dermatochalasis inférieur associé."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "Ambulatoire dans tous les cas - retour à domicile le jour même",
          "Arrêt de travail de 7 à 10 jours",
          "Compresses froides les premières 48 heures",
          "Collyre lubrifiant prescrit les 2 premières semaines",
          "Éviter l'écran et la lecture les 3 premiers jours",
          "Protection solaire des cicatrices pendant 3 mois"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J3 : Ecchymoses et œdème palpébraux, larmoiement possible. Compresses froides. Collyres lubrifiants.",
          "Semaine 1 : Ablation des fils vers J5–J7. Régression rapide des ecchymoses. Reprise d'un travail de bureau possible.",
          "Semaine 2–3 : Disparition des ecchymoses. L'œil reprend son éclat. Maquillage possible dès J7–J10.",
          "Mois 1–3 : Cicatrices qui s'estompent progressivement. Résultat définitif apprécié à 1–3 mois."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Les résultats de la blépharoplastie sont parmi les plus immédiats et les plus spectaculaires de la chirurgie esthétique du visage. Dès la première semaine, le regard est ouvert, reposé, rajeuni. Le résultat définitif s'apprécie à 1 à 3 mois. Les cicatrices supérieures deviennent invisibles dans le pli naturel. Les cicatrices inférieures sous-ciliaires sont imperceptibles en 3 à 6 mois.",
          "La durabilité est excellente : 8 à 15 ans selon l'âge, la qualité cutanée et le vieillissement individuel. Les poches graisseuses retirées ne récidivent pas. Un excès cutané peut se reformer avec les années - une retouche limitée est alors possible."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome palpébral",
          "RISQUES GÉNÉRAUX : Infection",
          "RISQUES GÉNÉRAUX : Réaction anesthésique",
          "RISQUES GÉNÉRAUX : Larmoiement transitoire",
          "RISQUES SPÉCIFIQUES : Lagophtalmie (fermeture incomplète) - transitoire si résection cutanée modérée",
          "RISQUES SPÉCIFIQUES : Sécheresse oculaire (aggravation d'un syndrome préexistant)",
          "RISQUES SPÉCIFIQUES : Cicatrice visible ou hypertrophique",
          "RISQUES SPÉCIFIQUES : Asymétrie résiduelle",
          "RISQUES SPÉCIFIQUES : Ectropion inférieur (retournement de la paupière - rare, prévenu par le test de tonus)",
          "RISQUES SPÉCIFIQUES : Diplopie transitoire (vision double - très rare)"
        ]
      }
    ],
    "faq": [
      {
        "question": "La blépharoplastie change-t-elle la forme des yeux ?",
        "answer": "Non. L'objectif est de corriger l'excès cutané et les poches sans modifier la forme ni l'expression du regard. Une blépharoplastie bien réalisée donne un œil plus ouvert et reposé - pas un œil différent."
      },
      {
        "question": "Peut-on opérer les 4 paupières en même temps ?",
        "answer": "Oui, les quatre paupières peuvent être traitées dans le même temps opératoire. C'est fréquemment proposé pour un résultat global harmonieux du regard."
      },
      {
        "question": "La blépharoplastie est-elle prise en charge ?",
        "answer": "La blépharoplastie supérieure peut être fonctionnelle (champ visuel réduit par les paupières tombantes) et prise en charge partiellement dans certains systèmes de santé. En Tunisie, la chirurgie est réalisée dans un cadre privé. Un devis détaillé vous est remis en consultation."
      },
      {
        "question": "Peut-on porter des lentilles après une blépharoplastie ?",
        "answer": "Les lentilles sont déconseillées pendant les 2 premières semaines. Elles peuvent ensuite être reprises progressivement, selon l'évolution de la sécheresse oculaire post-opératoire."
      }
    ]
  },
  "body-lift": {
    "breadcrumb": "Interventions › Silhouette › Body lift",
    "categoryLabel": "Silhouette",
    "h1": "Body lift - Lifting corporel circulaire Tunis",
    "intro": "Le body lift, ou lifting corporel circulaire, est l'intervention la plus complète pour traiter les excès cutanés circulaires de la silhouette après une perte de poids massive. En une seule procédure, il permet de remodeler simultanément l'abdomen, les flancs, les fesses tombantes et la face externe des cuisses. C'est l'intervention de référence après une chirurgie bariatrique ou un amaigrissement important, lorsque la peau relâchée s'étend sur l'ensemble de la ceinture. Elle requiert une préparation rigoureuse et un suivi post-opératoire attentif.",
    "quickFacts": [
      {
        "value": "4–6h",
        "label": "Durée"
      },
      {
        "value": "Générale",
        "label": "Anesthésie"
      },
      {
        "value": "2–3 nuits",
        "label": "Hospitalisation"
      },
      {
        "value": "6–8 sem.",
        "label": "Convalescence"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LE BODY LIFT ?",
        "paragraphs": [
          "Le lifting corporel circulaire consiste à réséquer une bande circulaire de peau et de tissu sous-cutané en excès autour de la totalité de la ceinture abdominale. Il traite en même temps le ventre, les hanches, les flancs, les fesses tombantes et la face externe des cuisses. C'est une chirurgie majeure, réservée aux patients dont le poids est stable depuis au moins 12 à 18 mois après une perte de poids massive.",
          "Selon l'étendue des corrections souhaitées, un geste de plicature musculaire abdominale (traitement du diastasis) et une lipoaspiration complémentaire peuvent être associés dans le même temps opératoire."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "Le body lift est une intervention majeure dont la durée et les suites opératoires sont significatives. Elle nécessite un bilan préopératoire approfondi, un avis cardiologique et une préparation nutritionnelle rigoureuse. Elle est réservée aux patients dont le poids est stable depuis au moins 12 mois et qui présentent un état nutritionnel optimal."
        ],
        "bullets": [
          "Perte de poids massive stabilisée depuis au moins 12 à 18 mois",
          "Excès cutané circulaire touchant l'ensemble de la ceinture abdominale",
          "État nutritionnel satisfaisant - bilan nutritionnel indispensable après chirurgie bariatrique",
          "Absence totale de tabagisme - exigence absolue",
          "Bonne santé générale permettant de supporter une intervention longue"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "La consultation comprend un examen clinique complet debout et couché, avec évaluation de l'excès cutané sur toutes les faces. Le plan chirurgical est discuté en détail : tracé des incisions, zones traitées, gestes associés, stratégie en un ou deux temps. L'état nutritionnel (protéines, fer, vitamines B12 et D) fait l'objet d'une attention particulière, surtout chez les patientes après chirurgie bariatrique.",
          "Pour une intervention de cette envergure, je recommande plusieurs consultations pour s'assurer que toutes les conditions préopératoires sont réunies. La sécurité prime sur le délai."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique complet, nutritionnel, cardiologique et consultation anesthésique",
          "Nutrition : Bilan nutritionnel - protéines, fer, vitamines - indispensable si antécédent bariatrique",
          "Tabac : Arrêt total et définitif du tabac au moins 2 mois avant",
          "Médicaments : Arrêt de l'aspirine, des AINS et des anticoagulants 10 jours avant (sauf avis médical)",
          "Jeûne : Jeûne à partir de minuit la veille",
          "Organisation : Prévoir une aide à domicile organisée pour au moins 2 à 3 semaines après le retour",
          "Matériel : Prévoir les équipements de confort : gaine circulaire, lit adapté, aide à la mobilisation"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "Le body lift est réalisé sous anesthésie générale et dure entre 4 et 6 heures. L'intervention se déroule en deux positions : décubitus ventral pour traiter les fesses et les flancs postérieurs, puis décubitus dorsal pour l'abdomen et les flancs antérieurs. Une incision circulaire basse est réalisée, permettant la résection de la bande de peau excédentaire sur toute la circonférence.",
          "Un geste de plicature musculaire est associé sur la face antérieure si diastasis. Le repositionnement de l'ombilic est systématique. La fermeture est réalisée couche par couche avec une attention particulière à la tension des sutures et à la qualité de la cicatrice."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "2 à 3 nuits en clinique systématiquement nécessaires",
          "Accompagnateur obligatoire pour le retour",
          "Arrêt de travail de 4 à 6 semaines selon l'activité professionnelle",
          "Aide à domicile indispensable pendant 2 à 3 semaines",
          "Conduite déconseillée pendant au moins 3 semaines"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J5 : Douleurs importantes traitées par antalgiques de palier adapté. Mobilisation progressive avec aide. Gaine circulaire.",
          "Semaine 1–3 : Régression des ecchymoses et de l'œdème. Marche progressive. Port de la gaine obligatoire.",
          "Semaine 3–6 : Reprise des activités légères. Massage cicatriciel progressif. Amélioration notable du confort.",
          "Mois 2–4 : Disparition de l'œdème résiduel. Assouplissement des cicatrices. Le résultat se révèle.",
          "Mois 4–12 : Résultat définitif et évolution favorable des cicatrices. Sport repris à partir du 3e mois."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat est spectaculaire et transformateur : la silhouette est entièrement remodelée, les peaux distendues laissent place à des contours fermes et harmonieux. Le résultat définitif s'apprécie entre 6 et 12 mois. Les cicatrices, bien que longues, sont placées bas et évoluent très favorablement sur 18 à 24 mois."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome post-opératoire",
          "RISQUES GÉNÉRAUX : Infection de cicatrice",
          "RISQUES GÉNÉRAUX : Thrombose veineuse et embolie (prévention renforcée)",
          "RISQUES GÉNÉRAUX : Décompensation cardio-respiratoire (rare)",
          "RISQUES SPÉCIFIQUES : Nécrose cutanée partielle (tabac ++)",
          "RISQUES SPÉCIFIQUES : Désunion de cicatrice",
          "RISQUES SPÉCIFIQUES : Sérome volumineux",
          "RISQUES SPÉCIFIQUES : Asymétrie",
          "RISQUES SPÉCIFIQUES : Cicatrice hypertrophique",
          "RISQUES SPÉCIFIQUES : Correction insuffisante nécessitant une retouche"
        ]
      }
    ],
    "faq": [
      {
        "question": "Peut-on faire un body lift en plusieurs fois ?",
        "answer": "Oui. Selon votre état de santé et vos souhaits, le body lift peut être réalisé en deux temps : face antérieure puis face postérieure, à quelques mois d'intervalle. La stratégie est définie ensemble en consultation selon l'étendue des corrections nécessaires."
      },
      {
        "question": "Combien de temps faut-il attendre après une chirurgie bariatrique ?",
        "answer": "Il est recommandé d'attendre que le poids soit stable depuis au minimum 12 à 18 mois et que l'état nutritionnel soit optimal. Un bilan biologique complet avec dosage des protéines, de la vitamine B12, du fer et de la vitamine D est indispensable."
      },
      {
        "question": "Les cicatrices sont-elles visibles en maillot ?",
        "answer": "La cicatrice circulaire est tracée à la hauteur de la culotte, conçue pour être entièrement dissimulée sous les sous-vêtements et le maillot de bain."
      },
      {
        "question": "Combien de temps faut-il être en arrêt de travail ?",
        "answer": "L'arrêt de travail est de 4 à 6 semaines selon l'activité. Un travail de bureau peut reprendre vers la 4e semaine, les activités physiques professionnelles vers le 2e mois."
      }
    ]
  },
  "chirurgie-des-petites-levres": {
    "breadcrumb": "Interventions › Intime › Chirurgie des petites lèvres",
    "categoryLabel": "Intime",
    "h1": "Chirurgie des petites lèvres - Nymphoplastie Tunis",
    "intro": "La nymphoplastie, ou chirurgie des petites lèvres, est l'intervention indiquée lorsque les petites lèvres sont hypertrophiées - trop volumineuses, dépassant les grandes lèvres, asymétriques ou sources de gêne. Cette gêne peut être esthétique (complexe lors de l'intimité ou à la plage), fonctionnelle (frottements contre les vêtements, inconfort à vélo ou lors de la pratique sportive) ou sexuelle. Réalisée sous anesthésie locale en ambulatoire, c'est une intervention courte avec des suites légères et un impact sur la qualité de vie souvent très positif.",
    "quickFacts": [
      {
        "value": "30–45 min",
        "label": "Durée"
      },
      {
        "value": "Locale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire",
        "label": "Hospitalisation"
      },
      {
        "value": "3 mois",
        "label": "Résultat définitif"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LA NYMPHOPLASTIE ?",
        "paragraphs": [
          "La nymphoplastie consiste à réduire et remodeler les petites lèvres hypertrophiées pour les ramener à une taille proportionnée et harmonieuse. Deux techniques principales sont utilisées selon la forme et le volume de l'hypertrophie :",
          "Résection en bord libre : la portion excédentaire du bord libre de la petite lèvre est réséquée. Simple et efficace, elle conserve bien le bord naturel pigmenté.",
          "Résection cunéiforme (en V ou en Z) : une résection en forme de coin est pratiquée au niveau de la portion la plus hypertrophiée, avec un résultat esthétique excellent et un risque de déhiscence cicatricielle moindre. C'est la technique que je préfère pour la plupart des cas.",
          "La nymphoplastie ne modifie pas la sensibilité, la fonction sexuelle, ni la capacité à accoucher. Les sutures sont résorbables et disparaissent spontanément en 2 à 3 semaines. L'hygiène intime quotidienne est la seule contrainte post-opératoire principale."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "La nymphoplastie est contre-indiquée en cours de grossesse et pendant l'allaitement. Une grossesse après l'intervention est tout à fait possible et ne modifie pas le résultat dans la grande majorité des cas. Une consultation préalable est indispensable pour choisir la technique la mieux adaptée à votre anatomie."
        ],
        "bullets": [
          "Hypertrophie des petites lèvres uni ou bilatérale - symétrique ou asymétrique",
          "Gêne fonctionnelle : frottements, irritations, inconfort sportif ou vestimentaire",
          "Gêne esthétique ou complexe affectant la vie intime",
          "Patiente majeure ayant terminé sa croissance"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "La consultation se déroule dans le respect de votre intimité et de votre pudeur. J'évalue l'étendue de l'hypertrophie, sa topographie, la présence d'une asymétrie, et je vous explique la technique envisagée, le tracé des futures cicatrices et le résultat attendu. Vos attentes fonctionnelles et esthétiques sont au cœur de notre échange.",
          "Délai légal de 15 jours entre la remise du devis et l'intervention."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Hygiène : Dépilation de la zone ou rasage la veille de l'intervention",
          "Antiseptique : Savon intime antiseptique prescrit à utiliser dès la veille",
          "Jeûne : Pas de jeûne nécessaire pour anesthésie locale pure",
          "Vêtements : Prévoir des sous-vêtements amples en coton pour les premiers jours"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention est réalisée sous anesthésie locale et dure 30 à 45 minutes. Après marquage précis des zones à réséquer, la résection est effectuée au bistouri ou aux ciseaux fins, en suivant le tracé préétabli. La fermeture est réalisée avec des fils résorbables très fins - ils disparaissent spontanément en 2 à 3 semaines sans nécessiter d'ablation. Le résultat immédiat est vérifié de face et de profil pour s'assurer de la symétrie."
        ]
      },
      {
        "key": "06",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "Légères brûlures à la miction les 24 à 48 premières heures - boire abondamment",
          "Œdème local modéré pendant 5 à 10 jours - normal et attendu",
          "Toilette intime 2 fois par jour avec le savon antiseptique prescrit",
          "Vêtements amples - éviter les pantalons serrés et les sous-vêtements synthétiques pendant 3 semaines",
          "Abstinence sexuelle et sportive pendant 4 à 6 semaines",
          "Reprise du travail possible dès J2–J3 pour un travail de bureau"
        ]
      },
      {
        "key": "07",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat est immédiatement perceptible. L'appréciation définitive se fait à 3 mois, une fois l'œdème résorbé et les cicatrices stabilisées. Les petites lèvres sont harmonieuses, proportionnées, asymptomatiques. La gêne fonctionnelle disparaît dès la cicatrisation complète."
        ]
      },
      {
        "key": "08",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Hématome local",
          "RISQUES GÉNÉRAUX : Réaction au fil résorbable",
          "RISQUES SPÉCIFIQUES : Déhiscence partielle de cicatrice (ouverture spontanée - cicatrisation dirigée dans ce cas)",
          "RISQUES SPÉCIFIQUES : Asymétrie résiduelle",
          "RISQUES SPÉCIFIQUES : Résection insuffisante ou excès de résection",
          "RISQUES SPÉCIFIQUES : Hypo-sensibilité transitoire du bord libre",
          "RISQUES SPÉCIFIQUES : Cicatrice rétractile (rare)"
        ]
      }
    ],
    "faq": [
      {
        "question": "La nymphoplastie est-elle douloureuse ?",
        "answer": "Non. Réalisée sous anesthésie locale, l'intervention est indolore. Les suites sont très légères : une légère gêne et quelques brûlures les 24–48 premières heures, facilement soulagées par des antalgiques simples."
      },
      {
        "question": "Les fils se voient-ils ?",
        "answer": "Non. Les fils utilisés sont résorbables, très fins, et disparaissent spontanément en 2 à 3 semaines sans ablation. Ils ne nécessitent aucun soin particulier en dehors de la toilette intime quotidienne."
      },
      {
        "question": "Peut-on accoucher normalement après une nymphoplastie ?",
        "answer": "Oui. La nymphoplastie ne modifie pas la capacité à accoucher par voie basse. Les tissus cicatriciels sont souples et s'adaptent à l'accouchement. Une grossesse après l'intervention est possible sans contre-indication."
      },
      {
        "question": "Quand peut-on reprendre les rapports sexuels ?",
        "answer": "L'abstinence sexuelle est recommandée pendant 4 à 6 semaines, le temps que la cicatrisation soit complète et les tissus bien assouplis."
      }
    ]
  },
  "correction-du-mamelon-invagine": {
    "breadcrumb": "Interventions › Seins › Correction du mamelon invaginé",
    "categoryLabel": "Seins",
    "h1": "Correction du mamelon invaginé - Tunis",
    "intro": "Le mamelon invaginé, également appelé mamelon ombiliqué ou mamelon rentré, est une malformation du mamelon dans laquelle celui-ci ne saille pas vers l'extérieur mais se rétracte vers l'intérieur. Cette situation, souvent présente depuis la puberté, peut être source de complexes esthétiques mais aussi de complications fonctionnelles : difficultés d'allaitement, irritations locales, ou infections récurrentes du pli sous-mamelonnaire. La correction chirurgicale est simple, réalisable sous anesthésie locale, avec des résultats durables et un impact psychologique très positif.",
    "quickFacts": [
      {
        "value": "30–45 min",
        "label": "Durée"
      },
      {
        "value": "Locale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire",
        "label": "Hospitalisation"
      },
      {
        "value": "2–4 sem.",
        "label": "Convalescence"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QU'UN MAMELON INVAGINÉ ?",
        "paragraphs": [
          "Le mamelon invaginé résulte d'un raccourcissement des canaux galactophores qui tirent le mamelon vers l'intérieur. On distingue trois degrés de sévérité :",
          "Grade 1 : le mamelon peut être sorti manuellement et reste en position extériorisée - correction possible par massage ou stimulation",
          "Grade 2 : le mamelon sort manuellement mais rentre spontanément - la chirurgie est nécessaire pour un résultat durable",
          "Grade 3 : le mamelon est totalement invaginé, non sortable manuellement - section des canaux indispensable",
          "La correction chirurgicale des grades 2 et 3 est l'indication la plus courante. Elle permet de projeter définitivement le mamelon vers l'extérieur."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "Une invagination mammaire d'apparition récente chez une femme adulte (mamelon qui rentre alors qu'il était normalement saillant) doit impérativement faire l'objet d'un bilan sénologique complet avant toute chirurgie, car elle peut être le signe d'une pathologie mammaire sous-jacente."
        ],
        "bullets": [
          "Mamelon invaginé de grade 2 ou 3, présent depuis la puberté",
          "Gêne esthétique ou psychologique affectant la confiance en soi",
          "Difficultés d'allaitement liées à l'invagination",
          "Infections ou irritations récurrentes sous le mamelon"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "La consultation évalue le grade d'invagination, la possibilité de sortir le mamelon manuellement, la qualité cutanée de l'aréole et les antécédents d'allaitement ou de souhaits d'allaitement futurs. La technique chirurgicale est choisie selon le grade et le souhait ou non de conserver la capacité d'allaitement.",
          "Si vous souhaitez allaiter à l'avenir, il est important de le signaler en consultation. Certaines techniques sectionnent les canaux galactophores pour libérer le mamelon - elles offrent un résultat plus solide mais rendent l'allaitement difficile ou impossible. D'autres techniques tentent de préserver les canaux pour les grades 1 et 2."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan sénologique (échographie mammaire) obligatoire - à fortiori pour toute invagination d'apparition récente",
          "Bilan biologique : Bilan biologique si anesthésie locale avec sédation ou générale",
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Jeûne : Pas de jeûne nécessaire si anesthésie locale pure, jeûne à partir de minuit si sédation associée",
          "Soutien-gorge : Soutien-gorge de sport sans armatures à porter dès la sortie"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "La correction du mamelon invaginé est réalisée sous anesthésie locale, souvent en ambulatoire, et dure entre 30 et 45 minutes. Deux approches principales sont utilisées selon le grade et le projet d'allaitement :",
          "Technique avec section des canaux galactophores rétractés : c'est la méthode la plus efficace et la plus durable. Les canaux raccourcis sont sectionnés, libérant le mamelon qui peut alors se projeter naturellement. Le résultat est excellent et le risque de récidive est minime. Elle entraîne une incapacité à allaiter.",
          "Technique de préservation des canaux : des points de traction ou une plastie locale permettent de maintenir le mamelon en position externe sans sectionner les canaux. Le résultat est moins pérenne mais préserve la possibilité d'allaitement - adaptée aux grades 1 et 2.",
          "Dans tous les cas, la fermeture est réalisée avec des sutures fines résorbables pour une cicatrice minimale à la base du mamelon."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "Ambulatoire - retour à domicile le jour même",
          "Arrêt de travail de 3 à 5 jours selon l'activité",
          "Soutien-gorge de sport sans armatures pendant 3 à 4 semaines",
          "Éviter tout traumatisme ou pression directe sur le mamelon les 3 premières semaines"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J5 : Légère sensibilité et ecchymose au niveau du mamelon. Pansement en place. Activités normales possibles.",
          "Semaine 1–2 : Régression de la sensibilité. Soin quotidien de la cicatrice. Le mamelon est protégé dans le soutien-gorge.",
          "Semaine 2–4 : Assouplissement de la base du mamelon. Le résultat se stabilise progressivement.",
          "Mois 1–3 : Résultat définitif. Cicatrice invisible à la base du mamelon. Reprise de toutes les activités."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat est immédiat et souvent très satisfaisant : le mamelon fait sa première apparition extériorisée. La stabilisation définitive s'apprécie à 3 mois. Le résultat est durable, surtout lorsque la technique de section des canaux est utilisée.",
          "Le bénéfice psychologique est fréquemment décrit comme significatif - les patientes retrouvent une confiance et une sérénité dans leur rapport à leur corps et à leur intimité."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Hématome de l'aréole",
          "RISQUES GÉNÉRAUX : Sensibilité douloureuse transitoire",
          "RISQUES SPÉCIFIQUES : Récidive partielle de l'invagination (technique sans section)",
          "RISQUES SPÉCIFIQUES : Hypo-sensibilité du mamelon transitoire",
          "RISQUES SPÉCIFIQUES : Incapacité définitive à allaiter (technique avec section des canaux)",
          "RISQUES SPÉCIFIQUES : Cicatrice légèrement visible à la base du mamelon",
          "RISQUES SPÉCIFIQUES : Asymétrie si correction bilatérale"
        ]
      }
    ],
    "faq": [
      {
        "question": "L'opération est-elle douloureuse ?",
        "answer": "Non, l'intervention est réalisée sous anesthésie locale. Les suites post-opératoires sont très légères - une sensibilité modérée les premiers jours, bien soulagée par des antalgiques simples."
      },
      {
        "question": "Peut-on allaiter après la correction d'un mamelon invaginé ?",
        "answer": "Cela dépend de la technique utilisée. Si les canaux galactophores ont été sectionnés (grades 2 et 3), l'allaitement devient difficile ou impossible. Si votre projet de grossesse est à venir, il est impératif de le signaler en consultation pour adapter la technique."
      },
      {
        "question": "La correction est-elle définitive ?",
        "answer": "Avec la technique de section des canaux, le résultat est permanent. Avec les techniques de préservation des canaux, une récidive partielle est possible à long terme, surtout pour les grades 3. Un suivi à 6 mois est recommandé."
      },
      {
        "question": "Peut-on opérer les deux mamelons en même temps ?",
        "answer": "Oui, la correction bilatérale est réalisée dans le même temps opératoire, ce qui est recommandé pour assurer la symétrie du résultat."
      },
      {
        "question": "Y a-t-il une cicatrice visible ?",
        "answer": "La cicatrice est très discrète - elle se situe à la jonction entre la base du mamelon et l'aréole. Elle est quasiment invisible à distance de quelques mois. Dr Sirine Soussi · Chirurgienne plasticienne · Les Berges du Lac 1, Tunis · +216 52 233 333"
      }
    ]
  },
  "genioplastie": {
    "breadcrumb": "Interventions › Visage › Génioplastie",
    "categoryLabel": "Visage",
    "h1": "Génioplastie - Chirurgie du menton Tunis",
    "intro": "La génioplastie, ou mentoplastie, est la chirurgie de correction du menton. Elle permet d'augmenter un menton fuyant (microgénie), de réduire un menton proéminent, ou de corriger une asymétrie. Le menton joue un rôle fondamental dans l'harmonie du profil facial : un menton trop en retrait déséquilibre l'ensemble du visage et peut accentuer l'apparence d'un nez fort. La génioplastie est souvent associée à une rhinoplastie dans le cadre d'une profiloplastie globale - les deux corrections ensemble donnent un résultat harmonieux incomparable.",
    "quickFacts": [
      {
        "value": "30–60 min",
        "label": "Durée"
      },
      {
        "value": "Locale\nou générale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire",
        "label": "Hospitalisation"
      },
      {
        "value": "2–3 mois",
        "label": "Résultat définitif"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LA GÉNIOPLASTIE ?",
        "paragraphs": [
          "La génioplastie peut être réalisée par deux techniques principales : par implant (augmentation du menton par prothèse en silicone solide - technique la plus courante pour les microgénies) ou par ostéotomie (avancement ou recul de la pointe du menton par découpe osseuse - technique plus complexe, indiquée pour les corrections importantes ou la réduction).",
          "La génioplastie par implant est réalisée par une incision intrabuccale (à l'intérieur de la bouche, sans cicatrice externe) ou par une incision sous-mentale (sous le menton, dans le pli naturel). La prothèse en silicone solide est glissée en avant de l'os et fixée."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "Profiloplastie : l'analyse du profil facial montre souvent que nez et menton sont à corriger ensemble. Un menton fuyant accentue visuellement la taille du nez - en avançant le menton, on peut souvent réduire le geste chirurgical sur le nez ou le rendre inutile. La profiloplastie est une approche globale qui harmonise l'ensemble du profil."
        ],
        "bullets": [
          "Menton fuyant - microgénie - déséquilibrant le profil facial",
          "Profil facial avec un rapport nez/menton déséquilibré",
          "Asymétrie du menton visible de face",
          "Correction souhaitée dans le cadre d'une profiloplastie avec rhinoplastie"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "L'analyse céphalométrique (mesures du profil facial) est réalisée sur photos standardisées : angle naso-labial, projection nasale, profil du menton, harmonie des tiers du visage. Le choix entre implant et ostéotomie est discuté selon l'importance de la correction souhaitée. Pour les augmentations de moins de 10 mm, l'implant donne d'excellents résultats. Au-delà, ou en cas de correction dans plusieurs plans de l'espace, l'ostéotomie est préférable.",
          "Délai légal de 15 jours entre la remise du devis et l'intervention."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique et consultation anesthésique",
          "Tabac : Arrêt du tabac 1 mois avant",
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Antiseptique : Bain de bouche antiseptique prescrit à commencer la veille (voie intrabuccale)",
          "Jeûne : Jeûne si anesthésie générale"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention est réalisée sous anesthésie locale ou générale et dure 30 à 60 minutes. Par voie intrabuccale : une incision dans le sulcus gingivolabial inférieur permet d'accéder à la loge prémentonnière sans cicatrice externe. L'implant en silicone est glissé en avant de l'os mental et centré avec précision. Il est fixé par une suture ou une vis selon les cas.",
          "Par voie sous-mentale : une incision de 1,5 à 2 cm dans le pli naturel sous le menton permet le même accès. Cette voie est préférée en cas de lipoaspiration du double menton associée ou si une cicatrice intrabuccale est à éviter."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "Ambulatoire",
          "Arrêt de travail de 7 à 10 jours",
          "Bains de bouche antiseptiques 3 fois par jour pendant 15 jours (voie intrabuccale)",
          "Alimentation molle les 10 premiers jours",
          "Éviter les traumatismes du menton pendant 2 mois"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J5 : Ecchymose et œdème du menton et de la lèvre inférieure. Sensation d'engourdissement transitoire.",
          "Semaine 1–2 : Régression des ecchymoses. Implant légèrement perceptible à la palpation. L'œdème diminue.",
          "Mois 1–3 : Disparition complète de l'œdème. L'implant s'intègre. Résultat définitif visible."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat est naturel et harmonieux : le profil est équilibré, le menton projeté, le rapport nez/menton rétabli. L'implant en silicone solide est durable et ne nécessite pas de remplacement. Il est à peine perceptible à la palpation après quelques mois d'intégration."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome",
          "RISQUES GÉNÉRAUX : Infection (ostéite - rare mais grave, nécessite l'ablation de l'implant)",
          "RISQUES GÉNÉRAUX : Réaction anesthésique",
          "RISQUES SPÉCIFIQUES : Déplacement de l'implant",
          "RISQUES SPÉCIFIQUES : Résorption osseuse sous l'implant (minime, à long terme)",
          "RISQUES SPÉCIFIQUES : Hypo-sensibilité du menton ou de la lèvre inférieure (transitoire)",
          "RISQUES SPÉCIFIQUES : Asymétrie",
          "RISQUES SPÉCIFIQUES : Exposition de l'implant (voie intrabuccale - très rare)"
        ]
      }
    ],
    "faq": [
      {
        "question": "La génioplastie par implant laisse-t-elle une cicatrice visible ?",
        "answer": "Par voie intrabuccale, aucune cicatrice externe. Par voie sous-mentale, une cicatrice de 1,5 à 2 cm dans le pli naturel sous le menton - quasiment invisible à 6 mois."
      },
      {
        "question": "L'implant de menton se sent-il au toucher ?",
        "answer": "Légèrement les premières semaines, puis il s'intègre progressivement aux tissus environnants et devient imperceptible au toucher dans la grande majorité des cas."
      },
      {
        "question": "Peut-on associer génioplastie et rhinoplastie ?",
        "answer": "Oui, et cette association est souvent recommandée dans le cadre d'une profiloplastie. Les deux interventions sont réalisées dans le même temps opératoire pour harmoniser simultanément le nez et le menton. Le résultat global est souvent plus satisfaisant que la correction isolée de l'un ou l'autre."
      },
      {
        "question": "L'implant dure-t-il toute la vie ?",
        "answer": "Les implants en silicone solide sont conçus pour durer indéfiniment. Contrairement aux prothèses mammaires, ils n'ont pas de durée de vie fixe et ne nécessitent pas de remplacement systématique. Un suivi clinique périodique est suffisant. Dr Sirine Soussi · Chirurgienne plasticienne · Les Berges du Lac 1, Tunis · +216 52 233 333"
      }
    ]
  },
  "gynecomastie": {
    "breadcrumb": "Interventions › Seins › Gynécomastie",
    "categoryLabel": "Seins",
    "h1": "Gynécomastie - Chirurgie de la poitrine masculine Tunis",
    "intro": "La gynécomastie est le développement anormal du tissu glandulaire mammaire chez l'homme. Elle se manifeste par un gonflement de la poitrine, souvent centré sur le mamelon, qui peut être unilatéral ou bilatéral. Source de gêne esthétique profonde et d'inconfort psychologique, la gynécomastie est fréquemment associée à une adipomastie (excès de graisse) qui aggrave l'aspect. La chirurgie est le seul traitement efficace lorsque la cause hormonale a été écartée ou traitée sans résultat.",
    "quickFacts": [
      {
        "value": "1–2h",
        "label": "Durée"
      },
      {
        "value": "Générale\nou locale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire",
        "label": "Hospitalisation"
      },
      {
        "value": "3–6 sem.",
        "label": "Convalescence"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LA GYNÉCOMASTIE ?",
        "paragraphs": [
          "On distingue deux formes principales, souvent associées :",
          "La gynécomastie vraie : hypertrophie de la glande mammaire, ferme au toucher, centrée sur l'aréole. Elle est d'origine hormonale (déséquilibre œstrogènes/testostérone) et ne régresse pas avec le sport.",
          "L'adipomastie (ou pseudo-gynécomastie) : accumulation de graisse dans la région mammaire, sans hypertrophie glandulaire. Elle est molle à la palpation et non centrée sur le mamelon.",
          "Dans la grande majorité des cas cliniques, les deux phénomènes sont associés : le chirurgien doit alors réaliser à la fois une ablation de la glande et une lipoaspiration des masses graisseuses.",
          "Avant toute décision chirurgicale, un bilan hormonal et une échographie mammaire sont indispensables pour éliminer une cause traitable (hypogonadisme, tumeur testiculaire, médicaments, anabolisants) et confirmer le diagnostic."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UN BON CANDIDAT ?",
        "paragraphs": [
          "La prise d'anabolisants ou de stéroïdes androgènes est une cause fréquente et sous-estimée de gynécomastie chez les hommes pratiquant la musculation. Leur arrêt est obligatoire avant toute consultation et toute prise en charge chirurgicale."
        ],
        "bullets": [
          "Hypertrophie mammaire confirmée, résistant à l'activité physique et à l'arrêt des éventuels traitements en cause",
          "Bilan hormonal normal ou cause traitée sans amélioration de la gynécomastie",
          "Gêne esthétique et/ou psychologique significative",
          "Poids stable",
          "Absence de causes médicales actives non contrôlées"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "La consultation comprend un examen clinique rigoureux - palpation de la glande, évaluation de la composante graisseuse, appréciation de la peau en excès éventuel et de l'asymétrie. Le bilan préopératoire est analysé. Le plan chirurgical est défini : glandulectomie seule, lipoaspiration seule (adipomastie pure), ou association des deux techniques.",
          "Pour les gynécomasties avec excès cutané important (cas fréquent après une perte de poids massive), une résection cutanée péri-aréolaire peut être nécessaire - avec la contrepartie d'une cicatrice visible.",
          "Délai légal de 15 jours entre la remise du devis et l'intervention."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique, bilan hormonal, échographie mammaire et consultation anesthésique",
          "Anabolisants : Arrêt total de tout anabolisant ou produit dopant - exigence absolue",
          "Tabac : Arrêt du tabac 1 mois avant",
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Jeûne : Jeûne à partir de minuit la veille",
          "Contention : Prévoir un gilet de contention thoracique sur prescription"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention est réalisée sous anesthésie générale ou locale selon l'étendue du geste, et dure entre 1 et 2 heures. La technique combine deux gestes complémentaires :",
          "Lipoaspiration première : elle traite la composante graisseuse (adipomastie) et facilite l'accès à la glande en la mobilisant",
          "Glandulectomie : résection de la glande mammaire par une incision semi-circulaire inférieure de l'aréole (voie péri-aréolaire inférieure). La glande est retirée en bloc, garantissant l'absence de récidive",
          "En cas d'excès cutané modéré, la rétraction naturelle de la peau peut suffire. Dans les cas plus importants, une résection cutanée péri-aréolaire (round block) est associée.",
          "La glandulectomie est définitive : en retirant la glande mammaire en totalité, on s'assure qu'aucune récidive n'est possible. La pièce opératoire est envoyée systématiquement en anatomopathologie."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "Ambulatoire dans la grande majorité des cas",
          "Accompagnateur pour le retour",
          "Arrêt de travail de 5 à 10 jours selon l'activité",
          "Gilet de contention thoracique pendant 4 à 6 semaines",
          "Éviter les activités sollicitant les pectoraux pendant 6 semaines"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J5 : Douleurs modérées. Ecchymoses et œdème thoracique. Gilet de contention en place 24h/24.",
          "Semaine 1–2 : Résorption des ecchymoses. Sensation d'engourdissement de l'aréole transitoire. Reprise des activités légères.",
          "Semaine 3–6 : Assouplissement des cicatrices. L'œdème résiduel se résorbe. Le torse reprend ses contours.",
          "Mois 2–3 : Résultat définitif apprécié. Reprise du sport possible à partir du 2e mois."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat est immédiatement visible : le torse est plat, les mamelons ne saillent plus, le décolleté masculin est restauré. L'appréciation définitive se fait à 3 à 6 mois, une fois l'œdème résorbé. Le bénéfice psychologique est souvent profond - les patients retrouvent confiance pour se montrer en maillot, pratiquer leurs sports et se vêtir librement.",
          "La cicatrice péri-aréolaire est discrète, bien cachée dans la zone de jonction entre l'aréole et la peau. Elle évolue favorablement en 12 à 18 mois."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome post-opératoire",
          "RISQUES GÉNÉRAUX : Infection",
          "RISQUES GÉNÉRAUX : Réaction anesthésique",
          "RISQUES GÉNÉRAUX : Thrombose veineuse",
          "RISQUES SPÉCIFIQUES : Asymétrie résiduelle ou correction insuffisante",
          "RISQUES SPÉCIFIQUES : Hypo-sensibilité aréolaire transitoire",
          "RISQUES SPÉCIFIQUES : Irrégularités de surface après lipoaspiration",
          "RISQUES SPÉCIFIQUES : Cicatrice élargie ou visible",
          "RISQUES SPÉCIFIQUES : Récidive si cause hormonale non traitée",
          "RISQUES SPÉCIFIQUES : Dépression du mamelon si résection trop importante"
        ]
      }
    ],
    "faq": [
      {
        "question": "La gynécomastie peut-elle disparaître seule ?",
        "answer": "La gynécomastie puberaire chez l'adolescent régresse souvent spontanément. Chez l'adulte, en revanche, une gynécomastie vraie (avec hypertrophie glandulaire) ne régresse pas avec le sport ou le régime. Seule la chirurgie permet une correction définitive."
      },
      {
        "question": "La musculation peut-elle aggraver une gynécomastie ?",
        "answer": "La musculation n'aggrave pas la gynécomastie glandulaire. En revanche, la prise d'anabolisants ou de stéroïdes androgènes est une cause directe d'hypertrophie glandulaire. Leur arrêt est impératif avant toute consultation."
      },
      {
        "question": "Y a-t-il un risque de récidive après l'opération ?",
        "answer": "Si la cause hormonale a été traitée et que l'arrêt des substances en cause est maintenu, la récidive est exceptionnelle - la glande étant retirée en totalité. La reprise d'anabolisants après l'opération peut, en revanche, entraîner une nouvelle hypertrophie du tissu résiduel."
      },
      {
        "question": "La cicatrice sera-t-elle visible ?",
        "answer": "La cicatrice est tracée à la jonction entre l'aréole et la peau, dans la zone de transition pigmentée. Elle est peu visible et bien tolérée dans la grande majorité des cas. En l'absence de résection cutanée, il n'y a que la cicatrice péri-aréolaire inférieure."
      }
    ]
  },
  "lifting-cervico-facial": {
    "breadcrumb": "Interventions › Visage › Lifting cervico-facial",
    "categoryLabel": "Visage",
    "h1": "Lifting cervico-facial - Chirurgie du rajeunissement du visage Tunis",
    "intro": "Le lifting cervico-facial est l'intervention de référence pour corriger les signes du vieillissement du bas et du milieu du visage : relâchement cutané, bajoues, perte de l'ovale, rides profondes, double menton, cou strié. Lorsque les soins esthétiques et la médecine injectable ne suffisent plus, le lifting permet de retrouver un visage reposé, rajeuni de 8 à 12 ans, sans modifier les traits ni effacer l'identité. Réalisé à Tunis sous anesthésie générale, c'est l'intervention la plus complète de la chirurgie esthétique du visage.",
    "quickFacts": [
      {
        "value": "2–4h",
        "label": "Durée"
      },
      {
        "value": "Générale",
        "label": "Anesthésie"
      },
      {
        "value": "1–2 nuits",
        "label": "Hospitalisation"
      },
      {
        "value": "3–6 mois",
        "label": "Résultat définitif"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LE LIFTING CERVICO-FACIAL ?",
        "paragraphs": [
          "Le lifting cervico-facial agit sur les trois structures anatomiques responsables du vieillissement facial : la peau (redrapage et résection de l'excès), le SMAS - système musculo-aponévrotique superficiel (remise en tension en profondeur, fondation du résultat), et la graisse (redistribution ou lipoaspiration des zones en excès). Cette triple action garantit un résultat naturel et durable, là où un lifting purement cutané vieillirait mal.",
          "Plusieurs techniques sont disponibles selon votre anatomie et vos besoins : le lifting deep plane (plan profond, résultats les plus naturels et les plus durables), le lifting SMAS, le lifting temporal, ou le lifting ponytail (minimal invasif, cicatrices dans les cheveux). Le choix est fait lors de la consultation après examen clinique.",
          "Le lifting cervico-facial ne traite pas les rides du front ni les rides d'expression péri-orbitaires. Ces zones relèvent du lifting frontal ou de la médecine esthétique (toxine botulique, acide hyaluronique). Une blépharoplastie peut être associée dans le même temps pour un rajeunissement global du visage."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "Le lifting cervico-facial n'est pas indiqué en cas de tabagisme non sevré - le risque de nécrose cutanée est majeur. Il est également contre-indiqué en cas de pathologie cardio-vasculaire non contrôlée, de troubles de la coagulation ou d'hypertension artérielle non équilibrée. Ces éléments sont évalués lors du bilan préopératoire."
        ],
        "bullets": [
          "Relâchement cutané du bas et du milieu du visage - joues, bajoues, ovale affaissé",
          "Cou relâché avec fanons ou stries cervicales",
          "Plis nasogéniens et plis d'amertume marqués",
          "Double menton associé à un excès graisseux cervical",
          "Peau avec une élasticité résiduelle suffisante",
          "Bonne santé générale, sans tabagisme actif"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "La consultation comprend une analyse morphologique complète du visage debout et de profil : évaluation de la qualité et de l'élasticité cutanée, de l'épaisseur du tissu sous-cutané, de l'état du SMAS, de la projection du menton et des volumes de la face. Nous discutons ensemble de vos attentes, du type de lifting le mieux adapté à votre anatomie, et des gestes associés éventuels (blépharoplastie, lipofilling, lipoaspiration cervicale).",
          "Je vous explique précisément le tracé des cicatrices - dissimu­lées dans le cuir chevelu temporal, au contour de l'oreille et derrière le pavillon - et leur évolution dans le temps.",
          "Délai légal de 15 jours entre la remise du devis et l'intervention. Un bilan biologique complet et une consultation anesthésique sont requis."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique complet (NFS, plaquettes, coagulation, groupe sanguin) et consultation anesthésique",
          "Tabac : Arrêt total du tabac au moins 1 mois avant et 1 mois après - exigence absolue",
          "Médicaments : Arrêt de l'aspirine, des anti-inflammatoires et de la vitamine E 10 jours avant",
          "Contraception : Arrêt de la contraception orale si possible 1 mois avant - à discuter avec votre médecin",
          "Jeûne : Jeûne strict à partir de minuit la veille",
          "Cheveux : Shampoing avant l'opération - les cheveux longs peuvent être attachés de façon à dégager le pourtour de l'oreille",
          "Organisation : Prévoir un accompagnateur pour le retour et une aide à domicile les premiers jours"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention est réalisée sous anesthésie générale et dure entre 2 et 4 heures selon l'étendue du geste et les techniques associées. L'incision est tracée dans la zone chevelue temporale, se prolonge naturellement dans le pli préauriculaire, contourne le lobe de l'oreille et remonte derrière le pavillon dans la zone rétroauriculaire - zones naturellement dissimulées.",
          "Après décollement cutané, le SMAS est saisi, remodelé et remis en tension selon la technique choisie (plication, imbrication, ou dissection deep plane). Ce travail en profondeur est le garant de la durabilité et du naturel du résultat. L'excès cutané est ensuite réséqué avec précision, sans tension excessive - la peau est redrapée, non tirée. Une lipoaspiration cervicale est associée en cas de double menton.",
          "La règle d'or du lifting naturel : ne jamais tirer la peau. La tension doit être portée par le plan musculo-aponévrotique profond, pas par le revêtement cutané. Un lifting trop tendu sur la peau donne le visage « tiré » que tout le monde veut éviter - et vieillit mal."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "1 à 2 nuits en clinique selon l'étendue du geste",
          "Pansement compressif retiré le lendemain matin",
          "Accompagnateur obligatoire pour le retour",
          "Arrêt de travail de 2 à 3 semaines - vie sociale restreinte pendant 10 à 15 jours",
          "Conduite déconseillée pendant 10 jours",
          "Exposition solaire strictement évitée pendant 3 mois"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J3 : Pansement compressif. Drains éventuels. Douleurs légères, sensation de tension. Tête surélevée.",
          "Semaine 1–2 : Ecchymoses et œdème importants mais attendus. Premier shampoing dès J2. Ablation des fils vers J7–J10. Maquillage possible dès J7.",
          "Semaine 2–4 : Régression progressive des ecchymoses. Sensation d'engourdissement cutané transitoire. Reprise de la vie sociale possible vers S2–S3.",
          "Mois 1–3 : Disparition de l'œdème résiduel. Le résultat commence à se révéler. Cicatrices en maturation.",
          "Mois 3–6 : Résultat définitif. Visage rajeuni, reposé, naturel. Cicatrices devenues imperceptibles dans leurs zones de dissimulation."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat s'apprécie pleinement entre 3 et 6 mois, une fois l'ensemble de l'œdème résorbé et les tissus stabilisés. Le visage est rajeuni de 8 à 12 ans selon les cas : l'ovale est restauré, les bajoues effacées, le cou affiné et lissé. Le résultat est naturel - les traits sont préservés, le visage est reconnaissable.",
          "La durabilité est de 8 à 12 ans selon la qualité cutanée, l'hygiène de vie et l'exposition solaire. Le vieillissement reprend son cours naturellement après l'intervention, sans accélération ni effet de rebond."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome post-opératoire (prévention par drains)",
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Réaction anesthésique",
          "RISQUES GÉNÉRAUX : Thrombose veineuse",
          "RISQUES SPÉCIFIQUES : Nécrose cutanée partielle (tabac ++)",
          "RISQUES SPÉCIFIQUES : Paralysie faciale transitoire (nerf facial - rare)",
          "RISQUES SPÉCIFIQUES : Asymétrie résiduelle",
          "RISQUES SPÉCIFIQUES : Cicatrice élargie ou visible",
          "RISQUES SPÉCIFIQUES : Alopécie temporaire dans les zones de traction",
          "RISQUES SPÉCIFIQUES : Hypo-sensibilité cutanée (régresse en 3–6 mois)",
          "RISQUES SPÉCIFIQUES : Résultat insuffisant nécessitant une retouche"
        ]
      }
    ],
    "faq": [
      {
        "question": "À quel âge peut-on faire un lifting cervico-facial ?",
        "answer": "Il n'y a pas d'âge fixe. L'indication repose sur l'état du visage, pas sur l'âge civil. La plupart des lifting sont réalisés entre 45 et 65 ans, mais certaines morphologies ou histoires familiales justifient une intervention plus précoce ou plus tardive. C'est l'examen clinique qui décide."
      },
      {
        "question": "Le résultat sera-t-il naturel ?",
        "answer": "Oui, à condition que la technique soit la bonne. Un lifting bien réalisé donne un visage reposé et rajeuni - pas un visage « tiré ». La clé est de travailler en profondeur sur le SMAS plutôt que de tirer sur la peau. C'est le principe fondateur de ma technique."
      },
      {
        "question": "Peut-on associer d'autres interventions au lifting ?",
        "answer": "Oui. La blépharoplastie, le lipofilling, la lipoaspiration cervicale, le lip lift ou la génioplastie peuvent être associés dans le même temps opératoire pour un rajeunissement global et harmonieux. Ces associations sont discutées en consultation."
      },
      {
        "question": "Combien de temps dure le résultat ?",
        "answer": "Un lifting bien réalisé dure entre 8 et 12 ans. Il ne stoppe pas le vieillissement, mais le repousse dans le temps. Un deuxième lifting peut être envisagé si nécessaire après ce délai."
      },
      {
        "question": "Les cicatrices seront-elles visibles ?",
        "answer": "Les cicatrices sont soigneusement tracées dans les zones naturellement dissimulées : creux temporal dans les cheveux, pli préauriculaire, contour du lobe, zone rétroauriculaire. Bien intégrées et bien soignées, elles deviennent quasiment imperceptibles en 6 à 12 mois."
      }
    ]
  },
  "lifting-des-bras": {
    "breadcrumb": "Interventions › Silhouette › Lifting des bras",
    "categoryLabel": "Silhouette",
    "h1": "Lifting des bras - Brachioplastie Tunis",
    "intro": "Le lifting des bras, ou brachioplastie, est l'intervention chirurgicale indiquée lorsque la peau de la face interne des bras est trop relâchée pour que la lipoaspiration seule puisse y remédier. Ce relâchement - fréquent après une perte de poids significative ou avec le vieillissement - ne peut être corrigé ni par le sport ni par des crèmes. La brachioplastie permet de retrouver des bras fermes, galbés, et une silhouette qu'on assume enfin. Elle peut être réalisée seule ou associée à une lipoaspiration complémentaire.",
    "quickFacts": [
      {
        "value": "1h30–2h",
        "label": "Durée"
      },
      {
        "value": "Générale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire\nou 1 nuit",
        "label": "Hospitalisation"
      },
      {
        "value": "3–4 sem.",
        "label": "Convalescence"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LA BRACHIOPLASTIE ?",
        "paragraphs": [
          "La brachioplastie consiste à réséquer l'excès de peau situé sur la face interne des bras, du creux axillaire jusqu'au coude selon l'étendue du relâchement. Elle peut être associée à une lipoaspiration préalable pour réduire les volumes graisseux et faciliter la résection cutanée. C'est l'intervention de choix pour les patientes après une perte de poids massive ou en cas de ptose cutanée des bras liée à l'âge.",
          "La brachioplastie laisse une cicatrice sur la face interne du bras - c'est le compromis inévitable d'un bras ferme et remodelé. Cette cicatrice est tracée dans le sillon naturel pour être la moins visible possible, et évolue très favorablement avec le temps."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "La brachioplastie laisse une cicatrice longue sur la face interne du bras, du creux axillaire au coude dans les cas les plus étendus. Cette cicatrice doit être comprise et acceptée avant toute décision. Elle est le compromis d'un bras remodelé et ferme - et évolue favorablement sur 12 à 18 mois."
        ],
        "bullets": [
          "Excès de peau important sur la face interne des bras, résistant à la musculation",
          "Poids stable depuis au moins 6 mois",
          "Perte de poids importante ayant laissé un excédent cutané",
          "Bonne compréhension et acceptation de la cicatrice interne"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "L'examen clinique évalue la qualité et la quantité de peau en excès, la présence d'un excédent graisseux associé nécessitant une lipoaspiration complémentaire, et la morphologie globale des bras. Le tracé de la cicatrice est discuté en détail et ses possibilités d'évolution dans le temps sont expliquées. La nécessité ou non d'une lipoaspiration associée est discutée selon votre cas.",
          "Délai légal de 15 jours entre la remise du devis et l'intervention."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique et consultation anesthésique dans les 30 jours précédant l'intervention",
          "Tabac : Arrêt total du tabac au moins 1 mois avant et 1 mois après - risque de nécrose cutanée",
          "Médicaments : Arrêt de l'aspirine et des anti-inflammatoires 10 jours avant",
          "Jeûne : Jeûne strict à partir de minuit la veille",
          "Vêtements : Prévoir des vêtements amples et faciles à enfiler pour les premiers jours",
          "Organisation : Prévoir un accompagnateur pour le retour à domicile"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention est réalisée sous anesthésie générale et dure entre 1h30 et 2h. L'incision est tracée sur la face interne du bras, dans le sillon naturel brachial médial, de façon à la dissimuler au maximum. L'excès de peau est réséqué, les tissus remodelés et la cicatrice refermée couche par couche avec une suture intradermique soignée.",
          "Si un excédent graisseux est associé, la lipoaspiration est réalisée en premier temps opératoire, avant la résection cutanée. Cette séquence optimise la rétraction cutanée et améliore le résultat final."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "Ambulatoire ou 1 nuit en clinique selon l'étendue de l'intervention",
          "Accompagnateur obligatoire pour le retour",
          "Arrêt de travail de 7 à 14 jours selon l'activité",
          "Éviter tout port de charges et activités sollicitant les membres supérieurs pendant 6 semaines"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J5 : Douleurs modérées. Bras surélevés pour limiter l'œdème. Pansements en place. Traitement antalgique adapté.",
          "Semaine 1–2 : Ablation des fils non résorbables vers J12–J15. Résorption des ecchymoses. Reprise des activités légères.",
          "Semaine 3–6 : Assouplissement de la cicatrice. Début du massage cicatriciel à J21. Port de manchons compressifs recommandé.",
          "Mois 2–6 : La cicatrice évolue du rouge vif au rose puis au beige. Maturation sur 12 à 18 mois."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat est immédiatement visible : des bras redrapés, fermes, dont le contour interne est restauré. L'appréciation définitive se fait à 6 mois, une fois l'œdème résorbé et les cicatrices stabilisées. La durabilité est excellente à poids constant.",
          "La cicatrice, bien que longue, est placée sur la face interne du bras - zone naturellement peu exposée au regard. Elle évolue très favorablement sur 12 à 18 mois avec un suivi cicatriciel rigoureux."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome post-opératoire",
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Réaction à l'anesthésie",
          "RISQUES GÉNÉRAUX : Thrombose veineuse",
          "RISQUES SPÉCIFIQUES : Cicatrice élargie ou hypertrophique",
          "RISQUES SPÉCIFIQUES : Désunion partielle de cicatrice (tabac ++)",
          "RISQUES SPÉCIFIQUES : Asymétrie des deux bras",
          "RISQUES SPÉCIFIQUES : Hypo-sensibilité de la face interne (transitoire)",
          "RISQUES SPÉCIFIQUES : Insuffisance de résection nécessitant une retouche",
          "RISQUES SPÉCIFIQUES : Adhérence cicatricielle axillaire"
        ]
      }
    ],
    "faq": [
      {
        "question": "La cicatrice est-elle très visible ?",
        "answer": "Elle est longue, sur la face interne du bras, mais tracée dans le sillon naturel pour être le moins exposée possible. Elle évolue favorablement sur 12 à 18 mois. C'est le compromis inévitable d'un bras remodelé - un compromis que la grande majorité des patientes juge très acceptable."
      },
      {
        "question": "Peut-on faire une lipoaspiration des bras sans brachioplastie ?",
        "answer": "Oui, si la qualité cutanée est suffisante. Chez une patiente avec une bonne élasticité et peu d'excès cutané, une lipoaspiration seule peut suffire. C'est l'examen clinique qui tranche."
      },
      {
        "question": "Quand peut-on reprendre le sport ?",
        "answer": "Les activités cardiovasculaires légères reprennent vers la 4e semaine. La musculation des membres supérieurs et les sports de contact sont déconseillés avant le 3e mois."
      },
      {
        "question": "L'intervention est-elle douloureuse ?",
        "answer": "Les douleurs post-opératoires sont modérées et bien contrôlées par le traitement antalgique prescrit. La gêne principale est une sensation de tension et de raideur dans les bras les premiers jours, qui s'atténue rapidement."
      }
    ]
  },
  "lifting-des-cuisses": {
    "breadcrumb": "Interventions › Silhouette › Lifting des cuisses",
    "categoryLabel": "Silhouette",
    "h1": "Lifting des cuisses - Cruroplastie Tunis",
    "intro": "Le lifting des cuisses, ou cruroplastie, est l'intervention chirurgicale indiquée pour corriger le relâchement cutané de la face interne des cuisses, fréquent après une perte de poids significative ou avec le vieillissement de la peau. La peau distendue qui pend entre les cuisses ne peut pas être corrigée par le sport ni par la lipoaspiration seule. La cruroplastie redonne aux cuisses un contour ferme et harmonieux, en supprimant l'excès cutané et en repositionnant les tissus. Elle peut s'associer à une lipoaspiration complémentaire.",
    "quickFacts": [
      {
        "value": "1h30–2h30",
        "label": "Durée"
      },
      {
        "value": "Générale",
        "label": "Anesthésie"
      },
      {
        "value": "1 nuit",
        "label": "Hospitalisation"
      },
      {
        "value": "4–6 sem.",
        "label": "Convalescence"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LA CRUROPLASTIE ?",
        "paragraphs": [
          "La cruroplastie consiste à réséquer l'excès de peau situé sur la face interne des cuisses, de l'aine jusqu'au genou selon l'importance du relâchement. On distingue deux formes d'intervention : le lifting haut de cuisse (cicatrice limitée au pli inguinal) pour les ptoses modérées, et le lifting de cuisse étendu (cicatrice descend sur la face interne de la cuisse) pour les ptoses importantes ou post-bariatriques.",
          "Elle peut être associée à une lipoaspiration préalable pour réduire les volumes et faciliter la résection cutanée. La technique est choisie lors de la consultation selon le degré de relâchement et vos attentes."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "La cruroplastie implique une cicatrice dans le pli inguinal, étendue vers la face interne de la cuisse selon l'étendue du geste. Ce compromis doit être pleinement compris et accepté avant toute décision chirurgicale. La cicatrice est tracée de façon à être dissimulée dans le bas du maillot de bain."
        ],
        "bullets": [
          "Excès de peau sur la face interne des cuisses, résistant au sport et au régime",
          "Séquelles d'une perte de poids importante (chirurgie bariatrique ou amaigrissement progressif)",
          "Gêne fonctionnelle : frottement des cuisses, inconfort à la marche, difficultés vestimentaires",
          "Poids stable depuis au moins 6 mois, sans projet de grossesse"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "L'examen clinique évalue la quantité et la qualité de peau en excès, debout et couché. Le grade de ptose des cuisses, la présence d'un excédent graisseux associé et la topographie de la cicatrice future sont discutés. Le plan chirurgical est individualisé selon votre morphologie et vos objectifs.",
          "Délai légal de 15 jours entre la remise du devis et l'intervention. Un bilan préopératoire comprenant un bilan de coagulation est requis."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique (incluant coagulation) et consultation anesthésique",
          "Tabac : Arrêt total du tabac au moins 1 mois avant et après",
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Jeûne : Jeûne à partir de minuit la veille",
          "Vêtements : Prévoir des vêtements amples à l'entrejambe pour les premiers jours",
          "Organisation : Prévoir une aide à domicile les premiers jours - mobilité limitée"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention est réalisée sous anesthésie générale et dure entre 1h30 et 2h30. Après un marquage préalable debout, l'incision est tracée dans le pli inguinal, éventuellement prolongée vers la face interne de la cuisse. L'excédent cutané est réséqué, les tissus remontés et fixés solidement au plan profond du fascia pour prévenir la migration de la cicatrice. La fermeture est réalisée méticuleusement par plans pour obtenir une cicatrice aussi fine et discrète que possible.",
          "Si une lipoaspiration est associée, elle est réalisée en premier temps pour réduire les volumes et améliorer la qualité du redrapage cutané."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "1 nuit en clinique systématiquement recommandée",
          "Accompagnateur obligatoire pour le retour",
          "Arrêt de travail de 10 à 21 jours selon l'activité",
          "La marche est possible dès J1 mais doit rester progressive",
          "Éviter la position assise prolongée et les escaliers les 10 premiers jours"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J5 : Douleurs modérées à la marche. Membres légèrement surélevés. Anticoagulants prescrits. Pansements.",
          "Semaine 1–2 : Ablation des fils vers J12–J15. Résorption progressive de l'œdème et des ecchymoses.",
          "Semaine 3–6 : Assouplissement de la cicatrice. Début du massage cicatriciel à J21. Port de shorts compressifs.",
          "Mois 2–4 : Disparition de l'œdème résiduel. Résultat qui s'affine progressivement.",
          "Mois 4–6 : Résultat définitif. Reprise du sport progressivement à partir du 3e mois."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat est immédiatement visible : les cuisses sont redrapées, fermes, sans peau pendante. L'appréciation définitive se fait à 4 à 6 mois. Les cicatrices évoluent favorablement sur 12 à 18 mois. La durabilité est bonne à poids stable."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome post-opératoire",
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Thrombose veineuse (prévention renforcée)",
          "RISQUES GÉNÉRAUX : Réaction à l'anesthésie",
          "RISQUES SPÉCIFIQUES : Migration de cicatrice vers la face interne de la cuisse",
          "RISQUES SPÉCIFIQUES : Lymphocèle (épanchement lymphatique)",
          "RISQUES SPÉCIFIQUES : Asymétrie résiduelle",
          "RISQUES SPÉCIFIQUES : Désunion partielle de cicatrice",
          "RISQUES SPÉCIFIQUES : Correction insuffisante ou récidive à long terme",
          "RISQUES SPÉCIFIQUES : Hypo-sensibilité de la face interne (transitoire)"
        ]
      }
    ],
    "faq": [
      {
        "question": "La cicatrice sera-t-elle visible en maillot de bain ?",
        "answer": "La cicatrice est tracée dans le pli inguinal pour être dissimulée dans le bas du maillot de bain. La portion qui descend sur la face interne de la cuisse est moins exposée car naturellement protégée par la position des jambes."
      },
      {
        "question": "Peut-on opérer les deux cuisses en même temps ?",
        "answer": "Oui, les deux côtés sont toujours traités dans le même temps opératoire pour assurer une symétrie optimale."
      },
      {
        "question": "Quand peut-on reprendre le sport ?",
        "answer": "La marche et le vélo doux peuvent reprendre progressivement à partir de la 4e semaine. La course à pied et les sports d'impact sont déconseillés avant le 3e mois."
      },
      {
        "question": "Peut-on associer cruroplastie et abdominoplastie ?",
        "answer": "Ces deux gestes peuvent être discutés en consultation. L'association est possible selon votre état de santé général, l'étendue de chaque geste et les règles de sécurité chirurgicale. Elle est souvent proposée dans le cadre d'une chirurgie de l'amaigrissement."
      }
    ]
  },
  "lifting-mammaire": {
    "breadcrumb": "Interventions › Seins › Lifting mammaire",
    "categoryLabel": "Seins",
    "h1": "Lifting mammaire - Mastopexie Tunis",
    "intro": "Le lifting mammaire, ou mastopexie, est l'intervention de référence pour corriger la ptose mammaire - communément appelée « seins qui tombent ». Après une grossesse, un allaitement, un amaigrissement ou simplement sous l'effet du temps, la poitrine perd de sa tenue et s'affaisse. Le lifting mammaire permet de redonner au sein sa position haute et ferme, en repositionnant la plaque aréolo-mamelonnaire et en supprimant l'excès de peau, sans nécessairement modifier le volume. Lorsque le volume est insuffisant, un implant peut être associé dans le même temps opératoire.",
    "quickFacts": [
      {
        "value": "1h30–2h30",
        "label": "Durée"
      },
      {
        "value": "Générale",
        "label": "Anesthésie"
      },
      {
        "value": "1 nuit",
        "label": "Hospitalisation"
      },
      {
        "value": "4–6 sem.",
        "label": "Convalescence"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LE LIFTING MAMMAIRE ?",
        "paragraphs": [
          "La mastopexie consiste à remodeler le sein en supprimant l'excédent de peau et en concentrant le tissu glandulaire dans un nouveau « fourreau » cutané plus court. Le mamelon et l'aréole sont remontés à leur position anatomique idéale - à la hauteur du sillon sous-mammaire ou légèrement au-dessus - pour que le sein reprenne une projection naturelle et harmonieuse.",
          "La ptose mammaire est classée en 3 degrés selon la position du mamelon par rapport au sillon sous-mammaire. Ce classement oriente le choix de la technique chirurgicale et l'étendue des cicatrices.",
          "Ptose de grade 1 : mamelon au niveau du sillon (pseudo-ptose). Grade 2 : mamelon sous le sillon, avec glande mammaire présente en bas. Grade 3 : mamelon très bas, sein « vide » - nécessite souvent une prothèse associée."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "Le lifting mammaire seul ne modifie pas le volume. Si votre poitrine est à la fois tombante ET insuffisamment volumineuse, une prothèse peut être associée au lifting dans le même temps opératoire - c'est la technique dite « augmentation-mastopexie » ou « sein combiné ». Ce point est évalué précisément lors de la consultation."
        ],
        "bullets": [
          "Seins tombants avec mamelon situé sous le sillon sous-mammaire",
          "Perte de fermeté et de projection après grossesse, allaitement ou amaigrissement",
          "Seins asymétriques en termes de position ou de tenue",
          "Volume mammaire satisfaisant mais repositionnement nécessaire",
          "Poids stable, sans projet de grossesse à court terme"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "L'examen clinique détermine le grade de ptose, la qualité et l'élasticité cutanée, le volume glandulaire résiduel et la position des mamelons. Le tracé de la future cicatrice est discuté et expliqué, ainsi que la nécessité ou non d'associer un implant. Plusieurs techniques sont disponibles selon le degré de ptose :",
          "Technique péri-aréolaire (round block) : cicatrice uniquement autour de l'aréole - pour les ptoses légères",
          "Technique à cicatrice verticale : cicatrice péri-aréolaire + verticale - pour les ptoses modérées",
          "Technique en T inversé : cicatrice péri-aréolaire + verticale + horizontale - pour les ptoses importantes ou les volumes importants",
          "Délai légal de réflexion de 15 jours entre devis et intervention. Un bilan sénologique préalable est requis."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique, bilan sénologique et consultation anesthésique dans les 30 jours précédant l'intervention",
          "Tabac : Arrêt total du tabac au moins 1 mois avant et après",
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Jeûne : Jeûne à partir de minuit la veille",
          "Soutien-gorge : Soutien-gorge de sport sans armatures prescrit à porter dès le réveil"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "Le lifting mammaire est réalisé sous anesthésie générale. La patiente est installée en position semi-assise pour permettre une évaluation per-opératoire de la symétrie. Après un marquage préalable réalisé debout, les incisions sont réalisées, l'excédent de peau résécué, la glande concentrée et remodelée, et le mamelon repositionné à sa nouvelle hauteur.",
          "Si un implant est associé (lifting-augmentation), la loge prothétique est créée dans le même temps, avant ou après le remodelage glandulaire selon la technique. La fermeture est réalisée couche par couche avec une suture cutanée soignée."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "1 nuit en clinique recommandée",
          "Accompagnateur obligatoire pour le retour",
          "Arrêt de travail de 10 à 15 jours",
          "Port du soutien-gorge sans armatures 6 semaines",
          "Conduite déconseillée pendant 7 à 10 jours"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J3 : Douleurs modérées, sensation de tension. Soutien-gorge de contention en place. Pansements.",
          "Semaine 1–2 : Résorption des ecchymoses. Ablation des fils non résorbables si nécessaire vers J12.",
          "Semaine 2–4 : Reprise des activités légères. Massage cicatriciel débuté à J21. Le soutien-gorge maintenu.",
          "Mois 1–3 : L'œdème se résorbe. Le sein prend progressivement sa forme définitive. Les cicatrices s'assouplissent.",
          "Mois 3–6 : Résultat apprécié. Sport possible à partir du 2e mois. Cicatrices en maturation sur 12–18 mois."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat est immédiatement visible : les seins sont remontés, fermes, avec les mamelons repositionnés dans leur axe. Le résultat définitif s'apprécie à 3 à 6 mois. La durabilité est bonne, mais peut être altérée par une grossesse ultérieure ou une prise de poids importante.",
          "Les cicatrices évoluent favorablement sur 12 à 18 mois. Elles sont le compromis inévitable d'un sein remonté et ferme - un compromis que la grande majorité des patientes juge largement acceptable au regard du bénéfice obtenu."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome",
          "RISQUES GÉNÉRAUX : Infection",
          "RISQUES GÉNÉRAUX : Réaction anesthésique",
          "RISQUES GÉNÉRAUX : Thrombose veineuse",
          "RISQUES SPÉCIFIQUES : Nécrose partielle du mamelon (tabac ++)",
          "RISQUES SPÉCIFIQUES : Asymétrie résiduelle de position",
          "RISQUES SPÉCIFIQUES : Hypo-sensibilité du mamelon",
          "RISQUES SPÉCIFIQUES : Cicatrice élargie ou hypertrophique",
          "RISQUES SPÉCIFIQUES : Récidive de ptose à long terme",
          "RISQUES SPÉCIFIQUES : Désunion de cicatrice dans le pli"
        ]
      }
    ],
    "faq": [
      {
        "question": "Peut-on faire un lifting mammaire sans prothèse ?",
        "answer": "Oui, si le volume est satisfaisant. La mastopexie seule repositionne et redonne de la tenue. En revanche, si le sein est vide et tombant, l'association d'un implant est souvent nécessaire pour obtenir un résultat harmonieux - c'est évalué en consultation."
      },
      {
        "question": "Combien de temps dure le résultat d'un lifting mammaire ?",
        "answer": "Le résultat est durable, mais pas permanent. Le vieillissement cutané, une nouvelle grossesse ou une variation de poids peuvent progressivement modifier le résultat. On estime une bonne tenue sur 8 à 15 ans selon les cas."
      },
      {
        "question": "Les cicatrices sont-elles définitives ?",
        "answer": "Les cicatrices sont permanentes mais évoluent très favorablement. À 18 mois, elles sont généralement discrètes, fines et pâles. Leur qualité dépend du terrain cutané et du suivi cicatriciel post-opératoire."
      },
      {
        "question": "Peut-on allaiter après un lifting mammaire ?",
        "answer": "Dans la plupart des cas, oui. Les techniques modernes préservent le pédicule vasculo-nerveux du mamelon et les canaux galactophores principaux. Une grossesse après lifting est possible mais peut modifier le résultat."
      }
    ]
  },
  "lifting-temporal": {
    "breadcrumb": "Interventions › Visage › Lifting temporal",
    "categoryLabel": "Visage",
    "h1": "Lifting temporal - Remontée des sourcils et de la queue de l'œil Tunis",
    "intro": "Le lifting temporal est une intervention ciblée qui agit sur le tiers latéral du visage : il remonte la queue du sourcil, corrige le relâchement de la tempe et de la région péri-orbitaire externe, et redéfinit le regard. Moins étendu qu'un lifting frontal complet, il est indiqué lorsque les signes de vieillissement sont localisés à la région temporale - sourcil qui descend, regard alourdi par les tempes, coin de l'œil qui s'affaisse. Il peut être réalisé seul ou associé à un lifting cervico-facial.",
    "quickFacts": [
      {
        "value": "45min–1h",
        "label": "Durée"
      },
      {
        "value": "Locale\nou générale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire",
        "label": "Hospitalisation"
      },
      {
        "value": "2–3 mois",
        "label": "Résultat définitif"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LE LIFTING TEMPORAL ?",
        "paragraphs": [
          "Le lifting temporal consiste à soulever et retendre les tissus de la région temporale par une incision dissimulée dans le cuir chevelu temporal. Il agit sur la queue du sourcil (remontée latérale), le coin externe de l'œil (canthus externe), et la peau temporale relâchée. Il donne un regard plus ouvert, moins « plombé », et peut éviter ou retarder une blépharoplastie supérieure dans certains cas."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "bullets": [
          "Queue du sourcil tombante donnant un regard triste ou fatigué",
          "Coin externe de l'œil (canthus) qui s'affaisse",
          "Relâchement cutané limité à la région temporale",
          "Souhait d'un geste ciblé et minimal - alternative au lifting frontal complet"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "L'examen analyse la position du sourcil (distance sourcil-bord orbitaire, symétrie), le degré de ptose temporale et la présence de rides péri-orbitaires associées. Le lifting temporal est souvent discuté en association avec une blépharoplastie supérieure (pour les cas où l'excès de peau de la paupière est aggravé par la chute du sourcil) ou un lifting cervico-facial.",
          "Délai légal de 15 jours entre la remise du devis et l'intervention."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Tabac : Arrêt du tabac 1 mois avant",
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Cheveux : Shampoing la veille - pas de produits coiffants le jour de l'intervention",
          "Jeûne : Jeûne si anesthésie générale ou sédation"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention dure 45 minutes à 1 heure. L'incision est tracée dans le cuir chevelu temporal, dissimulée dans les cheveux. Les tissus temporaux sont décollés et remis en tension vers le haut et l'arrière. L'excès cutané est réséqué et la fermeture réalisée avec soin. Le résultat est une remontée de la queue du sourcil et un dégagement du regard latéral."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "Ambulatoire",
          "Arrêt de travail de 7 à 10 jours",
          "Éviter les shampooings vigoureux pendant 2 semaines",
          "Exposition solaire du scalp évitée pendant 3 mois"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J5 : Ecchymoses temporales légères. Sensation de tension dans la région temporale. Cicatrice dans les cheveux.",
          "Semaine 1–2 : Ablation des fils vers J10–J14. Régression de l'œdème et des ecchymoses.",
          "Mois 1–3 : Résultat définitif. Regard ouvert et rajeuni. Cicatrice invisible dans les cheveux."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le lifting temporal donne un regard plus ouvert, la queue du sourcil remontée, l'angle de l'œil redéfini. Le résultat s'apprécie à 2 à 3 mois et dure en moyenne 5 à 8 ans. La cicatrice est entièrement cachée dans le cuir chevelu."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome",
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Réaction anesthésique",
          "RISQUES SPÉCIFIQUES : Alopécie temporaire au niveau de la cicatrice",
          "RISQUES SPÉCIFIQUES : Asymétrie de la hauteur des sourcils",
          "RISQUES SPÉCIFIQUES : Hypo-sensibilité temporale transitoire",
          "RISQUES SPÉCIFIQUES : Récidive à moyen terme",
          "RISQUES SPÉCIFIQUES : Sourcil trop relevé - hypercorrection"
        ]
      }
    ],
    "faq": [
      {
        "question": "Quelle est la différence entre lifting temporal et lifting frontal ?",
        "answer": "Le lifting temporal agit uniquement sur la région temporale et la queue du sourcil. Le lifting frontal traite l'ensemble du front, des rides horizontales frontales et des sourcils. Le lifting temporal est une intervention plus ciblée, moins étendue, avec des suites plus légères."
      },
      {
        "question": "Peut-on associer lifting temporal et blépharoplastie ?",
        "answer": "Oui, et cette association est fréquente. La chute de la queue du sourcil aggrave le surplomb palpébral - en remontant le sourcil par un lifting temporal, on peut réduire la quantité de peau à réséquer à la paupière et améliorer le résultat global du regard."
      }
    ]
  },
  "lip-lift": {
    "breadcrumb": "Interventions › Visage › Lip lift",
    "categoryLabel": "Visage",
    "h1": "Lip lift - Remontée de la lèvre supérieure Tunis",
    "intro": "Le lip lift est une intervention chirurgicale discrète qui permet de raccourcir la distance entre la base du nez et le bord rouge de la lèvre supérieure (philtrum), tout en augmentant le volume et l'éversion de la lèvre. Il corrige l'allongement progressif du philtrum lié au vieillissement, qui donne à la bouche un aspect tombant, effacé et vieilli. Le lip lift offre un résultat naturel et permanent - bien différent d'une simple injection d'acide hyaluronique qui augmente le volume sans raccourcir le philtrum.",
    "quickFacts": [
      {
        "value": "30–45 min",
        "label": "Durée"
      },
      {
        "value": "Locale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire",
        "label": "Hospitalisation"
      },
      {
        "value": "3–6 mois",
        "label": "Résultat définitif"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LE LIP LIFT ?",
        "paragraphs": [
          "Le lip lift consiste à réséquer une bande de peau elliptique sous la base du nez (incision en « ailes de mouette » ou bull horn), ce qui remonte mécaniquement la lèvre supérieure, raccourcit le philtrum, augmente la projection de la lèvre et expose davantage le vermillon. Le résultat est une bouche plus jeune, plus pulpeuse, plus expressive - sans l'aspect artificiel des lèvres trop injectées.",
          "La cicatrice est tracée dans la zone de jonction entre la peau et la base du nez - elle suit le contour des ailes du nez et est quasiment imperceptible en 6 à 12 mois."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "Le lip lift et les injections d'acide hyaluronique sont complémentaires : le lip lift raccourcit et remonte la lèvre (action structurelle), tandis que les injections augmentent le volume (action volumique). Les deux peuvent être combinés pour un résultat optimal."
        ],
        "bullets": [
          "Philtrum allongé (distance nez–lèvre supérieure > 15–17 mm)",
          "Lèvre supérieure plate ou efface - vermillon peu visible",
          "Bouche vieillissante avec perte de la courbe de Cupidon",
          "Souhait d'un résultat naturel et permanent, différent des injections"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "La consultation évalue la distance philtrum, la hauteur et la projection de la lèvre supérieure, la symétrie, la qualité cutanée et les attentes. Le tracé prévu de la cicatrice est discuté et expliqué. La quantité de peau à réséquer est calculée avec précision - une résection insuffisante donne un résultat décevant, une résection excessive donne une lèvre trop « retroussée ».",
          "Délai légal de 15 jours entre la remise du devis et l'intervention."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Tabac : Arrêt du tabac 1 mois avant - cicatrisation de la lèvre supérieure exigeante",
          "Maquillage : Pas de maquillage le jour de l'intervention",
          "Jeûne : Pas de jeûne nécessaire pour anesthésie locale pure"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention est réalisée sous anesthésie locale et dure 30 à 45 minutes. Après marquage précis au stylo dermographique, une bande elliptique de peau est réséquée sous la base du nez, suivant la technique « bull horn » (les extrémités de l'ellipse remontent dans les ailes du nez pour que la cicatrice disparaisse dans la jonction aile-joue). La fermeture est réalisée au fil fin résorbable et non résorbable, avec une attention particulière à la tension et à la qualité de la suture."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "Ambulatoire - retour à domicile immédiat",
          "Arrêt de travail de 5 à 7 jours",
          "Éviter les mouvements amples de la bouche (rire, bâillements) les 10 premiers jours",
          "Alimentation semi-liquide les 3 premiers jours",
          "Protection solaire stricte de la cicatrice pendant 6 mois"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J5 : Ecchymose et légère induration de la lèvre supérieure. Cicatrice sous le nez. Alimentation adaptée.",
          "Semaine 1–2 : Ablation des fils vers J7. La lèvre se dégonfle. Le résultat commence à apparaître.",
          "Semaine 2–6 : Assouplissement de la cicatrice. Massage cicatriciel prescrit. La lèvre se stabilise.",
          "Mois 1–6 : Maturation de la cicatrice. Résultat définitif à 3–6 mois. Cicatrice devenant imperceptible."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat du lip lift est permanent et naturel : la lèvre supérieure est plus haute, plus pulpeuse, avec un vermillon plus exposé et une courbe de Cupidon mieux dessinée. La cicatrice, bien que visible les premières semaines, devient quasiment imperceptible dans la zone de jonction sous-nasale en 6 à 12 mois."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Hématome",
          "RISQUES GÉNÉRAUX : Cicatrisation retardée",
          "RISQUES SPÉCIFIQUES : Cicatrice visible ou hypertrophique sous le nez",
          "RISQUES SPÉCIFIQUES : Asymétrie de la courbe de Cupidon",
          "RISQUES SPÉCIFIQUES : Hypercorrection - lèvre trop retroussée",
          "RISQUES SPÉCIFIQUES : Résultat insuffisant - philtrum encore long",
          "RISQUES SPÉCIFIQUES : Modification de l'odorat (très rare)"
        ]
      }
    ],
    "faq": [
      {
        "question": "Le lip lift remplace-t-il les injections de lèvres ?",
        "answer": "Non - les deux interventions agissent différemment. Le lip lift raccourcit le philtrum et remonte la lèvre (effet structurel permanent). Les injections d'acide hyaluronique augmentent le volume (effet volumique temporaire). Ils sont complémentaires plutôt que substituables."
      },
      {
        "question": "La cicatrice est-elle visible ?",
        "answer": "Les premières semaines, la cicatrice est visible sous le nez. Elle s'estompe progressivement et devient quasiment imperceptible à 6–12 mois dans la zone de transition cutanée-nasale. Une cicatrice fine et bien soignée passe inaperçue à distance normale."
      }
    ]
  },
  "lipoaspiration": {
    "breadcrumb": "Interventions › Silhouette › Lipoaspiration",
    "categoryLabel": "Silhouette",
    "h1": "Lipoaspiration - Chirurgie des graisses localisées Tunis",
    "intro": "La lipoaspiration, également appelée liposuccion ou liposculpture, est l'intervention chirurgicale la plus pratiquée au monde pour éliminer les dépôts graisseux localisés résistants au sport et aux régimes. Elle permet de remodeler précisément la silhouette, zone par zone : ventre, flancs, cuisses, bras, culotte de cheval, genoux, double menton. Ce n'est pas une technique d'amaigrissement : elle s'adresse aux personnes à poids stable souhaitant corriger des disharmonies corporelles persistantes malgré une hygiène de vie adaptée.",
    "quickFacts": [
      {
        "value": "1–3h",
        "label": "Durée"
      },
      {
        "value": "Générale\nou locale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire\nou 1 nuit",
        "label": "Hospitalisation"
      },
      {
        "value": "3–6 mois",
        "label": "Résultat définitif"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LA LIPOASPIRATION ?",
        "paragraphs": [
          "La lipoaspiration consiste à aspirer la graisse sous-cutanée à l'aide de fines canules introduites par de micro-incisions quasiment invisibles. Avant l'aspiration, les zones à traiter sont infiltrées d'une solution anesthésique et vasoconstrictrice (tumescence) qui limite les saignements et améliore le confort post-opératoire.",
          "L'objectif est de rééquilibrer les proportions corporelles, non de faire maigrir. La lipoaspiration est complémentaire d'un mode de vie sain : elle supprime définitivement les cellules graisseuses aspirées, mais ne prévient pas une prise de poids globale.",
          "Zones traitables : abdomen, flancs et poignées d'amour, face interne et externe des cuisses, culotte de cheval, genoux, bras, dos (bourrelets du soutien-gorge), cou et double menton. Plusieurs zones peuvent être traitées dans le même temps opératoire."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "La lipoaspiration n'est pas indiquée en cas de surpoids important (IMC > 30), de peau très relâchée (qui nécessiterait un geste cutané associé), de pathologie de la coagulation, ou d'insuffisance vasculaire des membres inférieurs. Une évaluation clinique en consultation est indispensable."
        ],
        "bullets": [
          "Dépôts graisseux localisés disproportionnés par rapport au reste de la silhouette",
          "Poids stable depuis au moins 6 mois - la lipoaspiration n'est pas un traitement de l'obésité",
          "Bonne qualité cutanée avec élasticité suffisante pour la rétraction post-opératoire",
          "Attentes réalistes : la lipoaspiration redessine, elle ne remplace pas l'activité physique"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "La consultation comprend un examen clinique debout et couché, avec une évaluation de la qualité cutanée (élasticité, vergetures, tonicité), de la répartition et du volume des graisses à traiter. Un marquage debout est réalisé, délimitant précisément les zones à traiter. Le plan de traitement, les zones prioritaires et les associations d'actes éventuelles sont définis ensemble.",
          "Délai légal de 15 jours entre la remise du devis et l'intervention. Une fiche d'information sur la lipoaspiration vous est remise."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique et consultation anesthésique dans les 30 jours précédant l'intervention",
          "Tabac : Arrêt du tabac au moins 1 mois avant",
          "Médicaments : Arrêt de l'aspirine, des anti-inflammatoires et de la vitamine E 10 jours avant",
          "Jeûne : Jeûne strict à partir de minuit la veille",
          "Contention : Prévoir une gaine ou un panty de contention sur prescription - à mettre dès le réveil",
          "Organisation : Prévoir un accompagnateur pour le retour et une aide à domicile les premiers jours"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "La lipoaspiration est réalisée sous anesthésie générale ou locorégionale selon l'étendue des zones traitées, et dure entre 1 et 3 heures. Après l'infiltration tumescente, de fines canules de 3 à 5 mm sont introduites par de micro-incisions placées dans les plis naturels ou les zones les moins visibles. Les mouvements progressifs et homogènes permettent une aspiration régulière, en croix, pour éviter les irrégularités.",
          "L'évaluation de la symétrie est réalisée tout au long de l'intervention, en comparant les deux côtés. Le résultat per-opératoire est apprécié en palpant les zones traitées pour s'assurer d'une bonne homogénéité de la réduction.",
          "Les micro-incisions mesurent entre 3 et 5 mm. Elles sont placées dans les plis cutanés naturels et deviennent quasiment imperceptibles en quelques mois."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "Ambulatoire dans la plupart des cas - ou 1 nuit si les zones traitées sont importantes",
          "Accompagnateur obligatoire pour le retour",
          "Arrêt de travail de 5 à 10 jours selon la nature de l'activité",
          "Conduite déconseillée pendant 5 jours"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J3 : Douleurs modérées, ecchymoses et œdème importants mais attendus. Gaine de contention en place. Traitement antalgique prescrit.",
          "Semaine 1–2 : Régression progressive des ecchymoses. Sensation de gonflement et peau tendue. Reprise des activités légères.",
          "Semaine 3–6 : L'œdème se résorbe. La silhouette commence à se dessiner. Port de la gaine obligatoire.",
          "Mois 2–3 : Disparition de l'essentiel de l'œdème résiduel. Le résultat s'affine progressivement.",
          "Mois 3–6 : Résultat définitif visible. Reprise du sport progressivement à partir du 2e mois."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat définitif s'apprécie entre 3 et 6 mois. Les cellules graisseuses aspirées sont définitivement éliminées et ne se reconstituent pas. La silhouette est remodelée, les contours harmonisés et les zones traitées nettement affinées.",
          "La durabilité est excellente à poids stable. En cas de prise de poids ultérieure, les cellules restantes dans les zones non traitées peuvent se développer, mais les zones aspirées restent proportionnellement plus fines."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome post-opératoire",
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Réaction à l'anesthésie",
          "RISQUES GÉNÉRAUX : Thrombose veineuse (prévention anticoagulants)",
          "RISQUES SPÉCIFIQUES : Irrégularités ou asymétrie de surface",
          "RISQUES SPÉCIFIQUES : Rétraction cutanée insuffisante",
          "RISQUES SPÉCIFIQUES : Hypo- ou hyper-sensibilité cutanée transitoire",
          "RISQUES SPÉCIFIQUES : Sérome (épanchement liquidien)",
          "RISQUES SPÉCIFIQUES : Brûlure cutanée si technique assistée par ultrasons (rare)",
          "RISQUES SPÉCIFIQUES : Correction insuffisante nécessitant une retouche"
        ]
      }
    ],
    "faq": [
      {
        "question": "La lipoaspiration fait-elle maigrir ?",
        "answer": "Non. Elle élimine les graisses localisées et redéfinit les contours, mais ne constitue pas un traitement de l'excès pondéral. Elle se pratique sur un poids stable et ne remplace pas une bonne hygiène alimentaire et sportive."
      },
      {
        "question": "Peut-on traiter plusieurs zones en même temps ?",
        "answer": "Oui, plusieurs zones peuvent être traitées dans le même temps opératoire, dans la limite d'un volume d'aspiration sécurisé et d'une durée d'intervention raisonnable. Ce point est évalué en consultation selon votre morphologie et votre état de santé."
      },
      {
        "question": "Combien de temps faut-il porter la gaine ?",
        "answer": "La gaine de contention est portée en continu pendant 4 à 6 semaines, puis progressivement allégée. Elle est indispensable pour limiter l'œdème, favoriser la rétraction cutanée et améliorer l'homogénéité du résultat."
      },
      {
        "question": "La graisse peut-elle revenir après une lipoaspiration ?",
        "answer": "Les cellules graisseuses aspirées sont définitivement supprimées. En revanche, une prise de poids peut faire grossir les cellules restantes dans les zones non traitées. Un poids stable est la condition de la pérennité du résultat."
      },
      {
        "question": "La lipoaspiration traite-t-elle la cellulite ?",
        "answer": "Non. La lipoaspiration élimine la graisse profonde sous-cutanée mais n'agit pas sur la cellulite superficielle (aspect peau d'orange). Ces deux problèmes nécessitent des approches différentes."
      }
    ]
  },
  "lipoaspiration-du-cou": {
    "breadcrumb": "Interventions › Visage › Lipoaspiration du cou",
    "categoryLabel": "Visage",
    "h1": "Lipoaspiration du cou - Double menton chirurgie Tunis",
    "intro": "La lipoaspiration du cou, ou liposuccion cervicale, est l'intervention indiquée pour corriger le double menton et redéfinir l'angle cervico-mentonnier. Lorsque la graisse cervicale est abondante et localisée, résistant au sport et au régime, la lipoaspiration cervicale permet de retrouver en une intervention courte et peu invasive un profil harmonieux et un cou affiné. Elle peut être réalisée seule ou associée à un lifting cervico-facial pour une correction complète.",
    "quickFacts": [
      {
        "value": "30–45 min",
        "label": "Durée"
      },
      {
        "value": "Locale\nou générale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire",
        "label": "Hospitalisation"
      },
      {
        "value": "2–3 mois",
        "label": "Résultat définitif"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LA LIPOASPIRATION DU COU ?",
        "paragraphs": [
          "La lipoaspiration cervicale consiste à aspirer la graisse localisée sous le menton et dans la région cervicale antérieure, à l'aide de micro-canules introduites par une ou deux micro-incisions sous le menton et derrière les lobes d'oreilles. Elle permet de redéfinir l'angle cervico-mentonnier (l'angle entre la gorge et le profil du menton), qui donne sa noblesse au profil facial.",
          "Elle est efficace chez les sujets jeunes avec une bonne élasticité cutanée, qui permettra une bonne rétraction de la peau après aspiration. Chez les patients plus âgés avec un relâchement cutané associé, une lipoaspiration seule peut être insuffisante - un lifting cervico-facial est alors préférable."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UN(E) BON(NE) CANDIDAT(E) ?",
        "paragraphs": [
          "La lipoaspiration du cou seule n'est pas indiquée en cas de relâchement cutané cervical significatif - la peau excédentaire ne se rétractera pas suffisamment après aspiration et le résultat serait insatisfaisant. Dans ce cas, un lifting cervico-facial avec ou sans lipoaspiration est l'indication appropriée."
        ],
        "bullets": [
          "Double menton persistant malgré une perte de poids",
          "Graisse cervicale localisée disproportionnée avec le reste du visage",
          "Bonne élasticité cutanée cervicale - peau capable de se rétracter après aspiration",
          "Poids stable"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "L'examen clinique évalue la quantité de graisse cervicale, la qualité et l'élasticité cutanée, et la présence ou non d'un relâchement musculaire des muscles peauciers (bands platysmal). Selon ces éléments, je vous propose la solution la plus adaptée : lipoaspiration seule, lipoaspiration avec plastysmaplastie (resserrement du muscle platysma par voie sous-mentale), ou lifting cervico-facial associé.",
          "Délai légal de 15 jours entre la remise du devis et l'intervention."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique si anesthésie générale - pas nécessaire pour anesthésie locale",
          "Tabac : Arrêt du tabac 1 mois avant",
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Jeûne : Jeûne si anesthésie générale",
          "Contention : Prévoir un bandeau cervical de contention sur prescription"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention est réalisée sous anesthésie locale ou générale et dure 30 à 45 minutes. Une ou deux micro-incisions de 2 à 3 mm sont pratiquées sous le menton (et parfois derrière les lobes d'oreilles pour les zones latérales). Après infiltration tumescente, les micro-canules aspirent la graisse cervicale de façon progressive et homogène. Si un relâchement du platysma est associé, une plicature musculaire (plastymaplastie) peut être réalisée par la même voie."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "Ambulatoire - retour à domicile le jour même",
          "Bandeau cervical de contention porté 3 à 4 semaines",
          "Arrêt de travail de 5 à 7 jours",
          "Éviter l'exposition solaire cervicale pendant 3 mois"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J5 : Ecchymoses et légère induration cervicale. Bandeau en place. Douleurs légères.",
          "Semaine 1–3 : Régression des ecchymoses. L'œdème résiduel se résorbe. Le profil commence à se dessiner.",
          "Mois 1–3 : Disparition de l'œdème. Résultat définitif visible. L'angle cervico-mentonnier est redéfini."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat définitif s'apprécie à 2 à 3 mois : le profil est affiné, l'angle cervico-mentonnier nettement redéfini, le cou harmonieux. Les micro-cicatrices sont imperceptibles. La durabilité est bonne à poids stable - les cellules graisseuses aspirées ne se reconstituent pas."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome cervical",
          "RISQUES GÉNÉRAUX : Infection",
          "RISQUES GÉNÉRAUX : Réaction anesthésique",
          "RISQUES SPÉCIFIQUES : Irrégularité de surface cervicale",
          "RISQUES SPÉCIFIQUES : Rétraction cutanée insuffisante",
          "RISQUES SPÉCIFIQUES : Hypo-sensibilité cutanée transitoire",
          "RISQUES SPÉCIFIQUES : Asymétrie",
          "RISQUES SPÉCIFIQUES : Récidive si prise de poids ultérieure"
        ]
      }
    ],
    "faq": [
      {
        "question": "La lipoaspiration du cou peut-elle remplacer un lifting ?",
        "answer": "Chez les sujets jeunes avec une bonne élasticité cutanée, oui. Chez les patients plus âgés avec un relâchement cutané, la lipoaspiration seule donnera un résultat insuffisant - un lifting cervico-facial est plus approprié. L'évaluation clinique en consultation tranche."
      },
      {
        "question": "Le double menton peut-il revenir après l'opération ?",
        "answer": "Les cellules graisseuses aspirées sont définitivement éliminées. En revanche, une prise de poids importante peut reconstituer du tissu graisseux dans les zones non aspirées. Un poids stable est la condition de la pérennité du résultat."
      }
    ]
  },
  "lipofilling-des-fesses": {
    "breadcrumb": "Interventions › Silhouette › Lipofilling des fesses",
    "categoryLabel": "Silhouette",
    "h1": "Lipofilling des fesses - Brazilian Butt Lift Tunis",
    "intro": "Le lipofilling des fesses, également appelé Brazilian Butt Lift (BBL), est une technique d'augmentation fessière naturelle utilisant la propre graisse de la patiente. Elle allie deux bénéfices complémentaires : l'affinement des zones donneuses par lipoaspiration et l'augmentation harmonieuse du volume fessier. Le résultat est naturel au toucher et à l'aspect, sans corps étranger. C'est une intervention en forte demande, particulièrement adaptée aux patientes souhaitant des fesses plus galonnées et une silhouette sablier harmonieuse.",
    "quickFacts": [
      {
        "value": "2–3h",
        "label": "Durée"
      },
      {
        "value": "Générale",
        "label": "Anesthésie"
      },
      {
        "value": "1 nuit",
        "label": "Hospitalisation"
      },
      {
        "value": "4–6 mois",
        "label": "Résultat définitif"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LE LIPOFILLING DES FESSES ?",
        "paragraphs": [
          "Le lipofilling fessier, ou Brazilian Butt Lift, consiste à prélever de la graisse par lipoaspiration dans les zones donneuses (abdomen, flancs, cuisses selon le cas), à la purifier par centrifugation, puis à la réinjecter dans les fesses pour en augmenter le volume et en améliorer la forme. La graisse utilisée est la vôtre - il n'y a aucun implant.",
          "L'objectif est d'obtenir des fesses plus volumineuses, plus rondes et mieux projetées, en harmonie avec la morphologie globale. La lipoaspiration des zones donneuses permet simultanément d'affiner la taille et les hanches, ce qui accentue l'effet sablier."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "Le lipofilling fessier nécessite des réserves graisseuses suffisantes pour le prélèvement. Les patientes très minces avec peu de graisse mobilisable ne sont pas de bonnes candidates - dans ces cas, les prothèses de fesses peuvent être discutées. Une évaluation clinique en consultation est indispensable."
        ],
        "bullets": [
          "Volume fessier insuffisant ou forme peu harmonieuse avec la silhouette",
          "Présence de réserves graisseuses suffisantes dans les zones donneuses",
          "Poids stable depuis au moins 6 mois",
          "Attentes réalistes : 30 à 40% de la graisse injectée sera naturellement résorbée"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "La consultation évalue les zones donneuses disponibles, le volume de graisse mobilisable et le résultat attendu selon votre morphologie. Je fixe avec vous des objectifs précis et réalistes, en tenant compte du taux de résorption naturel. Le choix des zones à lipoaspirer et le volume cible à injecter sont définis ensemble, en veillant à l'harmonie globale de la silhouette.",
          "Délai légal de 15 jours entre la remise du devis et l'intervention."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique et consultation anesthésique",
          "Tabac : Arrêt du tabac au moins 1 mois avant",
          "Médicaments : Arrêt de l'aspirine et des anti-inflammatoires 10 jours avant",
          "Jeûne : Jeûne strict à partir de minuit la veille",
          "Gaine : Prévoir une gaine de contention pour les zones donneuses",
          "Coussin : Prévoir un coussin de décharge pour éviter d'appuyer directement sur les fesses les 3 premières semaines"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention se déroule en trois temps sous anesthésie générale. Premièrement, le prélèvement de graisse par lipoaspiration douce dans les zones donneuses, avec une technique préservant au maximum la viabilité des cellules adipeuses. Deuxièmement, la purification de la graisse par centrifugation selon la technique de Coleman. Troisièmement, la réinjection en micro-bolus dans différents plans du tissu fessier - sous-cutané profond et intramusculaire superficiel - pour maximiser la vascularisation et la prise de la graisse.",
          "SÉCURITÉ ABSOLUE : la graisse est injectée exclusivement dans les couches superficielles et intramusculaires - JAMAIS en profondeur dans le muscle ou à proximité des vaisseaux. Cette règle de sécurité stricte, rappelée par toutes les sociétés savantes internationales, est systématiquement respectée dans ma pratique."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "1 nuit en clinique systématiquement recommandée",
          "Accompagnateur obligatoire pour le retour",
          "Arrêt de travail de 10 à 15 jours",
          "Position allongée sur le ventre ou sur le côté recommandée pendant 3 semaines",
          "Coussin de décharge obligatoire pour s'asseoir pendant les 3 premières semaines"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J5 : Douleurs dans les zones donneuses et les fesses. Œdème et ecchymoses importants mais attendus. Position ventrale.",
          "Semaine 1–3 : Gaine sur les zones liposucées. Coussin de décharge à l'assise. Résorption progressive des ecchymoses.",
          "Semaine 3–6 : Levée progressive des contraintes posturales. La graisse commence à s'intégrer dans ses nouveaux tissus.",
          "Mois 2–4 : La résorption partielle se stabilise. Le volume définitif se précise progressivement.",
          "Mois 4–6 : Résultat final. La graisse survivante est définitivement intégrée."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat définitif s'apprécie entre 4 et 6 mois. Environ 60 à 70% de la graisse injectée persiste durablement. Les fesses sont plus volumineuses, rondes et projetées. La taille et les hanches sont simultanément affinées. Le résultat est naturel et le toucher souple.",
          "La durabilité est excellente pour la graisse ayant survécu après 6 mois : elle se comporte comme du tissu adipeux natif et évolue avec les variations de poids."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome dans les zones donneuses",
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Thrombose veineuse",
          "RISQUES GÉNÉRAUX : Réaction à l'anesthésie",
          "RISQUES SPÉCIFIQUES : Résorption supérieure à 40% nécessitant une retouche",
          "RISQUES SPÉCIFIQUES : Asymétrie des fesses",
          "RISQUES SPÉCIFIQUES : Irrégularités dans les zones liposucées",
          "RISQUES SPÉCIFIQUES : Nodules graisseux bénins (cytostéatonécrose)",
          "RISQUES SPÉCIFIQUES : Embolie graisseuse (exceptionnelle si règles de sécurité respectées)"
        ]
      }
    ],
    "faq": [
      {
        "question": "Quelle part de la graisse injectée survit ?",
        "answer": "En moyenne, 60 à 70% de la graisse injectée s'intègre durablement. Pour anticiper cette résorption naturelle, le volume injecté est toujours supérieur au volume cible final."
      },
      {
        "question": "Le résultat est-il permanent ?",
        "answer": "La graisse qui survit après 4 à 6 mois est définitivement intégrée. Cependant, une variation de poids importante peut modifier l'aspect du résultat, comme pour tout tissu adipeux."
      },
      {
        "question": "Peut-on s'asseoir après l'intervention ?",
        "answer": "L'assise directe sur les fesses est déconseillée pendant 3 semaines pour ne pas écraser la graisse fraîchement injectée. Un coussin de décharge spécial est prescrit pour permettre de s'asseoir en reportant l'appui sur les cuisses."
      },
      {
        "question": "La technique est-elle sûre ?",
        "answer": "Le lipofilling fessier est sûr lorsqu'il est réalisé par un chirurgien formé, en respectant strictement les règles d'injection superficielle. Les complications graves sont exceptionnelles mais directement liées à une injection trop profonde - une règle de sécurité absolue dans ma pratique."
      }
    ]
  },
  "lipofilling-du-penis": {
    "breadcrumb": "Interventions › Intime › Lipofilling du pénis",
    "categoryLabel": "Intime",
    "h1": "Lipofilling du pénis - Augmentation du volume pénien Tunis",
    "intro": "Le lipofilling du pénis est une intervention de chirurgie intime masculine qui permet d'augmenter le périmètre (circonférence) du pénis en utilisant la propre graisse du patient. Il s'adresse aux hommes souhaitant une amélioration de leur volume pénien dans un souci esthétique ou de confiance en soi. C'est une intervention naturelle, sans corps étranger, avec des résultats durables. Le lipofilling agit exclusivement sur la circonférence - il ne modifie pas la longueur du pénis.",
    "quickFacts": [
      {
        "value": "1–1h30",
        "label": "Durée"
      },
      {
        "value": "Locale\nou générale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire",
        "label": "Hospitalisation"
      },
      {
        "value": "4–6 mois",
        "label": "Résultat définitif"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LE LIPOFILLING DU PÉNIS ?",
        "paragraphs": [
          "Le lipofilling pénien consiste à prélever de la graisse dans une zone donneuse (abdomen ou flancs), à la purifier par centrifugation, puis à la réinjecter de façon homogène et circonférentielle sous la peau du pénis - entre le revêtement cutané et l'albuginée (l'enveloppe des corps caverneux). Le résultat est une augmentation de la circonférence pénienne d'environ 2 à 4 cm.",
          "Le lipofilling pénien augmente la circonférence, pas la longueur. Les techniques d'allongement pénien (section du ligament suspenseur) sont différentes et ne font pas partie de ma pratique. Si votre attente porte sur la longueur, nous en discutons en consultation pour évaluer les options disponibles."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UN BON CANDIDAT ?",
        "paragraphs": [
          "Le lipofilling pénien n'est pas indiqué en cas de dysfonction érectile d'origine organique, de pathologie urologique active, ou d'antécédent de chirurgie pénienne complexe. Un bilan urologique peut être requis avant la consultation chirurgicale."
        ],
        "bullets": [
          "Souhait d'augmenter le volume pénien dans un contexte esthétique ou de confiance en soi",
          "Présence de réserves graisseuses suffisantes dans les zones donneuses",
          "Attentes réalistes - environ 30 à 40% de résorption naturelle de la graisse",
          "Absence de pathologie erectile ou urologique active"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "La consultation se déroule dans un cadre médical confidentiel et bienveillant. J'évalue les zones donneuses disponibles, le volume de graisse mobilisable, et je définis avec vous les objectifs réalistes de l'intervention. L'absence de corps étranger, la naturalité du résultat et la durabilité de la graisse intégrée sont expliqués en détail.",
          "Délai légal de 15 jours entre la remise du devis et l'intervention."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique et consultation anesthésique",
          "Tabac : Arrêt du tabac 1 mois avant",
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Jeûne : Jeûne à partir de minuit si anesthésie générale",
          "Hygiène : Rasage de la zone pénienne et pubienne la veille",
          "Contention : Gaine légère sur la zone donneuse prévue sur prescription"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention dure 1 à 1h30 sous anesthésie locale ou générale. Le prélèvement de graisse est réalisé par lipoaspiration douce dans la zone donneuse. Après purification par centrifugation, la graisse est réinjectée de façon homogène et circonférentielle sous la peau du pénis en érection partielle, en multiple micro-bolus pour assurer une distribution régulière et éviter les irrégularités. La réinjection s'étend de la base jusqu'au sillon balano-préputial."
        ]
      },
      {
        "key": "06",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "paragraphs": [
          "Légère ecchymose et œdème pénien pendant 7 à 10 jours",
          "Sous-vêtement de soutien prescrit pendant 3 semaines",
          "Abstinence sexuelle pendant 4 à 6 semaines",
          "Reprise du travail possible dès J3–J5 pour travail de bureau",
          "Éviter les activités sportives intenses pendant 3 semaines"
        ]
      },
      {
        "key": "07",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat définitif s'apprécie à 4 à 6 mois, une fois l'œdème résorbé et la résorption partielle de la graisse stabilisée. Environ 60 à 70% de la graisse injectée persiste durablement. L'augmentation de la circonférence est de 2 à 4 cm en moyenne. Le résultat est naturel au toucher."
        ]
      },
      {
        "key": "08",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome pénien",
          "RISQUES GÉNÉRAUX : Infection",
          "RISQUES GÉNÉRAUX : Réaction anesthésique",
          "RISQUES SPÉCIFIQUES : Résorption supérieure à 40% - retouche à 6 mois",
          "RISQUES SPÉCIFIQUES : Irrégularités ou nodules sous-cutanés",
          "RISQUES SPÉCIFIQUES : Asymétrie de distribution de la graisse",
          "RISQUES SPÉCIFIQUES : Douleur à l'érection transitoire",
          "RISQUES SPÉCIFIQUES : Résultat insuffisant si réserves graisseuses limitées"
        ]
      }
    ],
    "faq": [
      {
        "question": "Le lipofilling modifie-t-il la longueur du pénis ?",
        "answer": "Non. Le lipofilling agit exclusivement sur la circonférence (le volume). Il n'augmente pas la longueur du pénis. Les deux notions sont anatomiquement distinctes et relèvent de techniques différentes."
      },
      {
        "question": "Le résultat est-il permanent ?",
        "answer": "La graisse qui survit après 4 à 6 mois est définitivement intégrée. En cas de prise de poids ou d'amaigrissement, elle peut varier légèrement en volume comme tout tissu adipeux."
      },
      {
        "question": "La fonction érectile est-elle modifiée ?",
        "answer": "Non. Le lipofilling pénien agit sur le revêtement sous-cutané superficiel sans toucher aux corps caverneux ni aux nerfs érecteurs. La fonction érectile et la sensibilité ne sont pas modifiées. MÉDECINE ESTHÉTIQUE Traitements non chirurgicaux pour rajeunir, hydrater et sublimer votre peau - sans bisturi, sans cicatrice, avec un retour immédiat à la vie sociale. Les traitements de médecine esthétique ne sont pas chirurgicaux : ils ne nécessitent pas d'anesthésie générale ni de salle d'opération. Ils sont réalisés en consultation, sous anesthésie locale ou crème anesthésiante selon les cas. La séance est rapide, les résultats souvent immédiats et les suites très légères."
      }
    ]
  },
  "lipofilling-du-visage": {
    "breadcrumb": "Interventions › Visage › Lipofilling du visage",
    "categoryLabel": "Visage",
    "h1": "Lipofilling du visage - Rajeunissement par greffe de graisse Tunis",
    "intro": "Le lipofilling du visage, également appelé transfert de graisse autologue ou lipostructure faciale, est une technique de rajeunissement et de restauration des volumes du visage utilisant la propre graisse du patient. Il permet de corriger les creux et les pertes de volume liés au vieillissement - cernes, tempes creuses, pommettes, sillons nasogéniens, lèvres - sans corps étranger, avec un résultat naturel et durable. Il peut être réalisé seul ou associé à un lifting, une rhinoplastie, ou une blépharoplastie.",
    "quickFacts": [
      {
        "value": "1–2h",
        "label": "Durée"
      },
      {
        "value": "Locale\nou générale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire",
        "label": "Hospitalisation"
      },
      {
        "value": "4–6 mois",
        "label": "Résultat définitif"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LE LIPOFILLING DU VISAGE ?",
        "paragraphs": [
          "Le vieillissement du visage n'est pas seulement une affaire de relâchement cutané - c'est aussi une perte de volume progressive. Les pommettes s'aplatissent, les tempes se creusent, les cernes apparaissent, les sillons nasogéniens se marquent. Le lipofilling facial restaure ces volumes en injectant de la graisse autologue (prélevée dans une zone donneuse comme l'abdomen ou les flancs) dans les zones déficitaires.",
          "La graisse utilisée est la vôtre - pas d'implant, pas d'acide hyaluronique. Le résultat est naturel au toucher, intégré aux tissus, et durable. Une partie de la graisse injectée sera résorbée (30 à 40%) - le volume final s'apprécie à 4 à 6 mois."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "bullets": [
          "Creux cernaux ou cernes creux marqués résistant aux soins",
          "Fonte des pommettes et perte de volume du milieu du visage",
          "Tempes creuses donnant un aspect vieilli ou marqué",
          "Sillons nasogéniens profonds",
          "Lèvres fines souhaitant un volume naturel (sans acide hyaluronique)",
          "Asymétrie faciale volumique"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "L'analyse volumique du visage est réalisée en trois dimensions : face, profil et trois-quarts. Les zones déficitaires sont identifiées et hiérarchisées. Le volume de graisse à injecter par zone est estimé, ainsi que les zones donneuses disponibles. Je vous explique les volumes injectés, le taux de résorption attendu et le résultat final prévisible.",
          "Le lipofilling du visage peut être associé à un lifting cervico-facial pour traiter simultanément le relâchement et la perte de volume - les deux composantes du vieillissement facial. Cette association donne les résultats les plus complets et les plus naturels."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique si anesthésie générale",
          "Tabac : Arrêt du tabac 1 mois avant",
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Jeûne : Jeûne si anesthésie générale ou sédation",
          "Contention : Gaine de contention légère sur la zone donneuse"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention se déroule en trois temps. Premièrement, le prélèvement de graisse par lipoaspiration douce dans la zone donneuse, avec une canule fine pour préserver la viabilité des cellules adipeuses. Deuxièmement, la purification de la graisse par centrifugation selon la technique de Coleman. Troisièmement, la réinjection en micro-bolus dans les différentes zones du visage, couche par couche, avec des micro-canules très fines pour une intégration homogène et naturelle.",
          "La précision de la réinjection est fondamentale : trop en superficie → nodules visibles ; trop en profondeur → mauvaise vascularisation et résorption excessive. La technique de Coleman, utilisée en micro-bolus dans plusieurs plans, est celle qui donne les résultats les plus homogènes et les plus durables."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "Ambulatoire - retour à domicile le jour même",
          "Arrêt de travail de 7 à 10 jours (ecchymoses faciales)",
          "Gaine légère sur la zone donneuse pendant 3 semaines",
          "Éviter tout massage facial les 3 premières semaines",
          "Protection solaire stricte pendant 3 mois"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J5 : Ecchymoses et œdème facial importants. Le visage paraît gonflé et irrégulier - normal à ce stade.",
          "Semaine 1–2 : Régression des ecchymoses. L'œdème diminue progressivement. Le résultat commence à apparaître.",
          "Mois 1–2 : La graisse s'intègre et la résorption partielle se stabilise. Le volume final se précise.",
          "Mois 3–6 : Résultat définitif. La graisse survivante est permanente."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Environ 60 à 70% de la graisse injectée persiste durablement. Les zones traitées retrouvent leur volume, les creux sont comblés, les sillons atténués. Le résultat est naturel, souple, et évolue avec le vieillissement physiologique - contrairement aux résultats des fillers d'acide hyaluronique."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome dans la zone donneuse",
          "RISQUES GÉNÉRAUX : Infection",
          "RISQUES GÉNÉRAUX : Réaction anesthésique",
          "RISQUES SPÉCIFIQUES : Résorption supérieure à 40% - retouche éventuelle à 6 mois",
          "RISQUES SPÉCIFIQUES : Nodules graisseux (cytostéatonécrose)",
          "RISQUES SPÉCIFIQUES : Asymétrie résiduelle",
          "RISQUES SPÉCIFIQUES : Irrégularités de surface si réinjection superficielle",
          "RISQUES SPÉCIFIQUES : Embolie graisseuse (exceptionnelle si règles techniques respectées)"
        ]
      }
    ],
    "faq": [
      {
        "question": "Le lipofilling dure-t-il plus longtemps que l'acide hyaluronique ?",
        "answer": "Oui. L'acide hyaluronique se résorbe en 12 à 18 mois selon les zones. La graisse autologue, une fois intégrée, est permanente - la graisse survivante après 6 mois ne se résorbe plus. Le lipofilling est une solution plus durable mais plus invasive."
      },
      {
        "question": "Peut-on combiner lipofilling et lifting ?",
        "answer": "Oui, c'est même souvent recommandé. Le lifting traite le relâchement, le lipofilling restaure les volumes - ensemble, ils traitent les deux composantes du vieillissement facial pour un résultat global et naturel."
      }
    ]
  },
  "lipofilling-mammaire": {
    "breadcrumb": "Interventions › Seins › Lipofilling mammaire",
    "categoryLabel": "Seins",
    "h1": "Lipofilling mammaire - Augmentation naturelle des seins Tunis",
    "intro": "Le lipofilling mammaire est une technique d'augmentation des seins sans prothèse, par injection de la propre graisse de la patiente. Il s'adresse aux femmes souhaitant une augmentation modeste et naturelle de leur volume, ou qui désirent corriger une asymétrie, améliorer la forme ou adoucir les contours d'une prothèse existante. C'est l'une des techniques les plus demandées actuellement, notamment chez les patientes qui souhaitent éviter tout corps étranger. Les résultats sont naturels au toucher, durables et harmonieux.",
    "quickFacts": [
      {
        "value": "2–3h",
        "label": "Durée"
      },
      {
        "value": "Générale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire\nou 1 nuit",
        "label": "Hospitalisation"
      },
      {
        "value": "4–6 mois",
        "label": "Résultat définitif"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LE LIPOFILLING MAMMAIRE ?",
        "paragraphs": [
          "Le lipofilling mammaire, également appelé transfert de graisse autologue ou lipostructure des seins, consiste à prélever de la graisse dans des zones donneuses (abdomen, flancs, cuisses) par lipoaspiration, à la purifier, puis à la réinjecter en micro-injections dans le tissu mammaire. La graisse utilisée est entièrement la vôtre - il n'y a aucun corps étranger, aucun implant.",
          "Cette technique présente un double bénéfice : l'affinement des zones donneuses et l'augmentation naturelle du volume mammaire. Elle peut également être utilisée pour corriger une asymétrie, améliorer le décolleté, ou « habiller » une prothèse mammaire dont les contours sont trop visibles."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "Le lipofilling mammaire ne convient pas aux patientes très minces avec peu de graisse disponible, ni à celles qui souhaitent une augmentation importante (plus d'un bonnet). Dans ces cas, la pose d'implants reste l'option la plus adaptée. Un bilan sénologique préalable est obligatoire."
        ],
        "bullets": [
          "Désir d'augmentation modeste - le lipofilling permet généralement un gain d'environ un demi à un bonnet entier",
          "Refus d'implants ou souhait d'un résultat le plus naturel possible",
          "Correction d'une asymétrie mammaire légère à modérée",
          "Amélioration des contours d'une prothèse existante (lipofilling composite)",
          "Présence de réserves graisseuses suffisantes dans les zones donneuses"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "Lors de la consultation, j'évalue les zones donneuses disponibles, le volume de graisse mobilisable et le résultat attendu. L'objectif est de définir des attentes réalistes : le lipofilling mammaire donne un résultat discret et naturel, pas une transformation spectaculaire. Les zones à lipoaspirer et le volume cible à injecter sont définis ensemble, en tenant compte du taux de résorption naturel d'environ 30 à 40%.",
          "Un bilan sénologique (échographie mammaire) est impérativement requis avant et après l'intervention. La présence d'antécédents familiaux de cancer du sein est à signaler en consultation - elle n'est pas une contre-indication absolue, mais nécessite un avis oncologique préalable."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique, échographie mammaire et consultation anesthésique",
          "Tabac : Arrêt du tabac au moins 1 mois avant",
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Jeûne : Jeûne à partir de minuit la veille",
          "Gaine : Gaine de contention pour les zones donneuses sur prescription",
          "Soutien-gorge : Soutien-gorge de sport sans armatures à porter dès le réveil"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention se déroule en trois temps sous anesthésie générale. Premièrement, le prélèvement de graisse par lipoaspiration douce dans les zones donneuses, avec une technique atraumatique pour préserver la viabilité des cellules graisseuses. Deuxièmement, la purification de la graisse par centrifugation ou filtration selon la technique de Coleman. Troisièmement, la réinjection en micro-bolus dans le tissu mammaire, en couches multiples et dans différents plans, pour maximiser les contacts entre la graisse et les tissus vascularisés.",
          "La réinjection est réalisée avec des micro-canules très fines, par de minuscules points d'entrée qui ne laissent aucune cicatrice visible. Le volume final injecté est supérieur au volume cible pour anticiper la résorption.",
          "La technique de réinjection est fondamentale pour la pérennité du résultat. L'injection en micro-bolus dans différents plans tissulaires maximise la vascularisation de la graisse transférée et réduit le risque de résorption et de calcifications."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "Ambulatoire ou 1 nuit en clinique selon le volume traité",
          "Accompagnateur obligatoire",
          "Arrêt de travail de 7 à 10 jours",
          "Soutien-gorge sans armatures pendant 6 semaines",
          "Gaine de contention sur les zones donneuses pendant 4 à 6 semaines"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J5 : Douleurs dans les zones de prélèvement. Ecchymoses et œdème dans les zones donneuses et les seins. Soutien-gorge et gaine en place.",
          "Semaine 1–3 : Résorption des ecchymoses. Sensation de gonflement progressivement diminuée. Activités légères possibles.",
          "Mois 1–2 : La graisse commence à s'intégrer. L'œdème résiduel se résorbe. La taille des seins se stabilise progressivement.",
          "Mois 2–4 : Résorption partielle stabilisée. Le volume définitif se précise.",
          "Mois 4–6 : Résultat définitif. La graisse survivante est définitivement intégrée. Suivi par échographie recommandé."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat définitif s'apprécie entre 4 et 6 mois. Environ 60 à 70% de la graisse injectée persiste durablement. Le gain de volume est réel, naturel, et indétectable au toucher. Les seins sont plus ronds, plus galbés, avec un décolleté légèrement amélioré.",
          "La durabilité est excellente pour la graisse ayant survécu après 6 mois : elle se comporte comme du tissu adipeux natif et évolue avec les variations de poids. Un suivi échographique annuel est recommandé, notamment pour distinguer d'éventuels nodules graisseux bénins (cytostéatonécrose) de lésions mammaires."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome dans les zones donneuses",
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Réaction anesthésique",
          "RISQUES GÉNÉRAUX : Irrégularités dans les zones liposucées",
          "RISQUES SPÉCIFIQUES : Résorption supérieure à 40% - nécessitant éventuellement une retouche",
          "RISQUES SPÉCIFIQUES : Cytostéatonécrose (nodules graisseux bénins)",
          "RISQUES SPÉCIFIQUES : Calcifications mammaires (à distinguer des lésions malignes à l'imagerie)",
          "RISQUES SPÉCIFIQUES : Asymétrie résiduelle",
          "RISQUES SPÉCIFIQUES : Résultat insuffisant si réserves graisseuses limitées"
        ]
      }
    ],
    "faq": [
      {
        "question": "Combien de bonnets peut-on gagner avec un lipofilling ?",
        "answer": "En moyenne, le lipofilling mammaire permet un gain d'environ un demi à un bonnet entier. Ce résultat dépend du volume de graisse disponible et du taux de résorption individuel. Pour une augmentation plus importante, les prothèses mammaires restent plus adaptées."
      },
      {
        "question": "Le lipofilling mammaire présente-t-il un risque de cancer ?",
        "answer": "À ce jour, aucune étude scientifique sérieuse n'établit de lien entre le lipofilling mammaire et le développement d'un cancer du sein. Les sociétés savantes internationales ne contre-indiquent pas cette technique. Un suivi sénologique régulier est néanmoins recommandé."
      },
      {
        "question": "La graisse réinjectée peut-elle gêner la lecture des mammographies ?",
        "answer": "Des microcytostéatonécroses (petits nodules graisseux) peuvent apparaître et être visibles à l'imagerie. Ils sont bénins et reconnaissables par un radiologue informé. Il est important de signaler systématiquement l'antécédent de lipofilling mammaire lors de tout examen d'imagerie."
      },
      {
        "question": "Peut-on associer lipofilling et prothèses ?",
        "answer": "Oui, c'est la technique dite d'augmentation composite ou hybride. Elle consiste à poser un implant de volume modéré et à compléter par du lipofilling pour adoucir les contours et améliorer le décolleté. C'est une excellente option pour les patientes ayant peu de tissu de couverture."
      }
    ]
  },
  "otoplastie": {
    "breadcrumb": "Interventions › Visage › Otoplastie",
    "categoryLabel": "Visage",
    "h1": "Otoplastie - Chirurgie des oreilles décollées Tunis",
    "intro": "L'otoplastie, ou chirurgie des oreilles décollées, est une intervention simple et efficace qui permet de corriger définitivement des oreilles trop écartées du crâne ou trop grandes. Source de complexes dès l'enfance, les oreilles décollées peuvent être corrigées chirurgicalement à partir de 6–7 ans. Chez l'adulte, l'intervention reste identique et donne des résultats permanents. C'est l'une des rares chirurgies esthétiques réalisable sous anesthésie locale, avec une convalescence rapide et un impact psychologique très positif.",
    "quickFacts": [
      {
        "value": "1–1h30",
        "label": "Durée"
      },
      {
        "value": "Locale\nou générale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire",
        "label": "Hospitalisation"
      },
      {
        "value": "3–6 sem.",
        "label": "Convalescence"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE L'OTOPLASTIE ?",
        "paragraphs": [
          "L'otoplastie corrige le défaut anatomique responsable du décollement des oreilles : l'absence ou l'insuffisance du pli de l'anthélix (le repli cartilagineux interne du pavillon), et/ou la profondeur excessive de la conque (la cavité centrale du pavillon). Par une incision discrète derrière l'oreille, le cartilage est remodélé par des sutures permanentes pour créer ou renforcer le pli de l'anthélix et réduire la conque, rapprochant l'oreille du crâne.",
          "Le résultat est symétrique, naturel, et permanent. L'objectif n'est pas d'obtenir des oreilles parfaitement « plaquées » mais des oreilles harmonieuses, en équilibre avec le reste du visage."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UN(E) BON(NE) CANDIDAT(E) ?",
        "paragraphs": [
          "L'otoplastie peut être réalisée dès l'âge de 6–7 ans, lorsque le cartilage auriculaire a atteint 85 à 90% de son volume adulte. Chez l'enfant, l'intervention est réalisée sous anesthésie générale. Chez l'adulte, une anesthésie locale avec légère sédation est généralement suffisante."
        ],
        "bullets": [
          "Oreilles décollées de façon symétrique ou asymétrique",
          "Anthélix insuffisamment marqué - oreille manquant de galbe",
          "Conque trop profonde - oreille en décollement global",
          "Enfant de 6–7 ans minimum (cartilage suffisamment stable)",
          "Adulte souhaitant corriger un complexe existant depuis l'enfance"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "L'examen clinique évalue l'angle auriculo-céphalique (angle entre l'oreille et la tête, normalement entre 25 et 35 degrés), la position et la taille des deux oreilles, l'état du cartilage et la symétrie. Le plan chirurgical est individualisé : technique de remodelage cartilagineux, sutures utilisées, geste éventuel sur la conque. Des photographies standardisées sont prises.",
          "Délai légal de 15 jours entre la remise du devis et l'intervention. Pour les patients mineurs, l'accord des deux parents est requis."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique et consultation anesthésique",
          "Tabac : Arrêt du tabac 1 mois avant si adulte fumeur",
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Jeûne : Jeûne à partir de minuit si anesthésie générale",
          "Cheveux : Cheveux propres le jour de l'intervention - éviter les barrettes ou bijoux dans les cheveux"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'otoplastie dure entre 1 heure et 1h30. L'incision est tracée dans le sillon postérieur de l'oreille, entièrement cachée derrière le pavillon. Après exposition du cartilage, la technique de Mustardé (sutures de remodélage de l'anthélix) et/ou la technique de Furnas (sutures de réduction de la conque) sont appliquées selon les besoins anatomiques. Les sutures utilisées sont permanentes pour garantir la durabilité du résultat. La fermeture est réalisée par sutures résorbables."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "Ambulatoire - retour à domicile le jour même",
          "Bandeau auriculaire porté 1 semaine en continu, puis la nuit pendant 1 mois",
          "Arrêt de travail de 5 à 7 jours",
          "Éviter tout traumatisme des oreilles pendant 2 mois",
          "Éviter les sports de contact pendant 2 mois"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J5 : Léger œdème et ecchymoses autour des oreilles. Bandeau en place. Douleurs légères bien contrôlées.",
          "Semaine 1–2 : Ablation des fils vers J10–J14. L'œdème régresse. Le résultat se précise progressivement.",
          "Semaine 2–6 : Port du bandeau la nuit uniquement. Reprise des activités normales. Sport léger possible dès S3.",
          "Mois 1–3 : Résultat définitif. Cicatrice invisible derrière l'oreille. Oreilles harmonieuses et symétriques."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat est immédiatement visible dès le retrait du bandeau : les oreilles sont rapprochées, galonnées, symétriques. L'appréciation définitive se fait à 3 mois. La durabilité est excellente - les sutures permanentes garantissent un résultat stable dans le temps. La cicatrice, derrière l'oreille, est quasiment invisible.",
          "Le bénéfice psychologique, notamment chez l'enfant, est souvent profond et immédiat - libération d'un complexe qui pouvait affecter la vie sociale et scolaire."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome post-opératoire",
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Réaction anesthésique",
          "RISQUES SPÉCIFIQUES : Récidive partielle du décollement (sutures qui lâchent)",
          "RISQUES SPÉCIFIQUES : Asymétrie résiduelle",
          "RISQUES SPÉCIFIQUES : Hypercorrection (oreilles trop plaquées)",
          "RISQUES SPÉCIFIQUES : Cicatrice élargie ou chéloïde derrière l'oreille",
          "RISQUES SPÉCIFIQUES : Hypo-sensibilité du pavillon (transitoire)"
        ]
      }
    ],
    "faq": [
      {
        "question": "À quel âge peut-on opérer un enfant ?",
        "answer": "À partir de 6–7 ans, quand le cartilage auriculaire est suffisamment mature et stable. Il est souvent conseillé d'opérer avant l'entrée en primaire ou au début du collège pour épargner à l'enfant les moqueries. L'accord des deux parents est requis."
      },
      {
        "question": "Le résultat est-il permanent ?",
        "answer": "Oui. Les sutures permanentes utilisées garantissent la stabilité du résultat dans le temps. Une récidive est possible mais rare - elle est liée à une rupture de suture ou à une correction insuffisante initiale."
      },
      {
        "question": "L'intervention est-elle douloureuse ?",
        "answer": "Les douleurs post-opératoires sont légères et bien contrôlées par des antalgiques simples. Une légère sensation de tension ou de tiraillement les premiers jours est normale et transitoire."
      },
      {
        "question": "Y a-t-il une cicatrice visible ?",
        "answer": "La cicatrice est tracée dans le sillon postérieur de l'oreille - entièrement cachée derrière le pavillon. Elle est quasiment invisible, même cheveux relevés."
      }
    ]
  },
  "protheses-de-mollets": {
    "breadcrumb": "Interventions › Silhouette › Prothèses de mollets",
    "categoryLabel": "Silhouette",
    "h1": "Prothèses de mollets - Augmentation des mollets Tunis",
    "intro": "La pose de prothèses de mollets est l'intervention chirurgicale indiquée lorsque les mollets sont insuffisamment développés malgré une pratique sportive régulière, ou lorsqu'une asymétrie entre les deux jambes constitue une source de complexe. Moins connue que d'autres interventions de chirurgie esthétique, elle offre pourtant des résultats remarquables et durables, permettant d'obtenir des mollets galbés, harmonieux et parfaitement proportionnés à la morphologie globale des membres inférieurs.",
    "quickFacts": [
      {
        "value": "1–1h30",
        "label": "Durée"
      },
      {
        "value": "Générale\nou locale",
        "label": "Anesthésie"
      },
      {
        "value": "Ambulatoire\nou 1 nuit",
        "label": "Hospitalisation"
      },
      {
        "value": "3–6 sem.",
        "label": "Convalescence"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LA POSE DE PROTHÈSES DE MOLLETS ?",
        "paragraphs": [
          "L'augmentation des mollets par implants consiste à placer des prothèses en gel de silicone solide sous l'aponévrose du muscle gastrocnémien (muscle jumeau interne et/ou externe), par une petite incision dans le pli du genou. Les implants sont disponibles en différentes tailles, formes et projections pour s'adapter à chaque morphologie.",
          "L'intervention traite aussi bien l'hypotrophie constitutionnelle (mollets naturellement fins malgré le sport) que les asymétries d'origine congénitale ou post-traumatique, et les séquelles de pathologies neuromusculaires."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UN(E) BON(NE) CANDIDAT(E) ?",
        "paragraphs": [
          "Cette intervention est contre-indiquée en cas d'insuffisance veineuse sévère ou de pathologie circulatoire des membres inférieurs. Un écho-Doppler veineux des membres inférieurs est obligatoire en préopératoire."
        ],
        "bullets": [
          "Hypotrophie congénitale ou constitutionnelle des mollets résistant à l'entraînement sportif",
          "Asymétrie des mollets d'origine congénitale ou post-traumatique",
          "Séquelles d'une pathologie neuromusculaire (poliomyélite, paralysie)",
          "Attentes réalistes : les prothèses augmentent le volume mais ne créent pas un muscle artificiel"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "L'examen clinique évalue le volume et le tonus musculaire des mollets, la symétrie entre les deux jambes, la qualité des tissus de couverture et la vascularisation veineuse. Le choix de la prothèse - taille, profil, nombre (implant interne seul ou interne + externe) - est discuté en fonction de votre morphologie et de vos objectifs.",
          "Délai légal de 15 jours entre la remise du devis et l'intervention. L'écho-Doppler veineux est requis avant toute validation du dossier."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique, écho-Doppler veineux des membres inférieurs et consultation anesthésique",
          "Tabac : Arrêt du tabac au moins 1 mois avant",
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Jeûne : Jeûne strict à partir de minuit la veille",
          "Contention : Chaussettes de contention élastique de forte compression sur prescription - à mettre dès le réveil",
          "Organisation : Prévoir un accompagnateur et une aide les premiers jours à domicile"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "L'intervention est réalisée sous anesthésie générale ou locorégionale, le patient installé en décubitus ventral (sur le ventre). Elle dure entre 1 heure et 1h30. Une incision de 3 à 4 cm est pratiquée dans le pli du genou. Une loge sous-aponévrotique est créée entre le muscle gastrocnémien et son enveloppe fibreuse (aponévrose), dans laquelle est glissée l'implant. Cette position sous-aponévrotique garantit un résultat naturel et limite les risques de migration.",
          "Les deux mollets sont traités successivement dans la même intervention. La fermeture est réalisée par plans avec une suture cutanée soignée dans le pli du genou."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "Ambulatoire ou 1 nuit en clinique selon les cas",
          "Accompagnateur obligatoire pour le retour",
          "Arrêt de travail de 10 à 21 jours selon l'activité - station debout prolongée à éviter",
          "La marche est possible dès J1 mais limitée les 10 premiers jours",
          "Port de chaussettes de contention obligatoire pendant 4 à 6 semaines"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J5 : Douleurs à la marche et à la flexion du genou. Membres surélevés pour limiter l'œdème. Anticoagulants prescrits.",
          "Semaine 1–3 : Réduction progressive de la douleur et de l'œdème. Marche en augmentation progressive. Ablation des fils vers J12–J15.",
          "Semaine 3–6 : Assouplissement progressif. Reprise des activités professionnelles légères. Port de contention maintenu.",
          "Mois 2–3 : Disparition de l'œdème résiduel. Résultat apprécié pleinement. Sport repris progressivement à partir du 3e mois."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat est visible dès les premières semaines. Le volume définitif des mollets s'apprécie à 3 mois, une fois l'œdème résorbé : des mollets galbés, harmonieux, naturels au toucher. Les prothèses de silicone sont durables et ne nécessitent pas de remplacement systématique. Un suivi clinique annuel est recommandé."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome post-opératoire",
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Thrombose veineuse (prévention renforcée)",
          "RISQUES GÉNÉRAUX : Réaction à l'anesthésie",
          "RISQUES SPÉCIFIQUES : Migration de la prothèse",
          "RISQUES SPÉCIFIQUES : Sensation de corps étranger persistante",
          "RISQUES SPÉCIFIQUES : Asymétrie des deux mollets",
          "RISQUES SPÉCIFIQUES : Encapsulation (coque fibreuse)",
          "RISQUES SPÉCIFIQUES : Cicatrice dans le pli du genou visible",
          "RISQUES SPÉCIFIQUES : Rupture de l'implant (exceptionnelle)"
        ]
      }
    ],
    "faq": [
      {
        "question": "Les prothèses de mollets sont-elles permanentes ?",
        "answer": "Les implants de mollets sont durables et ne nécessitent pas de changement systématique, contrairement aux prothèses mammaires. Ils sont conçus pour durer de nombreuses années. Un suivi clinique annuel est néanmoins recommandé."
      },
      {
        "question": "Les prothèses se sentent-elles au toucher ?",
        "answer": "Les implants sont placés sous l'aponévrose musculaire, ce qui les rend difficiles à percevoir. Le résultat est naturel au toucher dans la grande majorité des cas."
      },
      {
        "question": "Peut-on faire du sport avec des prothèses de mollets ?",
        "answer": "Oui, après la période de cicatrisation. La reprise sportive est progressive à partir du 3e mois. La plupart des sports sont compatibles avec les prothèses de mollets une fois la guérison complète."
      },
      {
        "question": "L'intervention est-elle douloureuse ?",
        "answer": "Les douleurs post-opératoires sont principalement localisées au niveau du pli du genou et lors des premiers pas. Elles sont bien contrôlées par le traitement antalgique prescrit et diminuent rapidement dans la première semaine. Dr Sirine Soussi · Chirurgienne plasticienne · Les Berges du Lac 1, Tunis · +216 52 233 333"
      }
    ]
  },
  "reduction-mammaire": {
    "breadcrumb": "Interventions › Seins › Réduction mammaire",
    "categoryLabel": "Seins",
    "h1": "Réduction mammaire - Tunis",
    "intro": "La réduction mammaire, ou mammoplastie de réduction, est l'intervention indiquée lorsque le volume de la poitrine devient une source de gêne physique et psychologique. Seins lourds, douleurs dorsales chroniques, irritations sous-mammaires, difficultés vestimentaires ou sportives : autant de symptômes qui justifient une prise en charge chirurgicale. Cette intervention permet à la fois de réduire le volume, de redonner une forme harmonieuse à la poitrine et de soulager durablement les patientes. Les résultats sont parmi les plus satisfaisants de toute la chirurgie esthétique.",
    "quickFacts": [
      {
        "value": "2–3h",
        "label": "Durée"
      },
      {
        "value": "Générale",
        "label": "Anesthésie"
      },
      {
        "value": "1–2 nuits",
        "label": "Hospitalisation"
      },
      {
        "value": "4–6 sem.",
        "label": "Convalescence"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LA RÉDUCTION MAMMAIRE ?",
        "paragraphs": [
          "La mammoplastie de réduction consiste à enlever l'excédent de tissu glandulaire, de graisse et de peau, puis à remodeler et redraper le sein restant pour lui donner une forme ferme et harmonieuse. Dans le même temps, la plaque aréolo-mamelonnaire est repositionnée plus haut pour corriger la ptose associée - presque toujours présente en cas d'hypertrophie mammaire.",
          "C'est une intervention à double bénéfice : esthétique et fonctionnel. La diminution du poids des seins soulage les douleurs dorsales, cervicales et les sillons d'épaules causés par les bretelles de soutien-gorge. La satisfaction des patientes après réduction mammaire est l'une des plus élevées en chirurgie plastique."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "La grossesse et l'allaitement après une réduction mammaire restent possibles dans la majorité des cas, mais peuvent modifier le résultat. Il est recommandé d'attendre d'avoir terminé ses grossesses, bien que cela ne soit pas une contre-indication absolue. Ce point est discuté individuellement en consultation."
        ],
        "bullets": [
          "Hypertrophie mammaire disproportionnée par rapport à votre morphologie",
          "Douleurs dorsales, cervicales ou aux épaules imputables au poids des seins",
          "Irritations ou intertrigo chronique sous le pli sous-mammaire",
          "Gêne à la pratique sportive ou vestimentaire",
          "Asymétrie mammaire importante",
          "Poids stable, absence de projet de grossesse à court terme"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "L'examen clinique évalue le volume et le poids estimé des seins, le degré de ptose associée, la position de la plaque aréolo-mamelonnaire, la qualité cutanée et les asymétries. Le volume cible est discuté ensemble : une poitrine proportionnée à votre morphologie, qui vous permette de vous habiller librement et de pratiquer vos activités sans contrainte.",
          "La technique chirurgicale et le type de cicatrice sont expliqués en détail. Selon le volume à réséquer, on opte pour une technique à cicatrice verticale (cicatrice en « lollipop » autour de l'aréole et verticale) ou en T inversé (cicatrice péri-aréolaire + verticale + horizontale dans le pli sous-mammaire).",
          "Un bilan sénologique (échographie ou mammographie) est systématiquement requis avant toute réduction mammaire. Un compte-rendu de consultation et un devis sont remis à l'issue de la consultation, avec le délai légal de 15 jours de réflexion."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique, bilan sénologique et consultation anesthésique dans les 30 jours précédant l'intervention",
          "Tabac : Arrêt total du tabac au moins 1 mois avant et 1 mois après - risque de nécrose de la plaque aréolo-mamelonnaire",
          "Médicaments : Arrêt de l'aspirine et des anti-inflammatoires 10 jours avant",
          "Jeûne : Jeûne strict à partir de minuit la veille",
          "Soutien-gorge : Prévoir un soutien-gorge de sport sans armatures sur prescription",
          "Organisation : Prévoir une aide à domicile les premiers jours - limitation des mouvements des bras"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "La réduction mammaire est réalisée sous anesthésie générale et dure entre 2 et 3 heures. La technique chirurgicale est choisie selon le volume à réséquer et la morphologie de chaque patiente :",
          "Technique à pédicule supérieur ou supéro-médial : permet de conserver la vascularisation et la sensibilité du mamelon tout en réséquant les quadrants inférieurs",
          "Technique en T inversé (Wise) : indiquée pour les hypertrophies importantes, elle permet une résection maximale et un excellent redrapage cutané",
          "Technique à cicatrice verticale : préférée pour les hypertrophies modérées, elle réduit la longueur des cicatrices",
          "Dans tous les cas, le mamelon est conservé vascularisé sur un pédicule glandulaire et repositionné à la hauteur optimale. La symétrie est vérifiée en cours d'intervention, la patiente étant installée en position semi-assise."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "1 à 2 nuits en clinique recommandées",
          "Accompagnateur obligatoire pour le retour",
          "Arrêt de travail de 2 à 3 semaines selon l'activité",
          "Conduite déconseillée pendant 10 jours",
          "Port d'un soutien-gorge de sport sans armatures pendant 6 semaines"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J3 : Douleurs modérées traitées par antalgiques. Soutien-gorge de contention en place. Premiers soins infirmiers des cicatrices.",
          "Semaine 1–2 : Ablation des fils résorbables si nécessaire. Régression des ecchymoses. Soulagement rapide des douleurs dorsales.",
          "Semaine 2–4 : Reprise des activités quotidiennes légères. Début du massage cicatriciel dès J21.",
          "Mois 1–3 : Assouplissement des cicatrices. L'œdème résiduel se résorbe progressivement. Le résultat se précise.",
          "Mois 3–6 : Résultat définitif. Reprise du sport progressivement dès le 2e mois. Cicatrices en cours de maturation sur 12 à 18 mois."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat est immédiatement perceptible : les seins sont plus petits, plus hauts et plus fermes. Le soulagement des douleurs dorsales et cervicales est souvent ressenti dès les premiers jours. Le résultat définitif s'apprécie à 6 mois, une fois l'œdème résorbé.",
          "Les cicatrices évoluent sur 12 à 18 mois. Leur qualité dépend du terrain cutané, de l'arrêt du tabac et de la régularité des soins post-opératoires. Elles tendent à devenir discrètes avec le temps."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome post-opératoire",
          "RISQUES GÉNÉRAUX : Infection superficielle",
          "RISQUES GÉNÉRAUX : Réaction anesthésique",
          "RISQUES GÉNÉRAUX : Thrombose veineuse",
          "RISQUES SPÉCIFIQUES : Nécrose partielle de la plaque aréolo-mamelonnaire (tabac ++)",
          "RISQUES SPÉCIFIQUES : Asymétrie résiduelle ou insuffisance de résection",
          "RISQUES SPÉCIFIQUES : Hypo-sensibilité du mamelon transitoire ou prolongée",
          "RISQUES SPÉCIFIQUES : Désunion de cicatrice dans le pli sous-mammaire",
          "RISQUES SPÉCIFIQUES : Cicatrice élargie ou hypertrophique",
          "RISQUES SPÉCIFIQUES : Difficulté d'allaitement ultérieur (rare)",
          "RISQUES SPÉCIFIQUES : L'arrêt total du tabac est impératif. Le tabac compromet la vascularisation de la plaque aréolo-mamelonnaire et multiplie le risque de nécrose. C'est une exigence absolue dans ma pratique avant d'accepter d'opérer."
        ]
      }
    ],
    "faq": [
      {
        "question": "La réduction mammaire est-elle remboursée ?",
        "answer": "En France, une prise en charge partielle par la Sécurité sociale est possible sous certaines conditions (résection supérieure à 300g par sein, dossier médical avec justification fonctionnelle). En Tunisie, l'intervention est réalisée dans un cadre privé, sans remboursement. Un devis détaillé vous est remis en consultation."
      },
      {
        "question": "Pourra-t-on encore allaiter après la réduction ?",
        "answer": "Dans la majorité des cas, oui. Les techniques modernes conservent les pédicules vasculo-nerveux du mamelon. Cependant, en cas de résection importante, la production lactée peut être réduite. Ce point est abordé systématiquement en consultation."
      },
      {
        "question": "Les cicatrices seront-elles très visibles ?",
        "answer": "Les cicatrices sont placées de façon à être dissimulées sous le soutien-gorge et le maillot de bain. Elles évoluent favorablement sur 12 à 18 mois, passant du rouge au rose puis au blanc nacré. Des soins cicatriciels adaptés accélèrent ce processus."
      },
      {
        "question": "Quelle taille de poitrine obtiendra-t-on après ?",
        "answer": "La taille finale est décidée en consultation selon votre morphologie et vos souhaits. L'objectif n'est pas un bonnet précis mais une poitrine proportionnée à votre taille et votre ossature - confortable, harmonieuse et libérée de la gêne fonctionnelle."
      },
      {
        "question": "La réduction mammaire modifie-t-elle la sensibilité des mamelons ?",
        "answer": "Une hypo-sensibilité transitoire du mamelon est fréquente dans les semaines qui suivent. Elle se récupère progressivement dans la grande majorité des cas. Une altération persistante est rare avec les techniques modernes à pédicule vascularisé."
      }
    ]
  },
  "rhinoplastie": {
    "breadcrumb": "Interventions › Visage › Rhinoplastie",
    "categoryLabel": "Visage",
    "h1": "Rhinoplastie - Chirurgie esthétique du nez Tunis",
    "intro": "La rhinoplastie est l'une des interventions de chirurgie esthétique du visage les plus complexes et les plus demandées. Elle permet de remodeler le nez pour le rendre plus harmonieux avec l'ensemble du visage : corriger une bosse, affiner la pointe, réduire les narines, corriger une déviation, améliorer un profil. Elle peut également corriger une obstruction nasale fonctionnelle (septorhinoplastie). Réalisée à Tunis par une chirurgienne formée aux techniques les plus modernes - preservation rhinoplasty, approche structurelle, reconstruction par greffes cartilagineuses - elle exige une précision et un sens esthétique que j'ai développés tout au long de ma formation.",
    "quickFacts": [
      {
        "value": "1h30–3h",
        "label": "Durée"
      },
      {
        "value": "Générale",
        "label": "Anesthésie"
      },
      {
        "value": "1 nuit",
        "label": "Hospitalisation"
      },
      {
        "value": "12–18 mois",
        "label": "Résultat définitif"
      }
    ],
    "sections": [
      {
        "key": "01",
        "heading": "QU'EST-CE QUE LA RHINOPLASTIE ?",
        "paragraphs": [
          "La rhinoplastie est une intervention chirurgicale qui remodèle la pyramide nasale en agissant sur ses différentes composantes : la charpente osseuse (os propres du nez), le cartilage (septal, latéraux, alaires) et le revêtement cutané. Le résultat doit être harmonieux avec l'ensemble du visage - un nez qui s'intègre naturellement sans attirer le regard.",
          "Je pratique principalement la rhinoplastie de préservation (preservation rhinoplasty), technique moderne qui conserve au maximum les structures anatomiques natives plutôt que de les réséquer. Cette approche donne des résultats plus naturels, préserve mieux le soutien de la pointe nasale et réduit le risque de séquelles à long terme.",
          "Rhinoplastie de préservation vs rhinoplastie structurelle : la rhinoplastie de préservation est la technique moderne de référence - elle préserve le cartilage et repose, retourne et repositionne les structures plutôt que de les réduire. La rhinoplastie structurelle (avec greffes) est indiquée pour les nez complexes nécessitant une reconstruction ou une reprise après une première chirurgie."
        ]
      },
      {
        "key": "02",
        "heading": "ÊTES-VOUS UNE BONNE CANDIDATE ?",
        "paragraphs": [
          "La rhinoplastie est l'intervention du visage dont le résultat définitif est le plus long à apprécier : 12 à 18 mois sont nécessaires pour que l'œdème résiduel se résorbe entièrement, surtout sur les peaux épaisses. Des attentes réalistes et une bonne compréhension de cette temporalité sont indispensables avant toute décision."
        ],
        "bullets": [
          "Nez disproportionné par rapport au reste du visage - bosse dorsale, pointe tombante ou bulbeuse",
          "Déviation de la pyramide nasale, asymétrie visible",
          "Narines larges ou asymétriques",
          "Obstruction nasale fonctionnelle liée à une déviation septale (septorhinoplastie)",
          "Séquelles d'une rhinoplastie antérieure insatisfaisante - rhinoplastie secondaire",
          "Croissance nasale terminée (à partir de 17–18 ans)"
        ]
      },
      {
        "key": "03",
        "heading": "LA CONSULTATION",
        "paragraphs": [
          "La consultation en rhinoplastie est particulièrement approfondie. J'analyse l'ensemble du visage en face et de profil : le rapport nez/menton (profiloplastie), la projection nasale, la rotation de la pointe, l'angle naso-labial, la largeur des narines, l'épaisseur cutanée et la qualité du revêtement. Des photographies standardisées sont prises.",
          "Nous discutons de vos objectifs précis - une bosse à corriger, une pointe à affiner, un profil à harmoniser. Je vous explique ce qui est techniquement réalisable, les limites liées à votre anatomie (notamment l'épaisseur de la peau), et la technique la mieux adaptée à votre cas.",
          "Une génioplastie (chirurgie du menton) peut être associée à la rhinoplastie dans le cadre d'une profiloplastie - pour équilibrer le profil facial. Un menton fuyant et un nez proéminent se corrigent souvent ensemble, avec un résultat global bien plus harmonieux que la correction isolée du nez."
        ]
      },
      {
        "key": "04",
        "heading": "PRÉPARATION & RECOMMANDATIONS PRÉ-OPÉRATOIRES",
        "bullets": [
          "Bilan : Bilan biologique et consultation anesthésique",
          "Tabac : Arrêt du tabac au moins 1 mois avant",
          "Médicaments : Arrêt de l'aspirine et des AINS 10 jours avant",
          "Jeûne : Jeûne à partir de minuit la veille",
          "Lunettes : Pas de lunettes pendant 4 à 6 semaines après l'intervention (appui sur le dos du nez déconseillé)",
          "Organisation : Prévoir un accompagnateur pour le retour - conduite déconseillée 10 jours"
        ]
      },
      {
        "key": "05",
        "heading": "L'INTERVENTION - TECHNIQUE & DÉROULEMENT",
        "paragraphs": [
          "La rhinoplastie est réalisée sous anesthésie générale. Deux voies d'abord sont possibles : la voie ouverte (incision sur la columelle, exposant toute la charpente nasale - indiquée pour les cas complexes et les reprises) et la voie fermée (incisions entièrement intranasales, sans cicatrice visible - pour les corrections moins étendues).",
          "Selon la technique choisie, les gestes peuvent inclure : l'abaissement ou la résection de la bosse osseuse et cartilagineuse, le remodelage de la pointe par sutures (alar spanning, dome binding), la correction du septum en cas de déviation, la réduction des narines par une résection à leur base, et l'apport de greffes cartilagineuses (septales, conchal ou costales) pour soutenir ou reconstruire."
        ]
      },
      {
        "key": "06",
        "heading": "HOSPITALISATION & ORGANISATION PRATIQUE",
        "bullets": [
          "1 nuit en clinique",
          "Attelle nasale portée 10 à 14 jours",
          "Mèches endonasales retirées à J2",
          "Arrêt de travail de 10 à 15 jours",
          "Éviter tout sport de contact et exposition solaire pendant 3 mois",
          "Pas de lunettes pendant 4 à 6 semaines"
        ]
      },
      {
        "key": "07",
        "heading": "SUITES OPÉRATOIRES & CONVALESCENCE",
        "bullets": [
          "J1 – J3 : Obstruction nasale liée aux mèches. Ecchymoses péri-orbitaires, œdème important. Tête surélevée. Respiration buccale.",
          "Semaine 1–2 : Ablation des mèches à J2, de l'attelle à J10–J14. Régression des ecchymoses. Nez encore gonflé mais résultat visible.",
          "Semaine 2–4 : Reprise de la vie sociale. L'œdème régresse progressivement. Le nez se précise.",
          "Mois 1–3 : Disparition de la majeure partie de l'œdème. Le résultat s'affine progressivement.",
          "Mois 6–18 : L'œdème résiduel (surtout de la pointe) se résorbe très lentement. Résultat définitif à 12–18 mois."
        ]
      },
      {
        "key": "08",
        "heading": "RÉSULTATS & ÉVOLUTION",
        "paragraphs": [
          "Le résultat de la rhinoplastie est le plus lent à apprécier de toutes les interventions de chirurgie esthétique. L'œdème de la pointe peut persister 12 à 18 mois, surtout sur les peaux épaisses. Il faut de la patience - et faire confiance au processus.",
          "Le résultat définitif est permanent. Le nez conservera sa nouvelle forme pour la vie, avec un vieillissement physiologique normal (la pointe peut s'affaisser très légèrement avec les décennies). La cicatrice columellaire (voie ouverte) devient imperceptible en 6 à 12 mois."
        ]
      },
      {
        "key": "09",
        "heading": "RISQUES & COMPLICATIONS",
        "bullets": [
          "RISQUES GÉNÉRAUX : Hématome",
          "RISQUES GÉNÉRAUX : Infection",
          "RISQUES GÉNÉRAUX : Réaction anesthésique",
          "RISQUES GÉNÉRAUX : Obstruction nasale transitoire",
          "RISQUES SPÉCIFIQUES : Asymétrie résiduelle ou insuffisance de correction",
          "RISQUES SPÉCIFIQUES : Irrégularité ou perceptibilité de la dorsale nasale",
          "RISQUES SPÉCIFIQUES : Affaissement de la pointe nasale",
          "RISQUES SPÉCIFIQUES : Cicatrice columellaire visible (voie ouverte)",
          "RISQUES SPÉCIFIQUES : Résultat insatisfaisant nécessitant une reprise (10–15% des cas)",
          "RISQUES SPÉCIFIQUES : Modification de la voix ou de l'olfaction (rare et transitoire)"
        ]
      }
    ],
    "faq": [
      {
        "question": "Quand peut-on apprécier le résultat définitif d'une rhinoplastie ?",
        "answer": "À 12 à 18 mois, une fois l'œdème entièrement résorbé. La pointe est la dernière zone à dégonfler, surtout sur les peaux épaisses. Il est important de ne pas juger le résultat avant ce délai."
      },
      {
        "question": "La rhinoplastie modifie-t-elle la voix ?",
        "answer": "Une légère modification de la résonance vocale est possible dans les premières semaines, liée à l'œdème endonasal. Elle est transitoire et disparaît avec la cicatrisation. Une modification durable de la voix est exceptionnelle."
      },
      {
        "question": "Peut-on corriger une rhinoplastie ratée ?",
        "answer": "Oui - c'est la rhinoplastie secondaire ou de reprise. Elle est techniquement plus complexe car les tissus sont remaniés, souvent fibreux. Je la pratique régulièrement, notamment par approche structurelle avec greffes cartilagineuses. Un délai d'au moins 12 mois après la première intervention est nécessaire avant d'envisager une reprise."
      },
      {
        "question": "Quelle est la différence entre rhinoplastie et septoplastie ?",
        "answer": "La septoplastie est une intervention fonctionnelle qui corrige une déviation du septum nasal pour améliorer la respiration - sans modifier l'aspect extérieur du nez. La rhinoplastie est une intervention esthétique. La septorhinoplastie combine les deux objectifs dans le même temps opératoire."
      },
      {
        "question": "La rhinoplastie est-elle douloureuse ?",
        "answer": "Non. L'intervention est réalisée sous anesthésie générale. Les suites sont marquées par une gêne, une obstruction nasale et des ecchymoses - mais les douleurs sont généralement légères et bien contrôlées par les antalgiques prescrits."
      }
    ]
  }
};

-- Refresh seeded "Médecine esthétique" interventions to use plain, structured blocks (no Markdown).
-- Idempotent: updates by slug.

insert into public.interventions (
  slug,
  category,
  title,
  description,
  body_md,
  content_blocks,
  "order",
  status,
  seo_title,
  seo_description
)
values
  (
    'injection-toxine-botulique',
    'medecine-esthetique',
    'Injection de toxine botulique',
    'Rides d''expression (front, ride du lion, patte-d''oie) après examen médical. Consultation à Tunis (Tunisie).',
    '',
    jsonb_build_array(
      jsonb_build_object(
        'type', 'bullets',
        'heading', 'En bref',
        'items', to_jsonb(array[
          'Objectif : atténuer les rides d''expression liées à la contraction musculaire',
          'Zones : front, glabelle (ride du lion), patte-d''oie (selon indication)',
          'Durée de séance : 10 à 20 minutes',
          'Suites habituelles : rougeurs/points d''injection, petits bleus possibles',
          'Résultat : progressif en quelques jours',
          'Durée : variable selon les patients, entretien au cas par cas'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Objectif',
        'text', 'La toxine botulique vise à diminuer l''excès de contraction de certains muscles responsables des rides d''expression. L''objectif est un résultat naturel et harmonieux, après une analyse dynamique du visage en consultation à Tunis.',
        'points', to_jsonb(array[
          'Le plan est personnalisé (zones et doses).',
          'Les résultats varient selon les patients.'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Pour qui ?',
        'text', 'L''indication dépend de l''examen clinique, de votre anatomie et de vos attentes. La consultation permet de confirmer la pertinence du traitement et d''expliquer les bénéfices, limites et risques.',
        'points', to_jsonb(array[
          'Les zones sont définies après examen.',
          'Une information claire est donnée avant l''acte.'
        ])
      ),
      jsonb_build_object(
        'type', 'procedure',
        'heading', 'Déroulé',
        'cards', jsonb_build_array(
          jsonb_build_object(
            'subtitle', 'Avant',
            'text', 'Évaluation et plan de traitement.',
            'points', to_jsonb(array['Analyse du visage', 'Explication des consignes et du déroulement'])
          ),
          jsonb_build_object(
            'subtitle', 'Pendant',
            'text', 'Injections ciblées, geste progressif.',
            'points', to_jsonb(array['Doses adaptées', 'Mesures de confort si besoin'])
          ),
          jsonb_build_object(
            'subtitle', 'Après',
            'text', 'Recommandations personnalisées.',
            'points', to_jsonb(array['Sport et chaleur : selon consignes', 'Point de contrôle si nécessaire'])
          )
        )
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Suites',
        'text', 'Les suites sont le plus souvent simples et transitoires.',
        'points', to_jsonb(array[
          'Fréquent : rougeurs, sensibilité locale, ecchymoses possibles.',
          'Quand recontacter : douleur importante, asymétrie marquée, symptôme inhabituel.'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Risques / effets indésirables possibles',
        'text', 'Comme tout acte médical, des effets transitoires peuvent survenir. Plus rarement, une asymétrie temporaire peut apparaître selon les zones. Ces points sont expliqués en consultation.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Résultat et durée',
        'text', 'Le résultat apparaît progressivement. La durée est variable selon les patients et les zones. L''entretien se discute au cas par cas.'
      ),
      jsonb_build_object(
        'type', 'faq',
        'heading', 'Questions fréquentes',
        'items', jsonb_build_array(
          jsonb_build_object(
            'question', 'Le visage est-il figé ?',
            'answer', 'Non. L''objectif est de réduire l''excès de contraction tout en conservant des expressions naturelles. Le plan est personnalisé.'
          ),
          jsonb_build_object(
            'question', 'Quand voit-on le résultat ?',
            'answer', 'Le résultat apparaît progressivement en quelques jours. Un contrôle peut être proposé selon la zone et l''objectif.'
          ),
          jsonb_build_object(
            'question', 'Y a-t-il un arrêt social ?',
            'answer', 'Souvent non, mais de petites marques ou ecchymoses peuvent survenir. Les suites varient selon les patients.'
          )
        )
      )
    ),
    1,
    'publie',
    'Injection de toxine botulique à Tunis',
    'Rides d''expression : indications, déroulé, suites, risques et durée. Consultation de médecine esthétique à Tunis (Tunisie).'
  ),
  (
    'injection-acide-hyaluronique',
    'medecine-esthetique',
    'Injection d''acide hyaluronique',
    'Volumes, contours et certaines rides : indication, déroulé, suites et risques. Consultation à Tunis (Tunisie).',
    '',
    jsonb_build_array(
      jsonb_build_object(
        'type', 'bullets',
        'heading', 'En bref',
        'items', to_jsonb(array[
          'Objectif : restaurer des volumes, rééquilibrer des contours, améliorer certains plis (selon indication)',
          'Zones : lèvres, pommettes, menton, sillons, cernes, selon examen',
          'Durée de séance : 20 à 40 minutes',
          'Suites habituelles : œdème et ecchymoses possibles',
          'Résultat : souvent rapide, stabilisation progressive',
          'Durée : variable selon produit, zone et patient'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Objectif',
        'text', 'L''acide hyaluronique peut corriger certains creux, redessiner des contours ou restaurer des volumes. Le choix du produit, la zone et la quantité sont déterminés après examen médical en consultation à Tunis.'
      ),
      jsonb_build_object(
        'type', 'procedure',
        'heading', 'Déroulé',
        'cards', jsonb_build_array(
          jsonb_build_object(
            'subtitle', 'Avant',
            'text', 'Analyse du visage et plan.',
            'points', to_jsonb(array['Évaluation des besoins', 'Devis et explications'])
          ),
          jsonb_build_object(
            'subtitle', 'Pendant',
            'text', 'Injections adaptées à la zone.',
            'points', to_jsonb(array['Technique choisie selon cas', 'Gestes progressifs'])
          ),
          jsonb_build_object(
            'subtitle', 'Après',
            'text', 'Consignes et surveillance.',
            'points', to_jsonb(array['Œdème/bleus possibles', 'Signes d''alerte expliqués'])
          )
        )
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Suites',
        'text', 'Les suites varient selon la zone et les patients.',
        'points', to_jsonb(array[
          'Fréquent : gonflement, rougeurs, bleus.',
          'À surveiller : douleur importante, modification de couleur, tout signe inhabituel (contacter rapidement le cabinet).'
        ])
      ),
      jsonb_build_object(
        'type', 'faq',
        'heading', 'Questions fréquentes',
        'items', jsonb_build_array(
          jsonb_build_object(
            'question', 'Est-ce réversible ?',
            'answer', 'Selon le produit et l''indication, une correction peut parfois être envisagée. Cela se discute au cas par cas en environnement médical.'
          ),
          jsonb_build_object(
            'question', 'Quel est le prix à Tunis ?',
            'answer', 'Le tarif dépend de la zone, du type de produit et de la quantité nécessaire. Un devis est établi après examen clinique.'
          )
        )
      )
    ),
    2,
    'publie',
    'Injection d''acide hyaluronique à Tunis',
    'Volumes et contours : indications, déroulé, suites, risques et durée. Médecine esthétique à Tunis (Tunisie).'
  ),
  (
    'skinbooster',
    'medecine-esthetique',
    'Skinbooster',
    'Hydratation, éclat et texture : protocole, suites et entretien. Consultation à Tunis (Tunisie).',
    '',
    jsonb_build_array(
      jsonb_build_object(
        'type', 'bullets',
        'heading', 'En bref',
        'items', to_jsonb(array[
          'Objectif : améliorer l''hydratation, l''éclat et la texture de la peau (selon indication)',
          'Zones : visage, cou, décolleté, mains (selon cas)',
          'Protocole : souvent plusieurs séances espacées',
          'Suites habituelles : rougeurs et petites marques transitoires possibles',
          'Résultat : progressif',
          'Entretien : à discuter selon votre peau et votre mode de vie'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Objectif',
        'text', 'Un skinbooster vise surtout la qualité de peau (hydratation, souplesse, éclat) plutôt que la création de volume. L''indication dépend de l''examen en consultation.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Déroulé',
        'text', 'Le protocole est personnalisé (zones, nombre de séances, rythme). Les consignes post-séance sont adaptées, notamment selon la saison et l''exposition solaire à Tunis.'
      ),
      jsonb_build_object(
        'type', 'faq',
        'heading', 'Questions fréquentes',
        'items', jsonb_build_array(
          jsonb_build_object(
            'question', 'Combien de séances ?',
            'answer', 'Souvent un protocole initial puis un entretien, selon votre réponse et vos objectifs.'
          ),
          jsonb_build_object(
            'question', 'Peut-on s''exposer au soleil ?',
            'answer', 'On recommande en général d''éviter l''exposition immédiate et de privilégier une photoprotection. Les consignes sont données au cas par cas.'
          )
        )
      )
    ),
    3,
    'publie',
    'Skinbooster à Tunis',
    'Hydratation et qualité de peau : protocole, suites, risques et entretien. Consultation à Tunis (Tunisie).'
  ),
  (
    'mesotherapie',
    'medecine-esthetique',
    'Mésothérapie',
    'Micro-injections superficielles pour la qualité de peau : protocole, suites et alternatives. Consultation à Tunis (Tunisie).',
    '',
    jsonb_build_array(
      jsonb_build_object(
        'type', 'bullets',
        'heading', 'En bref',
        'items', to_jsonb(array[
          'Objectif : soutenir la qualité de peau (hydratation/éclat) selon protocole',
          'Technique : micro-injections superficielles',
          'Protocole : séances espacées, personnalisé',
          'Suites habituelles : rougeurs, petites marques, ecchymoses possibles',
          'Résultat : progressif et variable',
          'Alternatives : skinbooster, peelings, lasers, routine médicale (selon cas)'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Objectif',
        'text', 'La mésothérapie correspond à des micro-injections superficielles, dans le but de soutenir la qualité de peau selon un protocole défini. La pertinence dépend de l''examen clinique.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Suites',
        'text', 'Les suites sont le plus souvent simples et transitoires.',
        'points', to_jsonb(array[
          'Rougeurs et petites marques possibles.',
          'Ecchymoses possibles selon la zone.',
          'Recontacter le cabinet en cas de signe inhabituel.'
        ])
      ),
      jsonb_build_object(
        'type', 'faq',
        'heading', 'Questions fréquentes',
        'items', jsonb_build_array(
          jsonb_build_object(
            'question', 'Combien de séances ?',
            'answer', 'Le plus souvent plusieurs séances initiales, puis un entretien selon la réponse et l''objectif.'
          ),
          jsonb_build_object(
            'question', 'Y a-t-il un arrêt social ?',
            'answer', 'Souvent non, mais des rougeurs ou petites marques transitoires sont possibles. Les suites varient selon les patients.'
          )
        )
      )
    ),
    4,
    'publie',
    'Mésothérapie à Tunis',
    'Micro-injections : objectifs, protocole, suites et alternatives. Consultation de médecine esthétique à Tunis (Tunisie).'
  )
on conflict (slug)
do update set
  category = excluded.category,
  title = excluded.title,
  description = excluded.description,
  body_md = excluded.body_md,
  content_blocks = excluded.content_blocks,
  "order" = excluded."order",
  status = excluded.status,
  seo_title = excluded.seo_title,
  seo_description = excluded.seo_description,
  updated_at = now();

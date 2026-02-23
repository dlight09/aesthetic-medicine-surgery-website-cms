-- Seed core "Médecine esthétique" interventions (SEO/AIO blocks)
-- Idempotent: updates by slug.

with upsert as (
  select 1
)
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
    'Traitement des rides d''expression (front, ride du lion, patte-d''oie) après examen médical. Consultation à Tunis (Tunisie).',
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
          'Résultat : progressif en quelques jours, naturel si bien dosé',
          'Durée : variable selon les patients, entretien au cas par cas'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Objectif',
        'body', 'L''injection de toxine botulique vise à diminuer l''excès de contraction de certains muscles responsables des rides d''expression. L''objectif est un résultat harmonieux, sans figer le visage, après une analyse dynamique du visage en consultation à Tunis.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Pour qui ?',
        'body', 'La toxine botulique peut être proposée lorsque les rides sont surtout liées aux mouvements (expression). L''indication dépend de l''examen clinique, de votre anatomie, de vos antécédents et de vos attentes.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Déroulé',
        'body', '### Avant\n- Analyse, plan de traitement, explication des bénéfices/limites/risques\n\n### Pendant\n- Injections ciblées, doses adaptées, geste progressif\n\n### Après\n- Consignes personnalisées (sport, chaleur, frottements) et point de contrôle si nécessaire'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Suites',
        'body', '- Fréquent : rougeurs, sensibilité locale, ecchymoses possibles\n- Quand recontacter : douleur importante, asymétrie marquée, symptôme inhabituel'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Risques / effets indésirables possibles',
        'body', 'Comme tout acte médical, des effets transitoires peuvent survenir. Plus rarement, une asymétrie temporaire ou une chute transitoire de paupière peut apparaître selon les zones. Ces points sont expliqués en consultation.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Résultat et durée',
        'body', 'Le résultat s''installe progressivement. La durée est variable selon les patients, les zones et les habitudes. Un entretien peut être discuté au cas par cas.'
      ),
      jsonb_build_object(
        'type', 'faq',
        'heading', 'Questions fréquentes',
        'items', jsonb_build_array(
          jsonb_build_object(
            'question', 'Est-ce que le visage est figé ?',
            'answer', 'Non. L''objectif est de réduire l''excès de contraction, tout en conservant des expressions naturelles. Le plan (zones et doses) est personnalisé.'
          ),
          jsonb_build_object(
            'question', 'Quand voit-on le résultat ?',
            'answer', 'Le résultat apparaît progressivement en quelques jours. Un contrôle peut être proposé selon la zone et l''objectif.'
          ),
          jsonb_build_object(
            'question', 'Combien de temps cela dure ?',
            'answer', 'La durée est variable selon les patients et les zones. L''entretien se décide en fonction de votre réponse clinique.'
          ),
          jsonb_build_object(
            'question', 'Y a-t-il un arrêt social ?',
            'answer', 'Souvent non, mais de petites marques ou ecchymoses peuvent survenir. On adapte les consignes selon votre agenda.'
          )
        )
      ),
      jsonb_build_object(
        'type', 'cta',
        'heading', 'Prendre rendez-vous à Tunis',
        'body', 'Une consultation permet de confirmer l''indication et d''établir un plan de traitement personnalisé.',
        'button_label', 'Prendre rendez-vous',
        'button_href', '/contact'
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
          'Zones : lèvres, pommettes, menton, sillons, cernes… selon examen',
          'Durée de séance : 20 à 40 minutes',
          'Suites habituelles : œdème et ecchymoses possibles',
          'Résultat : souvent rapide, stabilisation progressive',
          'Durée : variable selon produit, zone et patient'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Objectif',
        'body', 'L''acide hyaluronique est utilisé pour corriger certains creux, redessiner des contours ou restaurer des volumes. L''indication, le choix du produit et la quantité sont déterminés après examen médical en consultation à Tunis.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Pour qui ?',
        'body', 'Pour des patients souhaitant une correction mesurée et naturelle. La consultation évalue l''anatomie, la qualité cutanée, les antécédents, ainsi que les bénéfices et limites de la correction.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Déroulé',
        'body', '### Avant\n- Analyse du visage, plan et devis\n\n### Pendant\n- Injections adaptées à la zone (aiguille/canule selon cas), gestes progressifs\n\n### Après\n- Conseils personnalisés (massage ou non, sport/chaleur, maquillage selon zone)'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Suites',
        'body', '- Fréquent : gonflement, rougeurs, bleus\n- À surveiller : douleur importante, modification de couleur, tout signe inhabituel (contacter rapidement le cabinet)'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Risques / effets indésirables possibles',
        'body', 'Outre les effets locaux transitoires, des complications plus rares existent. Elles sont expliquées en consultation, avec les signes d''alerte et la conduite à tenir.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Résultat et durée',
        'body', 'Le résultat peut être visible rapidement, puis s''ajuste avec la diminution de l''œdème. La durée est variable selon la zone, le produit et le patient.'
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
            'question', 'Y a-t-il un arrêt social ?',
            'answer', 'Souvent non, mais un œdème ou des ecchymoses peuvent survenir, surtout sur certaines zones. On adapte le planning selon vos contraintes.'
          ),
          jsonb_build_object(
            'question', 'Est-ce douloureux ?',
            'answer', 'La sensibilité varie. Des mesures de confort existent selon la zone et la technique.'
          ),
          jsonb_build_object(
            'question', 'Quel est le prix à Tunis ?',
            'answer', 'Le tarif dépend de la zone, du type de produit et de la quantité nécessaire. Un devis est établi après examen clinique.'
          )
        )
      ),
      jsonb_build_object(
        'type', 'cta',
        'heading', 'Consultation à Tunis',
        'body', 'Une consultation permet de définir l''indication et de choisir la stratégie la plus adaptée.',
        'button_label', 'Prendre rendez-vous',
        'button_href', '/contact'
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
          'Suites habituelles : rougeurs, petites papules transitoires possibles',
          'Résultat : progressif',
          'Entretien : à discuter selon votre peau et votre mode de vie'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Objectif',
        'body', 'Un skinbooster est conçu pour soutenir la qualité de peau (hydratation, souplesse, éclat) plutôt que de créer du volume. L''indication dépend de l''examen en consultation.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Déroulé',
        'body', 'Le protocole est personnalisé : nombre de séances, zones, et rythme. Les consignes (soleil, sport, chaleur) sont adaptées, particulièrement à Tunis où l''exposition solaire est fréquente.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Suites',
        'body', 'Rougeurs, petites marques ou gonflement local peuvent survenir et régressent habituellement rapidement. Les résultats varient selon chaque patient.'
      ),
      jsonb_build_object(
        'type', 'faq',
        'heading', 'Questions fréquentes',
        'items', jsonb_build_array(
          jsonb_build_object(
            'question', 'Quelle différence avec un filler de volume ?',
            'answer', 'Le skinbooster vise la qualité de peau (hydratation/texture) et non la restauration de volumes. L''examen clinique détermine l''option la plus pertinente.'
          ),
          jsonb_build_object(
            'question', 'Combien de séances ?',
            'answer', 'Souvent un protocole initial puis un entretien, selon votre réponse et vos objectifs.'
          ),
          jsonb_build_object(
            'question', 'Peut-on s''exposer au soleil ?',
            'answer', 'On recommande en général d''éviter l''exposition immédiate et de privilégier une photoprotection. Les consignes sont données au cas par cas.'
          )
        )
      ),
      jsonb_build_object(
        'type', 'cta',
        'heading', 'Prendre rendez-vous',
        'body', 'En consultation, nous définissons le protocole le plus adapté à votre peau et à vos objectifs.',
        'button_label', 'Prendre rendez-vous',
        'button_href', '/contact'
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
          'Suites habituelles : rougeurs, petites papules, ecchymoses possibles',
          'Résultat : progressif et variable',
          'Alternatives : skinbooster, peelings, lasers, routine médicale (selon cas)'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Objectif',
        'body', 'La mésothérapie consiste en des micro-injections superficielles, dans le but d''améliorer la qualité de peau selon un protocole défini. La pertinence dépend de l''examen clinique.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Déroulé',
        'body', 'Plusieurs séances peuvent être proposées, puis un entretien. Les consignes post-séance (sport, soleil, chaleur) sont adaptées à votre peau et à la saison.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Suites',
        'body', 'La plupart du temps : rougeurs transitoires et petites marques. Des ecchymoses peuvent survenir. Recontacter le cabinet si signe inhabituel.'
      ),
      jsonb_build_object(
        'type', 'faq',
        'heading', 'Questions fréquentes',
        'items', jsonb_build_array(
          jsonb_build_object(
            'question', 'Est-ce adapté à tout le monde ?',
            'answer', 'La réponse est variable et dépend de la peau, de l''indication et du protocole. La consultation permet aussi de proposer une alternative si elle est plus adaptée.'
          ),
          jsonb_build_object(
            'question', 'Y a-t-il un arrêt social ?',
            'answer', 'Souvent non, mais des rougeurs ou petites marques transitoires sont possibles. Les suites varient selon les patients.'
          ),
          jsonb_build_object(
            'question', 'Combien de séances ?',
            'answer', 'Le plus souvent plusieurs séances initiales, puis un entretien selon la réponse et l''objectif.'
          )
        )
      ),
      jsonb_build_object(
        'type', 'cta',
        'heading', 'Consultation à Tunis',
        'body', 'Une consultation permet de choisir la technique la plus adaptée à votre objectif (mésothérapie, skinbooster, peeling, laser…).',
        'button_label', 'Prendre rendez-vous',
        'button_href', '/contact'
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
  seo_description = excluded.seo_description;

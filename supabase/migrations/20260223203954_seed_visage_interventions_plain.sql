-- Seed "Visage" interventions (plain structured blocks; no Markdown).
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
    'lifting-cervico-facial',
    'visage',
    'Lifting cervico-facial',
    'Rajeunissement du bas du visage et du cou (selon indication). Informations, déroulé, suites et risques. Consultation à Tunis (Tunisie).',
    '',
    jsonb_build_array(
      jsonb_build_object(
        'type', 'bullets',
        'heading', 'En bref',
        'items', to_jsonb(array[
          'Objectif : améliorer l''ovale du visage et le cou, selon l''indication',
          'Cicatrices : discutées en consultation, placement adapté à l''anatomie',
          'Durée : variable selon le geste associé',
          'Anesthésie : selon indication, décidée après examen',
          'Suites : œdème et ecchymoses possibles, récupération progressive',
          'Résultat : s''améliore avec le temps, variable selon les patients'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Objectif',
        'text', 'Le lifting cervico-facial vise à traiter un relâchement du bas du visage et du cou, en recherchant un résultat naturel et harmonieux. Le plan opératoire est personnalisé après examen clinique en consultation à Tunis.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Pour qui ?',
        'text', 'L''indication dépend de l''âge, de la qualité cutanée, de l''importance du relâchement et de vos attentes. La consultation permet de discuter des bénéfices, des limites, des cicatrices et des alternatives.',
        'points', to_jsonb(array[
          'Examen du visage et du cou, photos si nécessaire.',
          'Plan de traitement et informations pré-opératoires.'
        ])
      ),
      jsonb_build_object(
        'type', 'procedure',
        'heading', 'Déroulé',
        'cards', jsonb_build_array(
          jsonb_build_object(
            'subtitle', 'Carte 1',
            'text', 'Avant l''intervention, une consultation évalue l''indication et précise la stratégie.',
            'points', to_jsonb(array['Analyse et plan personnalisé', 'Consignes et préparation'])
          ),
          jsonb_build_object(
            'subtitle', 'Carte 2',
            'text', 'L''intervention est réalisée selon un plan défini, parfois associée à d''autres gestes selon le besoin.',
            'points', to_jsonb(array['Geste adapté à l''anatomie', 'Objectif : résultat naturel'])
          ),
          jsonb_build_object(
            'subtitle', 'Carte 3',
            'text', 'Après l''intervention, la récupération est progressive et les consignes sont adaptées.',
            'points', to_jsonb(array['Surveillance et rendez-vous de contrôle', 'Reprise des activités au cas par cas'])
          )
        )
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Suites',
        'text', 'Les suites varient selon les patients et l''étendue du geste.',
        'points', to_jsonb(array[
          'Œdème et ecchymoses possibles.',
          'Tension ou gêne transitoire possible.',
          'Recontacter en cas de douleur importante, fièvre, saignement ou signe inhabituel.'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Risques / effets indésirables possibles',
        'text', 'Comme tout acte chirurgical, il existe des risques et des effets indésirables possibles. Ils sont expliqués en consultation, avec les mesures de prévention et la conduite à tenir.'
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Résultat et durée',
        'text', 'Le résultat se met en place progressivement avec la diminution de l''œdème. La durée et la stabilité du résultat sont variables selon les patients, la peau et le mode de vie.'
      ),
      jsonb_build_object(
        'type', 'faq',
        'heading', 'Questions fréquentes',
        'items', jsonb_build_array(
          jsonb_build_object(
            'question', 'Où sont les cicatrices ?',
            'answer', 'Leur emplacement dépend de la technique et de votre anatomie. La consultation permet d''expliquer précisément les zones concernées et l''évolution de la cicatrisation.'
          ),
          jsonb_build_object(
            'question', 'Y a-t-il un arrêt social ?',
            'answer', 'Un arrêt social est souvent à prévoir en raison de l''œdème et des ecchymoses possibles. La durée varie selon les patients et l''activité.'
          ),
          jsonb_build_object(
            'question', 'Quand voit-on le résultat final ?',
            'answer', 'L''amélioration est progressive. Le résultat continue d''évoluer au fil des semaines, puis des mois, avec la maturation des tissus.'
          ),
          jsonb_build_object(
            'question', 'Quel est le prix à Tunis ?',
            'answer', 'Le tarif dépend du geste, des éventuelles associations, du bloc et de la clinique. Un devis est établi après examen.'
          ),
          jsonb_build_object(
            'question', 'Quelles alternatives ?',
            'answer', 'Selon l''indication : médecine esthétique, fils tenseurs, ou gestes plus ciblés. Le choix se discute en consultation.'
          )
        )
      ),
      jsonb_build_object(
        'type', 'cta',
        'heading', 'Consultation à Tunis',
        'body', 'Une consultation permet de confirmer l''indication et de définir un plan personnalisé.',
        'button_label', 'Prendre rendez-vous',
        'button_href', '/contact'
      )
    ),
    1,
    'publie',
    'Lifting cervico-facial à Tunis',
    'Ovale du visage et cou : indications, déroulé, suites, risques et récupération. Consultation à Tunis (Tunisie).'
  ),
  (
    'lipoaspiration-du-cou',
    'visage',
    'Lipoaspiration du cou',
    'Double menton et contour du cou : indication, déroulé, suites et risques. Consultation à Tunis (Tunisie).',
    '',
    jsonb_build_array(
      jsonb_build_object(
        'type', 'bullets',
        'heading', 'En bref',
        'items', to_jsonb(array[
          'Objectif : affiner le cou et améliorer le contour du menton, selon indication',
          'Cicatrices : très petites, placement discuté en consultation',
          'Durée : variable selon la zone et le geste associé',
          'Suites : œdème et ecchymoses possibles',
          'Résultat : progressif, avec stabilisation au fil des semaines',
          'Alternatives : selon l''épaisseur cutanée et le relâchement'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Objectif',
        'text', 'La lipoaspiration du cou vise à réduire un excès graisseux sous-mentonnier et à améliorer le contour cervico-mentonnier. L''indication dépend notamment de la qualité cutanée et du degré de relâchement.'
      ),
      jsonb_build_object(
        'type', 'procedure',
        'heading', 'Déroulé',
        'cards', jsonb_build_array(
          jsonb_build_object(
            'subtitle', 'Carte 1',
            'text', 'Consultation et planification.',
            'points', to_jsonb(array['Évaluation du double menton et de la peau', 'Information sur suites et limites'])
          ),
          jsonb_build_object(
            'subtitle', 'Carte 2',
            'text', 'Geste ciblé sur la zone du cou, selon indication.',
            'points', to_jsonb(array['Technique adaptée', 'Objectif : contour naturel'])
          ),
          jsonb_build_object(
            'subtitle', 'Carte 3',
            'text', 'Suites et recommandations.',
            'points', to_jsonb(array['Récupération progressive', 'Contrôle et suivi'])
          )
        )
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Suites',
        'text', 'Les suites sont le plus souvent transitoires.',
        'points', to_jsonb(array[
          'Œdème et ecchymoses possibles.',
          'Sensibilité modifiée temporaire possible.',
          'Le résultat s''affine progressivement.'
        ])
      ),
      jsonb_build_object(
        'type', 'faq',
        'heading', 'Questions fréquentes',
        'items', jsonb_build_array(
          jsonb_build_object(
            'question', 'Est-ce adapté si la peau est relâchée ?',
            'answer', 'Cela dépend du degré de relâchement. Une alternative ou un geste associé peut être discuté après examen.'
          ),
          jsonb_build_object(
            'question', 'Quand voit-on le résultat ?',
            'answer', 'Le résultat est progressif, avec une amélioration au fil des semaines. La stabilisation dépend de la cicatrisation et de la rétraction cutanée.'
          ),
          jsonb_build_object(
            'question', 'Y a-t-il des cicatrices visibles ?',
            'answer', 'Les incisions sont généralement petites. Leur placement est expliqué en consultation et l''évolution de la cicatrice est surveillée.'
          ),
          jsonb_build_object(
            'question', 'Quel est le prix à Tunis ?',
            'answer', 'Le tarif dépend du geste, de la zone et du contexte. Un devis est établi après consultation.'
          )
        )
      ),
      jsonb_build_object(
        'type', 'cta',
        'heading', 'Consultation à Tunis',
        'body', 'La consultation permet de confirmer l''indication et de choisir la meilleure option.',
        'button_label', 'Prendre rendez-vous',
        'button_href', '/contact'
      )
    ),
    2,
    'publie',
    'Lipoaspiration du cou à Tunis',
    'Double menton : indication, déroulé, suites, risques et résultat. Consultation à Tunis (Tunisie).'
  ),
  (
    'rhinoplastie',
    'visage',
    'Rhinoplastie',
    'Chirurgie esthétique et/ou fonctionnelle du nez : indication, déroulé, suites et risques. Consultation à Tunis (Tunisie).',
    '',
    jsonb_build_array(
      jsonb_build_object(
        'type', 'bullets',
        'heading', 'En bref',
        'items', to_jsonb(array[
          'Objectif : améliorer l''harmonie du nez et/ou la fonction respiratoire, selon indication',
          'Cicatrices : selon technique, expliquées en consultation',
          'Suites : œdème et ecchymoses possibles, évolution progressive',
          'Résultat : progressif, stabilisation sur plusieurs mois',
          'Douleur : variable, prise en charge adaptée',
          'Devis : établi après examen à Tunis'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Objectif',
        'text', 'La rhinoplastie vise à corriger une gêne esthétique et/ou fonctionnelle (respiration), en respectant l''équilibre du visage. La stratégie est personnalisée après analyse morphologique et, si nécessaire, fonctionnelle.'
      ),
      jsonb_build_object(
        'type', 'procedure',
        'heading', 'Déroulé',
        'cards', jsonb_build_array(
          jsonb_build_object(
            'subtitle', 'Carte 1',
            'text', 'Consultation et plan.',
            'points', to_jsonb(array['Analyse du nez et du visage', 'Explication des objectifs et limites'])
          ),
          jsonb_build_object(
            'subtitle', 'Carte 2',
            'text', 'Intervention selon la technique la plus adaptée.',
            'points', to_jsonb(array['Geste personnalisé', 'Respect de l''harmonie du visage'])
          ),
          jsonb_build_object(
            'subtitle', 'Carte 3',
            'text', 'Suites et suivi.',
            'points', to_jsonb(array['Œdème/ecchymoses possibles', 'Rendez-vous de contrôle'])
          )
        )
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Suites',
        'text', 'Les suites varient selon les patients et la technique.',
        'points', to_jsonb(array[
          'Œdème du nez possible, parfois ecchymoses autour des yeux.',
          'La forme évolue progressivement.',
          'Les consignes (sport, soleil) sont personnalisées.'
        ])
      ),
      jsonb_build_object(
        'type', 'faq',
        'heading', 'Questions fréquentes',
        'items', jsonb_build_array(
          jsonb_build_object(
            'question', 'Quand voit-on le résultat final ?',
            'answer', 'Le nez évolue progressivement. Une stabilisation demande souvent plusieurs mois, parfois davantage, selon la cicatrisation.'
          ),
          jsonb_build_object(
            'question', 'Peut-on améliorer la respiration ?',
            'answer', 'Selon le cas, un volet fonctionnel peut être discuté. L''examen clinique précise la faisabilité et la stratégie.'
          ),
          jsonb_build_object(
            'question', 'Y a-t-il un arrêt social ?',
            'answer', 'Un arrêt social est souvent à prévoir en raison de l''œdème et des ecchymoses possibles. La durée varie.'
          ),
          jsonb_build_object(
            'question', 'Quel est le prix à Tunis ?',
            'answer', 'Le tarif dépend de la complexité, du volet fonctionnel, du bloc et de la clinique. Un devis est établi après consultation.'
          )
        )
      ),
      jsonb_build_object(
        'type', 'cta',
        'heading', 'Consultation à Tunis',
        'body', 'Une consultation permet de définir une stratégie sur-mesure et d''expliquer les suites.',
        'button_label', 'Prendre rendez-vous',
        'button_href', '/contact'
      )
    ),
    3,
    'publie',
    'Rhinoplastie à Tunis',
    'Chirurgie du nez : indications, déroulé, suites, risques et résultat progressif. Consultation à Tunis (Tunisie).'
  ),
  (
    'blepharoplastie-paupieres',
    'visage',
    'Blépharoplastie (paupières)',
    'Paupières supérieures et/ou inférieures : indication, déroulé, suites et risques. Consultation à Tunis (Tunisie).',
    '',
    jsonb_build_array(
      jsonb_build_object(
        'type', 'bullets',
        'heading', 'En bref',
        'items', to_jsonb(array[
          'Objectif : corriger excès cutané et/ou poches, selon indication',
          'Zones : paupières supérieures et/ou inférieures',
          'Cicatrices : expliquées en consultation, généralement discrètes',
          'Suites : œdème et ecchymoses possibles',
          'Résultat : progressif, regard plus reposé',
          'Devis : après examen à Tunis'
        ])
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Objectif',
        'text', 'La blépharoplastie vise à améliorer l''aspect des paupières (excès cutané, poches) lorsque cela est indiqué. Le geste est choisi selon l''anatomie et l''objectif, après examen en consultation.'
      ),
      jsonb_build_object(
        'type', 'procedure',
        'heading', 'Déroulé',
        'cards', jsonb_build_array(
          jsonb_build_object(
            'subtitle', 'Carte 1',
            'text', 'Consultation et plan.',
            'points', to_jsonb(array['Analyse des paupières', 'Explication des cicatrices et des suites'])
          ),
          jsonb_build_object(
            'subtitle', 'Carte 2',
            'text', 'Intervention adaptée à la zone (supérieure, inférieure ou les deux).',
            'points', to_jsonb(array['Geste précis', 'Objectif : résultat naturel'])
          ),
          jsonb_build_object(
            'subtitle', 'Carte 3',
            'text', 'Suites et suivi.',
            'points', to_jsonb(array['Œdème/bleus possibles', 'Contrôle et conseils'])
          )
        )
      ),
      jsonb_build_object(
        'type', 'section',
        'heading', 'Suites',
        'text', 'Les suites sont le plus souvent transitoires.',
        'points', to_jsonb(array[
          'Œdème et ecchymoses possibles.',
          'Sécheresse oculaire ou inconfort transitoire possible.',
          'Reprise progressive des activités selon les consignes.'
        ])
      ),
      jsonb_build_object(
        'type', 'faq',
        'heading', 'Questions fréquentes',
        'items', jsonb_build_array(
          jsonb_build_object(
            'question', 'Les cicatrices se voient-elles ?',
            'answer', 'Les cicatrices sont généralement placées dans des zones discrètes. Leur évolution est progressive et dépend de la cicatrisation.'
          ),
          jsonb_build_object(
            'question', 'Y a-t-il un arrêt social ?',
            'answer', 'Souvent, un court arrêt social est utile en raison des ecchymoses possibles. La durée varie selon les patients.'
          ),
          jsonb_build_object(
            'question', 'Quand voit-on le résultat ?',
            'answer', 'L''amélioration est progressive. Le résultat s''apprécie après la diminution de l''œdème et la maturation des tissus.'
          ),
          jsonb_build_object(
            'question', 'Quel est le prix à Tunis ?',
            'answer', 'Le tarif dépend des paupières concernées et du contexte. Un devis est établi après consultation.'
          )
        )
      ),
      jsonb_build_object(
        'type', 'cta',
        'heading', 'Consultation à Tunis',
        'body', 'La consultation permet de confirmer l''indication et d''expliquer les suites et les cicatrices.',
        'button_label', 'Prendre rendez-vous',
        'button_href', '/contact'
      )
    ),
    4,
    'publie',
    'Blépharoplastie à Tunis (paupières)',
    'Paupières supérieures et/ou inférieures : indications, déroulé, suites, risques et résultat. Consultation à Tunis (Tunisie).'
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

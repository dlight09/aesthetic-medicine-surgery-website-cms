-- Seed 3 medicine-esthetique blog posts and links.
-- Idempotent upsert by slug.

insert into public.blog_posts (
  slug,
  title,
  description,
  status,
  published_at,
  seo_title,
  seo_description,
  content_blocks
)
values
  (
    'consultation-medecine-esthetique-questions-essentielles',
    'Médecine esthétique : les questions essentielles avant un premier rendez-vous',
    'Préparer sa consultation, clarifier ses objectifs et poser les bonnes questions avant un acte.',
    'publie',
    now(),
    'Médecine esthétique : questions utiles avant consultation',
    'Objectifs, limites, alternatives et suites : les points clés à aborder avant un premier rendez-vous.',
    jsonb_build_array(
      jsonb_build_object(
        'type','bullets',
        'heading','Avant la consultation',
        'items', to_jsonb(array[
          'Notez votre objectif principal en une phrase.',
          'Préparez antécédents, traitements et allergies.',
          'Mentionnez les actes déjà réalisés.',
          'Prévoyez un temps d’échange suffisant.'
        ])
      ),
      jsonb_build_object(
        'type','section',
        'heading','Questions utiles',
        'text','La consultation doit clarifier bénéfices attendus, limites, alternatives, risques possibles et organisation du suivi.',
        'points', to_jsonb(array[
          'Quel résultat est réaliste dans mon cas ?',
          'Quelles alternatives existent ?',
          'Quelles suites sont habituelles ?',
          'Quels signes doivent faire recontacter ?'
        ])
      ),
      jsonb_build_object(
        'type','callout',
        'tone','a-retenir',
        'title','À retenir',
        'text','Un rendez-vous de médecine esthétique est d’abord une décision médicale éclairée, pas une validation automatique d’acte.'
      )
    )
  ),
  (
    'apres-injection-signes-habituels-et-alerte',
    'Après une injection : signes habituels, délais et situations à surveiller',
    'Rougeurs, œdème, ecchymoses : repères simples après une injection et situations qui nécessitent un avis rapide.',
    'publie',
    now(),
    'Après injection : suites habituelles et signes d’alerte',
    'Repères pratiques après une injection : évolution attendue, délais et situations nécessitant un avis médical.',
    jsonb_build_array(
      jsonb_build_object(
        'type','bullets',
        'heading','Suites habituelles',
        'items', to_jsonb(array[
          'Rougeur locale transitoire.',
          'Œdème modéré les premiers jours.',
          'Ecchymoses possibles selon les zones.',
          'Sensibilité locale temporaire.'
        ])
      ),
      jsonb_build_object(
        'type','section',
        'heading','Délais et évolution',
        'text','L’aspect final n’est pas toujours immédiat. Une stabilisation progressive est normale et dépend de la zone traitée.',
        'points', to_jsonb(array[
          'Respecter les consignes post-acte.',
          'Éviter de manipuler excessivement la zone.',
          'Suivre le contrôle si prévu.'
        ])
      ),
      jsonb_build_object(
        'type','callout',
        'tone','securite',
        'title','Quand recontacter rapidement',
        'text','En cas de douleur inhabituelle importante, de symptôme qui s’aggrave ou de doute, contactez rapidement le cabinet.'
      )
    )
  ),
  (
    'qualite-de-peau-routine-simple-et-coherente',
    'Qualité de peau : construire une routine simple, cohérente et durable',
    'Une routine claire et régulière pour améliorer la qualité de peau sans surcharger les gestes.',
    'publie',
    now(),
    'Qualité de peau : routine quotidienne simple',
    'Nettoyage, hydratation et photoprotection : les bases d’une routine cohérente et réaliste.',
    jsonb_build_array(
      jsonb_build_object(
        'type','bullets',
        'heading','Les bases utiles',
        'items', to_jsonb(array[
          'Nettoyage doux matin et soir.',
          'Hydratation adaptée au type de peau.',
          'Photoprotection quotidienne.'
        ])
      ),
      jsonb_build_object(
        'type','section',
        'heading','Routine cohérente',
        'text','La régularité compte souvent plus que la multiplication des produits. Introduire les changements un par un facilite le suivi.',
        'points', to_jsonb(array[
          'Éviter de superposer trop d’actifs.',
          'Observer la tolérance cutanée.',
          'Demander un avis médical en cas de peau réactive.'
        ])
      ),
      jsonb_build_object(
        'type','callout',
        'tone','conseil',
        'title','Objectif réaliste',
        'text','Viser une amélioration progressive de la texture, de l’éclat et du confort cutané plutôt qu’un résultat instantané.'
      )
    )
  )
on conflict (slug)
do update set
  title = excluded.title,
  description = excluded.description,
  status = excluded.status,
  published_at = excluded.published_at,
  seo_title = excluded.seo_title,
  seo_description = excluded.seo_description,
  content_blocks = excluded.content_blocks,
  updated_at = now();

delete from public.blog_intervention_links
where blog_slug in (
  'consultation-medecine-esthetique-questions-essentielles',
  'apres-injection-signes-habituels-et-alerte',
  'qualite-de-peau-routine-simple-et-coherente'
);

insert into public.blog_intervention_links (blog_slug, intervention_slug, position, context)
values
  ('consultation-medecine-esthetique-questions-essentielles', 'injection-acide-hyaluronique', 0, 'both'),
  ('apres-injection-signes-habituels-et-alerte', 'injection-toxine-botulique', 0, 'both'),
  ('qualite-de-peau-routine-simple-et-coherente', 'skinbooster', 0, 'both');

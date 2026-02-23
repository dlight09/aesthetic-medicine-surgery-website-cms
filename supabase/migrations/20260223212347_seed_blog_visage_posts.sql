-- Seed initial blog posts (Visage) + link them to interventions.
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
    'rhinoplastie-suites-oedeme-resultat',
    'Rhinoplastie : suites, œdème, ecchymoses et délai de résultat',
    'À quoi s’attendre après une rhinoplastie : récupération, signes habituels, délais et points de vigilance. Consultation à Tunis (Tunisie).',
    'publie',
    now(),
    'Rhinoplastie : suites et récupération à Tunis',
    'Œdème, ecchymoses, reprise du sport, délais du résultat : réponses claires. Consultation de chirurgie esthétique à Tunis (Tunisie).',
    jsonb_build_array(
      jsonb_build_object(
        'type','bullets',
        'heading','En bref',
        'items', to_jsonb(array[
          'Les suites sont variables selon les patients et la technique.',
          'Un œdème est fréquent et diminue progressivement.',
          'Des ecchymoses peuvent survenir, surtout les premiers jours.',
          'Le résultat évolue sur plusieurs mois.',
          'Les consignes (sport, soleil) sont personnalisées en consultation à Tunis.'
        ])
      ),
      jsonb_build_object(
        'type','section',
        'heading','À quoi s’attendre',
        'text','Après une rhinoplastie, il est normal d’observer une évolution progressive. L’objectif est de vous donner des repères généraux, tout en rappelant que chaque cas est différent.',
        'points', to_jsonb(array[
          'La récupération est progressive.',
          'Les consignes sont adaptées selon le geste réalisé.',
          'En cas de symptôme inhabituel, recontactez le cabinet.'
        ])
      ),
      jsonb_build_object(
        'type','callout',
        'tone','securite',
        'title','Signes qui doivent faire recontacter',
        'text','Douleur importante non contrôlée, saignement important, fièvre, ou tout symptôme inhabituel : contactez rapidement le cabinet ou consultez en urgence selon la gravité.'
      ),
      jsonb_build_object(
        'type','faq',
        'heading','Questions fréquentes',
        'items', jsonb_build_array(
          jsonb_build_object(
            'question','Quand l’œdème diminue-t-il ?',
            'answer','L’œdème diminue progressivement. Le délai varie selon les patients et la zone. Une partie de l’évolution se poursuit sur plusieurs mois.'
          ),
          jsonb_build_object(
            'question','Quand voit-on le résultat final ?',
            'answer','Le nez continue d’évoluer pendant plusieurs mois. La stabilisation dépend de la cicatrisation et des tissus.'
          ),
          jsonb_build_object(
            'question','Quand reprendre le sport ?',
            'answer','La reprise se fait au cas par cas. Les activités et les délais sont précisés en consultation et lors du suivi.'
          )
        )
      ),
      jsonb_build_object(
        'type','sources',
        'heading','Références / sources',
        'items', jsonb_build_array(
          jsonb_build_object(
            'title','American Society of Plastic Surgeons (ASPS) – Rhinoplasty (patient information)',
            'publisher','ASPS',
            'year','',
            'url','https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty'
          ),
          jsonb_build_object(
            'title','NHS – Cosmetic surgery: risks and recovery (general guidance)',
            'publisher','NHS',
            'year','',
            'url','https://www.nhs.uk/conditions/cosmetic-procedures/'
          )
        )
      )
    )
  ),
  (
    'blepharoplastie-cicatrices-suites',
    'Blépharoplastie : cicatrices, suites et arrêt social',
    'Paupières supérieures et/ou inférieures : cicatrisation, suites habituelles et conseils. Consultation à Tunis (Tunisie).',
    'publie',
    now(),
    'Blépharoplastie : cicatrices et récupération à Tunis',
    'Cicatrices, ecchymoses, reprise du travail : réponses claires. Consultation à Tunis (Tunisie).',
    jsonb_build_array(
      jsonb_build_object(
        'type','section',
        'heading','Objectif',
        'text','La blépharoplastie vise à améliorer l’aspect des paupières lorsqu’il existe un excès cutané et/ou des poches, selon indication. La stratégie est adaptée à votre anatomie.'
      ),
      jsonb_build_object(
        'type','callout',
        'tone','a-retenir',
        'title','Cicatrices',
        'text','Leur placement et leur évolution sont expliqués en consultation. Elles deviennent habituellement plus discrètes avec le temps, selon la cicatrisation.'
      ),
      jsonb_build_object(
        'type','faq',
        'heading','Questions fréquentes',
        'items', jsonb_build_array(
          jsonb_build_object(
            'question','Combien de temps d’arrêt social ?',
            'answer','Un arrêt social court peut être utile en raison des ecchymoses possibles. La durée varie selon les patients et l’activité.'
          ),
          jsonb_build_object(
            'question','Quand le résultat est-il visible ?',
            'answer','L’amélioration est progressive. Le résultat s’apprécie après la diminution de l’œdème et la maturation des tissus.'
          )
        )
      ),
      jsonb_build_object(
        'type','sources',
        'heading','Références / sources',
        'items', jsonb_build_array(
          jsonb_build_object(
            'title','ASPS – Eyelid Surgery (Blepharoplasty) (patient information)',
            'publisher','ASPS',
            'year','',
            'url','https://www.plasticsurgery.org/cosmetic-procedures/eyelid-surgery'
          )
        )
      )
    )
  ),
  (
    'lifting-cervico-facial-recuperation',
    'Lifting cervico-facial : récupération et points clés',
    'Récupération, suites habituelles et conseils après un lifting cervico-facial. Consultation à Tunis (Tunisie).',
    'publie',
    now(),
    'Lifting cervico-facial : récupération à Tunis',
    'Suites, œdème, arrêt social et reprise des activités : repères utiles. Consultation à Tunis (Tunisie).',
    jsonb_build_array(
      jsonb_build_object(
        'type','bullets',
        'heading','En bref',
        'items', to_jsonb(array[
          'La récupération est progressive.',
          'Œdème et ecchymoses possibles.',
          'Les consignes sont personnalisées.',
          'Le résultat s’affine avec le temps.'
        ])
      ),
      jsonb_build_object(
        'type','callout',
        'tone','conseil',
        'title','Organisation',
        'text','Prévoyez du repos et une période de discrétion sociale. La durée varie selon les patients et les gestes associés.'
      ),
      jsonb_build_object(
        'type','sources',
        'heading','Références / sources',
        'items', jsonb_build_array(
          jsonb_build_object(
            'title','ASPS – Facelift (Rhytidectomy) (patient information)',
            'publisher','ASPS',
            'year','',
            'url','https://www.plasticsurgery.org/cosmetic-procedures/facelift'
          )
        )
      )
    )
  ),
  (
    'double-menton-options',
    'Double menton : options, indications et alternatives',
    'Lipoaspiration du cou, alternatives et critères d’indication. Consultation à Tunis (Tunisie).',
    'publie',
    now(),
    'Double menton : options à Tunis',
    'Lipoaspiration du cou, relâchement cutané, alternatives : repères utiles. Consultation à Tunis (Tunisie).',
    jsonb_build_array(
      jsonb_build_object(
        'type','section',
        'heading','Pourquoi le double menton ?',
        'text','Le double menton peut être lié à un excès graisseux, à un relâchement cutané, ou à l’anatomie. L’examen clinique permet de proposer une option adaptée.'
      ),
      jsonb_build_object(
        'type','faq',
        'heading','Questions fréquentes',
        'items', jsonb_build_array(
          jsonb_build_object(
            'question','La lipoaspiration suffit-elle ?',
            'answer','Cela dépend surtout de la qualité de peau et du relâchement. Une alternative ou un geste associé peut être discuté en consultation.'
          )
        )
      ),
      jsonb_build_object(
        'type','sources',
        'heading','Références / sources',
        'items', jsonb_build_array(
          jsonb_build_object(
            'title','ASPS – Neck Liposuction (patient information)',
            'publisher','ASPS',
            'year','',
            'url','https://www.plasticsurgery.org/cosmetic-procedures/liposuction'
          )
        )
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

-- Links: reset and insert
delete from public.blog_intervention_links
where blog_slug in (
  'rhinoplastie-suites-oedeme-resultat',
  'blepharoplastie-cicatrices-suites',
  'lifting-cervico-facial-recuperation',
  'double-menton-options'
);

insert into public.blog_intervention_links (blog_slug, intervention_slug, position, context)
values
  ('rhinoplastie-suites-oedeme-resultat', 'rhinoplastie', 0, 'both'),
  ('blepharoplastie-cicatrices-suites', 'blepharoplastie-paupieres', 0, 'both'),
  ('lifting-cervico-facial-recuperation', 'lifting-cervico-facial', 0, 'both'),
  ('double-menton-options', 'lipoaspiration-du-cou', 0, 'both');

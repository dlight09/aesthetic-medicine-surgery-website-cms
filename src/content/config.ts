import { defineCollection, z } from 'astro:content';

const interventions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'medecine-esthetique',
      'visage',
      'silhouette',
      'seins',
      'chirurgie-reparatrice',
      'chirurgie-de-la-main',
      'intime'
    ]),
    order: z.number().int().optional()
  })
});

export const collections = { interventions };

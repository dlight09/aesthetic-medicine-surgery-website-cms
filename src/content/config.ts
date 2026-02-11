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

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().optional().default(false)
  })
});

export const collections = { interventions, blog };

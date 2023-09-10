import {defineCollection, z} from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        isDraft: z.boolean(),
        title: z.string(),
        tags: z.array(z.string()),
        language: z.enum(['de', 'en']),
        publishDate: z.date(),
        image: z.string().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
};
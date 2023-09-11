import {defineCollection, z} from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        tags: z.array(z.string()),
        publishDate: z.date(),
        image: z.string().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
};
import { defineCollection, z } from 'astro:content';

const jobsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        // TODO: How to handle this?
        previewImage: z.string().optional(),
        links: z.array(
            z.object({
                label: z.string(),
                url: z.string(),
            }),
        ),
        positions: z.array(
            z.object({
                title: z.string(),
                startMonth: z.string(),
                endMonth: z.string().nullable(),
            }),
        ),
    }),
});

export const collections = {
    jobs: jobsCollection,
};

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
                startMonth: z.date(),
                endMonth: z.date().nullable(),
            }),
        ),
    }),
});

const projectsCollection = defineCollection({
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
        tags: z.array(z.string()),
    }),
});

export const collections = {
    jobs: jobsCollection,
    projects: projectsCollection,
};

import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const jobsCollection = defineCollection({
    loader: glob({ pattern: '**\/[^_]*.md', base: './src/content/jobs' }),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
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
    loader: glob({ pattern: '**\/[^_]*.md', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        links: z.array(
            z.object({
                label: z.string(),
                url: z.string(),
            }),
        ),
    }),
});

export const collections = {
    jobs: jobsCollection,
    projects: projectsCollection,
};

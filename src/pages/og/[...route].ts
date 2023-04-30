import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const jobEntries = await getCollection('jobs');
const projectEntries = await getCollection('projects');

type PageData = {
    title: string;
    description: string;
};

const pages: Record<string, PageData> = {
    index: {
        title: 'rileyflynn.me',
        description: 'Placeholder description, fix me!',
    },
};

for (const entry of jobEntries) {
    pages[`jobs/${entry.slug}`] = {
        title: entry.data.title,
        description: entry.data.summary,
    };
}

for (const entry of projectEntries) {
    pages[`projects/${entry.slug}`] = {
        title: entry.data.title,
        description: entry.data.summary,
    };
}

export const { getStaticPaths, get } = OGImageRoute({
    param: 'route',
    pages: pages,

    getImageOptions: (path, page: PageData) => ({
        title: page.title,
        description: page.description,
    }),
});

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
        description: "Cloud Architect from St. John's, Newfoundland.",
    },
    projects: {
        title: 'Projects',
        description: "A selection of projects I've worked on.",
    },
    jobs: {
        title: 'Jobs',
        description: "List of the places I've worked.",
    },
};

for (const entry of jobEntries) {
    pages[`jobs/${entry.id}`] = {
        title: entry.data.title,
        description: entry.data.summary,
    };
}

for (const entry of projectEntries) {
    pages[`projects/${entry.id}`] = {
        title: entry.data.title,
        description: entry.data.summary,
    };
}

export const { getStaticPaths, GET } = OGImageRoute({
    param: 'route',
    pages: pages,

    getImageOptions: (path, page: PageData) => ({
        title: page.title,
        description: page.description,
        bgGradient: [[24, 24, 27]],
        font: {
            title: {
                color: [250, 250, 250],
                families: ['Inconsolata'],
            },
            description: {
                color: [212, 212, 216],
                families: ['Inconsolata'],
            },
        },
        fonts: [
            'https://api.fontsource.org/v1/fonts/inconsolata/latin-400-normal.ttf',
            'https://api.fontsource.org/v1/fonts/inconsolata/latin-700-normal.ttf',
        ],
    }),
});

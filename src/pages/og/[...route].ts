import { flavors as catppuccinFlavours, type ColorFormat } from '@catppuccin/palette';
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
    'docker-talk': {
        title: 'Docker Talk',
        description: 'Links and resources for my June 2025 talk on Docker for TechNL.',
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

function catppuccinToAstroOGCanvas(colour: ColorFormat): [number, number, number] {
    return [colour.rgb.r, colour.rgb.g, colour.rgb.b];
}

export const { getStaticPaths, GET } = OGImageRoute({
    param: 'route',
    pages: pages,

    getImageOptions: (path, page: PageData) => ({
        title: page.title,
        description: page.description,
        bgGradient: [catppuccinToAstroOGCanvas(catppuccinFlavours.frappe.colors.base)],
        font: {
            title: {
                color: catppuccinToAstroOGCanvas(catppuccinFlavours.frappe.colors.text),
                families: ['Inconsolata'],
            },
            description: {
                color: catppuccinToAstroOGCanvas(catppuccinFlavours.frappe.colors.subtext0),
                families: ['Inconsolata'],
            },
        },
        fonts: [
            'https://api.fontsource.org/v1/fonts/inconsolata/latin-400-normal.ttf',
            'https://api.fontsource.org/v1/fonts/inconsolata/latin-700-normal.ttf',
        ],
    }),
});

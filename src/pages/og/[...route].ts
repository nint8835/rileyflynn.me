import { flavors as catppuccinFlavours, type ColorFormat } from '@catppuccin/palette';
import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

type PageData = {
    title: string;
    description: string;
};

const pageModules = import.meta.glob<{ metadata?: PageData; frontmatter?: Partial<PageData> }>(
    '/src/pages/**/*.{astro,md,mdx}',
);
const pages: Record<string, PageData> = {};

for (const [file, load] of Object.entries(pageModules)) {
    if (file.includes('[')) continue;

    const { metadata, frontmatter } = await load();
    const { title, description } = metadata ?? frontmatter ?? {};
    if (typeof title !== 'string' || typeof description !== 'string') continue;

    const route = file
        .slice('/src/pages/'.length)
        .replace(/\.[^.]+$/, '')
        .replace(/\/index$/, '');
    pages[route] = { title: title.replace(/ - rileyflynn\.me$/, ''), description };
}

for (const collection of ['jobs', 'projects', 'talks'] as const) {
    for (const { id, data } of await getCollection(collection)) {
        pages[`${collection}/${id}`] = {
            title: data.title,
            description: 'summary' in data ? data.summary : data.description,
        };
    }
}

function catppuccinToAstroOGCanvas(colour: ColorFormat): [number, number, number] {
    return [colour.rgb.r, colour.rgb.g, colour.rgb.b];
}

export const { getStaticPaths, GET } = await OGImageRoute({
    pages,
    getSlug: (path) => `${path}.png`,

    getImageOptions: (_path, page: PageData) => ({
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

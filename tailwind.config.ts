import type { Config } from 'tailwindcss';

type FontAxis = 'CASL' | 'MONO' | 'CRSV' | 'slnt';

type FontVariationSettings = Partial<Record<FontAxis, number>>;

function createVariationSettings(settings: FontVariationSettings): { fontVariationSettings: string } {
    return {
        fontVariationSettings: Object.entries(settings)
            .map((setting) => `'${setting[0]}' ${setting[1]}`)
            .join(', '),
    };
}

function createVariant(
    baseFont: 'sans-serif' | 'serif' | 'monospace' | 'cursive',
    settings: FontVariationSettings,
): [string, { fontVariationSettings: string }] {
    return [`"Recursive Variable", ${baseFont}`, createVariationSettings(settings)];
}

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'sans-serif': createVariant('sans-serif', { CASL: 0.35 }),
            },
        },
    },
    plugins: [],
} satisfies Config;

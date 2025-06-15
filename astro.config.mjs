import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import metaTags from 'astro-meta-tags';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
    integrations: [metaTags(), mdx()],
    site: process.env.CF_PAGES_URL || 'http://localhost:3000',
    vite: {
        plugins: [tailwindcss()],
    },
    experimental: {
        fonts: [
            {
                provider: fontProviders.fontsource(),
                name: 'Inconsolata',
                cssVariable: '--font-monospace',
                fallbacks: ['monospace'],
                subsets: ['latin'],
            },
        ],
    },
});

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import metaTags from 'astro-meta-tags';
import { defineConfig, fontProviders } from 'astro/config';

// Support Cloudflare dev URLs as well as the proper domain for prod
const isProd = process.env.CF_PAGES_BRANCH && process.env.CF_PAGES_BRANCH === 'main';
const url = isProd ? 'https://rileyflynn.me' : process.env.CF_PAGES_URL;

export default defineConfig({
    integrations: [metaTags(), mdx()],
    site: url || 'http://localhost:4321',
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: 'Inconsolata',
            cssVariable: '--font-monospace',
            fallbacks: ['monospace'],
            subsets: ['latin'],
        },
    ],
});

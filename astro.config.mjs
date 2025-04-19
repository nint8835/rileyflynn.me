import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import metaTags from 'astro-meta-tags';

// https://astro.build/config
export default defineConfig({
    integrations: [metaTags()],
    site: process.env.CF_PAGES_URL || 'http://localhost:3000',
    vite: {
        plugins: [tailwindcss()],
    },
    experimental: {
        fonts: [
            {
                provider: fontProviders.fontsource(),
                name: 'Iosevka',
                cssVariable: '--font-iosevka',
            },
        ],
    },
});

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    site: process.env.CF_PAGES_URL || 'http://localhost:3000',
});

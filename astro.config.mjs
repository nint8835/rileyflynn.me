import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import metaTags from 'astro-meta-tags';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), metaTags()],
    site: process.env.CF_PAGES_URL || 'http://localhost:3000',
});

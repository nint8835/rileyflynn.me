import tailwind from '@astrojs/tailwind';
import metaTags from 'astro-meta-tags';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), metaTags()],
    site: process.env.CF_PAGES_URL || 'http://localhost:4321',
    trailingSlash: 'always',
});

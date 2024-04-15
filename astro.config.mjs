import tailwind from '@astrojs/tailwind';
import metaTags from 'astro-meta-tags';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), metaTags(), icon()],
    site: process.env.CF_PAGES_URL || 'http://localhost:4321',
    trailingSlash: 'always',
});

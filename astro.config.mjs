import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import metaTags from 'astro-meta-tags';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), metaTags()],
});

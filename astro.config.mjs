import tailwind from '@astrojs/tailwind';
import metaTags from 'astro-meta-tags';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), metaTags(), react()],
});

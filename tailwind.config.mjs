/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Libre Caslon Text', 'serif'],
                'serif-display': ['Libre Caslon Display', 'serif'],
            },
        },
    },
    plugins: [],
};

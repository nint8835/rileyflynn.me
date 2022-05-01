import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: `rileyflynn.me`,
        siteUrl: `https://rileyflynn.me`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'projects',
                path: './projects/',
            },
            __key: 'projects',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        'gatsby-plugin-mdx',
    ],
};

export default config;

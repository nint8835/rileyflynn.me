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
                name: 'content',
                path: './src/content/',
            },
            __key: 'work',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-mdx',
    ],
    graphqlTypegen: true,
};

export default config;

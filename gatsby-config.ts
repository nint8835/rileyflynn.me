import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Riley Flynn`,
        description: 'Cloud Architect and Software Developer',
        siteUrl: `https://rileyflynn.me`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://rileyflynn.me`,
            },
        },
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                name: 'pages',
                engine: 'flexsearch',
                query: `
                {
                    allMdx {
                        nodes {
                            id
                            slug
                            frontmatter {
                                type
                                project {
                                    title
                                    summary
                                    tags
                                }
                                job {
                                    company
                                    summary
                                    positions {
                                        title
                                    }
                                }
                            }
                        }
                    }
                }
                `,
                normalizer: ({ data }) =>
                    data.allMdx.nodes.map((node) => ({
                        id: node.id,
                        path: `/${node.slug}/`,
                        title:
                            node.frontmatter.type === 'project'
                                ? node.frontmatter.project.title
                                : node.frontmatter.job.company,
                        summary: node.frontmatter[node.frontmatter.type].summary,
                        tags:
                            node.frontmatter.type === 'project'
                                ? node.frontmatter.project.tags
                                : node.frontmatter.job.positions.map((position) => position.title),
                        type: node.frontmatter.type,
                    })),
            },
        },
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

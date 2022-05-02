const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        id
                        slug
                        frontmatter {
                            type
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    }

    const pages = result.data.allMdx.edges;

    pages.forEach(({ node }, index) => {
        createPage({
            path: `/${node.slug}`,
            component: path.resolve(`./src/templates/${node.frontmatter.type}.tsx`),
            context: { id: node.id },
        });
    });
};

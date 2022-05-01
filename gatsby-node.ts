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
        const template = node.slug.split('/')[0];
        createPage({
            path: `/${node.slug}`,
            component: path.resolve(`./src/templates/${template}.tsx`),
            context: { id: node.id },
        });
    });
};

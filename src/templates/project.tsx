import Container from '@cloudscape-design/components/container';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Page from '../components/page';

const MDXPage = (props: PageProps<Queries.ProjectPageQuery>) => {
    return (
        <Page
            gatsbyProps={props}
            title={props.data.mdx.frontmatter.project.title}
            categoryTitle={'Project'}
            description={props.data.mdx.frontmatter.project.summary}
            breadcrumbs={[
                {
                    text: 'Projects',
                    href: '/projects/',
                },
                {
                    text: props.data.mdx.frontmatter.project.title,
                    href: '#',
                },
            ]}
            tags={props.data.mdx?.frontmatter?.project.tags}
        >
            {props.data.mdx.wordCount.words ? (
                <Container>
                    <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
                </Container>
            ) : (
                []
            )}
        </Page>
    );
};

export const query = graphql`
    query ProjectPage($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                project {
                    title
                    summary
                    tags
                }
            }
            wordCount {
                words
            }
            body
        }
    }
`;

export default MDXPage;

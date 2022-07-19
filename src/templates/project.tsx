import Container from '@cloudscape-design/components/container';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Page from '../components/page';

const MDXPage = (props: PageProps) => {
    return (
        <Page
            gatsbyProps={props}
            title={props.data.mdx.frontmatter.project.title}
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
        >
            <Container>
                <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
            </Container>
        </Page>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                project {
                    title
                }
            }
            body
        }
    }
`;

export default MDXPage;

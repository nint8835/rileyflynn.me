import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Page from '../components/page';

const MDXPage = (props: PageProps) => {
    return (
        <Page gatsbyProps={props}>
            <Container header={<Header>{props.data.mdx.frontmatter.project.title}</Header>}>
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

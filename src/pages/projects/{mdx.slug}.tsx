import Container from '@awsui/components-react/container';
import Header from '@awsui/components-react/header';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Page from '../../components/page';

const MDXPage = (props: PageProps) => {
    return (
        <Page gatsbyProps={props}>
            <Container header={<Header>{props.data.mdx.frontmatter.title}</Header>}>
                <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
            </Container>
        </Page>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
            body
        }
    }
`;

export default MDXPage;

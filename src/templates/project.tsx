import Button, { ButtonProps } from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Page from '../components/page';

const MDXPage = (props: PageProps<Queries.ProjectPageQuery>) => {
    return (
        <Page
            gatsbyProps={props}
            title={props.data.mdx?.frontmatter?.title!}
            categoryTitle={'Project'}
            description={props.data.mdx?.frontmatter?.summary!}
            breadcrumbs={[
                {
                    text: 'Projects',
                    href: '/projects/',
                },
                {
                    text: props.data.mdx?.frontmatter?.title!,
                    href: '#',
                },
            ]}
            tags={props.data.mdx?.frontmatter?.project?.tags! as string[]}
            headerActions={[
                <SpaceBetween direction="horizontal" size="xs">
                    {props.data.mdx?.frontmatter?.links?.map((link) => (
                        <Button key={link?.url} href={link?.url!} variant={link?.variant! as ButtonProps.Variant}>
                            {link?.label}
                        </Button>
                    ))}
                </SpaceBetween>,
            ]}
        >
            {props.data.mdx?.wordCount?.words ? (
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
                title
                summary
                links {
                    label
                    variant
                    url
                }
                project {
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

import Button, { ButtonProps } from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Table from '@cloudscape-design/components/table';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Page from '../components/page';
type Position = {
    title: string;
    startMonth: string;
    endMonth: string | null;
};

const MDXPage = (props: PageProps<Queries.JobPageQuery>) => {
    return (
        <Page
            gatsbyProps={props}
            title={props.data.mdx?.frontmatter?.title!}
            categoryTitle={'Work'}
            description={props.data.mdx?.frontmatter?.summary!}
            breadcrumbs={[
                {
                    text: 'Work',
                    href: '/work/',
                },
                {
                    text: props.data.mdx?.frontmatter?.title!,
                    href: '#',
                },
            ]}
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
            <SpaceBetween size={'m'}>
                {props.data.mdx?.wordCount?.words ? (
                    <Container>
                        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
                    </Container>
                ) : (
                    []
                )}

                <Container header={<Header>Roles</Header>} disableContentPaddings>
                    <Table
                        columnDefinitions={[
                            {
                                header: 'Title',
                                id: 'title',
                                cell: (row: Position) => row.title,
                            },
                            {
                                header: 'Dates',
                                id: 'dates',
                                cell: (row: Position) => `${row.startMonth} - ${row.endMonth || 'Present'}`,
                            },
                        ]}
                        visibleColumns={['title', 'dates']}
                        items={props.data.mdx?.frontmatter?.job?.positions!}
                        variant="embedded"
                    />
                </Container>
            </SpaceBetween>
        </Page>
    );
};

export const query = graphql`
    query JobPage($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                summary
                links {
                    label
                    variant
                    url
                }
                job {
                    positions {
                        title
                        endMonth(formatString: "MMMM YYYY")
                        startMonth(formatString: "MMMM YYYY")
                    }
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

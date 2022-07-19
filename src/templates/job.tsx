import Button from '@cloudscape-design/components/button';
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

const MDXPage = (props: PageProps) => {
    return (
        <Page gatsbyProps={props}>
            <SpaceBetween size={'m'}>
                <Container
                    header={
                        <Header
                            actions={
                                <Button variant="primary" href={props.data.mdx.frontmatter.job.site}>
                                    Site
                                </Button>
                            }
                        >
                            {props.data.mdx.frontmatter.job.company}
                        </Header>
                    }
                >
                    <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
                </Container>

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
                        items={props.data.mdx.frontmatter.job.positions}
                        variant="container"
                    />
                </Container>
            </SpaceBetween>
        </Page>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                job {
                    company
                    positions {
                        title
                        endMonth(formatString: "MMMM YYYY")
                        startMonth(formatString: "MMMM YYYY")
                    }
                    site
                }
            }
            body
        }
    }
`;

export default MDXPage;

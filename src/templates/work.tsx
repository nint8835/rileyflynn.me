import Container from '@awsui/components-react/container';
import Header from '@awsui/components-react/header';
import Table from '@awsui/components-react/table';
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
            <Container header={<Header>{props.data.mdx.frontmatter.company}</Header>}>
                <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
            </Container>

            {/* <Container header={<Header>Positions</Header>}> */}
            <Table
                columnDefinitions={[
                    {
                        header: 'Position',
                        id: 'position',
                        cell: (row: Position) => row.title,
                    },
                    {
                        header: 'Dates',
                        id: 'dates',
                        cell: (row: Position) => `${row.startMonth} - ${row.endMonth || 'Present'}`,
                    },
                ]}
                visibleColumns={['position', 'dates']}
                items={props.data.mdx.frontmatter.positions}
            />
            {/* </Container> */}
        </Page>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                company
                positions {
                    title
                    endMonth(formatString: "MMMM YYYY")
                    startMonth(formatString: "MMMM YYYY")
                }
            }
            body
        }
    }
`;

export default MDXPage;

import Card from '@cloudscape-design/components/cards';
import Link from '@cloudscape-design/components/link';
import { graphql, navigate, PageProps, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Page from '../../components/page';

const WorkPage = (props: PageProps) => {
    const jobs: Queries.JobsListPageQuery = useStaticQuery(graphql`
        query JobsListPage {
            allMdx(
                sort: { fields: frontmatter___job___positions___startMonth, order: DESC }
                filter: { frontmatter: { type: { eq: "job" } } }
            ) {
                nodes {
                    slug
                    frontmatter {
                        title
                        summary
                        previewImage {
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                            }
                        }
                        job {
                            positions {
                                title
                                endMonth(formatString: "MMMM YYYY")
                                startMonth(formatString: "MMMM YYYY")
                            }
                        }
                    }
                }
            }
        }
    `);
    return (
        <Page gatsbyProps={props} title={'Work'}>
            <Card
                cardDefinition={{
                    header: (node) => (
                        <Link
                            fontSize="heading-m"
                            href={`/${node.slug}`}
                            onFollow={(e) => {
                                e.preventDefault();
                                navigate(`/${node.slug}`);
                            }}
                        >
                            {node.frontmatter.title}
                        </Link>
                    ),
                    sections: [
                        {
                            content: ({
                                frontmatter: {
                                    job: { positions },
                                },
                            }) => (
                                <i>{`${positions[positions.length - 1].startMonth} - ${
                                    positions[0].endMonth || 'Present'
                                }`}</i>
                            ),
                        },
                        {
                            content: (node) => node.frontmatter.summary || 'No summary provided.',
                        },
                        {
                            header: 'Roles',
                            content: (node) => (
                                <i>{node.frontmatter.job.positions.map((position) => position.title).join(', ')}</i>
                            ),
                        },
                        {
                            content: (node) => (
                                <GatsbyImage
                                    image={getImage(node.frontmatter.previewImage)!}
                                    alt={node.frontmatter.title}
                                />
                            ),
                        },
                    ],
                }}
                items={jobs.allMdx.nodes}
                cardsPerRow={[
                    {
                        cards: 1,
                    },
                    {
                        minWidth: 768,
                        cards: 2,
                    },
                ]}
                variant="full-page"
            />
        </Page>
    );
};

export default WorkPage;

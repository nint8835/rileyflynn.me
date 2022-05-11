import Card from '@awsui/components-react/cards';
import Link from '@awsui/components-react/link';
import { graphql, navigate, PageProps, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Page from '../../components/page';

const ProjectsPage = (props: PageProps) => {
    const jobs = useStaticQuery(graphql`
        query {
            allMdx(
                sort: { fields: frontmatter___job___positions___startMonth, order: DESC }
                filter: { frontmatter: { type: { eq: "job" } } }
            ) {
                nodes {
                    slug
                    frontmatter {
                        job {
                            company
                            summary
                            previewImage {
                                childImageSharp {
                                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                                }
                            }
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
        <Page gatsbyProps={props}>
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
                            {node.frontmatter.job.company}
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
                            content: (node) => node.frontmatter.job.summary || 'No summary provided.',
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
                                    image={getImage(node.frontmatter.job.previewImage)!}
                                    alt={node.frontmatter.job.company}
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

export default ProjectsPage;

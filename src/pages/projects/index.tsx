import Badge from '@cloudscape-design/components/badge';
import Card from '@cloudscape-design/components/cards';
import Link from '@cloudscape-design/components/link';
import SpaceBetween from '@cloudscape-design/components/space-between';
import { graphql, navigate, PageProps, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Page from '../../components/page';

const ProjectsPage = (props: PageProps) => {
    const projects: Queries.ProjectsListPageQuery = useStaticQuery(graphql`
        query ProjectsListPage {
            allMdx(
                sort: { fields: frontmatter___project___title, order: ASC }
                filter: { frontmatter: { type: { eq: "project" } } }
            ) {
                nodes {
                    slug
                    frontmatter {
                        project {
                            title
                            summary
                            tags
                            previewImage {
                                childImageSharp {
                                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    return (
        <Page gatsbyProps={props} title={'Projects'}>
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
                            {node.frontmatter.project.title}
                        </Link>
                    ),
                    sections: [
                        {
                            content: (node) => (
                                <SpaceBetween size="xs" direction="horizontal">
                                    {(node.frontmatter.project.tags || []).map((label) => (
                                        <Badge>{label}</Badge>
                                    ))}
                                </SpaceBetween>
                            ),
                        },
                        {
                            content: (node) => node.frontmatter.project.summary || 'No summary provided.',
                        },
                        {
                            content: (node) => (
                                <GatsbyImage
                                    image={getImage(node.frontmatter.project.previewImage)!}
                                    alt={node.frontmatter.project.title}
                                />
                            ),
                        },
                    ],
                }}
                items={projects.allMdx.nodes}
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

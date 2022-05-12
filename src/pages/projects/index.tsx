import Badge from '@awsui/components-react/badge';
import Card from '@awsui/components-react/cards';
import Link from '@awsui/components-react/link';
import SpaceBetween from '@awsui/components-react/space-between';
import { graphql, navigate, PageProps, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Page from '../../components/page';

const ProjectsPage = (props: PageProps) => {
    const projects = useStaticQuery(graphql`
        query {
            allMdx(
                sort: { fields: frontmatter___job___positions___startMonth, order: DESC }
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

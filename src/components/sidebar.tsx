import SideNavigation, { SideNavigationProps } from '@awsui/components-react/side-navigation';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import React from 'react';

type SidebarProps = {
    path: string;
};

const Sidebar = ({ path }: SidebarProps) => {
    const data = useStaticQuery(graphql`
        query GetProjectsAndWork {
            projects: allMdx(
                sort: { fields: frontmatter___project___title, order: ASC }
                filter: { frontmatter: { type: { eq: "project" } } }
            ) {
                nodes {
                    frontmatter {
                        project {
                            title
                        }
                    }
                    slug
                }
            }

            work: allMdx(
                sort: { fields: frontmatter___job___positions___startMonth, order: DESC }
                filter: { frontmatter: { type: { eq: "job" } } }
            ) {
                nodes {
                    frontmatter {
                        job {
                            company
                        }
                    }
                    slug
                }
            }
        }
    `);

    const projects: SideNavigationProps.Item[] = data.projects.nodes.map((project) => ({
        type: 'link',
        text: project.frontmatter.project.title,
        href: `/${project.slug}`,
    }));

    const companies: SideNavigationProps.Item[] = data.work.nodes.map((company) => ({
        type: 'link',
        text: company.frontmatter.job.company,
        href: `/${company.slug}`,
    }));

    return (
        <SideNavigation
            activeHref={path}
            items={[
                {
                    type: 'link',
                    text: 'Home',
                    href: '/',
                },
                {
                    type: 'expandable-link-group',
                    text: 'Projects',
                    href: '/projects/',
                    items: projects,
                },
                {
                    type: 'expandable-link-group',
                    text: 'Work',
                    href: '/work/',
                    items: companies,
                },
            ]}
            onFollow={(e) => {
                e.preventDefault();
                navigate(e.detail.href);
            }}
        />
    );
};

export default Sidebar;

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
                filter: { fileAbsolutePath: { glob: "**/projects/*.mdx" } }
                sort: { fields: frontmatter___title, order: ASC }
            ) {
                nodes {
                    frontmatter {
                        title
                    }
                    slug
                }
            }

            work: allMdx(
                filter: { fileAbsolutePath: { glob: "**/work/*.mdx" } }
                sort: { fields: frontmatter___positions___startMonth, order: DESC }
            ) {
                nodes {
                    frontmatter {
                        company
                    }
                    slug
                }
            }
        }
    `);

    const projects: SideNavigationProps.Item[] = data.projects.nodes.map((project) => ({
        type: 'link',
        text: project.frontmatter.title,
        href: `/${project.slug}`,
    }));

    const companies: SideNavigationProps.Item[] = data.work.nodes.map((company) => ({
        type: 'link',
        text: company.frontmatter.company,
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

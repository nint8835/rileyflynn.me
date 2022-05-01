import SideNavigation, { SideNavigationProps } from '@awsui/components-react/side-navigation';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import React from 'react';

type SidebarProps = {
    path: string;
};

const Sidebar = ({ path }: SidebarProps) => {
    const projectData = useStaticQuery(graphql`
        query GetProjects {
            allMdx(filter: { fileAbsolutePath: { glob: "**/projects/*.mdx" } }) {
                nodes {
                    frontmatter {
                        title
                    }
                    slug
                }
            }
        }
    `);

    const projects: SideNavigationProps.Item[] = projectData.allMdx.nodes.map((project) => ({
        type: 'link',
        text: project.frontmatter.title,
        href: `/projects/${project.slug}/`,
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
                    type: 'link',
                    text: 'Work',
                    href: '/work/',
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

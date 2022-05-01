import SideNavigation from '@awsui/components-react/side-navigation';
import { navigate } from 'gatsby';
import React, { useEffect } from 'react';

type SidebarProps = {
    path: string;
};

const Sidebar = ({ path }: SidebarProps) => {
    useEffect(() => {
        console.log(path);
    }, [path]);

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
                    href: '/projects',
                    items: [
                        {
                            type: 'link',
                            text: 'Borik',
                            href: '/projects/borik',
                        },
                    ],
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

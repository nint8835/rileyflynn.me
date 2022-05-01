import AppLayout from '@awsui/components-react/app-layout';
import Input from '@awsui/components-react/input';
import SideNavigation from '@awsui/components-react/side-navigation';
import TopNavigation from '@awsui/components-react/top-navigation';
import '@awsui/global-styles/index.css';
import * as React from 'react';

const IndexPage = () => {
    return (
        <>
            <TopNavigation
                identity={{
                    title: 'rileyflynn.me',
                    href: '/',
                }}
                i18nStrings={{}}
                search={<Input type="search" inputMode="search" placeholder="Search for projects, work, and more" />}
                utilities={[
                    {
                        type: 'menu-dropdown',
                        text: 'Newfoundland',
                        items: [
                            {
                                id: 'ca-east-1',
                                text: 'ca-east-1 (Newfoundland)',
                            },
                        ],
                    },
                    {
                        type: 'menu-dropdown',
                        text: 'Riley Flynn',
                        badge: false,
                        items: [
                            {
                                id: 'links',
                                text: 'Links',
                                items: [
                                    {
                                        id: 'twitter',
                                        text: 'Twitter',
                                        href: 'https://twitter.com/bootlegjohn',
                                        iconName: 'user-profile',
                                    },
                                    {
                                        id: 'github',
                                        text: 'GitHub',
                                        href: 'https://github.com/nint8835',
                                        iconName: 'edit',
                                    },
                                ],
                            },
                        ],
                    },
                ]}
            />
            <AppLayout
                headerSelector=".awsui-context-top-navigation"
                toolsHide={true}
                navigation={
                    <SideNavigation
                        activeHref="/"
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
                                href: '/work',
                            },
                        ]}
                    />
                }
            />
        </>
    );
};

export default IndexPage;

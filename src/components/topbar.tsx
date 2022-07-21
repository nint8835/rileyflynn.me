import TopNavigation from '@cloudscape-design/components/top-navigation';
import React from 'react';
import Search from './search';

const TopBar = () => {
    return (
        <div id="top-navigation" style={{ position: 'sticky', top: 0, zIndex: 1002 }}>
            <TopNavigation
                identity={{
                    title: 'rileyflynn.me',
                    href: '/',
                }}
                i18nStrings={{ overflowMenuTitleText: '', overflowMenuTriggerText: '' }}
                search={<Search />}
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
        </div>
    );
};

export default TopBar;

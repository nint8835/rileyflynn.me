import AppLayout from '@cloudscape-design/components/app-layout';
import BreadcrumbGroup, { BreadcrumbGroupProps } from '@cloudscape-design/components/breadcrumb-group';
import Header from '@cloudscape-design/components/header';
import '@cloudscape-design/global-styles/index.css';
import type { PageProps as GatsbyPageProps } from 'gatsby';
import { navigate } from 'gatsby';
import React, { ReactNode } from 'react';
import Sidebar from './sidebar';
import TopBar from './topbar';

type PageProps = {
    gatsbyProps: GatsbyPageProps;
    children: ReactNode;
    title: string;
    description?: string;
    breadcrumbs?: BreadcrumbGroupProps.Item[];
    headerActions?: ReactNode[];
};

const Page = ({ children, gatsbyProps, title, description, breadcrumbs, headerActions }: PageProps) => {
    return (
        <>
            <TopBar />
            <AppLayout
                headerSelector="#top-navigation"
                toolsHide={true}
                contentHeader={
                    <Header variant="h1" actions={headerActions} description={description}>
                        {title}
                    </Header>
                }
                breadcrumbs={
                    <BreadcrumbGroup
                        items={breadcrumbs || []}
                        onClick={(event) => {
                            event.preventDefault();
                            navigate(event.detail.item.href);
                        }}
                    />
                }
                navigation={<Sidebar path={gatsbyProps.path} />}
                content={children}
            />
        </>
    );
};

export default Page;

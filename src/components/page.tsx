import AppLayout from '@cloudscape-design/components/app-layout';
import Badge from '@cloudscape-design/components/badge';
import BreadcrumbGroup, { BreadcrumbGroupProps } from '@cloudscape-design/components/breadcrumb-group';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import '@cloudscape-design/global-styles/index.css';
import type { PageProps as GatsbyPageProps } from 'gatsby';
import { navigate } from 'gatsby';
import React, { ReactNode } from 'react';
import Meta from './meta';
import Sidebar from './sidebar';
import TopBar from './topbar';

type PageProps = {
    gatsbyProps: GatsbyPageProps;
    children: ReactNode;
    title: string;
    categoryTitle?: string;
    description?: string;
    breadcrumbs?: BreadcrumbGroupProps.Item[];
    headerActions?: ReactNode[];
    tags?: string[];
};

const Page = ({
    children,
    gatsbyProps,
    title,
    categoryTitle,
    description,
    breadcrumbs,
    headerActions,
    tags,
}: PageProps) => {
    return (
        <>
            <Meta title={title} categoryTitle={categoryTitle} description={description} />
            <TopBar />
            <AppLayout
                headerSelector="#top-navigation"
                toolsHide={true}
                contentHeader={
                    <Header
                        variant="h1"
                        actions={headerActions}
                        description={description}
                        info={
                            tags && (
                                <SpaceBetween size="xs" direction="horizontal">
                                    {tags.map((tag) => (
                                        <Badge>{tag}</Badge>
                                    ))}
                                </SpaceBetween>
                            )
                        }
                    >
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

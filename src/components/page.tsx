import AppLayout from '@cloudscape-design/components/app-layout';
import '@cloudscape-design/global-styles/index.css';
import type { PageProps as GatsbyPageProps } from 'gatsby';
import React, { ReactNode } from 'react';
import Sidebar from './sidebar';
import TopBar from './topbar';

type PageProps = {
    gatsbyProps: GatsbyPageProps;
    children: ReactNode;
};

const Page = ({ children, gatsbyProps }: PageProps) => {
    return (
        <>
            <TopBar />
            <AppLayout
                headerSelector="#top-navigation"
                toolsHide={true}
                navigation={<Sidebar path={gatsbyProps.path} />}
                content={children}
            />
        </>
    );
};

export default Page;

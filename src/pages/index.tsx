import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import '@cloudscape-design/global-styles/index.css';
import { PageProps } from 'gatsby';
import * as React from 'react';
import Page from '../components/page';

const IndexPage = (props: PageProps) => {
    return (
        <Page gatsbyProps={props}>
            <Container header={<Header>Test</Header>}>Hello world</Container>
        </Page>
    );
};

export default IndexPage;

import Container from '@awsui/components-react/container';
import Header from '@awsui/components-react/header';
import '@awsui/global-styles/index.css';
import { PageProps } from 'gatsby';
import * as React from 'react';
import Page from '../components/page';

const WorkPage = (props: PageProps) => {
    return (
        <Page gatsbyProps={props}>
            <Container header={<Header>Work</Header>}>This is a placeholder - jobs should go here</Container>
        </Page>
    );
};

export default WorkPage;

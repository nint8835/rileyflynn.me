import Container from '@awsui/components-react/container';
import Header from '@awsui/components-react/header';
import { PageProps } from 'gatsby';
import React from 'react';
import Page from '../../components/page';

const ProjectsPage = (props: PageProps) => {
    return (
        <Page gatsbyProps={props}>
            <Container header={<Header>Work</Header>}>Placeholder</Container>
        </Page>
    );
};

export default ProjectsPage;

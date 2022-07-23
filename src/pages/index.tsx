import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import '@cloudscape-design/global-styles/index.css';
import { Link, PageProps } from 'gatsby';
import * as React from 'react';
import Page from '../components/page';

const internetLinks: {
    textBefore?: string;
    linkText: string;
    url: string;
}[] = [
    {
        linkText: 'GitHub',
        url: 'https://github.com/nint8835',
    },
    {
        linkText: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nint8835/',
    },
    {
        linkText: 'Twitter',
        url: 'https://twitter.com/bootlegjohn',
    },
    {
        textBefore: 'Working on projects with friends at ',
        linkText: 'fogo.sh',
        url: 'https://fogo.sh/',
    },
    {
        textBefore: 'Writing about my homelab and other misc. projects at ',
        linkText: 'bootleg.technology',
        url: 'https://bootleg.technology/',
    },
];

const IndexPage = (props: PageProps) => {
    return (
        <Page
            gatsbyProps={props}
            title={"Hi, I'm Riley!"}
            description={"I'm a Cloud Architect and Software Developer from St. John's, Newfoundland."}
        >
            <Container header={<Header>Other places you can find me on the internet:</Header>}>
                <ul>
                    {internetLinks.map((link) => (
                        <li>
                            {link.textBefore}
                            <Link to={link.url}>{link.linkText}</Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </Page>
    );
};

export default IndexPage;

import { useLocation } from '@reach/router';
import React from 'react';
import Helmet from 'react-helmet';

type MetaProps = {
    title: string;
    categoryTitle?: string;
    description?: string;
};

const Meta = ({ title, categoryTitle, description }: MetaProps) => {
    const titleString = categoryTitle ? `Riley Flynn - ${categoryTitle} - ${title}` : `Riley Flynn - ${title}`;
    const location = useLocation();
    return (
        <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="og:type" content="website" />
            <meta name="og:site_name" content="Riley Flynn" />
            <meta name="og:url" content={`https://rileyflynn.com${location.pathname}`} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content="@bootlegjohn" />

            <title>{titleString}</title>
            <meta name="og:title" content={titleString} />
            {description
                ? [
                      <meta name="description" content={description} />,
                      <meta property="og:description" content={description} />,
                      <meta name="twitter:description" content={description} />,
                  ]
                : []}

            {/* TODO: Add opengraph / twitter card images */}
        </Helmet>
    );
};

export default Meta;

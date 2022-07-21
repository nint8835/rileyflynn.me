import Autosuggest, { AutosuggestProps } from '@cloudscape-design/components/autosuggest';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { useFlexSearch } from 'react-use-flexsearch';

const Search = () => {
    const searchData = useStaticQuery<Queries.SearchDataQuery>(graphql`
        query SearchData {
            localSearchPages {
                index
                store
            }
        }
    `);
    const [query, setQuery] = useState('');
    const results = useFlexSearch(query, searchData.localSearchPages.index, searchData.localSearchPages.store);
    const projectSuggestions = results
        .filter((result) => result.type === 'project')
        .map(
            (result): AutosuggestProps.Option => ({
                value: result.path,
                label: result.title,
                description: result.summary,
                iconName: 'folder',
            }),
        );
    const jobSuggestions = results
        .filter((result) => result.type === 'job')
        .map(
            (result): AutosuggestProps.Option => ({
                value: result.path,
                label: result.title,
                description: result.summary,
                iconName: 'envelope',
            }),
        );

    const optionsList: (AutosuggestProps.Option | AutosuggestProps.OptionGroup)[] = [];
    if (projectSuggestions.length > 0) {
        optionsList.push({
            label: 'Projects',
            options: projectSuggestions,
        });
    }
    if (jobSuggestions.length > 0) {
        optionsList.push({
            label: 'Work',
            options: jobSuggestions,
        });
    }

    return (
        <Autosuggest
            onChange={({ detail }) => setQuery(detail.value)}
            onSelect={(e) => {
                navigate(e.detail.value);
            }}
            value={query}
            options={optionsList}
            enteredTextLabel={(value) => value}
            placeholder="Search for projects, work, and more"
            empty="No matches found"
            filteringType="manual"
        />
    );
};

export default Search;

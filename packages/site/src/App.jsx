import React, { useEffect, useState } from 'react';
import { Heading, Flex } from '@chakra-ui/core';

import { SearchForm } from './components/SearchForm';

const App = ({ resources }) => {
    const [searches, setSearches] = useState([]);
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        const getInitialSearches = async () => {
            const searches = await resources.initialize();
            setSearches(searches);
        };

        getInitialSearches();
    }, [resources]);

    const onFeedSearch = async (searchText) => {
        // TODO: Combine the two setters into a single dispatch
        const feed = await resources.api.getFeed(searchText);
        setFeed(feed);

        if (!searches.includes(searchText)) {
            setSearches([...searches, searchText]);
        }
    };

    const Searches = searches.map((s) => <h1>{s}</h1>);
    const Feed = feed.map((f) => <p>{f.title}</p>);

    return (
        <Flex m={10} flexDirection='column'>
            <SearchForm onSubmit={onFeedSearch} />

            <Heading>Recent Searches</Heading>
            {Searches.length > 0 ? Searches : 'No previous searches.'}
            {Feed}
        </Flex>
    );
};

export default App;

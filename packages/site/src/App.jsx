import React, { useEffect, useState } from 'react';
import { Heading, Flex, Box } from '@chakra-ui/core';

import { SearchForm } from './components';
import { Post } from './components';

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

    const Searches = searches.map((s) => <h1 key={s}>{s}</h1>);
    const Feed = feed.map((f) => <Post key={f.guid} post={f}></Post>);

    return (
        <Flex m={10} flexDirection='column'>
            <SearchForm onSubmit={onFeedSearch} />

            <Heading mb={3}>Recent Searches</Heading>
            <Box mb={5}>{Searches.length > 0 ? Searches : 'No previous searches.'}</Box>
            <Box mb={5}>
                {Feed.length > 0 ? Feed : 'Search for a Medium username or publication to see their posts.'}
            </Box>
        </Flex>
    );
};

export default App;

import React, { useEffect, useState } from 'react';
import { Heading, Box, useToast } from '@chakra-ui/core';

import { SearchForm, PostList, SearchList, Layout } from './components';

const App = ({ resources }) => {
    const [searches, setSearches] = useState([]);
    const [feed, setFeed] = useState([]);
    const toast = useToast();

    useEffect(() => {
        const getInitialSearches = async () => {
            const searches = await resources.initialize();
            setSearches(searches);
        };

        getInitialSearches();
    }, [resources]);

    const onFeedSearch = async (searchText) => {
        // TODO: Combine the two setters into a single dispatch
        try {
            const feed = await resources.api.getFeed(searchText);

            setFeed(feed);
            setSearches([...searches, searchText]);

            // We _can_ ensure we don't include duplicates in the
            // list of recent searches, but should we?
            // if (!searches.includes(searchText)) {
            //     setSearches([...searches, searchText]);
            // }
        } catch (e) {
            console.error(e);
            toast({
                title: 'The entered username or publication does not exist.',
                description: 'Please enter a valid Medium username (@Medium) or publication (the-atlantic).',
                status: 'error',
                duration: 5000,
                position: 'top-right',
                isClosable: true,
            });
            setFeed([]);
        }
    };

    return (
        <Layout m={10} flexDirection='column'>
            <SearchForm onSubmit={onFeedSearch} />

            <Heading mb={3}>Recent Searches</Heading>
            <Box mb={10}>
                <SearchList searches={searches} />
            </Box>

            <Heading mb={3}>{feed.length > 0 ? 'Feed' : ''}</Heading>
            <Box mb={5}>
                <PostList posts={feed} />
            </Box>
        </Layout>
    );
};

export default App;

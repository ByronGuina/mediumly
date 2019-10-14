import React, { useEffect, useState } from 'react';
import { Heading, Flex, Box, useToast } from '@chakra-ui/core';

import { SearchForm } from './components';
import { PostList } from './components';

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

            if (!searches.includes(searchText)) {
                setSearches([...searches, searchText]);
            }
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
        }
    };

    const Searches = searches.map((s) => <h1 key={s}>{s}</h1>);

    return (
        <Flex m={10} flexDirection='column'>
            <SearchForm onSubmit={onFeedSearch} />

            <Heading mb={3}>Recent Searches</Heading>
            <Box mb={10}>{Searches.length > 0 ? Searches : 'No previous searches.'}</Box>

            <Heading mb={3}>{feed.length > 0 ? 'Feed' : ''}</Heading>
            <Box mb={5}>
                {feed.length > 0 ? (
                    <PostList posts={feed} />
                ) : (
                    <Heading size='m'>Search for a Medium username or publication to see their posts.</Heading>
                )}
            </Box>
        </Flex>
    );
};

export default App;

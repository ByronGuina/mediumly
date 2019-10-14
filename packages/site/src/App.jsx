import React, { useEffect, useReducer } from 'react';
import { Heading, Box, useToast } from '@chakra-ui/core';

import { SearchForm, PostList, SearchList, Layout } from './components';
import { reducer, initialState, actions } from './state';

const App = ({ resources }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const toast = useToast();

    useEffect(() => {
        const getInitialSearches = async () => {
            const searches = await resources.initialize();

            dispatch({ type: actions.updateSearches, payload: searches });
        };

        getInitialSearches();
    }, [resources]);

    const onFeedSearch = async (searchText) => {
        // TODO: Combine the two setters into a single dispatch
        try {
            const feed = await resources.api.getFeed(searchText);

            dispatch({ type: actions.updateAll, payload: { searches: searchText, feed: feed } });

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

            dispatch({ type: actions.updateFeed, payload: [] });
        }
    };

    return (
        <Layout m={10} flexDirection='column'>
            <SearchForm onSubmit={onFeedSearch} />

            <Heading mb={3}>Recent Searches</Heading>
            <Box mb={10}>
                <SearchList searches={state.searches} />
            </Box>

            <Heading mb={3}>{state.feed.length > 0 ? 'Feed' : ''}</Heading>
            <Box mb={5}>
                <PostList posts={state.feed} />
            </Box>
        </Layout>
    );
};

export default App;

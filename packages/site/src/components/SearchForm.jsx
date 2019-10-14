import React, { useState } from 'react';
import { Input, Button, Flex } from '@chakra-ui/core';

export const SearchForm = ({ onSubmit }) => {
    const [searchText, setSearchText] = useState('');

    const onSearch = (e) => {
        e.preventDefault();

        onSubmit(searchText);
    };

    return (
        <form onSubmit={onSearch}>
            <Flex mb={10}>
                <Input
                    placeholder='@Medium, The-Atlantic'
                    type='text'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    mr={5}
                    width='75%'
                />
                <Button variantColor='green' onClick={onSearch}>
                    Search Feeds!
                </Button>
            </Flex>
        </form>
    );
};

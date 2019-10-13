import React, { useState } from 'react';
import { Input, Button } from '@chakra-ui/core';

export const SearchForm = ({ onSubmit }) => {
    const [searchText, setSearchText] = useState('');

    const onSearch = (e) => {
        e.preventDefault();

        onSubmit(searchText);
    };

    return (
        <form onSubmit={onSearch}>
            <Input
                placeholder='@Medium'
                type='text'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                mb={5}
                width='50%'
            />
            <Button mb={10} onClick={onSearch}>
                Search Feeds!
            </Button>
        </form>
    );
};

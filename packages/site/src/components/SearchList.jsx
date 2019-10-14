import React from 'react';
import styled from '@emotion/styled';
import { Text } from '@chakra-ui/core';

import { reverse } from '../functional';

export const SearchList = ({ onItemClick, searches }) => {
    const Searches = reverse(
        searches.map((s, i) => (
            <RecentSearch size='s' mb={1} onClick={() => onItemClick(s)} key={`${s}-${i}`}>
                {s}
            </RecentSearch>
        )),
    );

    return <>{Searches.length > 0 ? Searches : 'No previous searches.'}</>;
};

const RecentSearch = styled(Text)`
    cursor: pointer;

    transition: 0.15s ease-out all;

    &:hover {
        color: green;
    }
`;

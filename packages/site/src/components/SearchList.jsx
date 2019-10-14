import React from 'react';
import { reverse } from '../functional';

export const SearchList = ({ searches }) => {
    const Searches = reverse(searches.map((s, i) => <h1 key={`${s}-${i}`}>{s}</h1>));

    return <>{Searches.length > 0 ? Searches : 'No previous searches.'}</>;
};

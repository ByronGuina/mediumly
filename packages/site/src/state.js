import { takeLastFive } from './functional';

export const initialState = {
    searches: [],
    feed: [],
    isSearching: false,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.updateSearches:
            return {
                ...state,
                searches: takeLastFive([...action.payload]),
            };
        case actions.updateFeed:
            return {
                ...state,
                isSearching: false,
                feed: action.payload,
            };
        case actions.updateAll:
            return {
                ...state,
                isSearching: false,
                feed: action.payload.feed,
                searches: takeLastFive([...state.searches, action.payload.searches]),
            };
        case actions.setSearching:
            return {
                ...state,
                isSearching: action.payload,
            };
        default:
            return state;
    }
};

export const actions = {
    updateSearches: 'update searches',
    updateFeed: 'update feed',
    updateAll: 'update searches and feed',
    setSearching: 'set searching',
};

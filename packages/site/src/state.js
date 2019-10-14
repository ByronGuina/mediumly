import { takeLastFive } from './functional';

export const initialState = {
    searches: [],
    feed: [],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'update searches':
            return {
                ...state,
                searches: takeLastFive([...action.payload]),
            };
        case 'update feed':
            return {
                ...state,
                feed: action.payload,
            };
        case 'update searches and feed':
            return {
                ...state,
                feed: action.payload.feed,
                searches: takeLastFive([...state.searches, action.payload.searches]),
            };
        default:
            return state;
    }
};

export const actions = {
    updateSearches: 'update searches',
    updateFeed: 'update feed',
    updateAll: 'update searches and feed',
};

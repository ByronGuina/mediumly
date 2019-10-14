export const initialState = {
    searches: [],
    feed: [],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'update searches':
            // TODO:
            // Ensure we only include the last 5 searches
            return {
                ...state,
                searches: getLatestSearches([...state.searches, ...action.payload]),
            };
        case 'update feed':
            return {
                ...state,
                feed: action.payload,
            };
        case 'update searches and feed':
            // TODO:
            // Ensure we only include the last 5 searches
            return {
                feed: action.payload.feed,
                searches: getLatestSearches([...state.searches, action.payload.searches]),
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

const getLatestSearches = (arr) => {
    return arr.slice(-5);
};

export const initialState = {
    searches: [],
    feed: [],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'update searches':
            return {
                ...state,
                searches: takeLastFive([...state.searches, ...action.payload]),
            };
        case 'update feed':
            return {
                ...state,
                feed: action.payload,
            };
        case 'update searches and feed':
            return {
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

const takeLastFive = (arr) => {
    return arr.slice(-5);
};

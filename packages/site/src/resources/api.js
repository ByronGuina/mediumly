const makeRequest = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

const getFeed = async (feedName) => {
    return await makeRequest(`http://localhost:4500/feed/${feedName}`);
};

const getSearches = async () => {
    return await makeRequest('http://localhost:4500/search');
};

export const api = {
    getFeed,
    getSearches,
};

const makeRequest = async (url) => {
    const response = await fetch(url);
    if (response.status >= 400 && response.status < 600) {
        throw new Error('Bad response from server');
    }

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

import fetch from 'isomorphic-fetch';

const xmlToJsonApi = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/';

export const getFeedAsJson = async (query) => {
    const response = await fetch(`${xmlToJsonApi}${query}`);
    return await response.json();
};

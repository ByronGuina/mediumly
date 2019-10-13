import fetch from 'isomorphic-fetch';

// We use a third-party tool to handle converting an RSS-feed to JSON
// Some interesting conversation can come from this, e.g., what happens
// if this service goes down? How much slower does this make the request
// to our backend?
const xmlToJsonApi = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/';

export const getFeedAsJson = async (query) => {
    const response = await fetch(`${xmlToJsonApi}${query}`);
    return await response.json();
};

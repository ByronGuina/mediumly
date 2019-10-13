// This is the entrypoint into the data/DB service
const searches = [];
const recentSearchLength = 5; // Requirements state to use the last 5 queries

const addSearch = (query) => searches.push(query);
const getRecentSearches = () => searches.slice(-recentSearchLength);

export const db = { addSearch, getRecentSearches };

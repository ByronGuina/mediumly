// TODO: This will return the up-to-date latest search results
import { Router } from './router';

export const search = Router();

search.get('/', (req, res) => {
    const { search: searchContext } = req.context.db;
    const recentSearches = searchContext.getRecentSearches();

    return res.send(recentSearches);
});

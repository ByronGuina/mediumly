// TODO: This will return the up-to-date latest search results
import { Router } from './router';

export const search = Router();

search.get('/', (req, res) => {
    const recentSearches = req.context.db.getRecentSearches();

    return res.send(recentSearches);
});

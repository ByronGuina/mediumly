import { Router } from './router';
import { getFeedAsJson } from './utilities/getFeedAsJson';

export const feed = Router();

// TODO: Error Handling
// Update the search context/db with the user's query
feed.get('/:feedName', async (req, res) => {
    try {
        const { feedName } = req.params;
        const feed = await getFeedAsJson(feedName);
        req.context.db.search.addSearch(feedName);
        return res.send(feed.items);
    } catch (e) {
        return res.sendStatus(500);
    }
});

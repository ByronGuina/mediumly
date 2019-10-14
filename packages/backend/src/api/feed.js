import { Router } from './router';
import { getFeedAsJson } from './utilities/getFeedAsJson';
import { FeedDoesNotExistError } from './utilities/feedDoesNotExistError';
import { wrapAsync } from './utilities/wrapAsync';

export const feed = Router();

// We use a generic `wrapAsync` function to propagate errors
// to a generic error handler middleware.
feed.get(
    '/:feedName',
    wrapAsync(async (req, res) => {
        const { feedName } = req.params;
        const feed = await getFeedAsJson(feedName);

        // This is how the third-party API handles errors
        if (feed.status === 'error') {
            throw new FeedDoesNotExistError('The entered username or publication does not exist.');
        }

        req.context.db.search.addSearch(feedName);
        return res.send(feed.items);
    }),
);

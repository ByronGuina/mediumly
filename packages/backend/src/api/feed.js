import { Router } from './router';
import { getFeedAsJson } from './utilities/getFeedAsJson';

// TODO: Return data from the Medium API depending on what the user entered
const feed = Router();

feed.get('/:feedName', async (req, res) => {
    const { feedName } = req.params;
    const feed = await getFeedAsJson(feedName);
    return res.send(feed);
});

export default feed;

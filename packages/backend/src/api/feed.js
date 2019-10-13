import { Router } from './router';
import { getFeedAsJson } from './utilities/getFeedAsJson';

// TODO: Return data from the Medium API depending on what the user entered
const feed = Router();

feed.get('/', async (_, res) => {
    const feed = await getFeedAsJson('the-atlantic');
    console.log(feed);
    return res.send(feed);
});

export default feed;

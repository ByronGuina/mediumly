import express from 'express';
import { getResources } from './resources';

const app = express();

// We abstract the configuration of the server so we can easily
// swap out implementations without the app needing to know the
// implementation details.
const resources = getResources();

app.use(resources.context);
app.use(resources.json());

app.use('/feed', resources.api.feed);
app.use('/search', resources.api.search);

app.listen(3000, () => console.log('⚡ Listening on Port 3000.'));

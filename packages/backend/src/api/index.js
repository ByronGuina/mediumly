// This is the entrypoint into the API service. There shouldn't
// be any implementation details exposed to consumers of the api
// layer. The only expected contract/interface is that the export
// endpoints exist.
import feed from './feed';

export default {
    feed,
};

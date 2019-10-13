import { api } from './api';

export const initialize = async () => {
    return api.getSearches();
};

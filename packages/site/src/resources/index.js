import { initialize } from './initialize';
import { api } from './api';

export const getResources = () => {
    return {
        initialize,
        api,
    };
};

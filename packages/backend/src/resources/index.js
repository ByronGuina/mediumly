import { json } from 'express';
import cors from 'cors';
import { context, feedNameDoesNotExistErrorHandler } from './middleware';
import { api } from '../api';

export const getResources = () => {
    return {
        json,
        cors,
        api,
        context,
        errorHandling: {
            invalidFeed: feedNameDoesNotExistErrorHandler,
        },
    };
};

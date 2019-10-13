import { json } from 'express';
import { context } from './middleware';
import api from '../api';

export const getResources = () => {
    return {
        json,
        api,
        context,
    };
};

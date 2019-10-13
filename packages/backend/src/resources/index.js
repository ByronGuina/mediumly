import { json } from 'express';
import api from '../api';

export const getResources = () => {
    return {
        json,
        api,
    };
};

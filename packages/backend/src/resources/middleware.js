import { db } from '../data';

export const context = (req, _, next) => {
    req.context = {
        db,
    };
    next();
};

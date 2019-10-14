import { db } from '../data';
import { FeedDoesNotExistError } from '../api/utilities/feedDoesNotExistError';

export const context = (req, _, next) => {
    req.context = {
        db,
    };
    next();
};

export const feedNameDoesNotExistErrorHandler = (err, _, res, next) => {
    if (err instanceof FeedDoesNotExistError) {
        return res.status(400).json({
            type: 'FeedDoesNotExistError',
            message: err.message,
        });
    }

    next(error);
};

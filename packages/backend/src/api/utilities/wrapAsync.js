export const wrapAsync = (fn) => {
    return (req, res, next) => {
        // Make sure to `.catch()` any errors and pass them along to the `next()`
        // middleware in the chain, in this case the error handler.
        // Ref: https://thecodebarbarian.com/80-20-guide-to-express-error-handling
        fn(req, res, next).catch(next);
    };
};

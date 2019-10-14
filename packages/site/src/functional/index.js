export const takeLastFive = (arr) => {
    return arr.slice(-5);
};

export const reverse = (arr) => {
    return arr.reverse();
};

export const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

export const takeLastFive = (arr) => {
    // console.log('taking last 5', arr);
    return arr.slice(-5);
};

export const reverse = (arr) => {
    // console.log('reversing', arr);
    return arr.reverse();
};

export const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

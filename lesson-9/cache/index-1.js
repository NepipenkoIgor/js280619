console.log('JS')

function getData(id) {
    return Math.random();
}

function makeCache(fn) {
    let cache = new Map();
    return function (...args) {
        f:for (let [cachedArgs] of cache.entries()) {
            console.log(cachedArgs, args)
            for (let i = 0; i < cachedArgs[0].length; i++) {
                if (!deepEqual(cachedArgs[0][i], args[i])) {
                    continue f;
                }
            }
            return cache.get(cachedArgs);
        }
        const result = fn.call(this,...args);
        cache.set(args, result);
        return result;
    }
}

let cachedGetDate = makeCache(getData);

// console.log(cachedGetDate(1));
// console.log(cachedGetDate(2));
// console.log(cachedGetDate({a: 1}));
console.log(cachedGetDate({c: 2, d: 3}, {a: 1}));
console.log(cachedGetDate(1));
// console.log(cachedGetDate(2));
// console.log(cachedGetDate(1));
// console.log(cachedGetDate({a: 2}));
console.log(cachedGetDate({c: 2, d: 3}, {a: 1}));


function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (obj1 === null || obj2 === null) {
        return false
    }
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false
    }

    let keysObj1 = Object.keys(obj1);
    let keysObj2 = Object.keys(obj2);

    if (keysObj1.length !== keysObj2.length) {
        return false;
    }

    return keysObj1.every((key) => deepEqual(obj1[key], obj2[key]));

}

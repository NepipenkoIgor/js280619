document.addEventListener('mousemove', throttle(handler, 2000));

function handler(event) {
    console.log(event.clientX);
}


function throttle(fn, ms) {
    let isBusy = false;
    let lastArgs;
    return function worker(...args) {
        if (isBusy) {
            lastArgs = args;
            return;
        }
        isBusy = true;
        lastArgs = null;
        setTimeout(() => {
            isBusy = false;
            if (!lastArgs) {
                return;
            }
            worker.call(this, ...lastArgs)
        }, ms);
        return fn.call(this, ...args);
    }
}

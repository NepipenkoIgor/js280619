'use strict';
const input = document.querySelector('input');

input.addEventListener('input', debounce(handler, 300));

function handler(event) {
    console.log(event.target.value);
}

function debounce(fn, ms) {
    let timeoutID;
    return function (...args) {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            console.log(this);
            return fn.call(this, ...args);
        }, ms)
    }
}

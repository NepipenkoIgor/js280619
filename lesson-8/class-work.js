'use strict';

// let actions = {
//     type: 'action',
//     fn(prefix = '', suffix = '') {
//         const result = `${prefix} ${this.firstName} ${this.lastName} ${suffix}`;
//         console.log(this);
//         console.log(result);
//         return result;
//     }
// }
// //
// //
// let account = {
//     firstName: 'Igor',
//     lastName: 'Nepipenko',
// }

// actions.fn();
// account.getFullName = actions.fn;

// console.log(account.getFullName());

// TODO this on event !!!
// const div = document.querySelector('.main');

// div.onclick = account.getFullName;
//
// div.addEventListener('click', () => {
//     account.getFullName();
// });


// let account1 = {
//     firstName: 'Vlad',
//     lastName: 'Loban',
// }
//
// let handler = account.getFullName.bind(account1, 'developer', '!!!');
// //
// setTimeout(handler, 3000);


// const users = [
//     {
//         firstName: 'Igor',
//         lastName: 'Nepipenko',
//     },
//     {
//         firstName: 'Vlad',
//         lastName: 'Loban',
//     }
// ];
//
// users.forEach((user) => {
//     actions.fn.call(user)
// });


// class Widget {
//     constructor(el) {
//         this.el = el;
//         this.date = '';
//         el.addEventListener('click', () => this.changeDate.call(this))
//     }
//
//     changeDate() {
//
//     }
//
//
// }
// let str = 'abacad';
//
// function cb(char) {
//     return char !== 'a'
// }

//
// console.log(typeof Array.prototype.filter)
//
// const result = Array.prototype.filter.call(str, cb);
// console.log(result);
//
// const result1 = str.split('').filter(cb);
// console.log(result1);


// function filter(cb) {
//     const arr = [];
//     for (let i = 0; i < this.length; i++) {
//         const done = cb(this[i]);
//         if (done) {
//             arr.push(this[i])
//         }
//     }
//     return arr;
// }
//
// const result1 = filter.call('abacad', cb);
// const result2 = filter.call(['a', 'b', 'a'], cb);
// console.log(result1);
// console.log(result2);

// let account1 = {
//     firstName: 'Vlad',
//     lastName: 'Loban',
// }
//
// let handler = bind(account.getFullName, account1);
// //
// setTimeout(handler, 3000);
//
//
// function bind(fn, context) {
//     return function (...args) {
//         return fn.call(context, ...args);
//     }
// }
//
//
// [].push(...[1,2,3])


function sum(a, b) {
    return a + b;
}

let account = {
    firstName: 'Vlad',
    lastName: 'Loban',
}

function createUser(acc, age) {
    return {...account, age}
}

function logDecorator(fn) {
    return function (...args) {
        const result = fn.call(this, ...args);
        const fnName = fn.name;
        const strArgs = args.map((arg) => JSON.stringify(arg)).join(',');
        console.log(`Call ${fnName}(${strArgs}) => ${JSON.stringify(result)}`)
        return result;
    }
}

const sumWithDecorator = logDecorator(sum);

console.log(sumWithDecorator(5, 4));

const createUserWithDecorator = logDecorator(createUser);

console.log(createUserWithDecorator(account, 33));

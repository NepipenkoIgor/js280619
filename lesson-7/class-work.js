'use strict';
// function sum(num1) {
// //     return (num2) => {
// //     debugger
// //         return num1 + num2;
// //     };
// // }

// function sum(num1) {
//     let currentSum = num1;
//
//
//     function f(num2) {
//         currentSum += num2;
//         return f;
//     }
//
//     f.toString = function () {
//         return currentSum;
//     };
//
//     return f;
// }
//
// const firstSum = sum(1)(2)(3)(10)(33);
// const result =  firstSum * 3;
// console.log(typeof firstSum);
// console.log(typeof result);
// console.log(result);
// console.log(sum(10)(11)(0)(2)(3));
// console.log(sum(3)(4)(5)(1)(1)(1)(2));

// function makeBuffer() {
//
//     let buffer = '';
//
//     function fn(str) {
//         if (!str) {
//             return buffer.trim();
//         }
//         buffer = `${buffer} ${str}`;
//     }
//
//     fn.clear = function () {
//         buffer = '';
//     };
//
//     return fn;
// }
//
//
// const buf1 = makeBuffer();
// const buf2 = makeBuffer();
// buf1('JS');
// buf1('is');
// buf1('Awesome');
// buf2('TS');
// console.log(1, buf());
// buf.clear();
// console.log(2, buf());


// function makeArmy(n) {
//     const soldiers = [];
//     let serialNum = 0;
//
//     for (; serialNum < n; serialNum++) {
//         soldiers.push(soldier(serialNum))
//     }
//     return soldiers;
// }
//
// function soldier(n) {
//     return () => {
//         console.log(n)
//         return n;
//     }
// }
//
// const army = makeArmy(10);
// const serial1 = army[3]();
// const serial2 = army[9]();
// console.log(serial1 === serial2);

// for (var i = 0; i < 10; i++) {
//     const fn = function (i) {
//         return () => {
//             console.log(i);
//         }
//     }(i);
//     setTimeout(fn)
// }
// for (var i = 0; i < 10; i++) {
//     setTimeout(((i) => () => console.log(i))(i))
// }

// setTimeout
// setTimeout


// function sum(a, b, c) {
//     let result = 0;
//     for (let arg of arguments) {
//         result += arg;
//     }
//     return result;
// }

// function sum(a, b, ...args) {
//     console.log(args)
//     return args.reduce((result, num)=> {
//         return result += num;
//     }, 0);
// }
//
// console.log(sum(1, 2));
// console.log(sum(1, 2, 4));
// console.log(sum(1, 2, 4, 5, 6));
//
//
// function fn(cb = () => {
// }) {
//     cb();
// }
//
// fn();
// fn(() => console.log('JS is Awesome'));

// let num = 1;
// let f = function fn() {
//     setTimeout(() => {
//         console.log(num);
//         fn();
//     })
// }
//
// f();
//
// f = null;

// function fn() {
//     console.log(this);
// }
//
// let user = {
//     name: 'Igor',
//     fn
// }
//
// const f = user.fn;
// f();

// document.addEventListener = ( eventName, eventHandler ) => {
//     eventHandler({})
// }
//
// document.addEventListener('click', handler )
//
// function handler(e) {
//     console.log(e)
// }

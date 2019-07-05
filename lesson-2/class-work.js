// let title = 'TS';
// let currency = '$';
// let srt = '${title}#423#@@@@@!!!! is awesome';
// let obj = {name: 'Igor'}
// let srt1 = `${4000/1000 + 6 + currency} is awesome ${title}`;
// console.log(srt);
// console.log(srt1);
// let person = {
//     firstName: 'Igor',
//     age: 33
// }
// let msg = 'Day is awesome'
// console.log(message`Good day, ${person}!!! ${msg} !`)
//
// function message(strs, ...templates) {
//     console.log(arguments)
//     console.log('param1 ===>', strs);
//     console.log('param2 ===>', templates);
//     return `${strs[0]}<span class="red"> ${person.firstName}</span>`
// }
//
// function sum(...args) {
//     console.log(args)
// }
// sum(1);
// sum(1,2,3);
// sum(1,2,3,2,4,5,2,6,2,4,6);

// template string (шаблонные строки)
//tag function

// const age = 33;
// const info = {
//     male: true
// }
// const key = 'My custom KEY !!!'
// const user = {
//     firstName: 'Igor',
//     'my last name': 'Nepipenko',
//     age,// age: age
//     3: 'message',
//     info,
//     [`${key}`]: 'my value' // 'My custom KEY':  'my value'
// };
// console.log(user.firstName);
// console.log(user[key]);

// const users = [
//     {
//         _id: '12312asda',
//         firstName: 'Igor',
//         age: 33
//     },
//     {
//         _id: 'qwe1241',
//         firstName: 'Vlad',
//         age: 23
//     },
//     {
//         _id: 'asdasd124124',
//         firstName: 'Masha',
//         age: 15
//     }
// ];
//
// const userHashMap = users.reduce((obj, user) => {
//     obj[user._id] = user;
//     return obj;
// }, {});
//
// console.log(userHashMap['asdasd124124']);

// 'interator112233': (){}

// const admin = {
//     fullName: 'Nepipenko Igor Pavlovich',
//     [Symbol.iterator]: function () {
//         const nameArr = this.fullName.split(' ');
//         let index = 0;
//         return {
//             next: function () {
//                 if (index > nameArr.length - 1) {
//                     return {done: true}
//                 }
//                 return {
//                     done: false,
//                     value: nameArr[index++]
//                 }
//             }
//         }
//     }
// }
// const user = {
//     firstName: 'Igor',
//     age: 33,
//     bonus: 0.4,
// };
// let sbMoney = Symbol();
// Object.defineProperty(user, sbMoney, {enumerable: false, writable: true, configurable: false, value: 1000})
// Object.defineProperty(user, 'money', {
//     get() {
//         return this[sbMoney];
//     },
//     set(v) {
//         this[sbMoney] = v + this.bonus * v;
//     }
// })
// user.money = 2000;
//
// console.log(user);

const user = {
    name: 'Igor',
    surname: 'Nepipenko',
    age: 33,
    // fullName(){
    //     return `${this.name} ${this.surname}`
    // }
};
// const data = {
//     weight: 110,
//     info: {male: true}
// }
// const newUser = {...user, ...data};
// let lastName = newUser.surname;
// let weight = newUser.weight;
// let male = newUser.info.male;

// let {surname: lastName, weight, info: {male}} = newUser;

// const myWife = `Evgeniya ${lastName}`;
// const superUser = Object.create(newUser)
// superUser._id = '1asd1sd';
// console.log(superUser);
// console.log(superUser.hasOwnProperty('weight'));
// for (const key in superUser) {
//     console.log(key);
// }

// const newUser = Object.assign({}, user, {info: {male: true}});

// for (const key in user) {
//     newUser[key] = user[key]
// }

// console.log(newUser);
// console.log(newUser === user);


// Object.defineProperty(user, 'fullName', {
//     get() {
//         return `${this.name} ${this.surname}`;
//     },
//     set(fullName) {
//         const fullNameArr = fullName.split(' ');
//         this.name = fullNameArr[0];
//         this.surname = fullNameArr[1];
//     }
// })
//
// console.log(user.fullName)
// user.fullName = 'Masha Milaya';
// console.log(user)


// const superUser = Object.defineProperties({}, {firstName: {enumerable: false, value: 'Igor'}})
// Object.defineProperty(user, '3', {enumerable: false})
// Object.defineProperty(user, 'info', {enumerable: false})
// console.log(superUser)
// for (const currentKey in user) {
//     console.log(currentKey);
// }
// console.log(user['3'])
// for (const namePart of admin) {
//     console.log(namePart);
// }

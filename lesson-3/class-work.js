// let arr1 = [1, 2, 3];
// let arr3 = new Array(1, 2, 4);
// let arr4 = Array(2, 2, 5);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr1);
//
// let p1 = {
//     maps: {
//         coords: [1, 2, 3],
//     },
//     y: 2,
//     z: 3
// }
// const x = p1['maps']['coords'][0];
// const y = p1['maps']['coords'][1];
// const z = p1['maps']['coords'][2];
// console.log(x);
//
// const {maps: {coords: [x1, ...yz]}} = p1
// console.log(x1, yz);
// let {x, y, z} = p1

// let p2 = [1, 2, 3]

// let arr2 = [{name: 'Igor', age: 33}, {name: 'Vlad', age: 13}, {name: 'Evgen', age: 43}];
// let [{name: name1}, {name: name2}, {name: name3}] = arr2;
// console.log(name1, name2, name3);
// let account = {name: 'Igor', age: 33};
// let arr = [account, 2, 3, 4, 5];
// let arr1 = [...arr, 3, 4];
// account.age = 23;
// console.log(arr, arr1)

// function calc(a, b, cb) {
//     cb(a + b);
// }
//
// function cb1(sum) {
//     console.log(sum)
// }
//
// calc(1, 2, cb1);
//
// calc(2, 4, (sum) => console.log(sum ** 2));

// const index = users.findIndex((user) => user.age === 13);
// users.splice(index, 1);
// console.log(users);

// for (let user of users) {
//     if (user.age > 20) {
//         user.parent = true;
//     }
//     user.parent = false;
// }

// const newUser = users.map((user) => ({...user, parent: user.age > 20}));
// const newUser = users.map(function (user) {
//     user.parent = user.age > 20;
//     return user;
// });
// const oldUsers = users.filter((user) => user.age > 20);
// console.log(users);
// console.log(newUser);
// arr2.splice()

// const users = [{name: 'Igor', age: 33}, {name: 'Vlad', age: 13}, {name: 'Evgen', age: 43}];
// const allAdult = users.every((users) => users.age > 20);


// [].__proto__.some = function (cbFn) {
//     for (let i = 0; i < this.length; i++) {
//         let isValid = cbFn(this[i], i, this);
//         if (isValid) {
//             return true;
//         }
//     }
//     return false;
// }
//
//
// function cb(user) {
//         return user.age < 20;
// }
//
// const somebodyNotAdult = users.some(cb);
// console.log(somebodyNotAdult);
// console.log(somebodyNotAdult);

// const users = [{name: 'Igor', age: 33}, {name: 'Vlad', age: 13}, {name: 'Evgen', age: 43}];
// let points = [4, 10, 100, 25, 2, 20];
// users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
// console.log(users);


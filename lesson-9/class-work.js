// function concat(x, y) {
//     console.log(arguments);
//     return console.log(x + y);
// }
// let greet = concat.bind(null, 'Hello, ', 'Igor');
// greet('Hello!!! ', 'Vlad');


// function Obj() {
//     this.value = new Array(100000000).join('---');
// }
//
// window.obj = new Obj();
// let map = new WeakMap();
// map.set(window.obj, 123);
// delete window.obj;
function Account(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

}

Account.prototype.getName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// let p1 = new Account('Igor', 'Nepipenko');
let p2 = new Account('Evgenia', 'Nepipenko');
// console.log(p1);
console.log(p2);
// console.log(p1.getName());
// console.log(p2.getName());

function Admin(firstName, lastName, sites) {
    Account.call(this, firstName, lastName);
    this.sites = sites;
    this.firstName = 'Vlad'
}

Admin.prototype = Object.create(Account.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.getName = function () {
    console.log('Get Admin Name');
    return Account.prototype.getName.call(this);
}


let a1 = new Admin('Igor', 'Nepipenko', ['/test', '/objects']);
console.log(a1.getName());

// console.log(a1)
// console.log(p2 instanceof Account);
// console.log(p2 instanceof Admin);
// console.log(a1 instanceof Account);
// console.log(a1 instanceof Admin);
// console.log(a1.__proto__ === Admin.prototype);





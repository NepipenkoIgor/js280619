const _salary = Symbol('_salary');

class User {

    static staticUserCount() {
        return User.instanceCount;
    }

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        User.instanceCount++;
        this.salary = 1;
    }

    get salary() {
        return `${this[_salary] || 0}$`
    }

    set salary(salary) {
        this[_salary] = salary;
    }

    userCount() {
        return User.staticUserCount();
    }
}

User.instanceCount = 0;

// function User(firstName, lastName, age) {
//     const _salary = Symbol('_salary');
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     User.instanceCount++;
//     console.log(this)
//     Object.defineProperty(this, 'salary', {
//         get() {
//             return `${this[_salary] || 0}$`
//         },
//         set(salary) {
//             this[_salary] = salary;
//         }
//     })
// }
//
// User.prototype.userCount = function () {
//     return User.instanceCount;
// }
//
//
// User.instanceCount = 0;


let u1 = new User('Igor', 'Nepipenko', 33);
let u2 = new User('Vladimir', 'Loban', 31);
let u3 = new User('Evgenia', 'Nepipenko', 30);
console.log(u1);
console.log(u3);
console.log(u2.salary);
u3.salary = 4000;

console.log(u3.salary);
for (let key in u1) {
    console.log(key);
}



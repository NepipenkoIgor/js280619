function User(firstName, lastName, age) {
    const _salary = Symbol('_salary');
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    User.instanceCount++;
    Object.defineProperty(this, 'salary', {
        enumerable: true,
        get() {
            return `${this[_salary] || 0}$`
        },
        set(salary) {
            const sNum = Number(salary);
            if (Number.isNaN(sNum)) {
                return;
            }
            this[_salary] = salary;
        }
    })
}

User.prototype.userCount = function () {
    return User.instanceCount;
}

User.instanceCount = 0;


let u1 = new User('Igor', 'Nepipenko', 33);
//
// let u2 = new User('Vladimir', 'Loban', 31);


function Teacher(firstName, lastName, age, subject) {
    User.call(this, firstName, lastName, age);
    this.subject = subject;
}


Teacher.prototype = Object.create(User.prototype);
// Teacher.prototype.constructor = Teacher;
Teacher.prototype.getSubject = function () {
    return this.subject[0];
}
// Teacher.prototype.userCount = function() {
//     console.log('Show users count');
//     return User.prototype.userCount.call(this);
// }

//
// console.log(u1.userCount());
// console.log(u1.salary);
//
// u1.salary = 3000;
//
// console.log(u1.salary);
// console.log(u2.salary);
let t1 = new Teacher('Evgeniya', 'Nepipenko', 30, ['JS', 'Angular']);
console.log(t1);
console.log(t1.getSubject());
// console.log(t1.userCount());
// console.log(t1.salary);
// t1.salary = 5000;
// t1.salary = 'asdasd';
// console.log(t1.salary);


function Admin(firstName, lastName, age, pages) {
    User.call(this, firstName, lastName, age);
    this.pages = pages;
}

let a1 = new Admin('Evgeniya', 'Nepipenko', 30, ['/JS', '/Angular']);
console.log(a1);

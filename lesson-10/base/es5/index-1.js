function User(firstName, lastName, age) {
    const _salary = Symbol('_salary');
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    User.instanceCount++;
    console.log(this)
    Object.defineProperty(this, 'salary', {
        enumerable: true,
        get() {
            return `${this[_salary] || 0}$`
        },
        set(salary) {
            this[_salary] = salary;
        }
    })
}

User.prototype.userCount = function () {
    return User.instanceCount;
}


User.instanceCount = 0;


let u1 = new User('Igor', 'Nepipenko', 33);
let u2 = new User('Vladimir', 'Loban', 31);
console.log(u1);
console.log(u1.userCount());
console.log(u1.salary);

u1.salary = 3000;

console.log(u1.salary);
console.log(u2.salary);

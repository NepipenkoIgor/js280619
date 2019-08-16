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
        const sNum = Number(salary);
        if (Number.isNaN(sNum)) {
            return;
        }
        this[_salary] = salary;
    }

    userCount() {
        return User.staticUserCount();
    }
}

User.instanceCount = 0;


class Teacher extends User {
    constructor(firstName, lastName, age, subject) {
        super(firstName, lastName, age);
        this.subject  = subject;
    }

    userCount() {
        console.log('Show users count');
        return super.userCount();
    }

}

let t1 = new Teacher('Evgeniya', 'Nepipenko', 30, ['JS', 'Angular']);

console.log(t1);
console.log(t1.userCount());
console.log(t1.salary);
t1.salary = 5000;
t1.salary = 'asdasd';
console.log(t1.salary);


class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString() { return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})` }
}

let gnom = new Person('za', 'ba', 10, 'sdf');
console.log(gnom.toString());
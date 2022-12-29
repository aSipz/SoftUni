function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
        get fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        set fullName(value) {
            if (value.split(' ').length != 2) {
                return;
            }
            this.firstName = value.split(' ')[0];
            this.lastName = value.split(' ')[1];
        }
    }
}

let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson

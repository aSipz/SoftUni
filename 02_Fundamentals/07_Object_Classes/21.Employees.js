function employees(input) {
    class Employee {
        constructor(name, nameLength) {
            this.name = name;
            this.personalNum = nameLength
        }
    }
    let nameArray = [];
    for (let i = 0; i < input.length; i++) {
        let tempName = new Employee(input[i], input[i].length);
        let tempNameString = `Name: ${tempName.name} -- Personal Number: ${tempName.personalNum}`
        nameArray.push(tempNameString);
    }
    console.log(nameArray.join('\n'))
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );
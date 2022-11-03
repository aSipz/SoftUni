function addressBook(input) {
    let addressBook = {};
    input.forEach(element => {
        let [name, address] = element.split(':');
        addressBook[name] = address;
    });
    let addressArray = Object.entries(addressBook);
    addressArray.sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    addressArray.forEach(element => {
        let [key, value] = element;
        console.log(`${key} -> ${value}`);
    });
}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);
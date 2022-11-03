function phoneBook(input) {
    let phoneBook = {};
    input.forEach(element => {
        let [name, number] = element.split(' ');
        phoneBook[name] = number;
    });
    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}
phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
);
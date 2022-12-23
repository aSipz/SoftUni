function juice(input) {
    let bottles = new Map();
    let juices = {};
    input.forEach(element => {
        let [name, quantity] = element.split(' => ');
        quantity = Number(quantity);
        if (juices[name]) {
            quantity += juices[name];
        }
        let forBottles = Math.floor(quantity / 1000);
        let remainingJuice = quantity % 1000;
        juices[name] = remainingJuice;
        if (bottles.get(name)) {
            forBottles += bottles.get(name);
        }
        if (forBottles > 0) {
            bottles.set(name, forBottles);
        }
    });
    for (const [name, quantity] of bottles) {
        console.log(`${name} => ${quantity}`);
    }
}
juice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)
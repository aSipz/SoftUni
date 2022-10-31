function catalogue(input) {
    class Products {
        constructor(name, price) {
            this.productName = name;
            this.productPrice = price;
        }
    }
    let productsArray = [];
    for (let i = 0; i < input.length; i++) {
        let currentProductName = input[i].split(' : ')[0];
        let currentPrice = Number(input[i].split(' : ')[1]);
        let currentProduct = new Products(currentProductName, currentPrice);
        productsArray.push(currentProduct)
    }
    productsArray.sort((a, b) => (a.productName).localeCompare(b.productName));
    let indexLetter = '';
    for (let i = 0; i < productsArray.length; i++) {
        if (indexLetter != productsArray[i].productName[0]) {
            indexLetter = productsArray[i].productName[0];
            console.log(indexLetter);
        }
        if (indexLetter == productsArray[i].productName[0]) {
            console.log(`  ${productsArray[i].productName}: ${productsArray[i].productPrice}`);
        }

    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);
function storeCatalogue(input) {
    let products = {};
    input.forEach(line => {
        let [product, price] = line.split(' : ');
        products[product] = Number(price);
    });
    let sortedProducts = Object.entries(products).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
    let initial = '';
    for (const [product, price] of sortedProducts) {
        if (product[0] != initial) {
            initial = product[0];
            console.log(initial);
        }
        console.log(`  ${product}: ${price}`);
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
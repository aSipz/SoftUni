function lowestPrice(input) {
    let products = {};
    let productsArray = [];
    input.forEach(line => {
        let [town, product, price] = line.split(' | ');
        if (!productsArray.includes(product)) {
            productsArray.push(product);
        }
        price = Number(price);
        if (products[product] && price < products[product].price) {
            products[product].price = price;
            products[product].town = town;
        }
        if (!products[product]) {
            products[product] = { town, price };
        }
    });
    for (const item of productsArray) {
        console.log(`${item} -> ${products[item].price} (${products[item].town})`);
    }
}
lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);
function storage(input) {
    let storage = new Map();
    input.forEach(element => {
        let [product, quantity] = element.split(' ');
        quantity = Number(quantity);
        if (storage.has(product)) {
            quantity += storage.get(product);
        }
        storage.set(product, quantity)
    });
    for (const [product, quantity] of storage) {
        console.log(`${product} -> ${quantity}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);
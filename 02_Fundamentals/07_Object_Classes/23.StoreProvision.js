function storeProvision(currentStock, ordered) {
    class Product {
        constructor(name, quantity) {
            this.name = name;
            this.quantity = quantity;
        }
    }
    for (let i = 0; i< ordered.length; i++) {
        let inStock = false;
        let currentOrdered = ordered[i];
        i++;
        let currentOrderedQuantity = Number(ordered[i]);
        for (let j = 0; j < currentStock.length; j++) {
            let name = currentStock[j];
            j++;
            let quantity = Number(currentStock[j]);
            if (name == currentOrdered) {
                currentStock[j] = quantity + currentOrderedQuantity;
                inStock = true;
                break;
            }
        }
        if (!inStock) {
            currentStock.push(currentOrdered);
            currentStock.push(currentOrderedQuantity);
        }
    }
    for (let i = 0; i < currentStock.length; i += 2) {
        let tempProduct = new Product(currentStock[i], Number(currentStock[i+1]));
        console.log(`${tempProduct.name} -> ${tempProduct.quantity}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );
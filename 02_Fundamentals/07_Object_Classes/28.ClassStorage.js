function storage() {
    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
        }
        addProduct(product) {
            storage.name = product.name;
            storage.price = Number(product.price);
            storage.quantity = Number(product.quantity);
            capacity -= Number(product.quantity);
            totalCost += Number(product.price) * Number(product.quantity);
        }
        getProducts() {
            return JSON.stringify(storage[0])
        }
    }
    let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
    let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
    let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    console.log(storage.getProducts());
    console.log(storage.capacity);
    console.log(storage.totalCost);

}
storage();
function storage() {
    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
        }
        addProduct(product) {
            this.storage.push(product);
            this.totalCost += product.price * product.quantity;
            this.capacity -= product.quantity;
        }
        getProducts() {
            let output = ''
            this.storage.forEach(a => output += JSON.stringify(a) + ' ');
            output = output.split(' ');
            output.pop();
            return output.join('\n')
        }
    }
    let productOne = { name: 'Tomato', price: 0.90, quantity: 19 };
    let productTwo = { name: 'Potato', price: 1.10, quantity: 10 };
    let storage = new Storage(30);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    console.log(storage.totalCost);

}
storage();
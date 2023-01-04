class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables(vegetables) {
        let addedProducts = new Set();
        vegetables.forEach(element => {
            let [type, quantity, price] = element.split(' ');
            addedProducts.add(type);
            let isFound = false;
            for (const product of this.availableProducts) {
                if (product.type == type) {
                    product.quantity += Number(quantity);
                    if (Number(price) > product.price) {
                        product.price = Number(price);
                    }
                    isFound = true;
                    break;
                }
            }

            if (!isFound) {
                this.availableProducts.push({ type, quantity: Number(quantity), price: Number(price) });
            }
        });
        return `Successfully added ${Array.from(addedProducts).join(', ')}`
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        selectedProducts.forEach(element => {
            let isFound = false;
            let [name, quantity] = element.split(' ');
            quantity = Number(quantity);
            for (const product of this.availableProducts) {
                if (product.type == name) {
                    isFound = true;
                    if (quantity > product.quantity) {
                        throw new Error(`The quantity ${quantity} for the vegetable ${name} is not available in the store, your current bill is \$${totalPrice.toFixed(2)}.`);
                    }
                    totalPrice += quantity * product.price;
                    product.quantity -= quantity;
                    break;
                }
            }
            if (!isFound) {
                throw new Error(`${name} is not available in the store, your current bill is \$${totalPrice.toFixed(2)}.`);

            }
        });
        return `Great choice! You must pay the following amount \$${totalPrice.toFixed(2)}.`;
    }
    rottingVegetable(type, quantity) {
        let isFound = false;
        for (const product of this.availableProducts) {
            if (product.type == type) {
                isFound = true;
                if (quantity >= product.quantity) {
                    product.quantity = 0;
                    return `The entire quantity of the ${type} has been removed.`;
                }
                product.quantity -= quantity;
                return `Some quantity of the ${type} has been removed.`;
            }
        }
        throw new Error(`${type} is not available in the store.`);
    }
    revision() {
        let result = 'Available vegetables:\n'
        result += this.availableProducts.sort((a, b) => a.price - b.price).map(a => `${a.type}-${a.quantity}-\$${a.price}`).join('\n');
        result += '\n' + `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return result;
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

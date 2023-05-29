class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!model.trim() || price < 0 || mileage < 0 || horsepower % 1 != 0 || horsepower < 0) {
            throw new Error('Invalid input!');
        }
        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desireMileage) {
        if (!this.availableCars.find(c => c.model == model)) {
            throw new Error(`${model} was not found!`);
        }

        const desiredCar = this.availableCars.find(c => c.model == model);
        const index = this.availableCars.findIndex(c => c.model = model);

        const carMileage = desiredCar.mileage;
        let soldPrice = desiredCar.price;

        if (carMileage - desireMileage <= 40000 && carMileage - desireMileage > 0) {
            soldPrice *= 0.95;
        } else if (carMileage - desireMileage > 40000) {
            soldPrice *= 0.9;
        }

        this.soldCars.push({ model, horsepower: desiredCar.horsepower, soldPrice });
        this.availableCars.splice(index, 1);
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return 'There are no available cars';
        }

        const result = ['-Available cars:'];
        this.availableCars.forEach(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`));
        return result.join('\n');
    }

    salesReport(criteria) {
        if (criteria != 'horsepower' && criteria != 'model') {
            throw new Error(`Invalid criteria!`);
        }

        const result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${this.soldCars.length} cars sold:`];

        if (criteria == 'horsepower') {
            this.soldCars.sort((a, b) => b.soldPrice - a.soldPrice).forEach(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));
        }

        if (criteria == 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model)).forEach(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));
        }

        return result.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));

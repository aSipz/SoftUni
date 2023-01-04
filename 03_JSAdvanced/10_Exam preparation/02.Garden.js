class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }
        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }
    ripenPlant(plantName, quantity) {
        let foundPlant;
        for (const plant of this.plants) {
            if (plant.plantName == plantName) {
                foundPlant = plant;
                break;
            }
        }
        if (!foundPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (foundPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }
        foundPlant.ripe = true;
        foundPlant.quantity = quantity;
        let result = `${quantity} ${plantName}`;
        quantity > 1 ? result += 's have' : result += ` has`;
        return result + ' successfully ripened.';
    }
    harvestPlant(plantName) {
        let foundPlant;
        for (const plant of this.plants) {
            if (plant.plantName == plantName) {
                let index = this.plants.indexOf(plant);
                this.plants.splice(index, 1);
                foundPlant = plant;
                break;
            }
        }
        if (!foundPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (!foundPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.storage.push({ plantName, quantity: foundPlant.quantity });
        this.spaceAvailable += foundPlant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    }
    generateReport() {
        let result = '';
        result += `The garden has ${this.spaceAvailable} free space left.` + '\n';
        let plantsArray = this.plants.map(o => o.plantName).sort((a,b) => a.localeCompare(b))
        result += `Plants in the garden: ${plantsArray.join(', ')}` + '\n';
        if (this.storage.length == 0) {
            return result += `Plants in storage: The storage is empty.`;
        }
        let storagePlantsArray = this.storage.map(o => `${o.plantName} (${o.quantity})`);
        return result += `Plants in storage: ${storagePlantsArray.join(', ')}`;
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

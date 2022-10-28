function classVehicle() {
    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.parts.quality = Number(parts.engine) * Number(parts.power);
            this.fuel = Number(fuel);
        }
        drive(fuelLoss) {
            this.fuel -= Number(fuelLoss);
        }
    }
    let parts = { engine: 9, power: 500 };
    let vehicle = new Vehicle('l', 'k', parts, 840);
    vehicle.drive(20);
    console.log(vehicle.fuel);
}
classVehicle();
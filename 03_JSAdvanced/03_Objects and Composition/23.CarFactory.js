function carFactory(obj) {
    let car = {};
    car.model = obj.model;
    let engine = {
        small() { return { power: 90, volume: 1800 } },
        normal() { return { power: 120, volume: 2400 } },
        monster() { return { power: 200, volume: 3500 } }
    }
    let engineType = {};
    if (obj.power <= 90) {
        engineType = engine.small();
    } else if (obj.power <= 120) {
        engineType = engine.normal();
    } else if (obj.power <= 200) {
        engineType = engine.monster();
    }
    car.engine = engineType;
    let carriage = {
        type: obj.carriage,
        color: obj.color
    }
    car.carriage = carriage;
    let wheelsize = obj.wheelsize % 2 == 0 ? obj.wheelsize - 1 : obj.wheelsize;
    car.wheels = (wheelsize + ' ').repeat(4).trim().split(' ').map(Number);
    return car;
}
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);
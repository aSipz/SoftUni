function garage(input) {
    let garageList = {};
    for (const string of input) {
        let [garageNum, carInfo] = string.split(' - ');
        let currentCarArray = carInfo.split(', ');
        let currentCar = {};
        let carsArray = [];
        if (garageList[garageNum]) {
            carsArray = garageList[garageNum];
        }
        for (const kvp of currentCarArray) {
            let [key, value] = kvp.split(': ');
            currentCar[key] = value;
        }
        carsArray.push(currentCar);
        garageList[garageNum] = carsArray;
    }
    for (const garage in garageList) {
        console.log(`Garage № ${garage}`);
        let carArray = garageList[garage];
        for (const currentCar of carArray) {
            let currentCarValues = Object.entries(currentCar);
            let lineToPrint = [];
            for (const [key, value] of currentCarValues) {
                let currentInfo = `${key} - ${value}`;
                lineToPrint.push(currentInfo);
            }
            console.log(`--- ${lineToPrint.join(', ')}`);
        }
    }
}
garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']
);
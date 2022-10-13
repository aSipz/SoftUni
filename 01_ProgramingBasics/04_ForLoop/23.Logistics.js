function logistics(input) {
    let numOfLoads = parseInt(input[0]);
    let loadWeight = 0;
    let totalWeight = 0;
    let loadsByBus = 0;
    let loadsByTruck = 0;
    let loadsByTrain = 0;
    let totalPrice = 0;
    for ( i = 1; i <= numOfLoads; i++) {
        loadWeight = parseInt(input[i]);
        totalWeight += loadWeight;
        if ( loadWeight <= 3) {
            loadsByBus += loadWeight;
            totalPrice += loadWeight * 200;
        } else if (loadWeight <= 11) {
            loadsByTruck += loadWeight;
            totalPrice += loadWeight * 175;
        } else {
            loadsByTrain += loadWeight;
            totalPrice += loadWeight * 120;
        }
    }
    console.log((totalPrice / totalWeight).toFixed(2));
    console.log(`${(loadsByBus / totalWeight * 100).toFixed(2)}%`);
    console.log(`${(loadsByTruck / totalWeight * 100).toFixed(2)}%`);
    console.log(`${(loadsByTrain / totalWeight * 100).toFixed(2)}%`);
}
logistics([5,2,10,20,1,7]);
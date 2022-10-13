function transportPrice(input) {
    let distance = parseInt(input[0]);
    let time = input[1];
    let priceTaxi = 0;
    let priceBus = 0;
    let priceTrain = 0;
    // taxi price
    if (distance < 20) {
        if (time == "day") {
         priceTaxi = 0.7 + distance * 0.79;
        } else if (time == "night") {
            priceTaxi = 0.7 + distance * 0.9;
        }
        console.log(priceTaxi.toFixed(2));
    } else if (distance < 100) {
        priceBus = distance * 0.09;
        console.log(priceBus.toFixed(2));
    } else {
        priceTrain = distance * 0.06;
        console.log(priceTrain.toFixed(2));
    }
}
transportPrice([25, "night"]);
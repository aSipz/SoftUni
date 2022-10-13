function fuelTank(input) {
    let fuelType = input[0];
    let fuel = Number(input[1]);
    let clubCard = input[2]
    let gasolinePrice = 2.22;
    let diselPrice = 2.33;
    let gasPrice = 0.93;
    let price = 0;
    let finalPrice = 0;
    if (clubCard == "Yes") {
        gasolinePrice = gasolinePrice - 0.18;
        diselPrice = diselPrice - 0.12;
        gasPrice = gasPrice - 0.08;
    }
    if (fuelType == "Gasoline") {
        price = gasolinePrice * fuel;
    } else if ( fuelType == "Diesel") {
        price = diselPrice * fuel;
    } else if (fuelType == "Gas") {
        price = gasPrice * fuel;
    }
    if ( fuel < 20) {
        finalPrice = price;
    } else if ( fuel <= 25) {
        finalPrice = 0.92 * price;
    } else {
        finalPrice = 0.9 * price;
    }
    console.log(`${finalPrice.toFixed(2)} lv.`);
}
fuelTank(["Gasoline",25, "No"]);
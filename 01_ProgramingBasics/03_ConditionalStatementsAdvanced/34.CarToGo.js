function carToGo(input) {
    let budget = parseFloat(input[0]);
    let season = input[1];
    let carClass = 0;
    let carType = 0;
    let price = 0;
    if (budget <= 100) {
        carClass = "Economy class";
        if (season == "Summer") {
            carType = "Cabrio";
            price = 0.35 * budget;
        } else if (season == "Winter") {
            carType = "Jeep";
            price = 0.65 * budget;
        }
    } else if (budget <= 500) {
        carClass = "Compact class";
        if (season == "Summer") {
            carType = "Cabrio";
            price = 0.45 * budget;
        } else if (season == "Winter") {
            carType = "Jeep";
            price = 0.8 * budget;
        }
    } else if (budget > 500) {
        carClass = "Luxury class";
        carType = "Jeep";
        price = 0.9 * budget;
    }
    console.log(carClass);
    console.log(`${carType} - ${price.toFixed(2)}`);
}
carToGo([450, "Summer"]);
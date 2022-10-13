function vacation(input) {
    let budget = parseFloat(input[0]);
    let season = input[1];
    let price = 0;
    let location = 0;
    let place = 0;
    if (budget <= 1000) {
        place = "Camp";
        if (season == "Summer") {
            location = "Alaska";
            price = 0.65 * budget;
        } else if (season == "Winter") {
            location = "Morocco";
            price = 0.45 * budget;
        }
    } else if (budget <= 3000) {
        place = "Hut";
        if (season == "Summer") {
            location = "Alaska";
            price = 0.8 * budget;
        } else if (season == "Winter") {
            location = "Morocco";
            price = 0.6 * budget;
        }
    } else if ( budget > 3000) {
        place = "Hotel";
        price = 0.9 * budget;
        if (season == "Summer") {
            location = "Alaska";
        } else if (season == "Winter") {
            location = "Morocco";
        }
    }
    console.log(`${location} - ${place} - ${price.toFixed(2)}`);
}
vacation([800, "Summer"]);
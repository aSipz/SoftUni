function journey(input) {
    let budget = parseFloat(input[0]);
    let season = input[1];
    let destination = 0;
    let place = 0;
    let moneySpend = 0;
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            place = "Camp"
            moneySpend = 0.3 * budget;
        } else if (season == "winter") {
            place = "Hotel"
            moneySpend = 0.7 * budget;
        }
    } else if ( budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            place = "Camp"
            moneySpend = 0.4 * budget;
        } else if (season == "winter") {
            place = "Hotel"
            moneySpend = 0.8 * budget;
        }
    } else {
        destination = "Europe";
        place = "Hotel"
        moneySpend = 0.9 * budget;
        
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${moneySpend.toFixed(2)}`);
}
journey([1500, "summer"]);
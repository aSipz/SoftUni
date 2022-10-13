function matchTicket(input) {
    let budget = parseFloat(input[0]);
    let category = input[1];
    let numPeople = parseInt(input[2]);
    let transportPrice = 0;
    let priceTickets = 0;
    if (numPeople > 0 && numPeople < 5) {
        transportPrice = 0.75 * budget;
    } else if (numPeople < 10) {
        transportPrice = 0.6 * budget;
    } else if (numPeople < 25) {
        transportPrice = 0.5 * budget;
    } else if (numPeople < 50) {
        transportPrice = 0.4 * budget;
    } else {
        transportPrice = 0.25 * budget;
    }
    if (category == "VIP") {
        priceTickets = numPeople * 499.99;
    } else if (category = "Normal") {
        priceTickets = numPeople * 249.99;
    }
    if (budget >= (priceTickets + transportPrice)) {
        console.log(`Yes! You have ${(budget - priceTickets - transportPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(priceTickets + transportPrice - budget).toFixed(2)} leva.`);
    }
}
matchTicket([30000, "VIP", 49]);
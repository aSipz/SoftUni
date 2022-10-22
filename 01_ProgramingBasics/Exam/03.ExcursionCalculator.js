function excursionCalculator(input) {
    let peopleCount = Number(input[0]);
    let season = input[1];
    let pricePerPerson = 0;
    let tripCost = 0;
    let discount = 1;
    if (peopleCount <= 5 & peopleCount >= 0) {
        switch (season) {
            case 'spring':
                pricePerPerson = 50;
                break;
            case 'summer':
                pricePerPerson = 48.5;
                discount = 0.85;
                break;
            case 'autumn':
                pricePerPerson = 60;
                break;
            case 'winter':
                pricePerPerson = 86;
                discount = 1.08;
                break;
        }
    } else if (peopleCount > 5) {
        switch (season) {
            case 'spring':
                pricePerPerson = 48;
                break;
            case 'summer':
                pricePerPerson = 45;
                discount = 0.85;
                break;
            case 'autumn':
                pricePerPerson = 49.5;
                break;
            case 'winter':
                pricePerPerson = 85;
                discount = 1.08;
                break;
        }
    }
    tripCost = peopleCount * pricePerPerson * discount;
    console.log(`${tripCost.toFixed(2)} leva.`);
}
excursionCalculator(["20",
"winter"]);
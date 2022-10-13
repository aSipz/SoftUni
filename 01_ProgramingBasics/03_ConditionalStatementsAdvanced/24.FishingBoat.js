function fishingBoat(input) {
    let budget = parseInt(input[0]);
    let season = input[1];
    let numFisherman = parseInt(input[2]);
    let rent = 0;
    let discount = 1;
    let addDiscount = 1;
    let price = 0;
    let diff = 0;
    if (numFisherman%2 == 0 && season != "Autumn") {
        addDiscount = 0.95;
    }
    switch (season) {
        case "Spring":
            rent = 3000;
        break;
        case "Summer":
        case "Autumn":
            rent = 4200;
        break;
        case "Winter":
            rent = 2600
        break;
    }
    if ( numFisherman <= 6) {
        discount = 0.9;
    } else if ( numFisherman <= 11) {
        discount = 0.85;
    } else if (numFisherman >= 12) {
        discount = 0.75;
    }
    price = rent * discount * addDiscount;
    diff = Math.abs(budget-price);
    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat([2000, "Winter", 13]);
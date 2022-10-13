function hotelRoom(input) {
    let month = input[0];
    let numSleeps = parseInt(input[1]);
    let priceStudio = 0;
    let priceApart = 0;
    let priceStudioAll = 0;
    let priceApartAll = 0;
    switch (month) {
        case "May":
        case "October":
            priceStudio = 50;
            priceApart = 65;
            if (numSleeps <= 7) {
                priceStudioAll = priceStudio * numSleeps;
            } else if (numSleeps <= 14) {
                priceStudioAll = priceStudio * numSleeps * 0.95;
            } else {
                priceStudioAll = priceStudio * numSleeps * 0.7;
            }
            break;
        case "June":
        case "September":
            priceStudio = 75.2;
            priceApart = 68.7;
            if (numSleeps > 14) {
                priceStudioAll = priceStudio * numSleeps * 0.8;
            } else {
                priceStudioAll = priceStudio * numSleeps;
            }
            break;
        case "July":
        case "August":
            priceStudio = 76;
            priceApart = 77;
            priceStudioAll = priceStudio * numSleeps;
            break;
    }
    if ( numSleeps > 14) {
        priceApartAll = priceApart * numSleeps * 0.9;
    } else {
        priceApartAll = priceApart * numSleeps;
    }
    console.log(`Apartment: ${priceApartAll.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudioAll.toFixed(2)} lv.`);
}
hotelRoom(["June", 14]);
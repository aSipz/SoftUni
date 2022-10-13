function skiTrip(input) {
    let tripDays = parseInt(input[0]);
    let roomType = input[1];
    let rating = input[2];
    let tripNights = tripDays - 1;
    let priceRoom = 18;
    let priceApart = 25;
    let pricePresApart = 35;
    let price = 0;
    let finalPrice = 0;
    switch (roomType) {
        case "room for one person":
            price = priceRoom * tripNights;
            break;
        case "apartment":
            if (tripDays < 10) {
                price = priceApart * tripNights * 0.7;
            } else if (tripDays >= 10 && tripDays <= 15) {
                price = priceApart * tripNights * 0.65;
            } else {
                price = priceApart * tripNights * 0.5;
            }
            break;
        case "president apartment":
            if (tripDays < 10) {
                price = pricePresApart * tripNights * 0.9;
            } else if (tripDays >= 10 && tripDays <= 15) {
                price = pricePresApart * tripNights * 0.85;
            } else {
                price = pricePresApart * tripNights * 0.8;
            }
            break;
    }
    if (rating == "positive") {
        finalPrice = price * 1.25;
    } else if (rating == "negative") {
        finalPrice = price * 0.9;
    }
    console.log(finalPrice.toFixed(2));
}
skiTrip([30, "president apartment", "negative"]);
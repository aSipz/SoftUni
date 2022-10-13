function flowers(input) {
    let numChrys = parseInt(input[0]);
    let numRoses = parseInt(input[1]);
    let numTulips = parseInt(input[2]);
    let season = input[3];
    let day = input[4];
    let price = 0;
    if (season == "Spring" || season == "Summer") {
        price = numChrys * 2 + numRoses * 4.1 + numTulips * 2.5;
    } else if (season == "Autumn" || season == "Winter") {
        price = numChrys * 3.75 + numRoses * 4.5 + numTulips * 4.15;
    }
    if (day == "Y") {
        price = price * 1.15;
    }
    if (numTulips > 7 && season == "Spring") {
        price = price * 0.95;
    }
    if (numRoses >= 10 && season == "Winter") {
        price = 0.9 * price;
    }
    if ((numChrys + numRoses + numTulips) > 20) {
        price = price * 0.8;
    }
    price = price + 2;
    console.log(price.toFixed(2));
}
flowers([3, 10, 9, "Winter", "N"]);
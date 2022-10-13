function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let numStudents = parseInt(input[2]);
    let nights = parseInt(input[3]);
    let price = 0;
    let sport = 0;
    switch (season) {
        case "Winter":
            if (groupType == "boys") {
                price = nights * numStudents * 9.6;
                sport = "Judo"
            } else if (groupType == "girls") {
                price = nights * numStudents * 9.6;
                sport = "Gymnastics"
            } else if (groupType == "mixed") {
                price = nights * numStudents * 10;
                sport = "Ski"
            }
            break;
        case "Spring":
            if (groupType == "boys") {
                price = nights * numStudents * 7.2;
                sport = "Tennis"
            } else if (groupType == "girls") {
                price = nights * numStudents * 7.2;
                sport = "Athletics"
            } else if (groupType == "mixed") {
                price = nights * numStudents * 9.5;
                sport = "Cycling"
            }
            break;
        case "Summer":
            if (groupType == "boys") {
                price = nights * numStudents * 15;
                sport = "Football"
            } else if (groupType == "girls") {
                price = nights * numStudents * 15;
                sport = "Volleyball"
            } else if (groupType == "mixed") {
                price = nights * numStudents * 20;
                sport = "Swimming"
            }
            break;
    }
    if (numStudents >= 10 && numStudents < 20) {
        price = price * 0.95;
    } else if ( numStudents >= 20 && numStudents < 50) {
        price = price * 0.85;
    } else if (numStudents >= 50) {
        price = 0.5 * price;
    }
    console.log(`${sport} ${price.toFixed(2)} lv.`);
}
schoolCamp(["Winter","mixed", 9 , 15]);
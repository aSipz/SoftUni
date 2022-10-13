function smallShop(input) {
    let productName = input[0];
    let cityName = input[1];
    let productCount = parseFloat(input[2]);
    let coffeePrice = 0;
    let waterPrice = 0;
    let beerPrice = 0;
    let sweetsPrice = 0;
    let peanutsPrice = 0;
    if (cityName == "Sofia") {
        coffeePrice = 0.5;
        waterPrice = 0.8;
        beerPrice = 1.2;
        sweetsPrice = 1.45;
        peanutsPrice = 1.6;
        switch (productName) {
            case "coffee":
                console.log(coffeePrice * productCount);
                break;
            case "water":
                console.log(waterPrice * productCount);
                break;
            case "beer":
                console.log(beerPrice * productCount);
                break;
            case "sweets":
                console.log(sweetsPrice * productCount);
                break;
            case "peanuts":
                console.log(peanutsPrice * productCount);
        }
    } else if (cityName == "Plovdiv") {
        coffeePrice = 0.4;
        waterPrice = 0.7;
        beerPrice = 1.15;
        sweetsPrice = 1.3;
        peanutsPrice = 1.5;
        switch (productName) {
            case "coffee":
                console.log(coffeePrice * productCount);
                break;
            case "water":
                console.log(waterPrice * productCount);
                break;
            case "beer":
                console.log(beerPrice * productCount);
                break;
            case "sweets":
                console.log(sweetsPrice * productCount);
                break;
            case "peanuts":
                console.log(peanutsPrice * productCount);
        }
    } else {
        coffeePrice = 0.45;
        waterPrice = 0.7;
        beerPrice = 1.1;
        sweetsPrice = 1.35;
        peanutsPrice = 1.55;
        switch (productName) {
            case "coffee":
                console.log(coffeePrice * productCount);
                break;
            case "water":
                console.log(waterPrice * productCount);
                break;
            case "beer":
                console.log(beerPrice * productCount);
                break;
            case "sweets":
                console.log(sweetsPrice * productCount);
                break;
            case "peanuts":
                console.log(peanutsPrice * productCount);
        }
    }
}
smallShop(["coffee" , "Sofia", 5]);
function summerOutfit(input) {
    let temp = parseInt(input[0]);
    let dayTime = input[1];
    let outfit = 0;
    let shoes = 0;
    if ( 10 <= temp && temp <= 18) {
        switch (dayTime) {
            case "Morning":
              outfit = "Sweatshirt";
              shoes = "Sneakers";
              break;
            case "Afternoon":
            case "Evening":
              outfit = "Shirt";
              shoes = "Moccasins";
              break;
        }
    } else if ( 18 < temp && temp <= 24) {
        switch (dayTime) {
            case "Afternoon":
              outfit = "T-Shirt";
              shoes = "Sandals";
              break;
            case "Morning":
            case "Evening":
              outfit = "Shirt";
              shoes = "Moccasins";
              break;
        }
    } else if ( temp >= 25) {
        switch (dayTime) {
            case "Morning":
              outfit = "T-Shirt";
              shoes = "Sandals";
              break;
            case "Afternoon":
                outfit = "Swim Suit";
                shoes = "Barefoot";
                break;
            case "Evening":
              outfit = "Shirt";
              shoes = "Moccasins";
              break;
        }
    }
    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit([16, "Morning"]);
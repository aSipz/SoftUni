function pets(input) {
    let days = parseInt(input[0]);
    let foodAvailable = parseInt(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turFoodPerDay = (Number(input[4])) / 1000;
    let dogFood = dogFoodPerDay * days;
    let catFood = catFoodPerDay * days;
    let turFood = turFoodPerDay * days;
    let foodNeeded = dogFood + catFood + turFood;
    let diff = foodAvailable - foodNeeded;
    if (foodAvailable >= foodNeeded) {
        console.log(`${Math.floor(diff)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(Math.abs(diff))} more kilos of food are needed.`)
    }
}
pets([5,10,2.1,0.8,321]);
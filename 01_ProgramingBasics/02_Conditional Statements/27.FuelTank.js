function fuelTank(input) {
    let fuel = input[0];
    let availableFuel = Number(input[1]);
    let textToPrint = 0;
    if (availableFuel >= 25) {
        textToPrint = `You have enough ${fuel.toLowerCase()}.`;
    } else {
        textToPrint = `Fill your tank with ${fuel.toLowerCase()}!`;
    }
    if (fuel == "Diesel" || fuel == "Gasoline" || fuel == "Gas") {
        console.log(textToPrint);
    } else {
        console.log("Invalid fuel!");
    }
}
fuelTank(["Gas", 200]);
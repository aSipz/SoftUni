function bikeRace(input) {
    let numJuniors = parseInt(input[0]);
    let numSeniors = parseInt(input[1]);
    let trialType = input[2];
    let taxIncome = 0;
    switch (trialType) {
        case "trail":
            taxIncome = 5.5 * numJuniors + 7 * numSeniors;
            break;
        case "cross-country":
            taxIncome = 8 * numJuniors + 9.5 * numSeniors;
            if ((numJuniors + numSeniors) >= 50) {
                taxIncome = 0.75 * taxIncome;
            }
            break;
        case "downhill":
            taxIncome = 12.25 * numJuniors + 13.75 * numSeniors;
            break;
        case "road":
            taxIncome = 20 * numJuniors + 21.5 * numSeniors;
            break;
    }
    taxIncome = taxIncome * 0.95;
    console.log(taxIncome.toFixed(2));
}
bikeRace([10,20, "trail"]);
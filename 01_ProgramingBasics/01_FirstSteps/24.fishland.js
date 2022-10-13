function fishland(input) {
    let priceMackerel = Number (input[0]);
    let priceSprat = Number (input[1]);
    let weightBonito = Number (input[2]);
    let weightScad = Number (input[3]);
    let weightMussels = Number (input[4]);
    let priceBonito = 1.6*priceMackerel;
    let priceScad = 1.8*priceSprat;
    let totalSum = priceBonito*weightBonito + priceScad*weightScad + weightMussels*7.5;
    console.log(totalSum.toFixed(2));
}
fishland([6.9,4.2,1.5,2.5,1]);
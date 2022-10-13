function godzilla(input) {
    let budget = Number(input[0]);
    let numStat = Number(input[1]);
    let priceOutfit = Number(input[2]);
    let decor = 0.1*budget;
    if (numStat > 150) {
        priceOutfit = priceOutfit*0.9;
    }
    let moneyNeeded = decor + (numStat*priceOutfit);
    let calc = budget-moneyNeeded;
    if (calc < 0) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(calc.toFixed(2))} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${calc.toFixed(2)} leva left.`);
    }
    
}
godzilla([9587.88, 200, 55.68]);
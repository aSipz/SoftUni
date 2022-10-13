function toyShop(input) {
    let priceHoliday = Number(input[0]);
    let qttPuzzle = Number(input[1]);
    let qttDoll = Number(input[2]);
    let qttBear = Number(input[3]);
    let qttMinion = Number(input[4]);
    let qttTruck = Number(input[5]);
    let qttTotal = qttBear+qttDoll+qttMinion+qttPuzzle+qttTruck;
    let pricePuzzle = qttPuzzle*2.6;
    let priceDoll = qttDoll*3;
    let priceBear = qttBear*4.1;
    let priceMinion = qttMinion*8.2;
    let priceTruck = qttTruck*2;
    let profit = (priceBear+priceDoll+priceMinion+pricePuzzle+priceTruck)*0.9;
    if (qttTotal >= 50) {
        profit = (priceBear+priceDoll+priceMinion+pricePuzzle+priceTruck)*0.9*0.75;
    } 
    let result = Math.abs (profit - priceHoliday);
    if (profit >= priceHoliday) {
        console.log(`Yes! ${result.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`)
    }
}
toyShop([320, 8,2,5,5,1]);
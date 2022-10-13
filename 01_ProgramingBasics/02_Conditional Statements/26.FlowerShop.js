function flowerShop(input) {
    let numMag = parseInt(input[0]);
    let numZum = parseInt(input[1]);
    let numRose = parseInt(input[2]);
    let numCac = parseInt(input[3]);
    let giftPrice = Number(input[4]);
    let priceMag = numMag * 3.25;
    let priceZum = numZum * 4;
    let priceRose = numRose * 3.5;
    let priceCac = numCac * 8;
    let totalPrice = priceMag + priceZum + priceRose + priceCac;
    let profit = 0.95 * totalPrice;
    let diff = Math.abs(profit - giftPrice);
    if (profit >= giftPrice) {
        console.log(`She is left with ${Math.trunc(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }
}
flowerShop([15,7,5,10,100]);
function shopping(input) {
    let budget = Number(input[0]);
    let numGPU = Number(input[1]);
    let numCPU = Number(input[2]);
    let numRAM = Number(input[3]);
    let GPUprice = numGPU * 250;
    let CPUprice = 0.35*GPUprice*numCPU;
    let RAMprice = 0.1*GPUprice*numRAM;
    let totalPrice = GPUprice + CPUprice + RAMprice;
    let finalPrice = totalPrice;
    if (numGPU > numCPU) {
        finalPrice = totalPrice*0.85;
    }
    let moneyLeft = Math.abs(budget - finalPrice);
    if (budget >= finalPrice) {
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva more!`);
    }
}
shopping([920,0,1,1]);
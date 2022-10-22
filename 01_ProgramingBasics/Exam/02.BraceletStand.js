function braceletStand(input) {
    const daysLeft = 5;
    let moneyPerDay = Number(input[0]);
    let moneyEarnedPerDay = Number(input[1]);
    let totalExpenses = Number(input[2]);
    let giftPrice = Number(input[3]);
    let profit = (moneyEarnedPerDay + moneyPerDay) * daysLeft - totalExpenses;
    if (profit >= giftPrice) {
        console.log(`Profit: ${profit.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(giftPrice - profit).toFixed(2)} BGN.`);
    }
}
braceletStand(["2.10",
    "17.50",
    "20.20",
    "148.50"]);
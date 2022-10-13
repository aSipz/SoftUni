function dailyEarnings(input) {
    let workDays = parseInt(input[0]);
    let moneyPerDay = parseFloat(input[1]);
    let usdToBgn = parseFloat(input[2]);
    let yearEarnings = workDays * moneyPerDay * 12;
    let bonus = workDays * moneyPerDay * 2.5;
    let finalEarnings = (yearEarnings + bonus) * 0.75;
    console.log((finalEarnings*usdToBgn/365).toFixed(2));
}
dailyEarnings([15, 105 ,1.71]);
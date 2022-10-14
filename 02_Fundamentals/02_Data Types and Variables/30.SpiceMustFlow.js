function spice(startingYield) {
    let days = 0;
    let totalAmount = 0;
    let yieldPerDay = startingYield;
    while (true) {
        if (yieldPerDay < 100) {
            break;
        }
        totalAmount += yieldPerDay;
        totalAmount -= 26;
        days++;
        yieldPerDay -= 10;
        if (yieldPerDay < 100) {
            totalAmount -= 26;
            totalAmount < 0 ? totalAmount = 0 : totalAmount;
            break;
        }
        totalAmount < 0 ? totalAmount = 0 : totalAmount;
    }
    console.log(days);
    console.log(totalAmount);
}
spice(99);
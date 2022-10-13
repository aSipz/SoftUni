function backToThePast(input) {
    let inheritance = parseFloat(input[0]);
    let yearToLiveTo = parseInt(input[1]);
    let years = yearToLiveTo - 1800 + 1;
    let moneySpent = 0;
    for (i = 1; i <= years; i++) {
        if (i%2 != 0) {
            moneySpent += 12000;
        } else {
            moneySpent += 12000 + 50 * (18 + i - 1);
        }
    }
    if (inheritance >= moneySpent) {
        console.log(`Yes! He will live a carefree life and will have ${(inheritance - moneySpent).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(moneySpent - inheritance).toFixed(2)} dollars to survive.`);
    }
}
backToThePast([100000.15, 1808]);
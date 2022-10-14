function gladiator(fightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;
    let currentFight = 1;
    let shieldBreakCount = 0;
    while (currentFight <= fightsCount) {
        if (currentFight % 2 == 0) {
            totalExpenses += helmetPrice;
        }
        if (currentFight % 3 == 0) {
            totalExpenses += swordPrice;
        }
        if (currentFight % 6 == 0) {
            totalExpenses += shieldPrice;
            shieldBreakCount++;
        }
        if (shieldBreakCount == 2) {
            totalExpenses += armorPrice;
            shieldBreakCount = 0;
        }
        currentFight++;
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiator(23,12.5,21.5,40,200);
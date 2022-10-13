function happyCat(input) {
    let daysCount = Number(input[0]);
    let hoursPerDay = Number(input[1]);
    let totalPrice = 0;
    for (let i = 1; i <= daysCount; i++) {
        let priceForDay = 0;
        for (let j = 1; j <= hoursPerDay; j++) {
            if (i % 2 == 0 && j % 2 != 0) {
                priceForDay += 2.5;
            } else if (i % 2 != 0 && j % 2 == 0) {
                priceForDay += 1.25;
            } else {
                priceForDay++;
            }
        }
        totalPrice += priceForDay;
        console.log(`Day: ${i} - ${priceForDay.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
happyCat([2,5]);
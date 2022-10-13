function vacation(input) {
    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    let i = 2;
    let actionType = input[i];
    let money = Number(input[i+1]);
    let savedEnough = false;
    let daysToSpend = 0;
    while (true) {
        actionType = input[i];
        money = Number(input[i+1]);
        if (actionType == 'spend') {
            availableMoney >= money ? availableMoney -= money : availableMoney = 0;
            daysToSpend++;
            if (daysToSpend == 5) {
                break;
            }
        } else {
            availableMoney += money;
            daysToSpend = 0;
        }
        if (availableMoney >= neededMoney) {
            savedEnough = true;
            break;
        }
        i += 2;
    }
    if (savedEnough) {
        console.log(`You saved the money for ${i / 2} days.`);
    } else {
        console.log('You can\'t save the money.');
        console.log(i / 2);
    }
}
vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"]);

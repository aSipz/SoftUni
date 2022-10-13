function cleverLily(input) {
    let ageLily = parseInt(input[0]);
    let washerPrice = parseFloat(input[1]);
    let toyPrice = parseInt(input[2]);
    let moneyPerBD = 0
    let moneyFromToys = 0
    let totalMoney = 0;
    for (i = 2; i <= ageLily; i += 2) {
        moneyPerBD += 10 * i / 2;
        moneyPerBD--;
    }
    for (i = 1; i <= ageLily; i += 2) {
        moneyFromToys += toyPrice;
    }
    totalMoney = moneyPerBD + moneyFromToys;
    if ( totalMoney >= washerPrice) {
        console.log(`Yes! ${(totalMoney - washerPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washerPrice - totalMoney).toFixed(2)}`);
    }
}
cleverLily([21,1570.98,3]);
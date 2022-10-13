function coins(input) {
    let change = Number(input[0]) * 100;
    let num2lv = 0;
    let num1lv = 0;
    let num50st = 0
    let num20st = 0;
    let num10st = 0;
    let num5st = 0;
    let num2st = 0;
    let num1st = 0;
        num2lv = Math.floor(change / 200);
        change -= num2lv * 200;
        num1lv = Math.floor(change / 100);
        change -= num1lv * 100;
        if (change >= 50) {
            num50st++;
            change -= 50;
        }
        num20st = Math.floor(change / 20);
        change -= num20st * 20;
        if (change >= 10) {
            num10st++;
            change -= num10st * 10;
        }
        if (change >= 5) {
            num5st++;
            change -= num5st * 5;
        }
        num2st = Math.floor(change / 2);
        change -= num2st * 2;
        if (change >= 1) {
            num1st = change * 1;
        }

    let sum = num2lv + num1lv + num50st + num20st + num10st + num5st + num2st + num1st;
    console.log(sum);
}
coins([0.59])
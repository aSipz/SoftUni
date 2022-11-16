function solve(num1, num2) {
    let greatestNum = 1;
    for (let i = 2; i <= Math.min(num1, num2); i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            greatestNum = i;
        }
    }
    console.log(greatestNum);
}
solve(2154, 458);
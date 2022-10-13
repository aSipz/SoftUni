function numbersDivisible(input) {
    let num1 = parseInt(input[0]);
    let num2 = parseInt(input[1]);
    let firstNum = num1 - num1 % 9;
    if (num1%9 != 0) {
        firstNum += 9;
    }
    let lastNum = num2 - num2 % 9;
    let output = 0;
    for (let i = firstNum; i <= lastNum; i += 9) {
        output += i;
    }
    console.log(`The sum: ${output}`);
    for (let i = firstNum; i <= lastNum; i += 9) {
        console.log(i);
    }
}
numbersDivisible([100,200]);
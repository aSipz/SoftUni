function calculation(num1, num2, num3) {
    let sum = (num1, num2) => num1 + num2;
    let subtract = (num1, num2, num3) => sum(num1, num2) - num3;
    return subtract(num1, num2, num3);
}
console.log(calculation(1,17,30));
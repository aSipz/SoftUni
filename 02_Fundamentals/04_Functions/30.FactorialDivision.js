function factorialDivision(num1, num2) {
    function factorialCalc(num) {
        if (num == 0) {
            return 1;
        } else {
            return num * factorialCalc(num - 1);
        }
    }
    let result = factorialCalc(num1) / factorialCalc(num2);
    return result.toFixed(2);
}
console.log(factorialDivision(6,2));
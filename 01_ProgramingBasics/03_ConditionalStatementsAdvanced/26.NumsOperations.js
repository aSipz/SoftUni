function numOperations(input) {
    let n1 = parseInt(input[0]);
    let n2 = parseInt(input[1]);
    let operator = input[2];
    let result = 0;
    let evenOddCheck = 0;
    switch (operator) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            result = n1 / n2;
            break;
        case "%":
            result = n1 % n2;
            break;
    }
    if (operator == "+" || operator == "-" || operator == "*") {
        if (result % 2 == 0) {
            evenOddCheck = "even";
        } else {
            evenOddCheck = "odd";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOddCheck}`);
    } else if (operator == "/") {
        if (n2 != 0) {
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
        } else {
            console.log(`Cannot divide ${n1} by zero`);
        }
    } else if (operator == "%") {
        if (n2 != 0) {
            console.log(`${n1} % ${n2} = ${result}`);
        } else {
            console.log(`Cannot divide ${n1} by zero`);
        }    
    }
}
numOperations([10,0,"%"]);
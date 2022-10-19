let calculator = (numOne, numTwo, operator) => {
    let multiply = (numOne, numTwo) => numOne * numTwo;
    let divide = (numOne, numTwo) => numOne / numTwo;
    let add = (numOne, numTwo) => numOne + numTwo;
    let subtract = (numOne, numTwo) => numOne - numTwo;
    switch (operator) {
        case 'multiply':
            multiply();
            break;
    }
}
console.log(calculator(5,5,'multiply'));
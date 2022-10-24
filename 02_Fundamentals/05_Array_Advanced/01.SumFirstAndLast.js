function sum(input) {
    let arrayWithNumbers = input.map(Number);
    let firstElement = arrayWithNumbers[0];
    let lastElement = arrayWithNumbers.pop()
    let sum = firstElement + lastElement;
    console.log(sum);
}
sum(['20', '30', '40']);
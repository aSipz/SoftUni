function decreasing(input) {
    let arrayToPrint = [];
    let currentBiggest = input[0];
    arrayToPrint.push(input[0]);
    for (let i = 1; i< input.length; i++) {
        if (input[i] >= currentBiggest) {
            currentBiggest = input[i];
            arrayToPrint.push(input[i]);
        }
    }
    console.log(arrayToPrint.join(' '));
}
decreasing([ 20, 3, 2, 15, 6, 1, 20]);
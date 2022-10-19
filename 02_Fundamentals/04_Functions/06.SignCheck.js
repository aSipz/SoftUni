function signCheck(numOne, numTwo, numThree) {
    let arrOfNums = [numOne, numTwo, numThree];
    let negetiveCounter = 0;
    let result;
    for (let i = 0; i < arrOfNums.length; i++) {
        if (arrOfNums[i] < 0) {
            negetiveCounter++
        }
    }
    if (negetiveCounter % 2 == 0) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }
    return result;
}
console.log(signCheck(-5,-12,-15));
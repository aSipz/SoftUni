function sumOfDigits(num) {
    let numToString = num.toString();
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i <numToString.length; i++) {
        if (Number(numToString[i]) % 2 == 0) {
            evenSum += Number(numToString[i]);
        } else {
            oddSum += Number(numToString[i]);
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
console.log(sumOfDigits(3495892137259234));
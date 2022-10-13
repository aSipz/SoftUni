function sumOfNumbers(input) {
    let num = input[0].toString();
    let output = 0
    for (let i = 0; i < num.length; i++) {
        output += Number (num[i]);
    }
    console.log(`The sum of the digits is:${output}`);
}
sumOfNumbers([564891]);
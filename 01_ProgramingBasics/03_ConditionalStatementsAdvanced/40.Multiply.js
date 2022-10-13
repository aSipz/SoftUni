function multiply(input) {
let index = 0;
while (true) {
    let num = Number(input[index]);
    index++;
    if (num < 0) {
        break;
    }
    console.log(`Result: ${(num*2).toFixed(2)}`)
}
console.log("Negative number!");
}
multiply([23.43,
    12.3245,
    0,
    65.23432,
    23,
    65,
    -12
    ]);
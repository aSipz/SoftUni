function solve(input) {
    let parse = {
        '+'(a, b) { return a + b },
        '-'(a, b) { return a - b },
        '*'(a, b) { return a * b },
        '/'(a, b) { return a / b },
    }
    let hasEnded = false;
    let numArray = [];
    for (const element of input) {
        if (!isNaN(element)) {
            numArray.push(element)
        } else {
            if (numArray.length >= 2) {
                let b = numArray.pop();
                let a = numArray.pop();
                numArray.push(parse[element](a, b));
            } else {
                console.log('Error: not enough operands!');
                hasEnded = true;
            }
        }
    }
    if (numArray.length > 1) {
        console.log(`Error: too many operands!`);
    } else if (!hasEnded) {
        console.log(numArray[0]);
    }
}
solve([15,
    '/']
);
function prime(input) {
    let num = Number(input[0]);
    let primeSum = 0;
    let nonPrimeSum = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'stop') {
            break;
        }
        num = Number(input[i]);
        let isPrime = true;
        if (num < 0) {
            console.log('Number is negative.');
        } else if (num >= 1 && num <= 3) {
            primeSum += num;
        } else {
        for (let j = 2; j < num; j++) {
            if (num % j == 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            primeSum += num;
        } else {
            nonPrimeSum += num;
        }
        }
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
prime(["3",

"9",

"0",

"7",

"19",

"4",

"stop"]);
function specialNumbers(input) {
    let num = Number(input[0]);
    let toPrint = ''
    for (let i = 1; i < 10; i++) {
        let firstDigit = 0;
        let secondDigit = 0;
        let thirdDigit = 0;
        let fourthDigit = 0;
        if (num % i == 0) {
            firstDigit = i;
            for (let j = 1; j < 10; j++) {
                if (num % j == 0) {
                    secondDigit = j;
                    for (let k = 1; k < 10; k++) {
                        if (num % k == 0) {
                            thirdDigit = k;
                            for (let l = 1; l < 10; l++) {
                                if (num % l == 0) {
                                    fourthDigit = l;
                                    toPrint += '' + firstDigit + secondDigit + thirdDigit + fourthDigit + ' ';
                                }
                                
                            }
                        }
                    }
                }
                
            }
        }
    }
    console.log(toPrint);
}
specialNumbers([16]);
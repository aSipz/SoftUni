function uniqueCodes(input) {
    let firstNumMax = Number(input[0]);
    let secondNumMax = Number(input[1]);
    let thirdNumMax = Number(input[2]);
    let toPrint = ''
    for (let i = 2; i <= firstNumMax; i++) {
        let firstDigit = 0;
        let secondDigit = 0;
        let thirdDigit = 0;
        if (i % 2 == 0) {
            firstDigit = i;
            for (let j = 2; j <= secondNumMax; j++) {
                if ( j == 2 || j == 3 || j == 5 || j == 7) {
                    secondDigit = j;
                    for (let k = 2; k <= thirdNumMax; k++) {
                        if (k % 2 == 0) {
                            thirdDigit = k;
                            toPrint = firstDigit + ' ' + secondDigit + ' ' + thirdDigit;
                            console.log(toPrint);
                        }
                    }
                }
            }
        }
    }
}
uniqueCodes([8,2,8]);
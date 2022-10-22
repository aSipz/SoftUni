function multiplyTable(input) {
    let num = input[0].toString();
    for (let i = 1; i <= Number(num[2]); i++) {
        let firstDigit = i;
        for (let j = 1; j <= Number(num[1]); j++) {
            let secondDigit = j;
            for (let k = 1; k <= Number(num[0]); k++) {
                let thirdDigit = k;
                let result = i * j * k;
                console.log(`${firstDigit} * ${secondDigit} * ${thirdDigit} = ${result};`);
            }
        }
    }
}
multiplyTable([222]);
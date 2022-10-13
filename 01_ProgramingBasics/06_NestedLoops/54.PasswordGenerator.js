function passGenerator(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);
    let toPrint = '';
    for (let i = 1; i <= n; i++) {
        let pass = '';
        let firstSymbol = i;
        for (let j = 1; j <= n; j++) {
            let secondSymbol = j;
            for (let k = 'a'.charCodeAt(); k < 'a'.charCodeAt() + l; k++) {
                let thirdSymbol = String.fromCharCode(k);
                for (let p = 'a'.charCodeAt(); p < 'a'.charCodeAt() + l; p++) {
                    let fourthSymbol = String.fromCharCode(p);
                    for (let h = 1; h <= n; h++) {
                        let fifthSymbol = '';
                        if (h > i && h > j) {
                            fifthSymbol = h;
                            pass = '' + firstSymbol + secondSymbol + thirdSymbol + fourthSymbol + fifthSymbol;
                            toPrint += pass + ' ';
                        }
                    }
                }
            }
        }
    }
    console.log(toPrint);
}
passGenerator([3,1]);
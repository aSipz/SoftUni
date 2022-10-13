function squareFrame(input) {
    let n = Number(input[0]);
    for (i = 1; i <= n; i++) {
        let symbol = '';
        let line = '';
        for (let j = 1; j <= n; j++) {
            if ((i == 1 || i == n) && (j == 1 || j == n)) {
                symbol = '+';
            } else if ((i != 1 || i != n) && (j == 1 || j == n)) {
                symbol = '|';
            } else {
                symbol = '-';
            }
            if (j == 1) {
                line = symbol;
                continue;
            }
            line += ' ' + symbol;
        }
        console.log(line);
    }
}
squareFrame([10]);
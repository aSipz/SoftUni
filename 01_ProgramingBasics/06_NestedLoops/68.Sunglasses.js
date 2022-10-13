function sunglasses(input) {
    let n = Number(input[0]);
    for (let row = 1; row <= n; row++) {
        let symbol = '';
        let line = '';
        for (let j = 1; j <= 2 * n; j++) {
            if (row == 1 || row == n) {
                symbol = '*';
            } else if ((row != 1 || row != n) && (j == 1 || j == 2 * n)) {
                symbol = '*';
            } else {
                symbol = '/';
            }
            line += symbol;
        }
        for (let j = 1; j <= n; j++) {
            if (row == Math.ceil(n / 2)) {
                symbol = '|';
            } else {
                symbol = ' ';
            }
            line += symbol;
        }
        for (let j = 1; j <= 2 * n; j++) {
            if (row == 1 || row == n) {
                symbol = '*';
            } else if ((row != 1 || row != n) && (j == 1 || j == 2 * n)) {
                symbol = '*';
            } else {
                symbol = '/';
            }
            line += symbol;
        }
        console.log(line);
    }
}
sunglasses([7]);
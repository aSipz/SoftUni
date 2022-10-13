function house(input) {
    let n = Number(input[0]);
    for (let row = 1; row <= Math.ceil(n / 2); row++) {
        let symbol = '';
        let line = '';
        if (n % 2 == 0) {
            for (let j = 1; j <= n / 2 - row; j++) {
                symbol = '-';
                line += symbol;
            }
            for (let j = 1; j <= row * 2; j++) {
                symbol = '*';
                line += symbol;
            }
            for (let j = 1; j <= n / 2 - row; j++) {
                symbol = '-';
                line += symbol;
            }
        } else {
            for (let j = 1; j <= (n + 1) / 2 - row; j++) {
                symbol = '-';
                line += symbol;
            }
            for (let j = 1; j <= row * 2 - 1; j++) {
                symbol = '*';
                line += symbol;
            }
            for (let j = 1; j <= (n + 1) / 2 - row; j++) {
                symbol = '-';
                line += symbol;
            }
        }
        console.log(line);
    }
    for (let row = 1; row <= n / 2; row++) {
        let symbol = '';
        let line = '';
        for (let j = 1; j <= n; j++) {
            if (j == 1 || j == n) {
                symbol = '|';
            } else {
                symbol = '*';
            }
            line += symbol;
        }
        console.log(line);
    }
}
house([5]);
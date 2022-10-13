function diamond(input) {
    let n = Number(input[0]);
    let allRows = n;
    if (n % 2 == 0) {
        allRows--;
    }
    for (let row = 1; row <= Math.ceil(n / 2); row++) {
        let symbol = '';
        let line = '';
        for (let j = 1; j <= Math.ceil(n / 2) - row; j++) {
            symbol = '-';
            line += symbol;
        }
        if (n % 2 == 0 && row == 1) {
            line += '**';
        } else {
            line += '*';
        }
        if (row != 1) {
            if (n % 2 == 0) {
                for (let j = 1; j <= 2 * row - 2; j++) {
                    symbol = '-';
                    line += symbol;
                }
            } else {
                for (let j = 1; j <= 2 * row - 3; j++) {
                    symbol = '-';
                    line += symbol;
                }
            }
            line += '*';
        }
        for (let j = 1; j <= Math.ceil(n / 2) - row; j++) {
            symbol = '-';
            line += symbol;
        }
        console.log(line);
    }
    for (let row = 1; row <= Math.ceil(n / 2) - 1; row++) {
        let symbol = '';
        let line = '';
        for (let j = 1; j <= row; j++) {
            symbol = '-';
            line += symbol;
        }
        if (n % 2 == 0 && row == Math.ceil(n / 2) - 1) {
            line += '**';
        } else {
            line += '*';
        }
        if (row != Math.ceil(n / 2) - 1) {
            for (let j = 1; j <= n - 2 * row - 2; j++) {
                symbol = '-';
                line += symbol;
            }
            line += '*';
        }
        for (let j = 1; j <= row; j++) {
            symbol = '-';
            line += symbol;
        }
        console.log(line);
    }
}
diamond([8]);
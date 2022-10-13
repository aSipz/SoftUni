function rhombus(input) {
    let n = Number(input[0]);
    for (let i = 1; i <= n; i++) {
        let line = '';
        let symbol = '';
        for (let j = 1; j <= n - i; j++) {
            symbol = ' ';
            line += symbol
        }
        line += '*';
        for (let j = 1; j <= i - 1; j++) {
            symbol = ' *';
            line += symbol
        }
        console.log(line);
    }
    for (let i = 1; i <= n - 1; i++) {
        let line = '';
        let symbol = '';
        for (let j = 1; j <= i; j++) {
            symbol = ' ';
            line += symbol;
        }
        line += '*';
        for (let j = 1; j <= n - i - 1; j++) {
            symbol = ' *';
            line += symbol;
        }
        console.log(line);
    }
}
rhombus([10]);
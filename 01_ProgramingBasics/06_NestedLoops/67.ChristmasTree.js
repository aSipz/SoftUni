function tree(input) {
    let n = Number(input[0]);
    for (let row = 1; row <= n + 1; row++) {
        let symbol = '';
        let line = '';
        for (let j = 1; j <= n - row + 1; j ++) {
            symbol = ' ';
            line += symbol;
        }
        for (let j = 1; j <= row - 1; j++) {
            symbol = '*';
            line += symbol;
        }
        line += ' | ';
        for (let j = 1; j <= row - 1; j++) {
            symbol = '*';
            line += symbol;
        }
        console.log(line);
    }
}
tree([1]);
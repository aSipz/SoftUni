function squareStar(input) {
    let n = Number(input[0]);
    for (i = 1; i <= n; i++) {
        let symbol = '*';
        for (let j = 1; j < n; j++) {
            symbol += ' *';
        }
        console.log(symbol);
    }
}
squareStar([3]);
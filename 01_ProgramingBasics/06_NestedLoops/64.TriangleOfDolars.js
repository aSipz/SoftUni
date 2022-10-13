function triangle(input) {
    let n = Number(input[0]);
    for (let i = 1; i <= n; i++) {
        let symbol = '$';
        for (let j = 1; j < i; j++) {
            symbol += ' $';  
        }
        console.log(symbol);
    }
}
triangle([5]);
function solve(num, digit) {
    let binariNum = '';
    let count = 0;
    let binariDigit = '';
    if (digit == 0) {
        binariDigit = 'zeroes'
    }
    if (digit == 1) {
        binariDigit = 'ones'
    }
    while (num != 0) {
        binariNum += num % 2;
        if (num % 2 == digit) {
            count++;
        }
        num = Math.floor(num / 2);
    }
    binariNum = binariNum
    .split('')
    .reverse()
    .join('');
    // console.log((15).toString(2));
    console.log(`${num} -> ${binariNum}`);
    console.log(`We have ${count} ${binariDigit}`);
}
solve(15,1);
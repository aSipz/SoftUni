function solve(m, n) {
    let num1 = Number(m);
    let num2 = Number(n);
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
}
solve('-8', '20');
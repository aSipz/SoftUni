function solve(num) {
    let sum = 0;
    for (let i = 1; i <= 2 * num - 1; i += 2) {
        console.log(i);
        sum += i;
    }
    console.log(`Sum: ${sum}`);
}
solve(5);
function accBalance(input) {
    let i = 0;
    let sum = 0;
    while (true) {
        if (input[i] == 'NoMoreMoney') {
            console.log(`Total: ${sum.toFixed(2)}`);
            break;
        }
        if (Number(input[i]) < 0) {
            console.log(`Invalid operation!`);
            console.log(`Total: ${sum.toFixed(2)}`);
            break;
        }
        sum += Number(input[i]);
        console.log(`Increase: ${Number(input[i]).toFixed(2)}`);
        i++;
    }
}
accBalance(["120",
"45.55",
"-150"]);

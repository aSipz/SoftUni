function multiplicationTable(input) {
    let a = parseInt(input[0]);
    let result = 0;
    for (i = 1; i < 11; i++) {
        result = a * i;
        console.log(`${i} * ${a} = ${result}`);
    }
}
multiplicationTable([5]);
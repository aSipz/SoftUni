function sum(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let combination = 0;
    let isFound = false;
    let first = 0;
    let second = 0;
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combination++;
            if (i + j == magicNum) {
                isFound = true;
                first = i;
                second = j;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (isFound) {
        console.log(`Combination N:${combination} (${first} + ${second} = ${magicNum})`);
    } else {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}
sum([1,10,5])
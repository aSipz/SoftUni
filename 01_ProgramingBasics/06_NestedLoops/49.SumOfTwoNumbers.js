function sumOfNum(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let combination = 0;
    let isFound = false;
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combination++;
            if (i + j == magicNum) {
                isFound = true;
                console.log(`Combination N:${combination} (${i} + ${j} = ${magicNum})`);
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }
}
sumOfNum([88,888,1000]);
function solve(num, position) {
    let binaryNum = num.toString(2);
    console.log(`${binaryNum.padStart(16, 0)} -> ${binaryNum[binaryNum.length - position - 1]}`);
}
solve(2145, 6);
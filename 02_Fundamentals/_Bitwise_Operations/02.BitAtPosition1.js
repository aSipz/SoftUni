function solve(num) {
    let binaryNum = num.toString(2);
    console.log(`${binaryNum.padStart(8, 0)}->${binaryNum[binaryNum.length - 2]}`);
}
solve(51);
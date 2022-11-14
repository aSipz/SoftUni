function solve(num, position) {
    let binaryNum = num.toString(2).padStart(16, 0);
    let binaryArray = binaryNum.split('');
    binaryArray[binaryArray.length - position - 1] = 0;
    console.log(`${binaryNum} - > ${binaryArray.join('')}`);
}
solve(1313, 5);
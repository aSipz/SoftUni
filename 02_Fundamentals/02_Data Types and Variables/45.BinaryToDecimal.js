function binary(binaryNum) {
    let decimal = 0;
    for (let i = 0; i < binaryNum.length; i++) {
        decimal += Number(binaryNum[i]) * 2 ** (binaryNum.length - i - 1);
    }
    console.log(decimal);
}
binary('11110000')
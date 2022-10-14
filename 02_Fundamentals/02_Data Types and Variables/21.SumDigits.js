function sumDigits(num) {
    let stringFromNum = num.toString();
    let sum = 0;
    for (let i = 0; i < stringFromNum.length; i++) {
        sum += Number(stringFromNum[i]);
    }
    console.log(sum);
}
sumDigits(245678);
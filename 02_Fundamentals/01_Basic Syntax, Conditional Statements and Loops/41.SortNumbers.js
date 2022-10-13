function sort(num1, num2, num3) {
    let minNum = Math.min(num1, num2, num3);
    let maxNum = Math.max(num1, num2, num3);
    let midNum = num1 + num2 + num3 - minNum - maxNum;
    console.log(maxNum);
    console.log(midNum);
    console.log(minNum);
}
sort(0,0,2);
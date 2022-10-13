function specialNums(num) {
    let printNum = 0;
    for ( let i = 1; i <= num; i++) {
        let sumDigits = 0;
        let output = ''
        printNum = i;
        printNum = printNum.toString();
        for (let j = 0; j < printNum.length; j++) {
            sumDigits += Number(printNum[j]);
        }
        output = sumDigits == 5 || sumDigits == 7 || sumDigits == 11 ? ' -> True' : ' -> False';
        console.log(printNum + output);
    }
}
specialNums(15);
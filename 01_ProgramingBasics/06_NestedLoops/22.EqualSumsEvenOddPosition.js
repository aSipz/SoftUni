function sum(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let toPrint = '';
    for (let i = startNum; i <= endNum; i++) {
        let num = i;
        let numString = num.toString();
        let sumDecimalsOdd = 0;
        let sumDecimalsEven = 0;
        for (let j = 0; j < numString.length; j++) {
            sumDecimalsOdd += Number(numString[j])
            j++;
            sumDecimalsEven += Number(numString[j])
        }
        if (sumDecimalsEven == sumDecimalsOdd) {
            toPrint += num + ' '
        }
    }
    console.log(toPrint);
}
sum(["100000",
"100050"]);
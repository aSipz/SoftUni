function subtraction(arr) {
    let sumOdd = 0;
    let sumEven = 0;
    let result = 0;
    for (let num of arr) {
        num = Number(num);
        if (num % 2 == 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    result = sumEven - sumOdd;
    console.log(result);
}
subtraction([3,5,7,9]);
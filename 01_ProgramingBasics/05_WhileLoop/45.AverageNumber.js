function averageNumber(input) {
    let count = Number(input[0]);
    let sum = 0;
    let result = 0;
    for (let i = 1; i <= count; i++) {
        sum += Number(input[i]);
    }
    result = sum / count;
    console.log(result.toFixed(2));
}
averageNumber([4,3,2,4,2]);
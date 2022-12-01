function extract(input) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let resultArray = [];
    for (const num of input) {
        if (num >= biggestNum) {
            resultArray.push(num);
            biggestNum = num;
        }
    }
    return resultArray;
}
extract([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );
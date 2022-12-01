function sorting(input) {
    input.sort((a, b) => a - b);
    let resultArray = [];
    for (let i = 0; i < input.length / 2; i++) {
        resultArray.push(input[i]);
        resultArray.push(input[input.length - i - 1]);
    }
    if (input.length % 2 != 0) {
        resultArray.pop();
    }
    return resultArray;
}
sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
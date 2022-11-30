function lastNumbers(n, k) {
    let resultArray = [1];
    for (let i = 1; i < n; i++) {
        let currentArray = resultArray.slice(-k);
        let currentElement = currentArray.reduce((acc, cur) => acc + cur);
        resultArray.push(currentElement);
    }
    return resultArray;
}
lastNumbers(8, 2);
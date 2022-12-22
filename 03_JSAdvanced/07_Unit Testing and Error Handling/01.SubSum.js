function sum(input, startIn, endIn) {
    if (!Array.isArray(input)) {
        return NaN;
    }
    if (startIn < 0) {
        startIn = 0;
    }
    if (endIn > input.length - 1) {
        endIn = input.length - 1;
    }
    let result = input
        .slice(startIn, endIn + 1)
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);
    return result;
}
console.log(sum([], 1, 2));
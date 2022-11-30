function biggerHalf(input) {
    let outputArrayLength = Math.floor(input.length / 2);
    let outputArray = input.sort((a, b) => a - b).slice(outputArrayLength);
    return outputArray;
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
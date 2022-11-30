function processOdd(input) {
    let resultArray = input
        .filter((_, index) => index % 2 != 0)
        .map(a => a * 2)
        .reverse();
        console.log(resultArray.join(' '));
}
processOdd([3, 0, 10, 4, 7, 3]);
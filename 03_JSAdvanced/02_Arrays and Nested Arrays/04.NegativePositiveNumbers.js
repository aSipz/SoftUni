function solve(input) {
    let resultArray = [];
    input.forEach(element => {
        if (element < 0) {
            resultArray.unshift(element);
        } else {
            resultArray.push(element);
        }
    });
    console.log(resultArray.join('\n'));
}
solve([3, -2, 0, -1]);
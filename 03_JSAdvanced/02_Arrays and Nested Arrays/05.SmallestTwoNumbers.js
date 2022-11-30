function solve(input) {
    let resultArray = input.sort((a,b) => a - b).slice(0,2);
    console.log(resultArray.join(' '));
}
solve([30, 15, 50, 5]);
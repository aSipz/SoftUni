function sorting(input) {
    input.sort((a, b) => b - a);
    let sortedArray = [];
    for (let i = 0; i < input.length / 2; i++) {
        sortedArray.push(input[i]);
        if (i != input.length - i - 1) {
            sortedArray.push(input[input.length - i - 1]);
        }
    }
    console.log(sortedArray.join(' '));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19,47]);
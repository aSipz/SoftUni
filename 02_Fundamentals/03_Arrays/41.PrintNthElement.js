function printNum(input) {
    let inputLength = input.length
    let step = Number(input[inputLength - 1]);
    let newArr = [];
    for (let i = 0; i < inputLength - 1; i += step) {
        newArr.push(input[i]);
    }
    console.log(newArr.join(' '));
}
printNum(['dsa', 'asd', 'test', 'test', '2']);
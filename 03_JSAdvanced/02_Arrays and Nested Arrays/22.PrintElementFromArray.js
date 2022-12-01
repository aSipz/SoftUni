function printElement(input, num) {
    let resultArray = [];
    for (let i = 0; i < input.length; i+=num) {
        resultArray.push(input[i]);
    }
    return resultArray
}
printElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);
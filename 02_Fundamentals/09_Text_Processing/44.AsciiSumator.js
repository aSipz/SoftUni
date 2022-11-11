function sumator(input) {
    let firstCharCode = input.shift().charCodeAt();
    let secondCharCode = input.shift().charCodeAt();
    let string = input.shift();
    if (firstCharCode > secondCharCode) {
        let temp = firstCharCode;
        firstCharCode = secondCharCode;
        secondCharCode = temp;
    }
    let sum = 0;
    for (const char of string) {
        let currentCharCode = char.charCodeAt();
        if (currentCharCode > firstCharCode && currentCharCode < secondCharCode) {
            sum += currentCharCode
        }
    }
    console.log(sum);
}
sumator(['a',
'1',
'jfe392$#@j24ui9ne#@$']
);
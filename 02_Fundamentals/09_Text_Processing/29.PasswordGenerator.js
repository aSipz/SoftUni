function passGenerator(input) {
    let firstString = input.shift();
    let secondString = input.shift();
    let word = input.shift();
    let resultString = firstString.concat(secondString).toLowerCase();
    let index = 0;
    for (let i = 0; i < resultString.length; i++) {
        switch (resultString[i]) {
            case 'a':
            case 'e':
            case 'o':
            case 'i':
            case 'u':
                if (index == word.length) {
                    index = 0;
                }
                resultString = resultString.replace(resultString[i], word[index].toUpperCase());
                index++;
                break;
        }
    }
    resultString = resultString
        .split('')
        .reverse()
        .join('');
    console.log(`Your generated password is ${resultString}`);
}
passGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]

);
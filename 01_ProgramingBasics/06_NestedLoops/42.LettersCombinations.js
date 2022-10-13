function lettersCombinations(input) {
    let char1 = input[0];
    let char2 = input[1];
    let char3 = input[2];
    let combinations = 0;
    let toPrint = '';
    for (let i = char1.charCodeAt(); i <= char2.charCodeAt(); i++) {
        let firstChar = '';
        let secondChar = '';
        let thirdChar = '';
        let code = '';
        if (i != char3.charCodeAt()) {
            firstChar = String.fromCharCode(i);
            for (let j = char1.charCodeAt(); j <= char2.charCodeAt(); j++) {
                if (j != char3.charCodeAt()) {
                    secondChar = String.fromCharCode(j);
                    for (let k = char1.charCodeAt(); k <= char2.charCodeAt(); k++) {
                        if (k != char3.charCodeAt()) {
                            thirdChar = String.fromCharCode(k);
                            code = firstChar + secondChar + thirdChar;
                            combinations++;
                            toPrint += code + ' ';
                        }
                    }
                }
            }
        }
    }
    console.log(toPrint + combinations);
}
lettersCombinations(['a', 'c', 'b']);
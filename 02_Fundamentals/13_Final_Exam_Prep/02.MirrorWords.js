function mirrorWords(input) {
    const string = input.shift();

    const pattern = /(?:@[A-Za-z]{3,}@){2}|(?:#[A-Za-z]{3,}#){2}/g;
    const splitPattern = /@|#/;

    const resultArr = string.match(pattern) ? string.match(pattern) : [];
    const validPairs = resultArr.length;

    const mirrorWords = resultArr.filter(extractMirrorWords).map(w => w.split(splitPattern).filter(e => e).join(' <=> '));

    validPairs > 0
        ? console.log(`${validPairs} word pairs found!`)
        : console.log('No word pairs found!');

    mirrorWords.length > 0
        ? console.log(`The mirror words are:\n${mirrorWords.join(', ')}`)
        : console.log('No mirror words!');

    function extractMirrorWords(str) {
        const wordsArr = str
            .split(splitPattern)
            .filter(e => e);
        if (wordsArr[0] === wordsArr[1].split('').reverse().join('')) {
            return true;
        }
        return false;
    }
}

mirrorWords(`#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#`);
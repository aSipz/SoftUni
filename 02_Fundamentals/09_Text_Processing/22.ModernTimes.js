function solve(input) {
    let stringArray = input.split(' ');
    let specialWordsArray = [];
    stringArray.forEach(word => {
        if (word.startsWith('#')) {
            let isValid = true;
            let specialWord = word.substring(1);
            for (const char of specialWord) {
                let unicode = char.toLowerCase().charCodeAt();
                if (!(unicode >= 97 && unicode <= 122)) {
                    isValid = false;
                    break;
                }
            }
            if (specialWord.length < 1) {
                isValid = false;
            }
            if (isValid) {
                specialWordsArray.push(specialWord);
            }
        }
    });
    console.log(specialWordsArray.join('\n'));
}
solve('The symbol # is known #variously in #sf3dgls English-speaking #regions as the #number sign');
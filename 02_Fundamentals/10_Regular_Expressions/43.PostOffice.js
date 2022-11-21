function postOffice([string]) {
    let [firstPart, secondPart, thirdPart] = string.split('|');
    let firstPartPattern = /([#$%*&])[A-Z]+\1/g;
    let secondPartPattern = /[0-9]{2}:[0-9]{2}/g;
    let capitalLettersArray = firstPart
        .match(firstPartPattern)
        .join('')
        .match(/[A-Z]/g);
    let wordLengthArray = secondPart.match(secondPartPattern);
    let words = new Set();
    wordLengthArray.forEach(wordProperty => {
        let [startLetterCode, wordlength] = wordProperty.split(':').map(Number);
        let letter = String.fromCharCode(startLetterCode);
        if (capitalLettersArray.includes(letter)) {
            let pattern = new RegExp(`(^|[ ])${letter}[^ ]{${wordlength}}([ ]|$)`, 'g');
            let match = thirdPart.match(pattern);
            words.add(...match);
        }
    });
    let wordsArray = Array.from(words).map(word => word.trim()); 
    for (const char of capitalLettersArray) {
        for (const word of wordsArray) {
            if (word.startsWith(char)) {
                console.log(word);
            }
        }
    }
}
postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);
function reveal(words, template) {
    let wordArray = words.split(', ');
    let templateArray = template.split(' ');
    wordArray.forEach(word => {
        let wordLength = word.length;
        for (let i = 0; i < templateArray.length; i++) {
            if (templateArray[i].length == wordLength && templateArray[i].includes('*')) {
                templateArray[i] = word;
            }
        }
    });
    console.log(templateArray.join(' '));
}
reveal('great, learning',
'softuni is ***** place for ******** new programming languages'
);
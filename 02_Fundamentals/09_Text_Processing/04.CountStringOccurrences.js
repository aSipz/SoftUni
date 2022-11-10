function count(text, word) {
    let count = text
        .split(' ')
        .filter(a => a === word)
        .length;
    console.log(count);
}
count('This is a word and it also is a sentence',
    'is'
);
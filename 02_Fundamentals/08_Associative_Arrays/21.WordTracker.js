function tracker(input) {
    let wordsToSearchForArray = input.shift().split(' ');
    let words = {};
    wordsToSearchForArray.forEach(element => {
        words[element] = 0;
    });
    for (const word of input) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }
    }
    let wordArray = Object.entries(words)
    wordArray.sort(([keyA, valuaA], [keyB, valueB]) => valueB - valuaA);
    for (const [key, value] of wordArray) {
        console.log(`${key} - ${value}`);
    }
}
tracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );
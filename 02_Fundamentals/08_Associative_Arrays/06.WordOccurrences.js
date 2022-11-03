function solve(input) {
    let words = {};
    input.forEach(word => {
        let count = 1;
        if (words[word]) {
            count += words[word];
        }
        words[word] = count;
    });
    let wordArray = Object.entries(words);
    wordArray.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);
    for (const [word, count] of wordArray) {
        console.log(`${word} -> ${count} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
function shake(input) {
    let string = input.shift();
    let pattern = input.shift();
    while (pattern.length > 0 && string.includes(pattern)) {
        if (string.indexOf(pattern) >= 0 && string.lastIndexOf(pattern) >= 0 && string.indexOf(pattern) != string.lastIndexOf(pattern)) {
            console.log('Shaked it.');
            let patternIndex = Math.floor(pattern.length / 2);
            let firstPartPattern = pattern.substring(0, patternIndex);
            let lastPartPattern = pattern.substring(patternIndex + 1);
            let firstPart = string.substring(0, string.indexOf(pattern));
            let middlePart = string.substring(string.indexOf(pattern) + pattern.length, string.lastIndexOf(pattern));
            let lastPart = string.substring(string.lastIndexOf(pattern) + pattern.length);
            string = firstPart + middlePart + lastPart;
            pattern = firstPartPattern.concat(lastPartPattern);
            continue;
        } else if (string.indexOf(pattern) >= 0 && string.lastIndexOf(pattern) == string.indexOf(pattern)) {
            console.log('No shake.');
            firstPart = string.substring(0, string.indexOf(pattern));
            lastPart = string.substring(string.indexOf(pattern) + pattern.length);
            string = firstPart + lastPart;
            continue;
        }
    }
    console.log('No shake.');
    console.log(string);
}
shake(['##mtm!!mm.mm*mtm.#',
'mtm']
);
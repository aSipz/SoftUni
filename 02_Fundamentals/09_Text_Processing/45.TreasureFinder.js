function finder(input) {
    let keyArray = input
        .shift()
        .split(' ')
        .map(Number);
    for (const line of input) {
        if (line == 'find') {
            break;
        }
        let currentTreasure = [];
        for (let i = 0; i < line.length; i++) {
            decreaseIndex = keyArray[i % keyArray.length];
            let currentChar = String.fromCharCode(line[i].charCodeAt() - decreaseIndex);
            currentTreasure.push(currentChar);
        }
        let currentString = currentTreasure.join('');
        let type = currentString.split('&')[1];
        let coordinates = currentString.split('<')[1].split('>')[0];
        console.log(`Found ${type} at ${coordinates}`);
    }
}
finder(["1 4 2 5 3 2 1",
`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
"tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
"'stj)>34W68Z@",
"find"]
);
function rageQuit(input) {
    let stringPattern = /[^0-9]+/g;
    let numPattern = /[0-9]+/g;
    let uniqueSymbols = new Set();
    let message = '';
    input.forEach(line => {
        let stringMatch = line.match(stringPattern);
        let numMatch = line.match(numPattern);
        for (let i = 0; i < stringMatch.length; i++) {
            let repeatCount = Number(numMatch[i]);
            let stringToRepeat = stringMatch[i].toUpperCase();
            message += stringToRepeat.repeat(repeatCount);
        }
        for (const char of message) {
            uniqueSymbols.add(char);
        }
        console.log(`Unique symbols used: ${uniqueSymbols.size}`);
        console.log(`${message}`);
    });
}
rageQuit(['a3b0', 'aSd2&5s@1']);
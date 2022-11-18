function enigma(input) {
    let messageNum = Number(input.shift());
    input.splice(messageNum);

    function decrypt(text) {
        let match = ['s', 't', 'a', 'r']
        let count = 0;
        for (const char of text) {
            if (match.includes(char.toLowerCase()))
                count++;
        }
        let decryptedText = '';
        for (const char of text) {
            let decryptedChar = String.fromCharCode(char.charCodeAt() - count);
            decryptedText += decryptedChar;
        }
        return decryptedText;
    }

    let decryptedArray = input.map(message => decrypt(message));
    let pattern = /@(?<planet>[A-Z][a-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<count>\d+)/;
    let planets = {};
    let countAttacked = 0;
    let countDestroyed = 0;
    for (const message of decryptedArray) {
        if (pattern.test(message)) {
            let match = message.match(pattern);
            planets[match.groups.planet] = match.groups.type;
            match.groups.type == 'A' ? countAttacked++ : countDestroyed++;
        }
    }

    let sortedPlanets = Object.entries(planets)
        .sort(([keyA, ValueA], [keyB, ValueB]) => ValueA.localeCompare(ValueB) || keyA.localeCompare(keyB));
    console.log(`Attacked planets: ${countAttacked}`);
    for (const [planet, type] of sortedPlanets) {
        if (type == 'D') {
            break;
        }
        console.log(`-> ${planet}`);
    }
    console.log(`Destroyed planets: ${countDestroyed}`);
    for (const [planet, type] of sortedPlanets) {
        if (type == 'D') {
            console.log(`-> ${planet}`);
        }
    }
}
enigma(['5',
    " tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']
);

console.log('----------------------');

enigma([]
);
function secretChat(input) {
    let codedMsg = input.shift();

    const possibleCommands = {
        'InsertSpace': insertSpace,
        'Reverse': reverse,
        'ChangeAll': changeAll
    }

    for (const line of input) {
        if (line === 'Reveal') {
            console.log(`You have a new text message: ${codedMsg}`);
            break;
        }
        const [command, optionOne, optionTwo] = line.split(':|:');

        possibleCommands[command](optionOne, optionTwo);
    }

    function insertSpace(index) {
        const msg = codedMsg.split('');
        msg.splice(Number(index), 0, ' ');
        codedMsg = msg.join('');
        console.log(codedMsg);
    }

    function reverse(substring) {
        if (!codedMsg.includes(substring)) {
            console.log('error');
            return;
        }
        codedMsg = codedMsg.replace(substring, '') + substring.split('').reverse().join('');
        console.log(codedMsg);
    }

    function changeAll(substring, replacement) {
        while (codedMsg.includes(substring)) {
            codedMsg = codedMsg.replace(substring, replacement);
        }
        console.log(codedMsg);
    }
}

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
);
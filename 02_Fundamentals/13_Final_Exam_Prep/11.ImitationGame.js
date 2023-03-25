function imitationGame(input) {
    let msg = input.shift();

    const commands = {
        'Move': move,
        'Insert': insert,
        'ChangeAll': changeAll
    }

    for (const line of input) {
        if (line === 'Decode') {
            console.log(`The decrypted message is: ${msg}`);
            break;
        }
        const [command, value1, value2] = line.split('|');
        commands[command](value1, value2);
    }

    function move(num) {
        msg = msg.slice(Number(num)) + msg.slice(0, Number(num));
    }

    function insert(index, value) {
        if (Number(index) === 0) {
            msg = value + msg;
        } else {
            let arr = msg.split('');
            arr.splice(Number(index), 0, value);
            msg = arr.join('');
        }
    }

    function changeAll(substring, replacement) {
        while (msg.includes(substring)) {
            msg = msg.replace(substring, replacement);
        }
    }
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]
  );
function passValidator(input) {
    let pass = input.shift();
    const commandsArr = input.slice(0, input.indexOf('Complete'));

    const commands = {
        'Make': changeCase,
        'Insert': insert,
        'Replace': replace,
        'Validation': validation
    };

    commandsArr.forEach(line => {
        const [command, optionOne, optionTwo] = line.split(' ');
        if (commands[command]) {
            commands[command](optionOne, optionTwo);
        }
    })

    function changeCase(command, index) {
        index = Number(index);
        if (index < 0 || index >= pass.length) {
            return;
        }

        if (command === 'Upper') {
            pass = pass.slice(0, index) + pass[index].toUpperCase() + pass.slice(index + 1);
        } else {
            pass = pass.slice(0, index) + pass[index].toLowerCase() + pass.slice(index + 1);
        }

        console.log(pass);
    }

    function insert(index, char) {
        index = Number(index);
        if (index < 0 || index >= pass.length) {
            return;
        }
        let passArr = pass.split('');
        passArr.splice(index, 0, char);
        pass = passArr.join('');
        console.log(pass);
    }

    function replace(char, value) {
        value = Number(value);
        if (!pass.includes(char)) {
            return;
        }
        const replaceChar = String.fromCharCode(char.charCodeAt(0) + value);
        while (pass.includes(char)) {
            pass = pass.replace(char, replaceChar);
        }
        console.log(pass);

    }

    function validation() {
        if (pass.length < 8) {
            console.log('Password must be at least 8 characters long!');
        }

        const patternCharValidation = /^\w{8,}$/;
        if (!patternCharValidation.test(pass)) {
            console.log('Password must consist only of letters, digits and _!');
        }

        const patternUpperLetter = /[A-Z]{1,}/;
        if (!patternUpperLetter.test(pass)) {
            console.log('Password must consist at least one uppercase letter!');
        }

        const patternLowerLetter = /[a-z]{1,}/;
        if (!patternLowerLetter.test(pass)) {
            console.log('Password must consist at least one lowercase letter!');
        }

        const patternDigit = /[0-9]{1,}/;
        if (!patternDigit.test(pass)) {
            console.log('Password must consist at least one digit!');
        }

    }
}

passValidator(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete']);

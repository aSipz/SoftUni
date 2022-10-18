function ladybug(input) {
    let size = Number(input[0]);
    let startingIndexArr = [];
    let currentIndexArr = [];
    let commands = [];
    if (size == 0) {

    } else if (input.length == 1) {
        for (let i = 0; i < size; i++) {
            currentIndexArr.push(0);
        }
        console.log(currentIndexArr.join(' '));
    } else if (input.length == 2) {
        for (let i = 0; i < size; i++) {
            currentIndexArr.push(0);
        }
        startingIndexArr = input[1].split(' ');
        for (let elements of startingIndexArr) {
            if (elements >= 0 && elements < size) {
                currentIndexArr[Number(elements)] = '1';
            }
        }
        console.log(currentIndexArr.join(' '));
    } else {
        startingIndexArr = input[1].split(' ');
        for (let i = 0; i < size; i++) {
            currentIndexArr.push('empty');
        }
        for (let elements of startingIndexArr) {
            if (elements >= 0 && elements < size) {
                currentIndexArr[Number(elements)] = 'full';
            }
        }
        for (let i = 2; i < input.length; i++) {
            commands.push(input[i]);
        }
        for (let i = 0; i < commands.length; i++) {
            let currentCommand = commands[i].split(' ');
            if (currentIndexArr[currentCommand[0]] == 'full') {
                currentIndexArr[currentCommand[0]] = 'empty';
                if (currentCommand[1] == 'right') {
                    let tempIndex = Number(currentCommand[0]) + Number(currentCommand[2]);
                    for (let j = tempIndex; j < size; j += tempIndex) {
                        if (currentIndexArr[j] != 'full') {
                            currentIndexArr[j] = 'full';
                            break;
                        }
                    }
                } else if (currentCommand[1] == 'left') {
                    tempIndex = Number(currentCommand[0]) - Number(currentCommand[2]);
                    for (let j = tempIndex; j >= 0; j -= tempIndex) {
                        if (currentIndexArr[j] != 'full') {
                            currentIndexArr[j] = 'full';
                            break;
                        }
                    }
                }
            }
        }
        for (let i = 0; i < size; i++) {
            if (currentIndexArr[i] == 'full') {
                currentIndexArr[i] = 1;
            } else {
                currentIndexArr[i] = 0
            }
        }
        console.log(currentIndexArr.join(' '));
    }
}
ladybug([ 4, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']);
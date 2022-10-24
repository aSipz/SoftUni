function train(input) {
    let wagonArray = input
        .shift()
        .split(' ')
        .map(Number);
    let maxCapacity = Number(input.shift());
    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i];
        if (currentCommand.split(' ').length > 1) {
            wagonArray.push(currentCommand.split(' ')[1]);
        } else {
            let isFound = false;
            for (let j = 0; j < wagonArray.length; j++) {
                let currentCapacity = wagonArray[j];
                if (currentCapacity + Number(input[i]) <= maxCapacity) {
                    wagonArray[j] += Number(input[i]);
                    isFound = true;
                    break;
                }
            }
            if (!isFound) {
                wagonArray.push(Number(input[i]))
            }
        }
    }
    console.log(wagonArray.join(' '));
}
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '10',
    '8',
    '6']
);
function manipulations(input) {
    let numArray = input
        .shift()
        .split(' ')
        .map(Number);
    for (let i = 0; i < input.length; i++) {
        let currentAction = input[i].split(' ')[0];
        let index = 0;
        switch (currentAction) {
            case 'Add':
                numArray.push(Number(input[i].split(' ')[1]));
                break;
            case 'Remove':
                for (let j = 0; j < numArray.length; j++) {
                    index = numArray.indexOf(Number(input[i].split(' ')[1]));
                    if (index >= 0) {
                    numArray.splice(index, 1);
                    } else {
                        break;
                    }
                }
                break;
            case 'RemoveAt':
                index = Number(input[i].split(' ')[1]);
                numArray.splice(index, 1);
                break;
            case 'Insert':
                index =  Number(input[i].split(' ')[2]);
                numArray.splice(index, 0, Number(input[i].split(' ')[1]));
                break;
        }
    }
    console.log(numArray.join(' '));
}
manipulations(['4 19 2 2 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);
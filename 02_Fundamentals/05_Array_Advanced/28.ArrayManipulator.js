function arrayManipulator(numArray, commandsArray) {
    for (let i = 0; i < commandsArray.length; i++) {
        let currentCommand = commandsArray[i].split(' ')[0];
        let index = 0;
        let element = 0;
        let tempArray = [];
        let toStop = false;
        switch (currentCommand) {
            case 'add':
                index = Number(commandsArray[i].split(' ')[1]);
                element = Number(commandsArray[i].split(' ')[2]);
                numArray.splice(index, 0, element);
                break;
            case 'addMany':
                index = Number(commandsArray[i].split(' ')[1]);
                let elementsToAdd = commandsArray[i].split(' ').length;
                for (let j = 2; j < elementsToAdd; j++) {
                    element = Number(commandsArray[i].split(' ')[j])
                    numArray.splice(index + j - 2, 0, element)
                }
                break;
            case 'contains':
                element = Number(commandsArray[i].split(' ')[1]);
                console.log(numArray.indexOf(element));
                break;
            case 'remove':
                index = Number(commandsArray[i].split(' ')[1]);
                numArray.splice(index, 1);
                break;
            case 'shift':
                let rotations = Number(commandsArray[i].split(' ')[1]);
                for (let j = 0; j < rotations; j++) {
                    let tempEl = numArray.shift();
                    numArray.push(tempEl);
                }
                break;
            case 'sumPairs':
                for (let j = 0; j < numArray.length; j += 2) {
                    if (numArray.length % 2 == 0) {
                        tempArray.push(numArray[j] + numArray[j + 1]);
                    } else {
                        if (j != numArray.length - 1) {
                            tempArray.push(numArray[j] + numArray[j + 1]);
                        } else {
                            tempArray.push(numArray[j])
                        }
                    }
                }
                numArray = tempArray.slice();
                break;
            case 'print':
                console.log(`[ ${numArray.join(', ')} ]`);
                toStop = true;
                break;
        }
        if (toStop) {
            break;
        }
    }
}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'sumPairs', 'print']
);
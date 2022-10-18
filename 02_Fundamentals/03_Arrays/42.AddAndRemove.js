function addRemove(input) {
    let numToPrint = 1;
    let arrLength = input.length;
    let arrToPrint = [];
    if (arrLength == 0) {
        console.log('Empty');
    } else {
        for (let i = 0; i < arrLength; i++) {
            if (input[i] == 'add') {
                arrToPrint.push(numToPrint);
                numToPrint++;
            } else if (input[i] == 'remove') {
                arrToPrint.pop();
                numToPrint++;
            }
        }
        if (arrToPrint.length == 0) {
            console.log('Empty');
        } else {
            console.log(arrToPrint.join(' '));
        }
    }
}
addRemove(['remove', 'remove', 'remove']);
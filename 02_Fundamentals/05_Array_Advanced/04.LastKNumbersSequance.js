function numSequance(int1, int2) {
    let sequanceLength = int1;
    let firstElement = 1;
    let array = [];
    let currentElement = firstElement;
    let index = 1;
    for (let i = 0; i < sequanceLength; i++) {
        array.push(currentElement);
        currentElement = 0;
        for (let j = 0; j < int2; j++) {
            if (index - int2 + j >= 0) {
                currentElement += array[index - int2 + j];
            }
        }
        index++;
    }
    console.log(array.join(' '));
}
numSequance(8, 2);
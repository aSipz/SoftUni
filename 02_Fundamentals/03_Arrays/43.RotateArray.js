function rotate(input) {
    let length = input.length;
    let rotations = Number(input[length - 1]);
    let array = [];
    let arrToPrint = [];
    for (let i = 0; i < length - 1; i++) {
        array.push(input[i]);
    }
    if (rotations > 0) {
        for (let i = 1; i <= rotations; i++) {
            arrToPrint = [];
            arrToPrint.push(array[length - 2]);
            for (let j = 0; j < length - 2; j++) {
                arrToPrint.push(array[j]);
            }
            array = [];
            for (let i = 0; i < length - 1; i++) {
                array.push(arrToPrint[i]);
            }
        }
        console.log(arrToPrint.join(' '));
    } else {
        console.log(array.join(' '));
    }
}
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
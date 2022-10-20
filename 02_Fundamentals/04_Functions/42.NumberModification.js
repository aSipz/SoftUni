function numModification(num) {
    let numToString = num.toString();
    while (true) {
        let sum = 0;
        let average = 0;
        for (let i = 0; i < numToString.length; i++) {
            sum += Number(numToString[i]);
        }
        average = sum / numToString.length;
        if (average > 5) {
            break;
        } else {
            numToString += '9';
        }
    }
    console.log(Number(numToString));
}
numModification(5835);
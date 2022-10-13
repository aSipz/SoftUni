function pyramid(input) {
    let numToPrint = 1;
    let rowToPrint = '';
    let isDone = false;
    let numCounter = 1;
    let num = Number(input[0]);
    for (let i = 1; i <= num; i++) {
        rowToPrint = '';
        numCounter = 1;
        for (let j = 1; j <= num; j++) {
            if (numCounter > i) {
                break;
            }
            if (numToPrint > num) {
                isDone = true;
                break;
            }
            rowToPrint += numToPrint + ' ';
            numToPrint++;
            numCounter++;
        }
        console.log(rowToPrint);
        if (isDone) {
            break;
        }
    }
}
pyramid([12]);
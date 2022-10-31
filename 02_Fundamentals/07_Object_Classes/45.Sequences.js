function sequences(input) {
    let arrayOutput = [];
    for (let i = 0; i < input.length; i++) {
        let currentArray = JSON.parse(input[i]);
        currentArray.sort((a, b) => b - a);
        let isUnique = true;
        for (let j = 0; j < arrayOutput.length; j++) {
            let arrToCheck = arrayOutput[j];
            if (currentArray.length == arrToCheck.length) {
                isUnique = false;
                for (let k = 0; k < currentArray.length; k++) {
                    if (currentArray[k] != arrToCheck[k]) {
                        isUnique = true;
                        break;
                    }
                }
            }
            if (!isUnique) {
                break;
            }
        }
        if (isUnique) {
            arrayOutput.push(currentArray);
        }
    }
    arrayOutput.sort((a, b) => a.length - b.length);
    for (let arr of arrayOutput) {
        console.log(`[${arr.join(', ')}]`);
    }
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[-3, -2, -1, 0, 1, 2, 3, 4]",
"[5,11, -1, 0, 8, 2, 7, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
);
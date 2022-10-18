function magicMatrices(input) {
    let rowSum = 0;
    let columnSum = 0;
    let inputLength = input.length;
    let isMagic = true;
    let firstRowArray = input[0];
    let firstRowSum = 0;
    let firstColumnArray = [];
    let firstColumnSum = 0;
    let columnArray = [];
    for (let i = 0; i < inputLength; i++) {
        let rowArray = input[i];
        firstColumnArray.push(rowArray[0])
    }
    for (let i = 0; i < inputLength; i++) {
        firstColumnSum += firstColumnArray[i];
    }
    for (let i = 0; i < inputLength; i++) {
        firstRowSum += firstRowArray[i];
    }
    if (firstColumnSum == firstRowSum) {
        for (let i = 1; i < inputLength; i++) {
            let rowArray = input[i];
            for (let j = 0; j < inputLength; j++) {
                rowSum += rowArray[j];
            }
            if (rowSum != firstRowSum) {
                isMagic = false;
                break;
            }
            rowSum = 0;
        }
        if (isMagic) {
            for (let j = 1; j < inputLength; j++) {
                columnArray = [];
                columnSum = 0;
                for (let i = 0; i < inputLength; i++) {
                    let rowArray = input[i];
                    columnArray.push(rowArray[j])
                }
                for (let i = 0; i < inputLength; i++) {
                    columnSum += columnArray[i];
                }
                if (columnSum != firstColumnSum) {
                    isMagic = false;
                    break;
                }
            }
        }
    } else {
        isMagic = false;
    }
    console.log(isMagic);
}
magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );
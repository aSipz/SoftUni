function spiralMatrix(dim1, dim2) {
    let numToPrint = 1;
    let spiralArray = []
    let rotations = 0;
    //create matrix
    for (let i = 0; i < dim2; i++) {
        let row = [];
        for (let j = 0; j < dim1; j++) {
            row.push([]);
        }
        spiralArray.push(row);
    }
    //fill matrix
    while (numToPrint <= dim1 * dim2) {
        //first row
        for (let i = 0 + rotations; i <= 0 + rotations; i++) {
            for (let j = 0 + rotations; j < dim1 - rotations; j++) {
                if (numToPrint <= dim1 * dim2) {
                    spiralArray[i][j] = numToPrint;
                    numToPrint++;
                } else {
                    break;
                }
            }
        }
        //last column
        for (let i = 1 + rotations; i < dim2 - rotations; i++) {
            let j = dim1 - 1 - rotations;
            if (numToPrint <= dim1 * dim2) {
                spiralArray[i][j] = numToPrint;
                numToPrint++;
            } else {
                break;
            }
        }
        //last row
        for (let i = dim2 - 1 - rotations; i < dim2 - rotations; i++) {
            for (let j = dim1 - 2 - rotations; j >= 0 + rotations; j--) {
                if (numToPrint <= dim1 * dim2) {
                    spiralArray[i][j] = numToPrint;
                    numToPrint++;
                } else {
                    break;
                }
            }
        }
        //first column
        for (let i = dim2 - 2 - rotations; i > 0 + rotations; i--) {
            let j = 0 + rotations;
            if (numToPrint <= dim1 * dim2) {
                spiralArray[i][j] = numToPrint;
                numToPrint++;
            } else {
                break;
            }
        }
        rotations++;
    }
    for (let i = 0; i < dim2; i++) {
        let rowArr = spiralArray[i]
        console.log(rowArr.join(' '));
    }
}
spiralMatrix(4, 10);
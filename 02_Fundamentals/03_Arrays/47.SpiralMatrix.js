function spiralMatrix(dim1, dim2) {
    let numToPrint = 1;
    let spiralArray = []
    //create matrix
    for (let i = 0; i < dim1; i++) {
        let row = [];
        for (let j = 0; j < dim2; j++) {
            row.push([]);
        }
        spiralArray.push(row);
    }
    for (let i = 0; i <= 0; i++) {
        for (let j = 0; j <= dim1; j++) {
            spiralArray[i][j] = numToPrint;
            numToPrint++;
        }
    }
    for (let i = 1; i < dim2; i++) {
        let j = dim1;
        spiralArray[i][j] = numToPrint;
        numToPrint++;
    }
    for ()
    console.log(spiralArray.join('\n'));
    // let rowArray = []
    // let firstRowArr = [];
    // // first row
    // for (let i = 0; i < dim1; i++) {
    //     rowArray.push(numToPrint + i);
    //     numToPrint++;
    // }
    // // last row
    // for (i = 0; i < dim1; i++) {
    //     numToPrint -=
    //     rowArray.push(numToPrint + i)
    // }
}
spiralMatrix(5,5);
function spiralMatrix(dim1, dim2) {
    let numToPrint = 1;
    let rowArray = []
    let firstRowArr = [];
    // first row
    for (let i = 0; i < dim1; i++) {
        rowArray.push(numToPrint + i);
        numToPrint++;
    }
    // last row
    for (i = 0; i < dim1; i++) {
        numToPrint -=
        rowArray.push(numToPrint + i)
    }
}
spiralMatrix();
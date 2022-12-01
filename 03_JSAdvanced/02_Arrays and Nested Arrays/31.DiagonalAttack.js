function diagonalAttack(input) {
    let matrix = [];
    for (const row of input) {
        matrix.push(row.split(' ').map(Number));
    }
    let matrixSize = matrix.length;
    let mainSum = 0;
    let secondarySum = 0;
    for (let i = 0; i < matrixSize; i++) {
        mainSum += matrix[i][i];
        secondarySum += matrix[i][matrixSize - i - 1];
    }
    if (mainSum == secondarySum) {
        for (let row = 0; row < matrixSize; row++) {
            for (let el = 0; el < matrixSize; el++) {
                if (row != el && row != matrixSize - el - 1) {
                    matrix[row][el] = mainSum;
                }
            }
        }
    }
    for (const row of matrix) {
        console.log(row.join(' '));
    }
}
diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']
);
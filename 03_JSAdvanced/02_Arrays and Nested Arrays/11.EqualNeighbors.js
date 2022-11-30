function equalNeighbor(matrix) {
    let pairsCount = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let el = 0; el < matrix[row].length; el++) {
            if (matrix[row][el] === matrix[row][el - 1]) {
                pairsCount++;
            }
            if (row > 0) {
                if (matrix[row][el] === matrix[row - 1][el]) {
                    pairsCount++;
                }
            }
        }
    }
    return pairsCount;
}
equalNeighbor([['test', 'yes', 'yo', 'ho'],
                ['well', 'done', 'yo', '6'],
                ['not', 'done', 'yet', '5']]
);
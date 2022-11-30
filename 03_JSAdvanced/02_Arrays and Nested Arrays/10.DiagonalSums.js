function diagonalSum(matrix) {
    let mainSum = 0;
    let secondarySum = 0;
    let mainIndex = 0;
    let secondaryIndex = matrix[0].length - 1;
    matrix.forEach(row => {
        mainSum += row[mainIndex++];
        secondarySum += row[secondaryIndex--];
    });
    console.log(mainSum + ' ' + secondarySum);
}
diagonalSum([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
);
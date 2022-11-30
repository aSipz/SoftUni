function biggestElement(matrix) {
    let maxElement = Number.MIN_SAFE_INTEGER;
    matrix.forEach(row => {
        let currentMax = Math.max(...row);
        if (currentMax > maxElement) {
            maxElement = currentMax;
        }
    });
    return maxElement;
}
biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );
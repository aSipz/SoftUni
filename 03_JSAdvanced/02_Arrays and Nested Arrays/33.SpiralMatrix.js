function spiralMatrix(width, height) {
    let lastNum = width * height;
    let matrix = [];
    for (let i = 0; i < height; i++) {
        let currentRow = [];
        for (let j = 0; j < width; j++) {
            currentRow.push(0);
        }
        matrix.push(currentRow);
    }

    let x = 0;
    let y = 0;
    let rotationFactor = 0;
    let rotation = 0;
    let counter = 0;
    for (let num = 1; num <= lastNum; num++) {
        if (num < (lastNum - (width - rotationFactor) * (height - rotationFactor - 1))) {
            matrix[y][x] = num;
            x++;
        } else if (num == (lastNum - (width - rotationFactor) * (height - rotationFactor - 1))) {
            matrix[y][x] = num;
        } else if (num <= (lastNum - (width - rotationFactor - 1) * (height - rotationFactor - 1))) {
            y++;
            matrix[y][x] = num;
        } else if (num <= lastNum - (width - rotationFactor - 1) * (height - rotationFactor - 2)) {
            x--;
            matrix[y][x] = num;
        } else if (num <= lastNum - (width - rotationFactor - 2) * (height - rotationFactor - 2)) {
            y--;
            matrix[y][x] = num;
        }
        if (num == 2 * (width - rotationFactor) + 2 * (height - rotationFactor - 2) + counter) {
            rotationFactor += 2;
            rotation++;
            counter = num;
            x++;
        }
    }

    for (const row of matrix) {
        console.log(row.join(' '));
    }
}
spiralMatrix(5, 4);
function bunnyKill(input) {
    let coordinatesArray = input.pop().split(' ');
    let matrix = input.slice();
    let bunniesKilled = 0;
    let damage = 0;
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(' ').map(Number);
    }
    for (let i = 0; i < coordinatesArray.length; i++) {
        let currentBomb = coordinatesArray[i].split(',');
        let row = Number(currentBomb[0]);
        let element = Number(currentBomb[1]);
        let isValid = false;
        if (row >= 0 && row < matrix.length && element >= 0 && element < matrix[0].length) {
            isValid = true;
        }
        if (isValid && matrix[row][element] != 0) {
            let bombDamage = matrix[row][element];
            bunniesKilled++;
            damage += bombDamage;
            for (let j = row - 1; j <= row + 1; j++) {
                if (j >= 0 && j < matrix.length) {
                    for (let k = element - 1; k <= element + 1; k++) {
                        if (k >= 0 && k < matrix[0].length) {
                            matrix[j][k] = Math.max(matrix[j][k] - bombDamage, 0);
                        }
                    }
                }
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            if (row[j] != 0) {
                bunniesKilled++;
                damage += row[j];
                row[j] = 0;
            }
        }
    }
    console.log(damage);
    console.log(bunniesKilled);
}
bunnyKill(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '3,4']
);
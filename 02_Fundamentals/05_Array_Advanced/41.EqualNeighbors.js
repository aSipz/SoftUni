function equalNeighbors(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        let row = input[i];
        let previousRow = input[i - 1]
        for (let j = 0; j < row.length; j++) {
            let element = row[j];
            let previousElement = row[j - 1];

            if (element === previousElement) {
                count++;
            }
            if (i > 0) {
                let upElement = previousRow[j];
                if (element === upElement) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}
equalNeighbors([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]
);
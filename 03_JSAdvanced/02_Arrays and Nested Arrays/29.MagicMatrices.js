function magicMatrices(input) {
    let isMagical = true;
    let firstRowSum = input[0].reduce((acc, current) => acc + current);

    for (const row of input) {
        let currentSum = row.reduce((acc, current) => acc + current);
        if (currentSum != firstRowSum) {
            isMagical = false;
            break;
        }
    }
    if (isMagical) {
        for (let i = 0; i < input[0].length; i++) {
            let currentSum = 0;
            for (let j = 0; j < input.length; j++) {
                currentSum += input[j][i];
            }
            if (currentSum != firstRowSum) {
                isMagical = false;
                break;
            }
        }
    }
    console.log(isMagical);
}
magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );
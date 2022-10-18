function orbit(input) {
    let width = input[0];
    let height = input[1];
    let y = input[2];
    let x = input[3];
    for (let i = 0; i < height; i++) {
        let row = [];
        for (let j = 0; j < width; j++) {
            let num1 = 0;
            let num2 = 0;
            let numToPrint = 0;
            if (j < x) {
                num1 = x - j + 1;
            } else if (j > x) {
                num1 = j - x + 1;
            } else {
                num1 = 1;
            }
            if (i < y) {
                num2 = y - i + 1;
            } else if (i > y) {
                num2 = i - y + 1;
            } else {
                num2 = 1
            }
            numToPrint = Math.max(num1, num2)
            row.push(numToPrint)
        }
        console.log(row.join(' '));
    }
}
orbit([5, 5, 3, 1]);
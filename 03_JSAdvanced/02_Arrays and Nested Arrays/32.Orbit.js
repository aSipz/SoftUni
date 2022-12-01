function orbit([width, height, y, x]) {
    let matrix = [];
    for (let row = 0; row < height; row++) {
        let currentRow = [];
        for (let el = 0; el < width; el++) {
            let num = Math.max(Math.abs(row - y), Math.abs(el - x));
            num++;
            currentRow.push(num);
        }
        matrix.push(currentRow);
    }
    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}
orbit([10, 12, 2, 3]);
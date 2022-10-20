function dna(length) {
    let sequence = 'ATCGTTAGGG';
    let index = 0;
    let rowCounter = 1;
    let segment = length / 5;
    for (let i = 1; i <= length; i++) {
        let row = '';
        for (let j = 0; j < 6; j++) {
            if (i % 4 == 1) {
                if (j == 0 || j == 1 || j == 4 || j == 5) {
                    row += '*';
                } else {
                    row += `${sequence[index]}`;
                    index++;
                }
            } else if (i % 4 == 2) {
                if (j == 0 || j == 5) {
                    row += '*';
                } else if (j == 1 || j == 4) {
                    row += `${sequence[index]}`;
                    index++;
                } else {
                    row += '-';
                }
            } else if (i % 4 == 3) {
                if (j == 0 || j == 5) {
                    row += `${sequence[index]}`;
                    index++;
                } else {
                    row += '-';
                }
            } else if (i % 4 == 0) {
                if (j == 0 || j == 5) {
                    row += '*';
                } else if (j == 1 || j == 4) {
                    row += `${sequence[index]}`;
                    index++;
                } else {
                    row += '-';
                }
            }
            if (index == sequence.length) {
                index = 0;
            }
        }
        console.log(row);
    }
}
dna(30);
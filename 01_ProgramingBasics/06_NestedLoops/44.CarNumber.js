function carNumber(input) {
    let min = Number(input[0]);
    let max = Number(input[1]);
    let toPrint = '';
    for (let i = min; i <= max; i++) {
        let num = '';
        for (let j = min; j <= max; j++) {
            for (let k = min; k <= max; k++) {
                for (let l = min; l <= max; l++) {
                    if (i % 2 == 0 && l % 2 != 0 && i > l && (j + k) % 2 == 0) {
                        num = '' + i + j + k + l;
                        toPrint += num + ' ';
                    } else if (i % 2 != 0 && l % 2 == 0 && i > l && (j + k) % 2 == 0) {
                        num = '' + i + j + k + l;
                        toPrint += num + ' ';
                    }
                }
            }
        }
    }
    console.log(toPrint);
}
carNumber([3,5]);
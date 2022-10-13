function luckyNum(input) {
    let num = Number(input[0]);
    let toPrint = ''
    for (let i = 1; i < 10; i++) {
        let lucky = '';
        for (let j = 1; j < 10; j++) {
            for (let k = 1; k < 10; k++) {
                for (let l = 1; l < 10; l++) {
                    if (i + j == k + l && num % (i + j) == 0) {
                        lucky = '' + i + j + k + l;
                        toPrint += lucky + ' ';
                    }
                }
            }
        }
    }
    console.log(toPrint);
}
luckyNum([7]);
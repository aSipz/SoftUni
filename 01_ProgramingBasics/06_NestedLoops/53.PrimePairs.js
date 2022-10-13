function primePairs(input) {
    let startFirst = Number(input[0]);
    let startSecond = Number(input[1]);
    let diffFirst = Number(input[2]);
    let diffSecond = Number(input[3]);   
    for (let i = startFirst; i <= startFirst + diffFirst; i++) {
        let num = ''
        let firstPair = '';
        let isFoundFirst = true;
        for (let checki = 2; checki < i; checki++) {
            if (i % checki == 0) {
                isFoundFirst = false;
            }
        }
        if (isFoundFirst) {
            firstPair = i;
            for (let j = startSecond; j<= startSecond + diffSecond; j++) {
                let secondPair = '';
                let isFoundSecond = true;
                for (let checkj = 2; checkj < j; checkj++) {
                    if (j % checkj == 0) {
                        isFoundSecond = false;
                    }   
                }
                if (isFoundSecond) {
                    secondPair = j;
                    num = '' + firstPair + secondPair;
                    console.log(num);
                }
            }
        }
    }
}
primePairs([10,20,5,5]);
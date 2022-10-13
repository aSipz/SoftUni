function safePass(input) {
    let aNum = Number(input[0]);
    let bNum = Number(input[1]);
    let maxNumPass = Number(input[2]);
    let counter = 0;
    let isDone = false;
    let toPrint = '';
    for (let i = 35; i <= 55; i++) {
        let aSymbol = '';
        let bSymbol = '';
        let xSymbol = '';
        let ySymbol = '';
        let pass = '';
        for (let j = 64; j <= 96; j++) {
            for (let k = 1; k <= aNum; k++) {
                for (let l = 1; l <= bNum; l++) {
                    aSymbol = String.fromCharCode(i);
                    bSymbol = String.fromCharCode(j);
                    xSymbol = k;
                    ySymbol = l;
                    pass = aSymbol + bSymbol + xSymbol + ySymbol + bSymbol + aSymbol;
                    toPrint += pass + '|';
                    counter++;
                    i++;
                    j++;
                    if (i > 55) {
                        i = 35;
                    }
                    if (j > 96) {
                        j = 64;
                    }
                    if (counter >= maxNumPass || (k == aNum && l == bNum)) {
                        isDone = true;
                        break;
                    }
                }
                if (isDone) {
                    break
                }
            }
            if (isDone) {
                break
            }
            if (j >= 96) {
                j = 63;
            }
        }
        if (isDone) {
            break
        }
        if (i >= 55) {
            i = 34;
        }
    }
    console.log(toPrint);
}
safePass([20,50,10]);
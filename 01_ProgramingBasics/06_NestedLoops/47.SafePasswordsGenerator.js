function safePass(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxNumPass = Number(input[2]);
    let toPrint = '';
    let passCount = 0;
    let isDone = false;
    for (let i = 35; i <= 55; i++) {
        let pass = '';
        let A = '';
        let B = '';
        for (let j = 64; j <= 96; j++) {
            B = String.fromCharCode(j);
            for (k = 1; k <= a; k++) {
                for (l = 1; l <= b; l++ ) {
                    A = String.fromCharCode(i);
                    B = String.fromCharCode(j);
                    pass = A + B + k + l + B + A;
                    toPrint += pass + '|';
                    passCount++;
                    i++;
                    j++;
                    if (passCount == maxNumPass) {
                        isDone = true;
                        break;
                    }
                }
                if (isDone) {
                    break;
                }
            }
            if (isDone) {
                break;
            }
            if (j >= 96) {
                j = 63;
            }
        }
        if (isDone) {
            break;
        }
        if (i >= 55) {
            i = 34;
        }
    }
    console.log(toPrint);
}
safePass([2,3,10]);
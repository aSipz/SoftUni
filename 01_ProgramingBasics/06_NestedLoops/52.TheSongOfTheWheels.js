function songWheels(input) {
    let controlNum = Number(input[0]);
    let toPrint = '';
    let counter = 0;
    let passToPrint = '';
    for (let a = 1; a <= 9; a++) {
        let pass = '';
        for (let b = 1; b <= 9; b++) {
            if (a < b) {
                for (let c = 1; c <= 9; c++) {
                    for (let d = 1; d <= 9; d++) {
                        if (c > d && a * b + c * d == controlNum) {
                            pass ='' + a + b + c + d;
                            toPrint += pass + ' ';
                            counter++;
                            if (counter == 4) {
                                passToPrint = pass;
                            }
                        }
                    }
                }
            }
        }
    }
    if (counter >= 4) {
        console.log(toPrint);
        console.log(`Password: ${passToPrint}`);
    } else if (counter > 0) {
        console.log(toPrint);
        console.log('No!');
    } else {
        console.log('No!');
    }
}
songWheels([55]);
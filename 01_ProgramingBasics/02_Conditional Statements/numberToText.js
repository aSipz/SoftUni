function numberToText(input) {
    let inputNum = parseInt(input[0]);
    let singleNum = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let doubleNum = ["twenty", "thirty", "forty", "fifty"]
    if (inputNum == 0) {
        console.log("zero");
    } else if (inputNum > 0 && inputNum < 10) {
        console.log(singleNum[inputNum - 1]);
    } else if (inputNum == 10) {
        console.log("ten");
    } else if (((inputNum > 15 && inputNum < 20) || inputNum == 14) && inputNum != 18) {
        console.log(`${singleNum[inputNum-11]}teen`);
    } else if ( inputNum == 11) {
        console.log("eleven");
    } else if ( inputNum == 12) {
        console.log("twelve");
    } else if ( inputNum == 13) {
        console.log("thirteen");
    } else if ( inputNum == 15) {
        console.log("fifteen");
    } else if ( inputNum == 18) {
        console.log("eighteen");
    } else if (inputNum >= 20 && inputNum < 60) {
        if (inputNum%10 == 0){
            console.log(doubleNum[Math.floor (inputNum/10) - 2]);
        } else {
            console.log(`${doubleNum[Math.floor (inputNum/10) - 2]} ${singleNum[inputNum%10 - 1]}`);
        }
    } else if ( inputNum == 30) {
        console.log("thirty");
    } else if ((inputNum >= 60 && inputNum < 80) || (inputNum >= 90 && inputNum < 100)) {
        if (inputNum%10 == 0) {
            console.log(`${singleNum[Math.floor (inputNum/10) - 1]}ty`);
        } else {
            console.log(`${singleNum[Math.floor (inputNum/10) - 1]}ty ${singleNum[inputNum%10 - 1]}`);
        }
    } else if (inputNum == 100) {
        console.log("one hundred");
    } else if (inputNum >= 80 && inputNum < 90) {
        if (inputNum%10 == 0) {
            console.log("eighty");
        } else {
            console.log(`eighty ${singleNum[inputNum%10 - 1]}`);
        }
    } else {
        console.log("invalid number");
    }
}
numberToText(["101"]);
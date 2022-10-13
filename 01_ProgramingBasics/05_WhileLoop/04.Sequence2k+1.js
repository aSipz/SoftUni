function sequence(input) {
    let num = Number(input[0]);
    let printNum = 1;
    while (printNum <= num) {
        console.log(printNum);
        printNum *= 2;
        printNum++;
    }
}
sequence([31]);
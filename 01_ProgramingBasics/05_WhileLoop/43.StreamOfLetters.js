function streamOfLetters(input) {
    let i = 0;
    let char = input[i];
    let word = '';
    let countC = 0;
    let countO = 0;
    let countN = 0;
    let wordToPrint = '';
    while (input[i] != 'End') {
        char = input[i];
        if (!(97 <= char.charCodeAt() && char.charCodeAt() <= 122) && !(65 <= char.charCodeAt() && char.charCodeAt() <= 90)) {
            i++;
            continue;
        }
        switch (char) {
            case 'c':
                if (countC == 0) {
                    countC = 1;
                    char = ''
                }
                break;
            case 'o':
                if (countO == 0) {
                    countO = 1;
                    char = ''
                }
                break;
            case 'n':
                if (countN == 0) {
                    countN = 1;
                    char = ''
                }
                break;
        }
        word += char;
        if (countC == 1 && countN == 1 && countO == 1) {
            wordToPrint += word + ' ';
            word = '';
            countC = 0;
            countN = 0;
            countO = 0;
        }
        i++;
    }
    console.log(wordToPrint);
}
streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", 'End']);
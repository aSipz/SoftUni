function digit(word) {
    let toPrint;
    switch (word) {
        case 'zero':
            toPrint = 0;
            break;
        case 'one':
            toPrint = 1;
            break;
        case 'two':
            toPrint = 2;
            break;
        case 'three':
            toPrint = 3;
            break;
        case 'four':
            toPrint = 4;
            break;
        case 'five':
            toPrint = 5;
            break;
        case 'six':
            toPrint = 6;
            break;
        case 'seven':
            toPrint = 7;
            break;
        case 'eight':
            toPrint = 8;
            break;
        case 'nine':
            toPrint = 9;
            break;
    }
    console.log(toPrint);
}
digit('six');
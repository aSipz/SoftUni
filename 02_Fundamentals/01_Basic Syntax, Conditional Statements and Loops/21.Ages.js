function age(num) {
    output = '';
    if (0 <= num && num <= 2) {
        output = 'baby';
    } else if (2 < num && num <= 13) {
        output = 'child';
    } else if (14 <= num && num <= 19) {
        output = 'teenager';
    } else if (20 <+ num && num <= 65) {
        output = 'adult';
    } else if (num >= 66) {
        output = 'elder';
    } else {
        output = 'out of bounds';
    }
    console.log(output);
}
age(14);
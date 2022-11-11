function change(inputString) {
    let stingArray = inputString.split(' ');
    stingArray.forEach(element => {
        element = element.trim();
    });
    let resultArray = [];
    stingArray.forEach(element => {
        if (element.length > 0) {
            resultArray.push(element)
        }
    });
    let totalSum = 0;
    for (const string of resultArray) {
        let startLetterCode = Number(string[0].charCodeAt());
        let endLetterCode = Number(string[string.length - 1].charCodeAt());
        let number = Number(string.substring(1, string.length - 1));
        if (startLetterCode >= 65 && startLetterCode <= 90) {
            number /= startLetterCode - 64;
        } else if (startLetterCode >= 97 && startLetterCode <= 122) {
            number *= startLetterCode - 96;
        }
        if (endLetterCode >= 65 && endLetterCode <= 90) {
            number -= endLetterCode - 64;
        } else if (endLetterCode >= 97 && endLetterCode <= 122) {
            number += endLetterCode - 96;
        }
        totalSum += number;
    }
    console.log(totalSum.toFixed(2));
}
change('P34562Z q2576f   H456z');
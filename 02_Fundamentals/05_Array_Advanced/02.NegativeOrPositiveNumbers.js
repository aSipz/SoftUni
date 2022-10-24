function negativePositive(input) {
    let startArray = input.map(Number);
    let resultArray = [];
    for (let i = 0 ; i < startArray.length; i++) {
        let tempElement = startArray[i];
        if (tempElement < 0) {
            resultArray.unshift(tempElement);
        } else {
            resultArray.push(tempElement);
        }
    }
    console.log(resultArray.join('\n'));
}
negativePositive(['3', '-2', '0', '-1']);
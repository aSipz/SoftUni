function diagonal(input) {
    let length = input.length;
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < length; i++) {
        let row = input[i];
        let rowArray = row.split(' ');
        for (let j = i; j < length; j++) {
            if (i == j) {
                sum1 += Number(rowArray[j]);
                break;
            }
        }
    }
    for (let i = 0; i < length; i++) {
        let row = input[i];
        let rowArray = row.split(' ');
        for (let j = 0; j < length; j++) {
            if (i == length - j - 1) {
                sum2 += Number(rowArray[j]);
                break;
            }
        }
    }
    if (sum1 == sum2) {
        for (let i = 0; i < length; i++) {
            let row = input[i];
            let rowArray = row.split(' ');
            for (let j = 0; j < length; j++) {
                if (i != j && i != length - j - 1) {
                    rowArray[j] = sum1;
                }
            }
            console.log(rowArray.join(' '));
        }
    } else {
        for (let i = 0; i < length; i++) {
            let row = input[i];
            console.log(row);
        }
    }
}
diagonal(['1 1 1',
'1 1 1',
'1 1 0']
);
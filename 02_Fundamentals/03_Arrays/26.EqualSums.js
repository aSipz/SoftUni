function equalSum(input) {
    let isSatisfied = false;
    for (let i = 0; i < input.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += input[j];
        }
        for (let j = i + 1; j < input.length; j++) {
            rightSum += input[j];
        }
        if (leftSum == rightSum) {
            console.log(i);
            isSatisfied = true;
        }
    }
    if (!isSatisfied) {
        console.log('no');
    }
}
equalSum([1,2,3]);
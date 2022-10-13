function oddEvenSum(input) {
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 1; i < input.length; i++) {
        if (i%2 == 0) {
            evenSum += Number(input[i]);
        } else {
            oddSum += Number(input[i]);
        }
    }
    if (evenSum == oddSum) {
        console.log(`Yes\nSum = ${evenSum}`);
    } else {
        console.log(`No\nDiff = ${Math.abs(evenSum - oddSum)}`);
    }
}
oddEvenSum([3,5,8,1]);
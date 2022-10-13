function leftAndRightSum(input) {
    let n = parseInt(input[0]);
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 1; i <= n; i++) {
        leftSum += Number(input[i]);
    }
    for (let i = n + 1; i <= 2 * n; i++) {
        rightSum += Number(input[i]);
    }
    if (rightSum == leftSum) {
        console.log(`Yes, sum = ${leftSum}`);
    } else {
        console.log(`No, diff = ${Math.abs(leftSum - rightSum)}`);
    }
}
leftAndRightSum([2,90,9,50,50]);
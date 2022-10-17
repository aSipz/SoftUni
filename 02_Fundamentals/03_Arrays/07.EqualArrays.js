function equal(arr1, arr2) {
    let sumArr1 = 0;
    let areIdentical = true;
    let differentIndex;
    for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                sumArr1 += Number(arr1[i]);
            } else {
                sumArr1 = 0;
                areIdentical = false;
                differentIndex = i;
                break;
            }
        }
    areIdentical ?
    console.log(`Arrays are identical. Sum: ${sumArr1}`):
    console.log(`Arrays are not identical. Found difference at ${differentIndex} index`);
}
equal([], ['1']);
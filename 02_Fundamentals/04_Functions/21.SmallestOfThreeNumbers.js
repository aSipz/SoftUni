function smallest(num1, num2, num3) {
    let numArray = [num1, num2, num3];
    let smallestNum = Number.POSITIVE_INFINITY;
    for (let i = 0; i < numArray.length; i++) {
        if(numArray[i] < smallestNum) {
            smallestNum = numArray[i];
        }
    }
    return smallestNum;
}
console.log(smallest(600, 342, 123));
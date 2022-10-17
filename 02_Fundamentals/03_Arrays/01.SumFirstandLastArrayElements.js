function sumArray(array) {
    let firstNum = array[0];
    let lastNum = array[array.length - 1];
    let sum = firstNum + lastNum;
    console.log(sum);
}
sumArray([10, 17, 22, 33]);
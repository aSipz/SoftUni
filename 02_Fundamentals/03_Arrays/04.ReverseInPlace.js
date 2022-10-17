function reverseInPlace(arr) {
    let numOfElements = arr.length - 1;
    for (let i = 0; i <= numOfElements / 2; i++) {
        let tempElement = arr[i];
        arr[i] = arr[numOfElements - i];
        arr[numOfElements - i] = tempElement;
    }
    console.log(arr.join(' '));
}
reverseInPlace(['33', '123', '0', 'dd']);
function condense(arr) {
    let tempArr = [];
    tempArr[arr.length] = '';
    for (let i = 0; i < arr.length - 1; i++) {
        tempArr = [];
        for (let j = 0; j < arr.length - 1 - i; j++) {
            tempArr.push(arr[j] + arr[j + 1]);
            arr[j] = tempArr[j];
        }
        if (tempArr.length == 1) {
            break;
        }
    }
    if (arr.length == 1) {
        console.log(arr[0]);
    } else {
    console.log(tempArr[0]);
    }
}
condense([2,10,3]);
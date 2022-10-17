function rotation(arr, num) {
    let newArr = [];
    for (let i = 0; i < num; i++) {
        arr.push(arr[i]);
    }
    for (let i = num; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr.join(' '));
}
rotation([2, 4, 15, 31], 5);
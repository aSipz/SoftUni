function reverse(num, array) {
    let newArray = [];
    for (let i = num - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    console.log(newArray.join(' '));
}
reverse(3, [10, 20, 30, 40, 50]);
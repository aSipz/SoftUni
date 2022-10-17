function maxNum(input) {
    let newArray = [];
    for (let i = input.length - 1; i >= 0; i--) {
        let isBigger = true;
        for (let j = i + 1; j < input.length; j ++) {
            if (input[i] <= input[j]) {
                isBigger = false;
            } 
        }
        if (isBigger) {
            newArray.push(input[i])
        }
    }
    let reverseArray = [];
    for (let i = newArray.length - 1; i >= 0; i--) {
        reverseArray.push(newArray[i]);
    }
    console.log(reverseArray.join(' '));
}
maxNum([27, 19, 42, 2, 13, 45, 48]);
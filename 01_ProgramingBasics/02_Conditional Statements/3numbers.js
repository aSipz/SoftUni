function numbers(input) {
    let a = parseFloat(input[0]);
    let b = parseFloat(input[1]);
    let c = parseFloat(input[2]);
    if (a == b && b == c) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
numbers([5,4,5]);
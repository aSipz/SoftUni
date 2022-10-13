function EvenOdd(input) {
    let num = Number(input[0]);
    let check = num%2;
    if (check == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
EvenOdd([6]);
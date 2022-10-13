function numberInRange(input) {
    let number = parseFloat(input[0]);
    if (number >= -100 && number <= 100 && number !=0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}
numberInRange([101]);
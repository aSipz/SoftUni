function invalidNumber(input) {
    let number = parseInt(input[0]);
    let boolNumber = (100 <= number) && (number <= 200);
    if (!boolNumber && number != 0) {
        console.log("invalid");
    }
}
invalidNumber([0]);
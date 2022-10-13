function celsius(input) {
    let tempCel = Number (input[0]);
    let tempFar = tempCel*1.8+32;
    console.log(tempFar.toFixed(2));
}
celsius([25]);
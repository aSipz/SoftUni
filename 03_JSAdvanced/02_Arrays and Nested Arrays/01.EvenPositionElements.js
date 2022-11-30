function evenPositions(input) {
    let output = input.filter((_, index) => index % 2 == 0).join(' ');
    console.log(output);
}
evenPositions(['20', '30', '40', '50', '60']);
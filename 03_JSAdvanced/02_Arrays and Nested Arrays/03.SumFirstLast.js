function sum(input) {
    if (input.length > 1) {
        return Number(input.pop()) + Number(input.shift());
    } else {
        return Number(input[0]);
    }
}
sum(['20', '30', '40']);
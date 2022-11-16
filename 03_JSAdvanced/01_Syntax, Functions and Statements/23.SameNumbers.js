function solve(num) {
    let string = num.toString();
    let sum = Number(string[0]);
    let isValid = true;
    for (let i = 1; i < string.length; i++) {
        sum += Number(string[i]);
        if (string[i] != string[i - 1]) {
            isValid = false;
        }
    }
    console.log(isValid);
    console.log(sum);
}
solve(1234);
function addSubtract(input) {
    let sumOrg = 0;
    let sumNew = 0;
    let lengthArray = input.length;
    for (let i = 0; i < lengthArray; i++) {
        sumOrg += input[i];
        if (input[i] % 2 == 0) {
            input[i] += i
        } else {
            input[i] -= i;
        }
        sumNew += input[i];
    }
    console.log(input);
    console.log(sumOrg);
    console.log(sumNew);
}
addSubtract([-5, 11, 3, 0, 2]);
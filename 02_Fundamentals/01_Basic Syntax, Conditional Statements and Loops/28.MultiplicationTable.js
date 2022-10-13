function multiplication(num) {
    let result = 0;
    for (i = 1; i < 11; i++) {
        result = num * i;
        console.log(`${num} X ${i} = ${result}`);
    }
}
multiplication(5);
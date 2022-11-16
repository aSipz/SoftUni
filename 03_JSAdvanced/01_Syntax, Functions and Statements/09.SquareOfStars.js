function square(input = 5) {
    for (let i = 0; i < input; i++) {
        console.log('* '.repeat(input).trim());
    }
}
square(2);
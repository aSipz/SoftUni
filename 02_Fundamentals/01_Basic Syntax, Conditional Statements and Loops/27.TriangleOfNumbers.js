function triangle(num) {
    let type = ''
    for (let i = 1; i <= num; i++) {
        console.log((i.toString() + ' ').repeat(i - 1) + i);
    }
}
triangle(10);
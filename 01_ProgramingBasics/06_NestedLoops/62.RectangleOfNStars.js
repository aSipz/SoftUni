function recStars(input) {
    let n = Number(input[0]);
    for (i = 1; i <= n; i++) {
        console.log('*'.repeat(n));
    }
}
recStars([3]);
function combination(input) {
    let num = Number(input[0]);
    let solutions = 0;
    for (x1 = 0; x1 <= num; x1++) {
        for (x2 = 0; x2 <= num; x2++) {
            for (x3 = 0; x3 <= num; x3++) {
                if (x1 + x2 + x3 == num)
                solutions++;
            }
        }
    }
    console.log(solutions);
}
combination([20]);
function test() {
    for (let i = 1; i <= 3; i++) {
        
        let sum = '';
        let sum2 = '';
        for (let j = 1; j <= 3; j++) {
            sum += j + ' ';
            for (let k = 1; k <= 3; k++) {
                sum2 += sum + '\n ';
            }
        }
        console.log(sum);
        console.log(sum2);

    }
}
test()
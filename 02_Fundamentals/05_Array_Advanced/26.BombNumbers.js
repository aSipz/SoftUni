function bomb(initialSequence, input) {
    let bombNumber = input.shift();
    let power = input;
    for (let i = 0; i < initialSequence.length; i++) {
        if (initialSequence[i] == bombNumber) {
            initialSequence.splice(Math.max(i - power, 0), power * 2 + 1);
            i = i - power - 1;
        }
    }
    let sum = 0;
    for (let el of initialSequence) {
        sum += el;
    }
    console.log(sum);
}
bomb([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 4]);
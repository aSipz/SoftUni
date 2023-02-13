function numbers(input) {
    const numbers = input.split(' ').map(Number);
    const average = numbers.reduce((acc, curr) => acc + curr) / numbers.length;
    const result = numbers
        .filter(el => el > average)
        .sort((a, b) => b - a)
        .slice(0, 5);

    if (!result[0]) {
        console.log('No');
    } else {
        console.log(result.join(' '));
    }

}

numbers('10 20 30 40 50');
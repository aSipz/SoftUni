function smallestTwo(input) {
    let output = input
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');
    console.log(output);
}
smallestTwo([3, 0, 10, 4, 7, 3]);
function oddNums(input) {
    let sortedArray = input
        .filter((_, x) => x % 2 != 0)
        .map(x => x * 2)
        .reverse();
    console.log(sortedArray.join(' '));
}
oddNums([10, 15, 20, 25]);
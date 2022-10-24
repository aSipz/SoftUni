function sorting(input) {
    input
        .sort((a, b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length);
    console.log(input.join('\n'));
}
sorting(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
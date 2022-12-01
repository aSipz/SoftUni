function delimiter(input, symbol) {
    console.log(input.join(`${symbol}`));
}
delimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);
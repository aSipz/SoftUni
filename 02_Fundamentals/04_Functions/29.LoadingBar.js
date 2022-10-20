function loadingBar(num) {
    let firstRow = '';
    let secondRow = '';
    if (num == 100) {
        firstRow = '100% Complete!';
        secondRow = `[${'%'.repeat(num / 10)}]`;
    } else {
        firstRow = `${num}% [${'%'.repeat(num / 10)}${'.'.repeat(10 - num / 10)}]`;
        secondRow = 'Still loading...'
    }
    console.log(firstRow);
    console.log(secondRow);
}
loadingBar(100);
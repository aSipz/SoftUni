function matrix(num) {
    for (let i = 0; i < num; i++) {
        let rowArray = [];
        for (let j = 0; j < num; j++) {
            rowArray.push(num);
        }
        console.log(rowArray.join(' '));
    }
}
matrix(7);
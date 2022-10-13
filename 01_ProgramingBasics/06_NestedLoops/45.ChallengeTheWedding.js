function wedding(input) {
    let manCount = Number(input[0]);
    let womanCount = Number(input[1]);
    let tableCount = Number(input[2]);
    let toPrint = '';
    let num = 0;
    let isFull = false;
    for (let i = 1; i <= manCount; i++) {
        let table = '';
        for (let j = 1; j <= womanCount; j++) {
            if (num == tableCount) {
                isFull = true;
                break;
            }
            table = `(${i} <-> ${j})`;
            toPrint += table + ' ';
            num++;
        }
        if (isFull) {
            break;
        }
    }
    console.log(toPrint);
}
wedding([2,2,3]);
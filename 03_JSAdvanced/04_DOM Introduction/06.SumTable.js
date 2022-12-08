function sumTable() {
    let table = Array.from(document.querySelectorAll('table tr'));
    let sum = 0;
    for (let i = 1; i < table.length - 1; i++) {
        let row = table[i];
        sum += Number(row.children[row.children.length - 1].textContent);
    }
    document.getElementById('sum').textContent = sum;
}
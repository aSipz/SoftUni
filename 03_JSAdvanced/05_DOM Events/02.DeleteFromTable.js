function deleteByEmail() {
    let input = document.getElementsByName('email')[0];
    let email = input.value;
    let rows = Array.from(document.querySelectorAll('#customers tbody tr'));
    let outputField = document.getElementById('result');
    let isFound = false;
    rows.forEach(row => {
        let cells = Array.from(row.children);
        let mailCell = cells[1];
        if (mailCell.textContent == email) {
            row.parentNode.removeChild(row);
            isFound = true;
        }
    });
    isFound ? outputField.textContent = 'Deleted.' : outputField.textContent = 'Not found.';
}
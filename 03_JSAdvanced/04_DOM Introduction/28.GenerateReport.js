function generateReport() {
    let checkBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    let rows = Array.from(document.querySelectorAll('table tbody tr'));
    let resultArray = [];
    rows.forEach(row => {
        let cells = Array.from(row.children);
        let obj = cells.reduce((acc, current, index) => {
            if (checkBoxes[index].checked) {
                let key = checkBoxes[index].name;
                let value = current.innerText;
                Object.assign(acc, {[key]: value});
            }
            return acc;
        },{});
        if (Object.keys(obj).length > 0) {
            resultArray.push(obj);
        }
    });
    let JSONOutput = JSON.stringify(resultArray, null, 2);
    document.getElementById('output').textContent = JSONOutput;
}
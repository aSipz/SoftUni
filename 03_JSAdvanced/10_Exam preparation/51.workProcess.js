function solve() {
    document.getElementById('add-worker').addEventListener('click', onHire);

    const inputs = Array.from(document.querySelectorAll('input'));
    const table = document.getElementById('tbody');
    const budgetMsg = document.getElementById('sum');

    table.addEventListener('click', onTableClick);

    const workers = [];
    let budget = 0;

    function onTableClick(e) {
        if (e.target.tagName != 'BUTTON') {
            return;
        }

        const currentRow = e.target.parentElement.parentElement;
        const index = Array.from(table.children).indexOf(currentRow);

        budget -= Number(workers[index].salary);
        budgetMsg.textContent = budget.toFixed(2);

        if (e.target.textContent == 'Edit') {
            inputs.forEach(i => i.value = workers[index][i.id]);
        }

        table.removeChild(currentRow);
        workers.splice(index, 1);
    }

    function onHire(e) {
        e.preventDefault();

        if (inputs.some(i => !i.value.trim())) {
            return;
        }

        createRow();
        workers.push(inputs.reduce((acc, curr) => ({ ...acc, [curr.id]: curr.value }), {}));
        budget += Number(inputs.find(i => i.id == 'salary').value);
        budgetMsg.textContent = budget.toFixed(2);
        inputs.forEach(i => i.value = '');
    }

    function createRow() {
        const row = document.createElement('tr');
        inputs.forEach(i => {
            const td = document.createElement('td');
            td.textContent = i.value;
            row.appendChild(td);
        });
        const btnCell = document.createElement('td');
        addButton(btnCell, 'Fired');
        addButton(btnCell, 'Edit');
        row.appendChild(btnCell);
        table.appendChild(row);
    }

    function addButton(parentElement, text) {
        const btn = document.createElement('button');
        btn.classList.add(text.toLowerCase());
        btn.textContent = text;
        parentElement.appendChild(btn);
    }
}
solve();
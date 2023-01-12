const tbody = document.querySelector('#results > tbody');
const form = document.getElementById('form');
form.addEventListener('submit', addEntry);

window.addEventListener('load', async () => { await loadData(); });

async function addEntry(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const { firstName, lastName, facultyNumber, grade } = Object.fromEntries(formData.entries());
    if (!firstName || !lastName) {
        return;
    }
    if (!isNaN(firstName) || !isNaN(lastName)) {
        return
    }
    if (isNaN(grade) || isNaN(facultyNumber)) {
        return;
    }
    if (grade.length == 0 || facultyNumber.length == 0) {
        return;
    }
    const response = await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    });
    const data = await response.json();
    tbody.appendChild(createRow(data));
    form.reset();
}

async function loadData() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/students');
        const data = await response.json();
        const studentsList = Object.values(data).map(createRow);
        tbody.replaceChildren(...studentsList);
    } catch (err) {
        console.log(err);
        return;
    }
}

function createRow(obj) {
    const row = document.createElement('tr');
    for (const key in obj) {
        if (key.startsWith('_')) {
            continue;
        }
        const td = document.createElement('td');
        td.textContent = obj[key];
        row.appendChild(td);
    }
    return row;
}
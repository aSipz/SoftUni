const tbody = document.querySelector('tbody');
const btnLoad = document.getElementById('loadBooks');
const form = document.querySelector('form');
const formBtn = form.querySelector('button');
const h3 = form.querySelector('h3');
const authorField = form.querySelector('[name=author]');
const titleField = form.querySelector('[name=title]');

const rowActions = {
    'Delete': deleteEntry,
    'Edit': editEntry
}

btnLoad.addEventListener('click', async () => { await loadBooks() });
form.addEventListener('submit', getFormData);
tbody.addEventListener('click', action);

async function action(e) {
    if (e.target.tagName != 'BUTTON') {
        return;
    }
    const buttonType = e.target.textContent;
    const row = e.target.parentElement.parentElement
    await rowActions[buttonType](row);
}

async function deleteEntry(row) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + row.id, {
        method: 'delete'
    });
    const data = await response.json();
    tbody.removeChild(row);
}

function editEntry(row) {
    h3.textContent = 'Edit FORM';
    formBtn.textContent = 'Save';
    titleField.value = row.children[0].textContent;
    authorField.value = row.children[1].textContent;
    formBtn.id = row.id;
}

async function edit(author, title, id) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, title })
    });
    const data = await response.json();
    const row = document.getElementById(id);
    row.children[0].textContent = title;
    row.children[1].textContent = author;
    formBtn.id = '';
    formBtn.textContent = 'Submit';
    h3.textContent = 'FORM';
}

async function getFormData(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const { author, title } = Object.fromEntries(formData.entries());
    if (!author || !title) {
        return;
    }
    if (formBtn.textContent == 'Submit') {
        await createEntry(author, title)
    }
    if (formBtn.textContent == 'Save') {
        await edit(author, title, formBtn.id);
    }
    form.reset();
}

async function createEntry(author, title) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, title })
    });
    const data = await response.json();
    tbody.appendChild(createTableRow(data));
}

async function loadBooks() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    const data = await response.json();
    const bookList = Object.entries(data).map(createTableRow);
    tbody.replaceChildren(...bookList);
}

function createTableRow(data) {
    let obj;
    let id;
    if (Array.isArray(data)) {
        [id, obj] = data;
    } else {
        id = data._id;
        obj = data;
    }
    const tr = document.createElement('tr');
    tr.id = id
    tr.innerHTML = `<td>${obj.title}</td>
    <td>${obj.author}</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>`
    return tr;
}
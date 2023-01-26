import { render } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js';
import { post, get, del, put } from './api.js';
import { createAddForm, createEditForm, createTableRow } from './createElements.js';

const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

document.getElementById('loadBooks').addEventListener('click', loadBooks);
tbody.addEventListener('click', tableHandler);
form.addEventListener('submit', submitHandler);

const operations = {
    Edit: onEdit,
    Delete: onDelete
}

render(createAddForm(), form);
form.id = 'add-form';

const data = await get('/jsonstore/collections/books');
const dataArray = Object.entries(data);

function loadBooks() {
    render(repeat(dataArray, i => i[0], i => createTableRow(i)), tbody);
}

function tableHandler(e) {
    if (e.target.tagName != 'BUTTON') {
        return;
    }
    const btn = e.target.textContent;
    const id = e.target.parentElement.parentElement.id;
    operations[btn](id);
}

function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { title, author, bookId } = Object.fromEntries(formData);
    if (!title || !author) {
        return;
    }
    e.target.reset();
    if (e.target.id == 'add-form') {
        createEntry(title, author);
    }
    if (e.target.id == 'edit-form') {
        editEntry(title, author, bookId);
    }
}

function onEdit(id) {
    const index = dataArray.findIndex(e => e[0] == id);
    const book = dataArray[index];

    render(createEditForm(book), form);
    form.id = 'edit-form';
}

async function onDelete(id) {
    const data = await del('/jsonstore/collections/books/' + id);
    const index = dataArray.findIndex(e => e[0] == id);
    dataArray.splice(index, 1);

    render(repeat(dataArray, i => i[0], i => createTableRow(i)), tbody);
}

async function createEntry(title, author) {
    const data = await post('/jsonstore/collections/books', { title, author });
    dataArray.push([data._id, { title: data.title, author: data.author }]);
    render(repeat(dataArray, i => i[0], i => createTableRow(i)), tbody);
}

async function editEntry(title, author, bookId) {
    const data = await put('/jsonstore/collections/books/' + bookId, { title, author });
    const book = dataArray.find(e => e[0] == bookId);
    book[1].title = title;
    book[1].author = author;

    render(repeat(dataArray, i => i[0], i => createTableRow(i)), tbody);
    render(createAddForm(), form);
    form.id = 'add-form';
}
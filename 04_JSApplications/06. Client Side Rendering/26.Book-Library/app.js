import { html, render } from './node_modules/lit-html/lit-html.js';
import { post, get, del, put } from './api.js';
import { createEditView, createHomeView } from './createElements.js';

const body = document.querySelector('body');
const tbody = document.querySelector('tbody');

document.getElementById('loadBooks').addEventListener('click', loadBooks);
tbody.addEventListener('click', tableHandler);

let dataArray = [];

const operations = {
    Edit: onEdit,
    Delete: onDelete
}

const homeView = createHomeView.bind(null, tableHandler, submitHandler);
const editView = createEditView.bind(null, tableHandler, submitHandler);


async function loadBooks() {
    const data = await get('/jsonstore/collections/books');
    dataArray = Object.entries(data);

    render(homeView(dataArray), root);
}

function tableHandler(e) {
    if (e.target.tagName != 'BUTTON') {
        return;
    }
    const btn = e.target.textContent;
    const id = e.target.parentElement.parentElement.id;
    operations[btn](id);
}

async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { title, author, bookId } = Object.fromEntries(formData);
    debugger
    if (!title || !author) {
        return;
    }
    e.target.reset();
    if (e.target.id == 'add-form') {
        const data = await post('/jsonstore/collections/books', { title, author });
        dataArray.push([data._id, { title: data.title, author: data.author }]);

        render(homeView(dataArray), root);

    }
    if (e.target.id == 'edit-form') {
        const data = await put('/jsonstore/collections/books/' + bookId, { title, author });
        const index = dataArray.findIndex(e => e[0] == bookId);
        const book = dataArray[index][1];
        book.title = title;
        book.author = author;

        render(homeView(dataArray), root);
    }

}

async function onEdit(id) {
    const index = dataArray.findIndex(e => e[0] == id);
    const book = dataArray[index];
    render(editView(dataArray, book), root);
}

async function onDelete(id) {
    const data = await del('/jsonstore/collections/books/' + id);
    const index = dataArray.findIndex(e => e[0] == id);
    dataArray.splice(index, 1);

    render(homeView(dataArray), root);
}

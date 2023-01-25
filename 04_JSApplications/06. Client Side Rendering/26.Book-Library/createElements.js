import { html, render } from './node_modules/lit-html/lit-html.js';
import { repeat } from './node_modules/lit-html/directives/repeat.js';

const createAddForm = (submitHandler) => html`
<form id="add-form" @submit=${submitHandler}>
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`;

const createEditForm = (submitHandler, book) => html`
<form id="edit-form" @submit=${submitHandler}>
    <input type="hidden" name="bookId" .value=${book[0]}>
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." .value=${book[1].title}>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." .value=${book[1].author}>
    <input type="submit" value="Save">
</form>`;

const createTableRow = (data) => html`
<tr id="${data[0]}">
    <td>${data[1].title}</td>
    <td>${data[1].author}</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
</tr>`;

const createView = (form, tableHandler, submitHandler, data, book) => html`
<table @click=${tableHandler}>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        ${repeat(data, i => i[0], i => createTableRow(i))}
    </tbody>
</table>
${form(submitHandler, book)}`;

export const createHomeView = createView.bind(null, createAddForm);
export const createEditView = createView.bind(null, createEditForm);
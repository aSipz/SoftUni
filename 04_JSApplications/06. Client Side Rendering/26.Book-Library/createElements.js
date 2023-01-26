import { html } from './node_modules/lit-html/lit-html.js';

export function createAddForm() {
    return html`
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">`;
}

export function createEditForm(book) {
    return html`
    <input type="hidden" name="bookId" .value=${book[0]}>
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." .value=${book[1].title}>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." .value=${book[1].author}>
    <input type="submit" value="Save">`;
}

export function createTableRow(data) {
    return html`
<tr id="${data[0]}">
    <td>${data[1].title}</td>
    <td>${data[1].author}</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>
</tr>`;
}
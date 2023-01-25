import { html, render } from './node_modules/lit-html/lit-html.js';
import { post, get } from './api.js';

const root = document.getElementById('menu');

document.querySelector('form').addEventListener('submit', onSubmit);

const data = await get('/jsonstore/advanced/dropdown');
const array = Object.values(data);

const createOptions = option => html`
<option value=${option._id}>${option.text}</option>`;

render(array.map(createOptions), root);

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {text} = Object.fromEntries(formData);
    e.target.reset();
    const result = await post('/jsonstore/advanced/dropdown', {text});
    array.push(result);
    render(array.map(createOptions), root);
}
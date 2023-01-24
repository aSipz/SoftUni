import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('root');
document.querySelector('form').addEventListener('submit', loadCities);

const ul = data => html`
<ul>
    ${data.map(el => html`<li>${el}</li>`)}
</ul>`;

function loadCities(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { towns } = Object.fromEntries(formData);
    e.target.reset();
    const data = towns.split(', ');
    render(ul(data), root);
}
import { html, render, nothing } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const root = document.getElementById('allCats');

root.addEventListener('click', showDetails)

const data = cats.map(el => Object.assign({}, el, { active: false }));

const createCard = cat => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" id="${cat.id}">Show status code</button>

        ${cat.active
        ? html`<div class="status">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>`
        : nothing}

    </div>
</li>`;

const createCats = data => html`
<ul>
    ${data.map(createCard)}
</ul>`;

render(createCats(data), root);

function showDetails(e) {
    if (e.target.tagName != 'BUTTON') {
        return;
    }
    const id = e.target.id;
    const cat = data.find(e => e.id == id);
    cat.active = !cat.active;
    e.target.textContent == 'Show status code' ? e.target.textContent = 'Hide status code' : e.target.textContent = 'Show status code';
    render(createCats(data), root);
}
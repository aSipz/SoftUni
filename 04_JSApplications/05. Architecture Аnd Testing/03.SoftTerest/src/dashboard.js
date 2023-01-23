import { get } from './api.js';

const div = document.getElementById('dashboard-holder');
div.addEventListener('click', onClick);
div.remove();

let ctx = null;

export async function dashboardView(newCtx) {
    ctx = newCtx;
    div.innerHTML = '';
    ctx.render(div, 'dashboard-view');
    const data = await get('/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
    if (data.length > 0) {
        const cardList = data.map(createCard);
        div.replaceChildren(...cardList);
    }
    if (data.length == 0) {
        const p = document.createElement('p');
        p.textContent = 'No ideas yet! Be the first one :)';
        div.appendChild(p);
    }
}

function createCard(obj) {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    div.id = obj._id;
    div.className = 'card overflow-hidden current-card details';
    div.style.width = '20rem';
    div.style.height = '18rem';
    div.innerHTML = `<div class="card-body">
    <p class="card-text">${obj.title}</p>
</div>
<img class="card-image" src="${obj.img}" alt="Card image cap">
<a class="btn" href="#">Details</a>`
    fragment.appendChild(div);
    return fragment;
}

function onClick(e) {
    if (e.target.tagName != 'A') {
        return;
    }
    const id = e.target.parentElement.id;
    ctx.goto('details-view', id);
}

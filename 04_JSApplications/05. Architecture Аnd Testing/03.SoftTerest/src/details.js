import { del, get } from "./api.js";

const div = document.getElementById('details');
div.addEventListener('click', deleteCard)
div.remove();

let ctx = null;

export async function detailsView(newCtx, id) {
    ctx = newCtx;
    div.innerHTML = '';
    ctx.render(div);
    const data = await get('/data/ideas/' + id);
    div.replaceChildren(createCard(data));
}

function createCard(obj) {
    const userId = localStorage.getItem('userId');
    const fragment = document.createDocumentFragment();
    const img = document.createElement('img');
    img.className = 'det-img';
    img.src = obj.img;
    const div = document.createElement('div');
    div.className = 'desc';
    div.innerHTML = `<h2 class="display-5">${obj.title}</h2>
    <p class="infoType">Description:</p>
    <p class="idea-description">${obj.description}</p>`
    fragment.appendChild(img);
    fragment.appendChild(div);
    if (userId == obj._ownerId) {
        const div2 = document.createElement('div');
        div2.className = 'text-center';
        div2.innerHTML = `<a class="btn detb" href="#" id="${obj._id}">Delete</a>`
        fragment.appendChild(div2);
    }
    return fragment;
}

async function deleteCard(e) {
    if (e.target.tagName != 'A') {
        return;
    }
    const id = e.target.id;
    const data = await del('/data/ideas/' + id);
    ctx.goto('dashboard-view');
}

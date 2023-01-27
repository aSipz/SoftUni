import { getAll, getMy } from '../data/data.js';
import { html, repeat } from '../lib.js'
import { createHeaderTemplate } from '../util.js'

let ctx = null;

export async function showHome(newCtx, next) {
    [...document.querySelectorAll('nav a')].forEach(e => e.classList.remove('active'));

    const userId = sessionStorage.getItem('userId');
    newCtx.userId = userId;
    ctx = newCtx;
    const href = ctx.path;

    let data;

    const id = ctx.params.userId;

    if (id) {
        ctx.render(createContent('', true));
        document.querySelector(`nav [href="${href}"]`).classList.add('active');
        data = await getMy(id);
        ctx.render(createContent(data, true));
    } else {
        ctx.render(createContent('', false));
        document.querySelector(`nav [href="${href}"]`).classList.add('active');
        data = await getAll();
        ctx.render(createContent(data, false));
    }

    ctx.render(createContent(data));
};

function createContent(data, bool) {
    return html`
    ${createHeaderTemplate(ctx.userId)}
    ${createCatalogTemplate(data, bool)}`
}

function createCatalogTemplate(data, bool) {
    return html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                ${createTitleTemplate(bool)}
            </div>
        </div>
        <div class="row space-top">
            ${data ? repeat(data, i => i._id, createCard) : 'Loading...'}
        </div>
    </div>`;
}

function createTitleTemplate(bool) {
    if (bool) {
        return html`
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>`;
    } else {
        return html`
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>`;
    }
}

function createCard(e) {
    return html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=".${e.img}" />
                <p>${e.description}</p>
                <footer>
                    <p>Price: <span>${e.price} $</span></p>
                </footer>
                <div>
                    <a href=${`/details/${e._id}`} class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>`;
}

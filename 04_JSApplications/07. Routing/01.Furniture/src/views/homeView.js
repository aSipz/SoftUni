import { getAll } from '../data/data.js';
import { html, repeat } from '../lib.js'
import { createHeaderTemplate } from '../util.js'

export async function showHome(ctx, next) {
    ctx.render(createContent());

    const data = await getAll();

    ctx.render(createContent(data));
};

function createContent(data) {
    return html`
    ${createHeaderTemplate()}
    ${createCatalogTemplate(data)}`
}

function createCatalogTemplate(data) {
    return html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${data ? repeat(data, i => i._id, createCard) : 'Loading...'}
        </div>
    </div>`;
}

function createCard(e) {
    return html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${e.img}" />
                <p>${e.description}</p>
                <footer>
                    <p>Price: <span>${e.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${e._id}" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>`;
}

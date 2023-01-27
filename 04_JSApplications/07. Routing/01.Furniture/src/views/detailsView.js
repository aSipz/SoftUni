import { getDetails } from '../data/data.js';
import { html } from '../lib.js'
import { createHeaderTemplate } from '../util.js'

let ctx = null;

export async function showDetails(newCtx, next) {
    const userId = sessionStorage.getItem('userId');
    newCtx.userId = userId;
    ctx = newCtx;
   
    ctx.render(createContent());
    const id = ctx.params.furId;

    const data = await getDetails(id);
    ctx.render(createContent(data));

}

function createContent(data) {
    return html`
    ${createHeaderTemplate(ctx.userId)}
    ${createDetailsTemplate(data)}`;
}

function createDetailsTemplate(data) {
    return html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            ${data ? createInfo(data) : 'Loading...'}
        </div>
    </div>`;
}

function createInfo(data) {
    return html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=".${data.img}" />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${data.make}</span></p>
        <p>Model: <span>${data.model}</span></p>
        <p>Year: <span>${data.year}</span></p>
        <p>Description: <span>${data.description}</span></p>
        <p>Price: <span>${data.price}</span></p>
        <p>Material: <span>${data.material ? data.material : ''}</span></p>
        ${data._ownerId === ctx.userId ? createButtons(data): ''}
    </div>`;
}

function createButtons(data) {
    return html`
    <div>
        <a href="/edit/${data._id}" class="btn btn-info">Edit</a>
        <a href="/delete/${data._id}" class="btn btn-red">Delete</a>
    </div>`;
}
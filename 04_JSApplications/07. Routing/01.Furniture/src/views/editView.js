import { editItem, getDetails } from '../data/data.js';
import { html } from '../lib.js'
import { createChangeHandler, createHeaderTemplate, createSubmitHandler } from '../util.js'

let ctx = null;

export async function showEdit(newCtx, next) {
    const userId = sessionStorage.getItem('userId');
    newCtx.userId = userId;
    ctx = newCtx;
    
    ctx.render(createContent());
    const id = ctx.params.furId;
    const data = await getDetails(id);
    ctx.render(createContent(data));

    const form = document.querySelector('form');

    createSubmitHandler(form, onEdit);
    createChangeHandler(form);
}

async function onEdit({ make, model, year, description, price, img, material }, event) {
    if (make.length < 4 || model.length < 4 || 1950 > Number(year) || Number(year) > 2050 || description.length < 11 || Number(price) <= 0 || img.length < 1) {
        return;
    }
    const data = await editItem(ctx.params.furId, { make, model, year, description, price, img, material });
    ctx.page.redirect(`/details/${ctx.params.furId}`);
}

function createContent(data) {
    return html`
    ${createHeaderTemplate(ctx.userId)}
    ${createEditTemplate(data)}`
}

function createEditTemplate(data) {
    return html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        ${data
           ? html`<form>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" .value="${data.make}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model" .value="${data.model}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year" .value="${data.year}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description"
                            .value="${data.description}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" .value="${data.price}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" .value="${data.img}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material"
                            .value="${data.material ? data.material : ''}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>`
        : 'Loading...'
        }
    </div>`;
}
import { createItem } from '../data/data.js';
import { html } from '../lib.js'
import { createChangeHandler, createHeaderTemplate, createSubmitHandler } from '../util.js'

let ctx = null;

export function showCreate(newCtx, next) {
    const userId = sessionStorage.getItem('userId');
    newCtx.userId = userId;
    ctx = newCtx;
    const href = ctx.path;

    ctx.render(createContent());
    document.querySelector(`nav [href="${href}"]`).classList.add('active');

    const form = document.querySelector('form');

    createSubmitHandler(form, onCreate);
    createChangeHandler(form);
}

async function onCreate({ make, model, year, description, price, img, material }, event) {
    if (make.length < 4 || model.length < 4 || 1950 > Number(year) || Number(year) > 2050 || description.length < 11 || Number(price) <= 0 || img.length < 1) {
        return;
    }
    event.target.reset();
    const data = await createItem({ make, model, year, description, price, img, material });
    ctx.page.redirect('/');
}

function createContent() {
    return html`
    ${createHeaderTemplate(ctx.userId)}
    ${createTemplate()}`
}

function createTemplate() {
    return html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control valid" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
    </div>`;
}
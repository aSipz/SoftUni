import { getShoe, updateShoe } from '../data/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;

export async function showEdit(context) {

    ctx = context;

    const shoeId = ctx.params.id;
    const user = ctx.user;
    const shoe = await getShoe(shoeId);
    ctx.render(createEditTemplate(shoe));
}

function createEditTemplate(shoe) {
    return html`

<!-- Edit Page (Only for logged-in users) -->
<section id="edit">
          <div class="form">
            <h2>Edit item</h2>
            <form class="edit-form" @submit=${createSubmitHandler(onSubmit)}>
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
                .value="${shoe.brand}"
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
                .value="${shoe.model}"
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
                .value="${shoe.imageUrl}"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
                .value="${shoe.release}"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
                .value="${shoe.designer}"
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
                .value="${shoe.value}"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`;
}

async function onSubmit({ brand, model, imageUrl, release, designer, value }, event) {

    if (!brand || !imageUrl || !model || !release || !designer || !value) {
        return alert('All fields are required!');
    }

    event.target.reset();

    try {
        const shoeId = ctx.params.id;
        const data = await updateShoe(shoeId, { brand, model, imageUrl, release, designer, value });
        ctx.page.redirect(`/details/${shoeId}`);
    } catch (err) {
        alert(err);
    }

}
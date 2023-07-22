import {  createShoe } from '../data/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;

export function showCreate(context) {
    ctx = context;
    ctx.render(createTemplate());
}

function createTemplate() {
    return html`
         <!-- Create Page (Only for logged-in users) -->
         <section id="create">
          <div class="form">
            <h2>Add item</h2>
            <form class="create-form" @submit=${createSubmitHandler(onSubmit)}>
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`
}

async function onSubmit({ brand, model, imageUrl, release, designer, value }, event) {

    if (!brand || !imageUrl || !model || !release || !designer || !value) {
        return alert('All fields are required!');
    }

    event.target.reset();

    try {
        const data = await createShoe({ brand, model, imageUrl, release, designer, value });
        ctx.page.redirect('/dashboard');
    } catch (err) {
        alert(err);
    }

}
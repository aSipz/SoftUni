import { createFact } from '../data/data.js';
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
            <h2>Add Fact</h2>
            <form class="create-form" @submit=${createSubmitHandler(onSubmit)}>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Category"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
              id="description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="additional-info"
              name="additional-info"
              placeholder="Additional Info"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fact</button>
            </form>
          </div>
        </section>`
}

async function onSubmit(obj, event) {

    const { category, description} = obj;

    const moreInfo = obj['additional-info'];
    const imageUrl = obj['image-url'];

    if (!category || !imageUrl || !description || !moreInfo) {
        return alert('All fields are required!');
    }

    event.target.reset();

    try {
        const data = await createFact({ category, imageUrl, description, moreInfo });
        ctx.page.redirect('/dashboard');
    } catch (err) {
        alert(err);
    }

}
import { getFact, updateFact } from '../data/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;

export async function showEdit(context) {

    ctx = context;

    const factId = ctx.params.id;
    const fact = await getFact(factId);
    ctx.render(createEditTemplate(fact));
}

function createEditTemplate(fact) {
    return html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
          <div class="form">
            <h2>Edit Fact</h2>
            <form class="edit-form" @submit=${createSubmitHandler(onSubmit)}>
              <input
              type="text"
              name="category"
              id="category"
              placeholder="Category"
              .value="${fact.category}"
            />
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="Image URL"
              .value="${fact.imageUrl}"
            />
            <textarea
            id="description"
            name="description"
            placeholder="Description"
            rows="10"
            cols="50"
          >${fact.description}</textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="Additional Info"
            rows="10"
            cols="50"
          >${fact.moreInfo}</textarea>
              <button type="submit">Post</button>
            </form>
          </div>
        </section>`;
}

async function onSubmit(obj, event) {

    const { category, description } = obj;

    const moreInfo = obj['additional-info'];
    const imageUrl = obj['image-url'];

    if (!category || !imageUrl || !description || !moreInfo) {
        return alert('All fields are required!');
    }

    event.target.reset();

    try {
        const factId = ctx.params.id;
        await updateFact(factId, { category, imageUrl, description, moreInfo });
        ctx.page.redirect(`/details/${factId}`);
    } catch (err) {
        alert(err);
    }

}
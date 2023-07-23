import { createAlbum } from '../data/data.js';
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
          <h2>Add Album</h2>
          <form class="create-form" @submit=${createSubmitHandler(onSubmit)}>
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>`
}

async function onSubmit({ singer, album, imageUrl, release, label, sales }, event) {

    if (!singer || !album || !imageUrl || !release || !label || !sales) {
        return alert('All fields are required!');
    }

    event.target.reset();

    try {
        const data = await createAlbum({ singer, album, imageUrl, release, label, sales });
        ctx.page.redirect('/dashboard');
    } catch (err) {
        alert(err);
    }

}
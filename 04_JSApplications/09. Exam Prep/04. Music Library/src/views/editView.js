import { getAlbum, updateAlbum } from '../data/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;

export async function showEdit(context) {

    ctx = context;

    const albumId = ctx.params.id;
    const user = ctx.user;
    const album = await getAlbum(albumId);
    ctx.render(createEditTemplate(album));
}

function createEditTemplate(album) {
    return html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form class="edit-form" @submit=${createSubmitHandler(onSubmit)}>
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value="${album.singer}"/>
            <input type="text" name="album" id="album-album" placeholder="Album" .value="${album.album}"/>
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value="${album.imageUrl}"/>
            <input type="text" name="release" id="album-release" placeholder="Release date" .value="${album.release}"/>
            <input type="text" name="label" id="album-label" placeholder="Label" .value="${album.label}"/>
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value="${album.sales}"/>

            <button type="submit">post</button>
          </form>
        </div>
      </section>`;
}

async function onSubmit({ singer, album, imageUrl, release, label, sales }, event) {

    if (!singer || !album || !imageUrl || !release || !label || !sales) {
        return alert('All fields are required!');
    }

    event.target.reset();

    try {
        const albumId = ctx.params.id;
        const data = await updateAlbum(albumId, { singer, album, imageUrl, release, label, sales });
        ctx.page.redirect(`/details/${albumId}`);
    } catch (err) {
        alert(err);
    }

}
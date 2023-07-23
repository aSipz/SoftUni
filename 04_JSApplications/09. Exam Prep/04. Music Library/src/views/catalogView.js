import { getAllAlbums } from '../data/data.js';
import { html, repeat } from '../lib.js';

export async function showCatalog(ctx) {

    ctx.render(createCatalogTemplate());
    const user = ctx.user;
    const albums = await getAllAlbums();
    ctx.render(createCatalogTemplate(albums, user))
}

function createCatalogTemplate(albums, user) {
    return html`
    <!-- Dashboard page -->
    <section id="dashboard">
        <h2>Albums</h2>

        ${albums ?
            html`
        ${albums.length != 0
                    ? html`
                    <ul class="card-wrapper">
                    ${repeat(albums, e => e._id, e => createCard(e, user))}
                    </ul>`
                    : html`<h2>There are no albums added yet.</h2>`}
        `
            : 'Loading'}
        
      </section>`
}

function createCard(album, user) {
    return html`
    <li class="card">
            <img src="..${album.imageUrl}" alt="album" />
            <p>
              <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
            </p>
            <p>
              <strong>Album name: </strong><span class="album">${album.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
            <a class="details-btn" href="/details/${album._id}">Details</a>
          </li>`;
}
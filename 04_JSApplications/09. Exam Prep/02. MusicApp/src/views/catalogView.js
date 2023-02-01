import { getAllAlbums } from '../data/data.js';
import { html, nothing, repeat } from '../lib.js';

export async function showCatalog(ctx) {

    ctx.render(createCatalogTemplate());
    const user = ctx.user;
    const albums = await getAllAlbums();
    ctx.render(createCatalogTemplate(albums, user))
}

function createCatalogTemplate(albums, user) {
    return html`
    <section id="catalogPage">
        <h1>All Albums</h1>
        ${albums ?
            html`
        ${albums.length != 0
            ? html`${repeat(albums, e => e._id, e => createCard(e, user))}`
        : html`<p>No Albums in Catalog!</p>`}
        `
        : 'Loading'}
    
    </section>`
}

function createCard(album, user) {
    return html`
    <div class="card-box">
        <img src="..${album.imgUrl}">
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>

            ${user
            ? html`
            <div class="btn-group">
                <a href="/details/${album._id}" id="details">Details</a>
            </div>`
            : nothing}
    
        </div>
    </div>`;
}
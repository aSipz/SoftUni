import { deleteAlbum, getAlbum } from '../data/data.js';
import { html, nothing } from '../lib.js';

let ctx = null;

export async function showDetails(context) {

    ctx = context;

    const albumId = ctx.params.id;
    const user = ctx.user;
    const album = await getAlbum(albumId);
    ctx.render(createDetailsTemplate(album, user));

}

function createDetailsTemplate(album, user) {
    return html`
    <section id="detailsPage">
        <div class="wrapper">
            <div class="albumCover">
                <img src="..${album.imgUrl}">
            </div>
            <div class="albumInfo">
                <div class="albumText">
    
                    <h1>Name: ${album.name}</h1>
                    <h3>Artist: ${album.artist}</h3>
                    <h4>Genre: ${album.genre}</h4>
                    <h4>Price: $${album.price}</h4>
                    <h4>Date: ${album.releaseDate}</h4>
                    <p>Description: ${album.description}</p>
                </div>
    
                <!-- Only for registered user and creator of the album-->
                ${user && user.userId == album._ownerId
            ? html`
                <div class="actionBtn">
                    <a href="/edit/${album._id}" class="edit">Edit</a>
                    <a href="javascript:void(0)" class="remove" @click=${onDelete}>Delete</a>
                </div>`
            : nothing}
    
            </div>
        </div>
    </section>`
}

async function onDelete() {
    const albumId = ctx.params.id;
    const answer = confirm('Are you sure?');
    if (!answer) {
        return;
    }
    const data = await deleteAlbum(albumId);
    ctx.page.redirect('/catalog');
}
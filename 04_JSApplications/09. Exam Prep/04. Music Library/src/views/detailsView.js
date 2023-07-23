import { deleteAlbum, getAlbum, getAlbumLikes, getUserAlbumLikes, like } from '../data/data.js';
import { html, nothing } from '../lib.js';

let ctx = null;

export async function showDetails(context) {

    ctx = context;

    const albumId = ctx.params.id;
    const user = ctx.user;
    const [album, albumLikes, userLikes] = await Promise.all([
        getAlbum(albumId),
        getAlbumLikes(albumId),
        getUserAlbumLikes(albumId, user.userId)
    ]);
    ctx.render(createDetailsTemplate(album, albumLikes, userLikes, user));

}

function createDetailsTemplate(album, albumLikes, userLikes, user) {
    return html`
    <!-- Details page -->
    <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src="..${album.imageUrl}" alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${albumLikes}</span></div>

          <!--Edit and Delete are only for creator-->
          ${user && html`
             <div id="action-buttons">
            ${user.userId == album._ownerId
                ? html`
                <a href="/edit/${album._id}" id="edit-btn">Edit</a>
                <a a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>`
                : html`
                ${userLikes === 0
                        ? html`
                <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>`
                        : nothing}
                `}
        </div>`}
      </section>`
}

async function onDelete() {
    const albumId = ctx.params.id;
    const answer = confirm('Are you sure?');
    if (!answer) {
        return;
    }
    const data = await deleteAlbum(albumId);
    ctx.page.redirect('/dashboard');
}

async function onLike() {
    const albumId = ctx.params.id;
    await like(albumId);
    ctx.page.redirect(`/details/${albumId}`);
}
import { searchAlbum } from '../data/data.js';
import { html, nothing, repeat } from '../lib.js';

let ctx = null;

export async function showSearch(context) {

    ctx = context;

    const query = ctx.query.search;
    const user = ctx.user;
    if(query) {
        const albums = await searchAlbum(query);
    
        ctx.render(createSearchTemplate(query, albums, user));
    } else {
        ctx.render(createSearchTemplate());
    }
    

}

function createSearchTemplate(query, albums, user) {
    return html`
    <section id="searchPage">
        <h1>Search by Name</h1>
    
        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
            <button class="button-list" @click=${onClick}>Search</button>
        </div>
    
        <h2>Results:</h2>
    
        ${query
        ? html`
        <div class="search-result">
    
            ${albums.length 
                    ? repeat(albums, i => i._id, i => createAlbumCard(i, user))
                    : html`<p class="no-result">No result.</p>`}
    
        </div>`
        : nothing}
    
    </section>`
}

function createAlbumCard(album, user) {
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

function onClick(e) {
   
    const searchParam = e.target.previousElementSibling.value;
    if (!searchParam) {
        return;
    }
    ctx.page.redirect('/search?search=' + searchParam)
}
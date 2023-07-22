import { searchShoes } from '../data/data.js';
import { html, nothing, repeat } from '../lib.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;

export async function showSearch(context) {

    ctx = context;

    const query = ctx.query.search;
    const user = ctx.user;
    if (query) {
        const shoes = await searchShoes(query);

        ctx.render(createSearchTemplate(query, shoes, user));
    } else {
        ctx.render(createSearchTemplate());
    }


}

function createSearchTemplate(query, shoes, user) {
    return html`
<!-- Search Page (Only for logged-in users) -->
<section id="search">
          <h2>Search by Brand</h2>

          <form class="search-wrapper cf" @submit=${createSubmitHandler(onSubmit)}>
            <input
              id="#search-input"
              type="text"
              name="search"
              placeholder="Search here..."
              required
              .value = "${query}"
            />
            <button type="submit">Search</button>
          </form>

          <h3>Results:</h3>

          <div id="search-container">

              ${query
            ? html`
        <ul class="card-wrapper">
    
            ${shoes.length
                    ? repeat(shoes, i => i._id, i => createShoeCard(i, user))
                    : html`<h2>There are no results found.</h2>`}
    
    </ul>`
            : nothing}
          </div>
        </section>`
}

function createShoeCard(shoe, user) {
    return html`
<li class="card">
                <img src="..${shoe.imageUrl}" alt="shoe" />
                <p>
                  <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
                </p>
                <p>
                  <strong>Model: </strong
                  ><span class="model">${shoe.model}</span>
                </p>
                <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
                ${user
            ? html`
                <a class="details-btn" href="/details/${shoe._id}">Details</a>`
            : nothing
        }
              </li>`;
}

async function onSubmit({ search }, event) {

    if (!search) {
        return;
    }

    const searchParam = search;

    // event.target.reset();

    ctx.page.redirect('/search?search=' + searchParam);

}
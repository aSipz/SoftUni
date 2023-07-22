import { getAllShoes } from '../data/data.js';
import { html, nothing, repeat } from '../lib.js';

export async function showCatalog(ctx) {

    ctx.render(createCatalogTemplate());
    const user = ctx.user;
    const shoes = await getAllShoes();
    ctx.render(createCatalogTemplate(shoes, user))
}

function createCatalogTemplate(shoes, user) {
    return html`

<!-- Dashboard page -->
<section id="dashboard">
          <h2>Collectibles</h2>

${shoes ?
            html`
        ${shoes.length != 0
                    ? html`<ul class="card-wrapper">
                    ${repeat(shoes, e => e._id, e => createCard(e, user))}
                    </ul>`
                    : html`<h2>There are no items added yet.</h2>`}
        `
            : 'Loading'}

        </section>`
}

function createCard(shoe, user) {
    return html`

<li class="card">
              <img src="..${shoe.imageUrl}" alt="shoe" />
              <p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
              <p>
                <strong>Model: </strong
                ><span class="model">${shoe.model}</span>
              </p>
              <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
              <a class="details-btn" href="/details/${shoe._id}">Details</a>
            </li>`;
}
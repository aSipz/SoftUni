import { getAllFacts } from '../data/data.js';
import { html, repeat } from '../lib.js';

export async function showCatalog(ctx) {

    ctx.render(createCatalogTemplate());
    const facts = await getAllFacts();
    ctx.render(createCatalogTemplate(facts))
}

function createCatalogTemplate(facts) {
    return html`
    <!-- Dashboard page -->
    <h2>Fun Facts</h2>
          ${facts ?
            html`<section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
        ${facts.length != 0
                    ? html`${repeat(facts, e => e._id, e => createCard(e))}
            </section>`
                    : html`<h2>No Fun Facts yet.</h2>`}
        `
            : 'Loading'}`
}

function createCard(fact) {
    return html`
     <div class="fact">
            <img src="..${fact.imageUrl}" alt="example1" />
            <h3 class="category">${fact.category}</h3>
            <p class="description">${fact.description}</p>
            <a class="details-btn" href="/details/${fact._id}" id="details">More Info</a>
          </div>`;
}
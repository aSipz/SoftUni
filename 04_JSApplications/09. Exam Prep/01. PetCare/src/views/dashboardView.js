import { getAnimals } from '../data/data.js';
import { html, repeat } from '../lib.js';

export async function showDashboard(ctx, next) {

    ctx.render(createDashTemplate());
    const animals = await getAnimals();
    ctx.render(createDashTemplate(animals));

}

function createDashTemplate(animals) {
    return html`
    <section id="dashboard">
        <h2 class="dashboard-title">Services for every animal</h2>
        <div class="animals-dashboard">
            ${animals
                ? html`
            ${animals.length
                ? repeat(animals, i => i._id, createAnimalCard)
                : html`
            <div>
                <p class="no-pets">No pets in dashboard</p>
            </div>`}`
            : 'Loading'}
        </div>
    </section>`;
}

function createAnimalCard(animal) {
    return html`
    <div class="animals-board">
        <article class="service-img">
            <img class="animal-image-cover" src="${animal.image}">
        </article>
        <h2 class="name">${animal.name}</h2>
        <h3 class="breed">${animal.breed}</h3>
        <div class="action">
            <a class="btn" href="/details/${animal._id}">Details</a>
        </div>
    </div>`;
}
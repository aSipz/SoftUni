import { getAnimal } from '../data/data.js';
import { html, nothing } from '../lib.js';

export async function showDetails(ctx, next) {

    const animalId = ctx.params.id;
    const user = ctx.user;
    ctx.render(createDetailsTemplate());
    const animal = await getAnimal(animalId);
    
    ctx.render(createDetailsTemplate(animal));

}

function createDetailsTemplate(animal, user) {
    return html`
    <section id="detailsPage">
            <div class="details">

                ${animal
                ? html`
                <div class="animalPic">
                    <img src="./images/Shiba-Inu.png">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: Max</h1>
                        <h3>Breed: Shiba Inu</h3>
                        <h4>Age: 2 years</h4>
                        <h4>Weight: 5kg</h4>
                        <h4 class="donation">Donation: 0$</h4>
                    </div>

                    ${user
                    ? html`
                    <div class="actionBtn">
                        ${user.userId == animal._ownerId
                        ? html `
                        <a href="#" class="edit">Edit</a>
                        <a href="#" class="remove">Delete</a>`
                        : html `<a href="#" class="donate">Donate</a>`}
                    </div>`
                    :nothing}
                </div>`
                : 'Loading'}
            </div>
        </section>`;
}
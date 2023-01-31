import { deleteAnimal, donate, getAnimal, getPetDonations, getUserDonations } from '../data/data.js';
import { html, nothing } from '../lib.js';

let ctx = null;
export async function showDetails(context, next) {
    ctx = context;

    const animalId = ctx.params.id;
    const user = ctx.user;
    ctx.render(createDetailsTemplate());
    const requests = [
        getAnimal(animalId),
        getPetDonations(animalId)
    ] 
    if (user) {
        requests.push(getUserDonations(animalId, user.userId))
    }
    const [animal, totalDonations, userDonations] = await Promise.all(requests);
    

    ctx.render(createDetailsTemplate(animal, user, totalDonations, userDonations));

}

function createDetailsTemplate(animal, user, totalDonations, userDonations) {
    return html`
    <section id="detailsPage">
            <div class="details">

                ${animal
                ? html`
                <div class="animalPic">
                    <img src="${animal.image}">
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${animal.name}</h1>
                        <h3>Breed: ${animal.breed}</h3>
                        <h4>Age: ${animal.age}</h4>
                        <h4>Weight: ${animal.weight}</h4>
                        <h4 class="donation">Donation: ${Number(totalDonations) * 100}$</h4>
                    </div>

                    ${user
                    ? html`
                    <div class="actionBtn">
                        ${user.userId == animal._ownerId
                        ? html `
                        <a href="/edit/${animal._id}" class="edit">Edit</a>
                        <a href="javascript:void(0)" class="remove" @click=${onDelete}>Delete</a>`
                        : html `
                        ${Number(userDonations) == 1
                        ? nothing
                    : html`
                    <a href="javascript:void(0)" class="donate" @click=${onDonate}>Donate</a>`}`}
                    </div>`
                    :nothing}
                </div>`
                : 'Loading'}
            </div>
        </section>`;
}

async function onDelete() {
    const animalId = ctx.params.id;
    const answer = confirm('Are you sure?');
    if(!answer) {
        return;
    }
    const data = await deleteAnimal(animalId);
    ctx.page.redirect('/');
    
}

async function onDonate() {
    const animalId = ctx.params.id;
    const data = await donate({animalId});
    ctx.page.redirect('/details/' + animalId);
}
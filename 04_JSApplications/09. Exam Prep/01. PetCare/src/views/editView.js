import { editAnimal, getAnimal } from '../data/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;
export async function showEdit(context, next) {
    ctx = context;

    const animalId = ctx.params.id;
    const animal = await getAnimal(animalId);

    ctx.render(createEditTemplate(animal));
}

function createEditTemplate(animal) {
    return html`
    <section id="editPage">
        <form class="editForm" @submit=${createSubmitHandler(onSubmit)}>
            <img src="../images/editpage-dog.jpg">
            <div>
                <h2>Edit PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" .value="${animal.name}">
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" .value="${animal.breed}">
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" .value="${animal.age}">
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" .value="${animal.weight}">
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" .value="${animal.image}">
                </div>
                <button class="btn" type="submit">Edit Pet</button>
            </div>
        </form>
    </section>`;
}

async function onSubmit({ name, breed, age, weight, image }, event) {

    const animalId = ctx.params.id;

    if (!name || !breed || !age || !weight || !image) {
        return;
    }

    event.target.reset();

    try {
        const data = await editAnimal(animalId, { name, breed, age, weight, image });
        ctx.page.redirect('/details/' + animalId);
    } catch (err) {
        alert(err);
        ctx.page.redirect('/edit/' + animalId);
    }

}

import { createAnimal } from '../data/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;

export async function showCreate(context, next) {
    ctx = context;
    ctx.render(createTemplate());

}

function createTemplate() {
    return html`
    <section id="createPage">
        <form class="createForm" @submit=${createSubmitHandler(onSubmit)}>
            <img src="./images/cat-create.jpg">
            <div>
                <h2>Create PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" placeholder="Max">
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" placeholder="2 years">
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" placeholder="5kg">
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
                </div>
                <button class="btn" type="submit">Create Pet</button>
            </div>
        </form>
    </section>`;
}

async function onSubmit({ name, breed, age, weight, image }, event) {

    if (!name || !breed || !age || !weight || !image) {
        return;
    }

    event.target.reset();

    try {
        const data = await createAnimal({ name, breed, age, weight, image });
        ctx.page.redirect('/');
    } catch (err) {
        alert(err);
    }

}
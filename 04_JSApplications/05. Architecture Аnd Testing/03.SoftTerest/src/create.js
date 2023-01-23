import { post } from './api.js';
import {createSubmitHandler} from './util.js'

createSubmitHandler('create-form', onCreate);

const div = document.getElementById('create');
div.remove();

let ctx = null;

export function createView(newCtx) {
    ctx = newCtx;
    ctx.render(div, 'create-view');

}

async function onCreate({title, description, imageURL}, e) {
    try {
        if (title.length < 6 || description.length < 10 || imageURL.length < 5) {
            throw new Error('Fields are not correctly filled');
        }
        const img = imageURL;
        e.target.reset();
        const data = await post('/data/ideas', { title, description, img });
        ctx.goto('dashboard-view');
    } catch (err) {
        alert(err.message);
    }

}
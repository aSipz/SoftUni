import { createAddForm, createMoviePreview } from './createElements.js';
import { addMovie } from './data.js';
import { homeView } from './navigation.js';

const sections = document.querySelectorAll('div > section');
const addSection = document.getElementById('add-movie');

export function addMovieView() {
    [...sections].forEach(s => s.style.display = 'none');
    addSection.style.display = 'block';
    addSection.children[0].appendChild(createAddForm());
}

export async function onAdd(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {title, description, img} = Object.fromEntries(formData);
    if(!title || !description || !img) {
        return;
    }
    const obj = {title,description,img}
    const data = await addMovie(obj);
    document.getElementById('movies-list').appendChild(createMoviePreview(data));
    homeView();
}
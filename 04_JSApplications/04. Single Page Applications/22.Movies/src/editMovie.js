import { createEditForm, createMoviePreview } from "./createElements.js";
import { editMovie, getMovie} from "./data.js";

const sections = document.querySelectorAll('div > section');
const editSection = document.getElementById('edit-movie');
const detailsSection = document.getElementById('movie-example');

export async function editMovieView(id) {
    [...sections].forEach(s => s.style.display = 'none');
    editSection.style.display = 'block';
    const data = await getMovie(id);
    editSection.children[0].appendChild(createEditForm(data));
    
}

export async function onEdit(e) {
    e.preventDefault();
    const list = document.getElementById('movies-list');
    const formData = new FormData(e.target);
    const {title, description, img} = Object.fromEntries(formData);
    if(!title || !description || !img) {
        return;
    }
    const id = e.target.children[0].dataset.id;
    const obj = {title,description,img}
    const data = await editMovie(obj, id);
    const current = [...list.children].find(e => e.dataset.id == id);
    list.replaceChild(createMoviePreview(data), current);
    detailsSection.querySelector('h1').textContent = `Movie title: ${title}`;
    detailsSection.querySelector('img').src = img;
    detailsSection.querySelector('p').textContent = description;
    [...document.querySelectorAll('form')].forEach(e => e.textContent = '');
    [...sections].forEach(s => s.style.display = 'none');
    detailsSection.style.display = 'block';
}
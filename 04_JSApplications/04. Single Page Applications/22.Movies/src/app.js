import {homeView} from './navigation.js';
import {onLogin, onRegister} from './auth.js';
import { getMovies } from './data.js';
import { createMovieDetails, createMoviePreview } from './createElements.js';
import { addMovieView, onAdd } from './addMovieView.js';
import { onClick, showMovieDetails } from './detailsView.js';
import { onEdit } from './editMovie.js';

const movieList = document.getElementById('movies-list');
const addMovie = document.querySelector('#add-movie-button > a');

document.getElementById('login-form').addEventListener('submit', onLogin);
document.getElementById('register-form').addEventListener('submit', onRegister);
document.getElementById('add-movie-form').addEventListener('submit', onAdd);
document.querySelector('#edit-movie form').addEventListener('submit', onEdit);
addMovie.addEventListener('click', addMovieView);
movieList.addEventListener('click', showMovieDetails);
document.getElementById('movie-example').addEventListener('click', onClick);


homeView();
onLoad();

async function onLoad() {
    const list = await getMovies();
    const fragment = document.createDocumentFragment();
    list.forEach(obj => fragment.appendChild(createMoviePreview(obj)));
    movieList.appendChild(fragment);
}

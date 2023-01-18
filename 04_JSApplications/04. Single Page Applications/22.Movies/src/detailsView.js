import { createMovieDetails } from "./createElements.js";
import { addLike, getMovie, getMovieLikes, getUserLikes, removeMovie } from "./data.js";
import { editMovieView } from "./editMovie.js";
import { homeView } from "./navigation.js";

const sections = document.querySelectorAll('div > section');
const detailsSection = document.getElementById('movie-example');
const movieList = document.getElementById('movies-list');

const actions = {
    'Delete': deleteMovie,
    'Edit': editMovieView,
    'Like': likeMovie
}

export async function showMovieDetails(e) {
    if (e.target.textContent != 'Details') {
        return;
    }
    if (!sessionStorage.getItem('token')) {
        return;
    }
    [...sections].forEach(s => s.style.display = 'none');
    detailsSection.style.display = 'block';
    const movieId = e.target.parentElement.parentElement.parentElement.dataset.id;
    const userId = sessionStorage.getItem('id');
    const [data, likes, liked] = await Promise.all([getMovie(movieId), getMovieLikes(movieId), getUserLikes(movieId)]);
    detailsSection.appendChild(createMovieDetails(data, userId, likes, liked));
}

export async function onClick(e) {
    if (e.target.tagName != 'A') {
        return;
    }
    const movieId = detailsSection.children[0].dataset.id;
    await actions[e.target.textContent](movieId);
}

async function deleteMovie(id) {
    movieList.removeChild([...movieList.children].find(e => e.dataset.id == id));
    await removeMovie(id);
    homeView();
}

async function likeMovie() {
    const likesField = detailsSection.querySelector('a');
    const span = detailsSection.querySelector('span');
    likesField.parentElement.removeChild(likesField);
    const movieId = detailsSection.children[0].dataset.id;
    await addLike(movieId);
    const num = Number(span.textContent.split(' ')[1]) + 1;
    span.textContent = `Liked ${num}`;
}
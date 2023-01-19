import { addComment, addPostDetails, createDate } from "./elementCreation.js";

const detailsSection = document.getElementById('details-view');
const formComment = document.querySelector('.answer form');
const divTheme = document.querySelector('.theme-content');

formComment.addEventListener('submit', createComment);

export async function detailsView(id) {

    [...document.querySelectorAll('section')].forEach(e => e.style.display = 'none');
    detailsSection.style.display = 'block';
    const [postData, commentsData] = await Promise.all([loadPost(id), loadComments(id)]);
    const frag = addPostDetails(postData);
    const fragment = document.createDocumentFragment();
    fragment.replaceChildren(...commentsData.reverse().map(el => addComment(el)));
    frag.children[1].appendChild(fragment);
    //additional
    divTheme.removeChild(divTheme.children[0]);
    divTheme.removeChild(divTheme.children[0]);

    divTheme.prepend(frag);
}

async function createComment(e) {
    e.preventDefault();
    const formData = new FormData(formComment);
    const { username, postText } = Object.fromEntries(formData);
    if (!username || !postText) {
        return;
    }
    formComment.reset();
    const date = new Date();
    const createdOn = createDate(date);
    const postId = document.querySelector('.comment').id;
    const obj = { postId, postText, createdOn, username };
    document.querySelector('.header').after(addComment(obj));
    await sendComments(obj);
}

async function loadPost(id) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + id);
    const data = await response.json();
    return data;
}

async function loadComments(postId) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
    const data = await response.json();
    const comments = Object.values(data).filter(s => s.postId == postId);
    return comments;
}

async function sendComments(obj) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    });
    const data = await response.json();
}
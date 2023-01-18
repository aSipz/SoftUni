import { detailsView } from './detailsView.js';
import { addPost, createDate} from './elementCreation.js';

const topicTitle = document.querySelector('.topic-title');
const homeBtn = document.querySelector('nav a');
const homeSection = document.getElementById('home-view');
const divTheme = document.querySelector('.theme-content');

document.getElementById('create-content').addEventListener('submit', createPost);
homeBtn.addEventListener('click', homeView);
homeSection.addEventListener('click', viewComments);

function viewComments(e) {
    if (e.target.tagName != 'H2') {
        return
    }
    const id = e.target.parentElement.id;
    detailsView(id);
}

export function homeView() {
    [...document.querySelectorAll('section')].forEach(e => e.style.display = 'none');
    homeSection.style.display = 'block';
    if(document.querySelector('.theme-title')) {
        divTheme.removeChild(document.querySelector('.theme-title'));
        divTheme.removeChild(document.querySelector('.comment'));
    }
}

async function createPost(e) {
    e.preventDefault();
    if (e.target.textContent == 'Cancel') {
        e.target.reset();
    }
    const formData = new FormData(e.target);
    const { topicName, username, postText } = Object.fromEntries(formData);
    if (!topicName || !username || !postText) {
        return;
    }
    const title = topicName;
    const content = postText;
    e.target.reset();
    const date = new Date();
    const createdOn = createDate(date);
    const obj = { title, username, content, createdOn };
    const data = await sendData(obj);
    topicTitle.prepend(addPost(data));
}

async function sendData(obj) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    });
    const data = await response.json();
    return data;
}

import { addPost } from './elementCreation.js';

const topicTitle = document.querySelector('.topic-title');

document.getElementById('create-content').addEventListener('submit', createPost);

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
    e.target.reset();
    const date = new Date();
    const createdOn = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    const obj = { topicName, username, postText, createdOn };
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

import { homeView } from './homeView.js'
import {addPost} from './elementCreation.js'

const topicTitle = document.querySelector('.topic-title');

await onStart();

async function onStart() {
    homeView();
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
    const data = await response.json();
    const fragment = document.createDocumentFragment();
    Object.values(data).forEach(obj => fragment.prepend(addPost(obj)));
    topicTitle.appendChild(fragment);
}

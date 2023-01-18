export function addPost(data) {
    const div = document.createElement('div');
    div.classList.add('topic-container');
    div.innerHTML = `<div class="topic-name-wrapper">
<div class="topic-name">
<a href="#" class="normal" id="${data._id}"><h2>${data.topicName}</h2></a>
<div class="columns">
<div>
<p>Date: <time>${data.createdOn}</time></p>
<div class="nick-name"><p>Username: <span>${data.username}</span></p></div>
</div>
</div>
</div>
</div>`
    return div;
}

export function addPostDetails(data) {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    div.classList.add('comment');
    div.id = data._id;
    div.innerHTML = `<div class="header">
    <img src="./static/profile.png" alt="avatar">
    <p><span>${data.username}</span> posted on <time>${data.createdOn}</time></p>
<p class="post-content">${data.postText}</p>
</div>`
    const div2 = document.createElement('div');
    div2.classList.add('theme-title');
    div2.innerHTML = `<div class="theme-name-wrapper"><div class="theme-name"><h2>${data.title}</h2></div></div>`
    fragment.appendChild(div2);
    fragment.appendChild(div);
    return fragment;
}

export function createDate(date) {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
}

export function addComment(data) {
    const div = document.createElement('div');
    div.id = 'user-comment';
    div.innerHTML = `<div class="topic-name-wrapper">
<div class="topic-name">
<p><strong>${data.username}</strong> commented on <time>${data.createdOn}</time></p>
<div class="post-content"><p>${data.postText}</p></div>
</div>
</div>`
    return div;
}

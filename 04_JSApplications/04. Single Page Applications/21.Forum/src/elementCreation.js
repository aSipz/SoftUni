export function addPost(data) {
    const div = document.createElement('div');
    div.classList.add('topic-container');
    div.id = data._id;
    div.innerHTML = `<div class="topic-name-wrapper">
<div class="topic-name">
<a href="#" class="normal"><h2>${data.topicName}</h2></a>
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
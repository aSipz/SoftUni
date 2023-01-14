function attachEvents() {
    const loadBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');
    const selectField = document.getElementById('posts');
    const postTitleField = document.getElementById('post-title');
    const postBodyField = document.getElementById('post-body');
    const ulComments = document.getElementById('post-comments');

    loadBtn.addEventListener('click', loadPost);
    viewBtn.addEventListener('click', loadComments);

    async function loadComments() {
        const postId = selectField.value;

        try {
            const [responsePost, responseComments] = await Promise.all(
                [fetch('http://localhost:3030/jsonstore/blog/posts/' + postId), fetch('http://localhost:3030/jsonstore/blog/comments')]);
            if (!responsePost.ok || !responseComments.ok) {
                throw new Error;
            }
            const [dataPost, dataComments] = await Promise.all([responsePost.json(), responseComments.json()]);
            postTitleField.textContent = dataPost.title.toUpperCase();
            postBodyField.textContent = dataPost.body;
            ulComments.innerHTML = '';
            for (const key in dataComments) {
                if (dataComments[key].postId == postId) {
                    const li = document.createElement('li');
                    li.id = key;
                    li.textContent = dataComments[key].text;
                    ulComments.appendChild(li);
                }
            }
        } catch (error) {
            console.log(error);
        }

    }

    async function loadPost() {
        try {
            const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
            if (!response.ok) {
                throw new Error;
            }
            const data = await response.json();
            selectField.innerHTML = '';
            for (const key in data) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = data[key].title.toUpperCase();
                selectField.appendChild(option);
            }

        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();
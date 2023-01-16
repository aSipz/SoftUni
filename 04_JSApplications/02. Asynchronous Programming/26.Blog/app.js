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
        const index = selectField.options.selectedIndex;
        const title = selectField.options[index].textContent;
        const body = selectField.options[index].dataset.body;
        postTitleField.textContent = title;
        postBodyField.textContent = body;
        try {
            const responseComments = await fetch('http://localhost:3030/jsonstore/blog/comments');
            if (!responseComments.ok) {
                throw new Error;
            }
            const dataComments = await responseComments.json();
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
                option.textContent = data[key].title;
                option.dataset.body = data[key].body;
                selectField.appendChild(option);
            }

        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();
function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const ul = document.getElementById('commits');

    let commits = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(commits)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error(`${response.status} (Not Found)`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            let list = data.map(item => {
                const li = document.createElement('li');
                li.classList.add('commits');
                li.textContent = `${item.commit.author.name}: ${item.commit.message}`;
                return li;
            });
            ul.replaceChildren(...list);
        })
        .catch(err => {
            const li = document.createElement('li');
            li.textContent = err;
            ul.replaceChildren(li);
        });
}
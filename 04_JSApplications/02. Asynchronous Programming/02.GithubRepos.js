function loadRepos() {
	const input = document.getElementById('username').value;
	const ul = document.getElementById('repos');

	fetch(`https://api.github.com/users/${input}/repos`)
		.then(response => {
			console.log(response);
			if (!response.ok) {
				throw new Error(`${response.status} ${response.statusText}`);
			}
			return response.json();
		})
		.then(data => {
			let newItems = data.map(repo => {
				let li = document.createElement('li');
				let a = document.createElement('a');
				a.href = repo.html_url;
				a.textContent = repo.full_name;
				li.appendChild(a);
				return li;
			});
			ul.replaceChildren(...newItems);
		})
		.catch(err => {
			ul.textContent = err;
		})
}
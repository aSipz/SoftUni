window.addEventListener('load', async () => {
    const navUser = document.getElementById('user');
    const navGuest = document.getElementById('guest');
    if (sessionStorage.getItem('token')) {
        navUser.style.display = 'inline-block';
    } else {
        navGuest.style.display = 'inline-block';
    }

    await loadData()
});

async function loadData() {
    try {
        const response = await fetch('http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        let list = Object.values(data).map(item => createListItem(item));
        document.querySelector('main').addEventListener('click', onClick);
        document.querySelector('main').replaceChildren(...list);
    } catch (error) {
        console.log(error);
    }
}

function onClick(e) {
    if (!e.target.className.includes('preview')) {
        return;
    }
    const previewArticle = e.target;
    fetch(`http://localhost:3030/data/recipes/${e.target.id}`)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            previewArticle.replaceWith(displayRecipe(data));
        })
        .catch(err => {
            console.log(err);
        });
}

function createListItem(item) {
    const article = document.createElement('article');
    article.id = item._id;
    article.classList.add('preview');
    const div1 = document.createElement('div');
    div1.classList.add('title');
    div1.innerHTML = `<h2>${item.name}</h2>`;
    article.appendChild(div1);
    const div2 = document.createElement('div');
    div2.classList.add('small');
    div2.innerHTML = `<img src="${item.img}">`;
    article.appendChild(div2);
    return article;
}

function displayRecipe(item) {
    const article = document.createElement('article');
    article.innerHTML = `<h2>${item.name}</h2>
    <div class="band">
        <div class="thumb">
            <img src="${item.img}">
        </div>
        <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${createIngredients()}
            </ul>
        </div>
    </div>
    <div class="description">
        <h3>Preparation:</h3>
        ${createSteps()}
    </div>`;
    return article;

    function createIngredients() {
        return item.ingredients
            .map(el => `<li>${el}</li>`)
            .join('\n');
    }

    function createSteps() {
        return item.steps
            .map(el => `<p>${el}<p>`)
            .join('\n');
    }
}
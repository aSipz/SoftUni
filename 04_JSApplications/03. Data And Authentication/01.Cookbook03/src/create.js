const form = document.getElementById('newRecipe');

form.addEventListener('submit', newRecipe);

async function newRecipe(e) {
    e.preventDefault();
    const formData = new FormData(form);
    let { name, img, ingredients, steps } = Object.fromEntries(formData.entries());
    if (!name || !img || !ingredients || !steps) {
        return;
    }
    ingredients = ingredients.split('\n');
    steps = steps.split('\n');
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
        window.location.pathname = 'index.html';
    }
    try {
        const response = await fetch('http://localhost:3030/data/recipes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify({ name, img, ingredients, steps })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        window.location.pathname = 'index.html';
    } catch (err) {
        console.error(err);
    }
}
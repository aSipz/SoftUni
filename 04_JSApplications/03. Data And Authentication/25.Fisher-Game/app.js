const sectionHome = document.getElementById('home-view');
const fieldsetHome = document.getElementById('main');
const asideHome = sectionHome.querySelector('aside');
const userDiv = document.getElementById('user');
const guestDiv = document.getElementById('guest');
const btnLogOut = document.getElementById('logout');
// const main = document.querySelector('main');

const spanEmail = document.querySelector('.email > span');
const addForm = document.getElementById('addForm');

const catchActions = {
    load: loadCatch,
    delete: deleteCatch,
    update: updateCatch
};

btnLogOut.addEventListener('click', logout);
sectionHome.addEventListener('click', editCatches);
addForm.addEventListener('submit', addCatch);

const p = document.createElement('p');
p.textContent = 'Click to load catches';
// main.prepend(p);
fieldsetHome.style.display = 'none';

if (!sessionStorage.getItem('accessToken')) {
    guest();
} else {
    user()
}

async function deleteCatch(e) {
    const id = e.target.dataset.id;
    await processCatch('', 'delete', id);
    document.getElementById('catches').removeChild(e.target.parentElement);
}

async function updateCatch(e) {
    const obj = Array.from(e.target.parentElement.querySelectorAll('input')).reduce((a, c) => Object.assign(a, { [c.className]: c.value }), {});
    const id = e.target.dataset.id;
    const data = await processCatch(obj, 'put', id);
    if (!data) {
        await loadCatch();
    }
}

async function addCatch(e) {
    e.preventDefault();
    const formData = new FormData(addForm);
    const { angler, weight, species, location, bait, captureTime } = Object.fromEntries(formData.entries());
    const obj = { angler, weight, species, location, bait, captureTime };
    const newCache = await processCatch(obj, 'post');
    const id = sessionStorage.getItem('id');
    fieldsetHome.children[1].appendChild(createDiv(newCache, id));
    addForm.reset();
}

async function processCatch(obj, method, id) {
    if (obj) {
        const { angler, weight, species, location, bait, captureTime } = obj;
        if (!angler || !weight || !species || !location || !bait || !captureTime) {
            return;
        }
        if (isNaN(weight) || isNaN(captureTime) || !isNaN(angler) || !isNaN(species) || !isNaN(location) || !isNaN(bait)) {
            return;
        }
        if (Number(captureTime) % 1 != 0) {
            return
        }
        obj = { angler, weight, species, location, bait, captureTime }
    }
    if (!id) {
        id = '';
    }
    const response = await fetch('http://localhost:3030/data/catches/' + id, {
        method: method,
        headers: { 'Content-Type': 'application/json', 'X-Authorization': sessionStorage.getItem('accessToken') },
        body: JSON.stringify(obj)
    });
    const data = await response.json();
    return data;
}

async function editCatches(e) {
    if (!catchActions[e.target.className]) {
        return;
    }
    await catchActions[e.target.className](e);
}

async function loadCatch() {
    const response = await fetch('http://localhost:3030/data/catches');
    const data = await response.json();
    const id = sessionStorage.getItem('id');
    const cachesList = data.map(obj => createDiv(obj, id));
    fieldsetHome.children[1].replaceChildren(...cachesList);
    fieldsetHome.style.display = '';
    p.style.display = 'none';
}

function createDiv(obj, id) {
    const disabled = obj._ownerId == id ? '' : 'disabled';
    const div = document.createElement('div');
    div.classList.add('catch');
    div.innerHTML = `<label>Angler</label>
    <input type="text" class="angler" value="${obj.angler}" ${disabled}>
    <label>Weight</label>
    <input type="number" class="weight" value="${obj.weight}" ${disabled}>
    <label>Species</label>
    <input type="text" class="species" value="${obj.species}" ${disabled}>
    <label>Location</label>
    <input type="text" class="location" value="${obj.location}" ${disabled}>
    <label>Bait</label>
    <input type="text" class="bait" value="${obj.bait}" ${disabled}>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${obj.captureTime}" ${disabled}>
    <button class="update" data-id="${obj._id}" data-creator ="${obj._ownerId}" ${disabled}>Update</button>
    <button class="delete" data-id="${obj._id}" data-creator ="${obj._ownerId}" ${disabled}>Delete</button>`;
    return div;
}

function user() {
    userDiv.style.display = '';
    guestDiv.style.display = 'none';
    spanEmail.textContent = sessionStorage.getItem('email');
    Array.from(addForm.children[0].children).forEach(el => el.disabled = false);
}

function guest() {
    userDiv.style.display = 'none';
    guestDiv.style.display = '';
    spanEmail.textContent = 'guest';
    Array.from(addForm.children[0].children).forEach(el => el.disabled = true);
    fieldsetHome.disabled = true;
}

async function logout() {
    const accessToken = sessionStorage.getItem('accessToken');
    try {
        const response = await fetch('http://localhost:3030/users/logout', {
            method: 'get',
            headers: { 'X-Authorization': accessToken }
        });
        if (response.status != 204) {
            throw new Error;
        }
        sessionStorage.clear();
        guest();
    } catch (err) {
        console.error(err);
    }
}
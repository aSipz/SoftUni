const sectionLogIn = document.getElementById('login-view');
const sectionRegister = document.getElementById('register-view');
const sectionHome = document.getElementById('home-view');
const fieldsetHome = document.getElementById('main');
const asideHome = sectionHome.querySelector('aside');
const userDiv = document.getElementById('user');
const guestDiv = document.getElementById('guest');
const btnLogIn = document.getElementById('login');
const btnLogOut = document.getElementById('logout');
const btnRegister = document.getElementById('register');
const btnHome = document.getElementById('home');
const sectionViews = document.getElementById('views');
const main = document.querySelector('main');
const formLogin = sectionLogIn.querySelector('#login');
const formRegister = sectionRegister.querySelector('#register');
const spanEmail = document.querySelector('.email > span');
const addForm = document.getElementById('addForm');
const addBtn = document.querySelector('.add');

const navBtnsList = [btnLogIn, btnLogOut, btnRegister, btnHome];
const sectionsList = [sectionLogIn, sectionRegister, sectionHome];

const navActions = {
    'Home': home,
    'Logout': logout
};
const cacheActions = {
    load: loadCache,
    delete: deleteCache,
    update: updateCache
};

const p = document.createElement('p');
p.textContent = 'Click to load catches';
main.appendChild(p);
main.appendChild(sectionViews);

if (!sessionStorage.getItem('accessToken')) {
    guest();
} else {
    user()
}

document.querySelector('nav').addEventListener('click', navigation);
formLogin.addEventListener('submit', login);
formRegister.addEventListener('submit', register);
sectionHome.addEventListener('click', editCaches);
addForm.addEventListener('submit', addCache);

async function deleteCache(e) {
    const id = e.target.dataset.id;
    await processCache('', 'delete', id);
    document.getElementById('catches').removeChild(e.target.parentElement);
}

async function updateCache(e) {
    const obj = Array.from(e.target.parentElement.querySelectorAll('input')).reduce((a, c) => Object.assign(a, { [c.className]: c.value }), {});
    const id = e.target.dataset.id;
    const data = await processCache(obj, 'put', id);
    if (!data) {
        await loadCache();
    }
}

async function addCache(e) {
    e.preventDefault();
    const formData = new FormData(addForm);
    const { angler, weight, species, location, bait, captureTime } = Object.fromEntries(formData.entries());
    const obj = { angler, weight, species, location, bait, captureTime };
    const newCache = await processCache(obj, 'post');
    const id = sessionStorage.getItem('id');
    fieldsetHome.children[1].appendChild(createDiv(newCache, id));
    addForm.reset();
}

async function processCache(obj, method, id) {
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

async function editCaches(e) {
    if (!cacheActions[e.target.className]) {
        return;
    }
    await cacheActions[e.target.className](e);
}

async function loadCache() {
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

async function navigation(e) {
    if (e.target.tagName != 'A') {
        return;
    }
    navBtnsList.forEach(btn => {
        if (btn.id == e.target.id) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    sectionsList.forEach(section => {
        if (section.id.startsWith(e.target.textContent.toLowerCase())) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
    if (navActions[e.target.textContent]) {
        await navActions[e.target.textContent]();
    }
}

async function register(e) {
    e.preventDefault();
    const formData = new FormData(formRegister);
    const { email, password, rePass } = Object.fromEntries(formData.entries());
    if (!email || !password || password != rePass) {
        alert('Invalid username/password');
        formRegister.reset();
        return;
    }
    formRegister.reset();
    try {
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('id', data._id);
        user();
    } catch (error) {
        console.log(error.message);
    }
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

async function login(e) {
    e.preventDefault();
    const formData = new FormData(formLogin);
    const { email, password } = Object.fromEntries(formData.entries());
    if (!email || !password) {
        return;
    }
    formLogin.reset();
    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('id', data._id);
        user();
    } catch (error) {
        console.log(error.message);
        alert("Email or password don't match\nTry again");
    }
}

function home() {
    sectionHome.style.display = '';
    fieldsetHome.style.display = 'none';
    sectionLogIn.style.display = 'none';
    sectionRegister.style.display = 'none';
    btnHome.classList.add('active');
    p.style.display = '';
}

function user() {
    userDiv.style.display = '';
    guestDiv.style.display = 'none';
    spanEmail.textContent = sessionStorage.getItem('email');
    Array.from(addForm.children[0].children).forEach(el => el.disabled = false);
    // addBtn.disabled = false;
    home();
}

function guest() {
    userDiv.style.display = 'none';
    guestDiv.style.display = '';
    spanEmail.textContent = 'guest';
    Array.from(addForm.children[0].children).forEach(el => el.disabled = true);
    home();
}

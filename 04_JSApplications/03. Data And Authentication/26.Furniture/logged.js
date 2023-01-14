window.addEventListener('load', async () => await loadData());

const tbody = document.querySelector('tbody');
const logoutBtn = document.getElementById('logoutBtn');
const createForm = document.querySelector('form');
const buyBtn = document.getElementById('buy');
const ordersBtn = document.getElementById('show-orders-btn');
const total = document.querySelector('.orders p span');
const totalPrice = document.querySelectorAll('.orders p span')[1];
const accessToken = sessionStorage.getItem('accessToken');

logoutBtn.addEventListener('click', async () => await logout());
createForm.addEventListener('submit', createEntry);
buyBtn.addEventListener('click', buyFurniture);
ordersBtn.addEventListener('click', orderFurniture);

async function orderFurniture() {
    const id = sessionStorage.getItem('id');
    const response = await fetch(`http://localhost:3030/data/orders?where=_ownerId%3D%22${id}%22`, {
        method: 'get',
        headers: { 'X-Authorization': accessToken }
    });
    const data = await response.json();
    if (data.length == 0) {
        total.textContent = 'Nothing bought yet!';
        totalPrice.textContent = '0 $';
        return;
    }
    const items = [];
    let price = 0;
    data.forEach(el => {
        const current = Object.values(el);
        for (const e of current) {
            if (typeof e != 'object') {
                continue;
            }
            items.push(e.name);
            price += Number(e.price);
        }
    });
    total.textContent = items.join(', ');
    totalPrice.textContent = `${price} $`;
    if (!total.textContent) {
        total.textContent = 'Nothing bought yet!';
        totalPrice.textContent = '0 $';
    }
}

async function buyFurniture() {
    const checked = Array.from(document.querySelectorAll('input[type=checkbox]')).filter(el => el.checked);
    const boughtFurniture = [];
    checked.forEach(el => {
        const name = el.parentElement.parentElement.children[1].children[0].textContent;
        const price = el.parentElement.parentElement.children[2].children[0].textContent;
        boughtFurniture.push({ name, price });
    });
    if (boughtFurniture.length == 0) {
        return;
    }
    const response = await fetch('http://localhost:3030/data/orders', {
        method: 'post',
        headers: { 'Content-Type': 'application/json', 'X-Authorization': sessionStorage.getItem('accessToken') },
        body: JSON.stringify(boughtFurniture)
    })
    const data = await response.json();
    checked.forEach(el => el.checked = false);
}

async function createEntry(e) {
    e.preventDefault();
    const formData = new FormData(createForm);
    const { name, price, factor, img } = Object.fromEntries(formData);
    if (!name || !price || !factor || !img) {
        return;
    }
    if (isNaN(price) || isNaN(factor)) {
        alert('Price and Decoration factor should be numbers');
        return;
    }
    createForm.reset();
    try {
        const response = await fetch('http://localhost:3030/data/furniture', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'X-Authorization': sessionStorage.getItem('accessToken') },
            body: JSON.stringify({ name, price, factor, img })
        });
        const data = await response.json();
        tbody.appendChild(createTableRow(data));
    } catch (error) {
        console.log(error);
    }
}

async function loadData() {
    const response = await fetch('http://localhost:3030/data/furniture');
    const data = await response.json();
    const rows = data.map(createTableRow);
    tbody.replaceChildren(...rows);
}

function createTableRow(obj) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td><img src="${obj.img}"></td>
    <td><p>${obj.name}</p></td>
    <td><p>${obj.price}</p></td>
    <td><p>${obj.factor}</p></td>
    <td><input type="checkbox"/></td>`;
    return tr;
}

async function logout() {
    try {
        const response = await fetch('http://localhost:3030/users/logout', {
            method: 'get',
            headers: { 'X-Authorization': accessToken }
        });
        if (response.status != 204) {
            throw new Error;
        }
        sessionStorage.clear();
        window.location.href = 'index.html';
    } catch (err) {
        console.error(err);
    }
}
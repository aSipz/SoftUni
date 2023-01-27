import { del, get, post, put } from './api.js'

/*
•	Register User (POST): http://localhost:3030/users/register
•	Login User (POST): http://localhost:3030/users/login
•	Logout User (GET): http://localhost:3030/users/logout

•	Create Furniture (POST): http://localhost:3030/data/catalog
•	All Furniture (GET): http://localhost:3030/data/catalog
•	Furniture Details (GET): http://localhost:3030/data/catalog/:id
•	Update Furniture (PUT): http://localhost:3030/data/catalog/:id
•	Delete Furniture (DELETE):  http://localhost:3030/data/catalog/:id
•	My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22

*/

const endpoint = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    createItem: '/data/catalog',
    getAll: '/data/catalog',
    item: '/data/catalog/',
    myFur: '/data/catalog?where=_ownerId%3D%22'
}

export async function getDetails(id) {
    return await get(endpoint.item + id);
}

export async function editItem(id, data) {
    return await put(endpoint.item + id, data);
}

export async function deleteItem(id) {
    return await del(endpoint.item + id);
}

export async function getAll() {
    return await get(endpoint.getAll);
}

export async function getMy(id) {
    return await get(endpoint.myFur + id + '%22');
}

export async function login(email, password) {
    return await post(endpoint.login, {email, password});
}

export async function register(email, password) {
    return await post(endpoint.register, {email, password});
}

export async function logout() {
    return await get(endpoint.logout);
}

export async function createItem(data) {
    return await post(endpoint.createItem, data);
}
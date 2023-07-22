import { del, get, post, put } from './api.js'


const endpoint = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    getAllShoes: '/data/shoes?sortBy=_createdOn%20desc',
    shoes: `/data/shoes`,
    search: (query) => `/data/shoes?where=brand%20LIKE%20%22${query}%22`
}

export async function login(email, password) {
    return await post(endpoint.login, { email, password });
}

export async function register(email, password) {
    return await post(endpoint.register, { email, password });
}

export async function logout() {
    return get(endpoint.logout);
}

export function getAllShoes() {
    return get(endpoint.getAllShoes);
}

export function createShoe(data) {
    return post(endpoint.shoes, data);
}

export function getShoe(id) {
    return get(endpoint.shoes + '/' + id);
}

export function deleteShoe(id) {
    return del(endpoint.shoes + '/' + id);
}

export function updateShoe(id, data) {
    return put(endpoint.shoes + '/' + id, data);
}

export function searchShoes(query) {
    return get(endpoint.search(query));
}
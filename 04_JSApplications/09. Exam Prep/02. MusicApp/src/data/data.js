import { del, get, post, put } from './api.js'


const endpoint = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    getAllAlbums: `/data/albums?sortBy=_createdOn%20desc&distinct=name`,
    albums: `/data/albums`,
    search: (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`
   
}

export async function login(email, password) {
    return await post(endpoint.login, { email, password });
}

export async function register(email, password) {
    return await post(endpoint.register, { email, password });
}

export async function logout() {
    return await get(endpoint.logout);
}

export function getAllAlbums() {
    return get(endpoint.getAllAlbums);
}

export function createAlbum(data) {
    return post(endpoint.albums, data);
}

export function getAlbum(id) {
    return get(endpoint.albums + '/' + id);
}

export function deleteAlbum(id) {
    return del(endpoint.albums + '/' + id);
}

export function updateAlbum(id, data) {
    return put(endpoint.albums + '/' + id, data);
}

export function searchAlbum(query) {
    return get(endpoint.search(query));
}
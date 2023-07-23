import { del, get, post, put } from './api.js'


const endpoint = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    getAllAlbums: `/data/albums?sortBy=_createdOn%20desc`,
    albums: `/data/albums`,
    like: '/data/likes',
    getAlbumLikes: (albumId) => `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
    getUserAlbumLikes: (albumId, userId) => `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`

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

export function like(albumId) {
    return post(endpoint.like, { albumId });
}

export function getAlbumLikes(albumId) {
    return get(endpoint.getAlbumLikes(albumId));
}

export function getUserAlbumLikes(albumId, userId) {
    return get(endpoint.getUserAlbumLikes(albumId, userId));
}


import { get, post } from './api.js';

export function register(userData) {
    return post('/users', userData);
}

export function login(userData) {
    return post('/login', userData);
}

export function getUserById(id) {
    return get(`/users/${id}`);
}

export function getUsers() {
    return get(`/users`);
}

export function logout() {
    return post('/logout');
}
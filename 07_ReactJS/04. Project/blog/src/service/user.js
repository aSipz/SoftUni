import { del, get, post, put } from './api.js';
import { createPointer, filterRelation } from './helpers';

const endpoints = {
    roleUser: () => {'/classes/question?where=' + encodeObject(filterRelation('quiz', 'quiz', quizId))}
}

export function register(userData) {
    return post('/users', userData);
}

export function login(userData) {
    return post('/login', userData);
}

export function getUserById(id) {
    return get(`/users/${id}`);
}

export function deleteUser(id) {
    return del(`/users/${id}`);
}

export function updateUser(id, userData) {
    return put(`/users/${id}`, userData);
}

export function getUsers() {
    return get(`/users`);
}

export function logout() {
    return post('/logout');
}

export function addUserRole(userId) {
    const data = {};
    const users = createPointer('_user', userId);

    return put('/logout');
}

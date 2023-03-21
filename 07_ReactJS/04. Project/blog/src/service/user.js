import { del, get, post, put } from './api.js';
import { createPointer, encodeObject, filterRelation } from '../utils/serviceUtils';

const endpoints = {
    'roleUser': '/classes/_Role/ugNVXLHWEW',
    'roleAdmin': '/classes/_Role/vvXf7kKdv5',
    'getUserRole' : (userId) => '/classes/_Role?where=' + encodeObject(filterRelation('users', '_User', userId)),
    'getAllAuthors' : '/classes/_User?where=' + encodeObject({"$relatedTo":{"object":{"__type":"Pointer","className":"_Role","objectId":"vvXf7kKdv5"},"key":"users"}}),
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
    const data = {
        users: { __op: "AddRelation", objects: [createPointer('_User', userId)] }
    };

    return put(endpoints.roleUser, data);
}

export function addAuthorRole(userId) {
    const data = {
        users: { __op: "AddRelation", objects: [createPointer('_User', userId)] }
    };

    return put(endpoints.roleAdmin, data);
}

export function removeAuthorRole(userId) {
    const data = {
        users: { __op: "RemoveRelation", objects: [createPointer('_User', userId)] }
    };

    return put(endpoints.roleAdmin, data);
}

export function getUserRole(userId) {
    return get(endpoints.getUserRole(userId));
}

export function getAllAuthors() {
    return get(endpoints.getAllAuthors);
}

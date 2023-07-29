import { del, get, post, put } from './api.js'


const endpoint = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    getAllFacts: '/data/facts?sortBy=_createdOn%20desc',
    facts: `/data/facts`,
    like: '/data/likes',
    getFactLikes: (factId) => `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`,
    getUserFactLikes: (factId, userId) => `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
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

export function getAllFacts() {
    return get(endpoint.getAllFacts);
}

export function createFact(data) {
    return post(endpoint.facts, data);
}

export function getFact(id) {
    return get(endpoint.facts + '/' + id);
}

export function deleteFact(id) {
    return del(endpoint.facts + '/' + id);
}

export function updateFact(id, data) {
    return put(endpoint.facts + '/' + id, data);
}

export function like(factId) {
    return post(endpoint.like, { factId });
}

export function getFactLikes(factId) {
    return get(endpoint.getFactLikes(factId));
}

export function getUserFactLikes(factId, userId) {
    return get(endpoint.getUserFactLikes(factId, userId));
}
import { del, get, post, put } from './api.js'


const endpoint = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    getAnimals: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    createAnimal: '/data/pets',
    animal: '/data/pets/'
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

export async function getAnimals() {
    return await get(endpoint.getAnimals);
}

export async function createAnimal(data) {
    return await post(endpoint.createAnimal, data);
}

export async function getAnimal(id) {
    return await get(endpoint.animal+ id);
}

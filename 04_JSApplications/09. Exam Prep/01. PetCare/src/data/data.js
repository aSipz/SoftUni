import { del, get, post, put } from './api.js'


const endpoint = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
    getAnimals: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    createAnimal: '/data/pets',
    animal: '/data/pets/',
    donate: '/data/donation',
    // actual petId is animalId on provided server
    petDonations: (petId) => `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    userDonations: (petId, userId) => `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
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

export function getAnimal(id) {
    return get(endpoint.animal + id);
}

export async function editAnimal(id, data) {
    return await put(endpoint.animal + id, data);
}

export async function deleteAnimal(id) {
    return await del(endpoint.animal + id);
}

export async function donate(data) {
    return await post(endpoint.donate, data);
}

export function getPetDonations(petId) {
    return get(endpoint.petDonations(petId))
}

export function getUserDonations(petId, userId) {
    return get(endpoint.userDonations(petId, userId))
}

import * as api from './api.js';


const host = 'https://nodejs-furniture.onrender.com';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// Implement application-specific requests
export async function getFurniture() {
    return await api.get(host + '/furniture');
}

export async function getItemById(id) {
    return await api.get(host + '/furniture/' + id);
}

export async function getMyFurniture() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/furniture?where=_ownerId%3D%22${userId}%22`);
}

export async function createRecord(data) {
    return await api.post(host + '/furniture', data);
}

export async function editRecord(id, data) {
    return await api.put(host + '/furniture/' + id, data);
}

export async function deleteRecord(id) {
    return await api.del(host + '/furniture/' + id);
}
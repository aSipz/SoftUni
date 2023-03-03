import { get, post } from './api';

const endpoints = {
    'login': '/users/login',
    'logout': '/users/logout',
    'register': '/users/register'
}

export function login(loginData) {
    return post(endpoints.login, loginData);
}

export function logout() {
    return get(endpoints.logout);
}

export function register(data) {
    return post(endpoints.register, data);
}
import { get, post } from './api';

const endpoints = {
    'login': '/users/login',
    'logout': '/users/logout'
}

export function login(loginData) {
    return post(endpoints.login, loginData);
}

export function logout() {
    return get();
}
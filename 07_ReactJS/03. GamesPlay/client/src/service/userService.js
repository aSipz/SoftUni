import { get, post } from './api';

const endpoints = {
    'login': '/users/login',
    'logout': '/users/logout'
}

export function login(user, loginData) {
    return post(endpoints.login, user, loginData);
}

export function logout(user) {
    return get(endpoints.logout, user);
}
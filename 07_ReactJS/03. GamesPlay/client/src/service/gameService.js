import { del, get, post, put } from './api';

const endpoints = {
    'allGamesSorted': '/data/games?sortBy=_createdOn%20desc',
    'gameById': (id) => '/data/games/' + id,
    'allGames': '/data/games',
}

export function getAll() {
    return get(endpoints.allGamesSorted);
}

export function getById(id) {
    return get(endpoints.gameById(id));
}

export function create(data) {
    return post(endpoints.allGames, data);
}

export function update(id, data) {
    return put(endpoints.gameById(id), data);
}

export function remove(id) {
    return del(endpoints.gameById(id));
}


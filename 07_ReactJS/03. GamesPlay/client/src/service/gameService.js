import { get, post } from './api';

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

export function create(user, data) {
    return post(endpoints.allGames, user, data);
}


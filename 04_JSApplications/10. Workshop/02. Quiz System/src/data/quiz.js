import { get, post, put } from './api.js';
import { addOwner } from '../util.js';


const endpoints = {
    'quizzes': '/classes/quiz'
}

export async function getAll() {
    return get(endpoints.quizzes);
}

export async function create(quizData, userId) {
    return post(endpoints.quizzes, addOwner(quizData, userId));
}

export async function getById(id) {
    return get(endpoints.quizzes + '/' + id);
}

export async function update(id, quizData, userId) {
    return put(endpoints.quizzes + '/' + id, addOwner(quizData, userId));
}
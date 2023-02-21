import { addOwner, addOwnerQuestion, encodeObject, filterRelation } from '../util.js';
import { del, get, post, put } from './api.js';

const endpoints = {
    'solution' : '/classes/solution',
    'getByQuestion' : (questionId) => '/classes/solution?where=' + encodeObject(filterRelation('question', 'question', questionId)),
};


export async function getByQuestionId(id) {
    return get(endpoints.getByQuestion(id));
}

export async function create(solutionData, userId, questionId) {
    return post(endpoints.solution, addOwnerQuestion(solutionData, userId, questionId));
}

export async function update(id, solutionData, userId) {
    return put(endpoints.solution + '/' + id, addOwnerQuestion(solutionData, userId, id));
}

export async function remove(id) {
    return del(endpoints.solution + '/' + id);
}

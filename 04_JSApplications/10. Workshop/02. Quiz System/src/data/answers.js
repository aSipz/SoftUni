import { addOwnerQuiz, encodeObject, filterRelation } from '../util.js';
import { get, post } from './api.js';

const endpoints = {
    'answers' : '/classes/answers',
    'answersById' : (id) => '/classes/answers/' + id + '?include=quiz',
    'getByQuizAndOwner' : (questionId) => '/classes/solution?where=' + encodeObject(filterRelation('question', 'question', questionId)),
};


export async function getByQuestionId(id) {
    return get(endpoints.getByQuestion(id));
}

export async function getById(id) {
    return get(endpoints.answersById(id));
}

export async function create(answerData, userId, quizId) {
    return post(endpoints.answers, addOwnerQuiz(answerData, userId, quizId));
}

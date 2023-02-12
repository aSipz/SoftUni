import { addOwner, createPointer, encodeDate, encodeObject, filterRelation } from '../util.js';
import { del, get, post, put } from './api.js';

const endpoints = {
    'questionByQuizId': (quizId) => '/classes/question?where=' + encodeObject(filterRelation('quiz', 'quiz', quizId)) + '&include=owner',
    'questions': '/classes/question',
    'reservations': '/classes/Reservation'
}

export async function getByQuizId(quizId) {
    return await get(endpoints.questionByQuizId(quizId));
}

export async function create(questionData, quiz) {
    questionData.quiz = createPointer('quiz', quiz);
    return post(endpoints.questions, questionData);
}

export async function remove(id) {
    return del(endpoints.questions + '/' + id);
}

export async function update(id, questionData, quiz) {
    questionData.quiz = createPointer('quiz', quiz);
    return del(endpoints.questions + '/' + id, questionData);
}

// export async function create(roomData, userId) {
//     roomData = addOwner(roomData, userId);
//     roomData.startDate = encodeDate(roomData.startDate);
//     roomData.endDate = encodeDate(roomData.endDate);
//     roomData.room = createPointer('Room', roomData.room);
//     roomData.host = createPointer('_User', roomData.host);
//     return post(endpoints.reservations, roomData);
// }
import * as quizService from '../data/quiz.js';
import * as questionService from '../data/question.js';

export function preloadQuiz(param) {
    return async function (ctx, next) {
        const id = ctx.params[param];
        if (id) {
            const data = await quizService.getById(id);
            ctx.data = data;
        }

        next();
    }
}

export function preloadQuestion(param) {
    return async function (ctx, next) {
        const id = ctx.params[param];
        if (id) {
            const data = await questionService.getByQuizId(id);
            ctx.questions = data;
        }

        next();
    }
}
import * as quizService from '../data/quiz.js';
import * as questionService from '../data/question.js';
import { html } from '../lib/lit-html.js';

export function preloadQuiz(param) {
    return async function (ctx, next) {
        const id = ctx.params[param];
        if (id) {

            ctx.render(html`
            <div class="pad-large alt-page async">
                    <div class="sk-cube-grid">
                        <div class="sk-cube sk-cube1"></div>
                        <div class="sk-cube sk-cube2"></div>
                        <div class="sk-cube sk-cube3"></div>
                        <div class="sk-cube sk-cube4"></div>
                        <div class="sk-cube sk-cube5"></div>
                        <div class="sk-cube sk-cube6"></div>
                        <div class="sk-cube sk-cube7"></div>
                        <div class="sk-cube sk-cube8"></div>
                        <div class="sk-cube sk-cube9"></div>
                    </div>
                </div>`);

            const [data, questions] = await Promise.all([
                quizService.getById(id),
                questionService.getByQuizId(id)
            ]);
            
            ctx.data = data;
            ctx.questions = questions;
        }

        next();
    }
}

export function preloadCount() {
    return async function (ctx, next) {

        const [quizData, questionData] = await Promise.all([
            quizService.getAllCount(),
            questionService.getAllCount()
        ]);

        ctx.quizCount = quizData.count;
        ctx.questionCount = questionData.count;

        next();
    }
}

export function preloadLastQuiz() {
    return async function (ctx, next) {

        const data = await quizService.getNewest();

        ctx.quiz = data.results[0];

        next();
    }
}
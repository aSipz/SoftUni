import * as quizService from '../data/quiz.js';
import * as questionService from '../data/question.js';
import { repeat } from '../lib/directives/repeat.js';
import { html, nothing } from '../lib/lit-html.js';
import { createSubmitHandler } from '../util.js';

export function showQuiz(ctx) {

    const userId = ctx.user?.objectId;
    const quizId = ctx.params.id;
    const quiz = ctx.data;
    const questions = ctx.questions.results;

    ctx.render(quizTemplate());

    function quizTemplate() {
        return html`
    <section id="details">
        <div class="pad-large alt-page">
            <article class="details">
                <h1>${quiz.title}</h1>
                <span class="quiz-topic">A quiz by <a href="#">${quiz.author}</a> on the topic of ${quiz.topic}</span>
                <div class="quiz-meta">
                    <span>${quiz.questionCount} Questions</span>
                    <span>|</span>
                    <span>Taken ${quiz.taken} times</span>
                </div>
                <p class="quiz-desc">${quiz.description}</p>
    
                ${userId
                ? html`
                <div>
                    <a class="cta action" href="#">Begin Quiz</a>
                </div>`
                : nothing}
    
    
            </article>
        </div>
    </section>`;
    }

}
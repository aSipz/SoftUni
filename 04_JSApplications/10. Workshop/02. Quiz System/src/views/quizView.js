import * as quizService from '../data/quiz.js';
import * as questionService from '../data/question.js';
import { repeat } from '../lib/directives/repeat.js';
import { html, nothing } from '../lib/lit-html.js';
import { createSubmitHandler } from '../util.js';

export function showQuiz(ctx) {

    const userId = ctx.user?.objectId;
    const quizId = ctx.params.id;
    const quiz = ctx.data;
    const question = ctx.question;
    const qCount = ctx.qCount;
    const currentNum = Number(ctx.query.question);
    const questionsStatus = new Array(qCount);

    console.log(quiz);
    console.log(question);
    console.log(qCount);
    console.log(currentNum);

    ctx.render(quizTemplate());

    function quizTemplate() {
        return html`
    <section id="quiz">
        <header class="pad-large">
            <h1>${quiz.title}: Question ${currentNum} / ${qCount}</h1>
            <nav class="layout q-control">
                <span class="block">Question index</span>
                <a class="q-index q-current" href="#"></a>
                <a class="q-index q-answered" href="#"></a>
                <a class="q-index q-answered" href="#"></a>
                <a class="q-index q-answered" href="#"></a>
                <a class="q-index" href="#"></a>
                <a class="q-index" href="#"></a>
                <a class="q-index" href="#"></a>
                <a class="q-index" href="#"></a>
                <a class="q-index" href="#"></a>
                <a class="q-index" href="#"></a>
                <a class="q-index" href="#"></a>
                <a class="q-index" href="#"></a>
                <a class="q-index" href="#"></a>
                <a class="q-index" href="#"></a>
                <a class="q-index" href="#"></a>
            </nav>
        </header>
        <div class="pad-large alt-page">
    
            <article class="question">
                <p class="q-text">
                    ${question.text}
                </p>
    
                <div>
    
                    ${question.answers.map(answerCard)}
    
                </div>
    
                <nav class="q-control">
                    <span class="block">12 questions remaining</span>

                    ${currentNum > 1
                        ? html`<a class="action" href="?question=${currentNum - 1}"><i class="fas fa-arrow-left"></i> Previous</a>`
                        : nothing}
    
                    <a class="action" href=#><i class="fas fa-sync-alt"></i> Start over</a>
                    <div class="right-col">

                    ${currentNum < qCount
                        ? html `<a class="action" href="?question=${currentNum + 1}">Next <i class="fas fa-arrow-right"></i></a>`
                        :nothing}
                        
                        <a class="action" href=#>Submit answers</a>
                    </div>
                </nav>
            </article>
    
        </div>
    </section>`;
    }

    function questionIndex() {
        return html`
        <a class="q-index" href="#"></a>`;
    }

    function answerCard(answer) {
        return html`
        <label class="q-answer radio">
            <input class="input" type="radio" name="question-${currentNum}" value="${question.answers.indexOf(answer)}" />
            <i class="fas fa-check-circle"></i>
            ${answer}
        </label>`;
    }

}
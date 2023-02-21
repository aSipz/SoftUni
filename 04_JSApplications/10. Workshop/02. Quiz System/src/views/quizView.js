import * as quizService from '../data/quiz.js';
import * as questionService from '../data/question.js';
import { repeat } from '../lib/directives/repeat.js';
import { html, nothing } from '../lib/lit-html.js';
import { createSubmitHandler } from '../util.js';

export function showQuiz(ctx) {

    const userId = ctx.user?.objectId;
    const quizId = ctx.params.id;
    const quiz = ctx.data;
    const questions = ctx.questions.results.map(el => Object.assign(el, {status : ''}));
    const qCount = questions.length;
    let currentQuestion = 1;
    let remaining = qCount;
    questions[currentQuestion - 1].status = 'q-current';


    console.log(quiz);
    console.log(questions);
    console.log(qCount);
    console.log(currentQuestion);

    ctx.render(quizTemplate(questions[currentQuestion - 1]));

    function quizTemplate(question) {
        return html`
    <section id="quiz">
        <header class="pad-large">
            <h1>${quiz.title}: Question ${currentQuestion} / ${qCount}</h1>
            <nav class="layout q-control"  @click=${onNavClick}>
                <span class="block">Question index</span>

                ${questions.map(questionIndex)}
                <!-- <a class="q-index q-current" href="#"></a>
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
                <a class="q-index" href="#"></a> -->
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
    
                <nav class="q-control" @click=${onQuestionClick}>
                    <span class="block">${remaining} questions remaining</span>

                    ${currentQuestion > 1
                        ? html`<a class="action" href="javascript:void(0)"><i class="fas fa-arrow-left"></i> Previous</a>`
                        : nothing}
    
                    <a class="action" href="javascript:void(0)"><i class="fas fa-sync-alt"></i> Start over</a>
                    <div class="right-col">

                    ${currentQuestion < qCount
                        ? html `<a class="action" href="javascript:void(0)">Next <i class="fas fa-arrow-right"></i></a>`
                        :nothing}
                        
                        <a class="action" href=#>Submit answers</a>
                    </div>
                </nav>
            </article>
    
        </div>
    </section>`;

        function questionIndex(question) {
            return html`
            <a class="q-index ${question.status}" href="javascript:void(0)"></a>`;
        }

        function answerCard(answer) {
            return html`
            <label class="q-answer radio">
                <input class="input" type="radio" name="question-${currentQuestion}" value="${question.answers.indexOf(answer)}" />
                <i class="fas fa-check-circle"></i>
                ${answer}
            </label>`;
        }

    }

    function onNavClick(e) {
        
        if (e.target.tagName != 'A') {
            return;
        }

        const index = [...e.target.parentElement.children].indexOf(e.target);

        currentQuestion = index;

        changeStatus();
    }

    function onQuestionClick(e) {
        if (e.target.textContent.includes('Previous')) {
            currentQuestion--;
        }
        if (e.target.textContent.includes('Next')) {
            currentQuestion++;
        }
        if (e.target.textContent.includes('Start over')) {
            currentQuestion = 1;
        }

        changeStatus();

    }

    function changeStatus() {

        let isChecked = false;

        const result = document.getElementsByName(`question-${currentQuestion - 1}`);
        if (result.some(e => e.checked)) {
            isChecked = true;
        }
 
        questions.forEach((q, i) => {
            if (q.status == 'q-current') {
                q.status = ''
            }
            if(i == currentQuestion - 1) {
                q.status = 'q-current';
            } 
        });

        ctx.render(quizTemplate(questions[currentQuestion - 1]));
    }

}
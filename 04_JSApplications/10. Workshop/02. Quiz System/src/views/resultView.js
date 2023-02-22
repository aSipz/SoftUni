import * as quizService from '../data/quiz.js';
import * as questionService from '../data/question.js';
import * as solutionService from '../data/solution.js';
import { repeat } from '../lib/directives/repeat.js';
import { html, nothing } from '../lib/lit-html.js';
import { createSubmitHandler } from '../util.js';

export function showResult(ctx) {
    // const userId = ctx.user.objectId;
    // const quizId = ctx.params.id;
    const quiz = ctx.data.quiz;
    const answers = ctx.data.answers;
    const correct = ctx.data.correct;
    const total = ctx.data.total;
    const questions = ctx.questions;
    // const questions = ctx.questions.results;

    console.log(ctx.data);
    console.log(ctx.questions);

    ctx.render(resultTemplate());

    function resultTemplate(answers) {
        return html`
        <section id="summary">
                <div class="hero layout">
                    <article class="details glass">
                        <h1>Quiz Results</h1>
                        <h2>${quiz.title}</h2>

                        <div class="summary summary-top">
                            ${(correct * 100 / total).toFixed()}%
                        </div>

                        <div class="summary">
                            ${correct}/${total} correct answers
                        </div>

                        <a class="action cta" href="/quiz/${quiz.objectId}"><i class="fas fa-sync-alt"></i> Retake Quiz</a>
                        <a class="action cta" href="javascript:void(0)" @click=${seeDetails}><i class="fas fa-clipboard-list"></i> See Details</a>

                    </article>
                </div>

                <div class="pad-large alt-page" @click=${onReveal}>

                ${answers
                ? html`
                
                ${repeat(answers, a => a.questionId, createQuestionCard)}

                    
                </div>`
                : nothing}

                

            </section>`

    }

    function seeDetails() {
        ctx.render(resultTemplate(answers));
    }

    function onReveal(e) {
        if(e.target.tagName != 'BUTTON') {
            return;
        }

        const questionId = e.target.dataset.id;

        const answer = answers.find(e => e.questionId == questionId);

        if(e.target.textContent.includes('Close')) {
            answer.reveal = false;
        } else {
            answer.reveal = true;
        }
        
        ctx.render(resultTemplate(answers));
    }

    function createQuestionCard(answer) {
        const isCorrect = answer.solution == answer.correct;
        const question = questions.find(e => e.objectId == answer.questionId);
        if (answer.reveal) {
            return html`
            <article class="preview">
                        <span class="s-incorrect">
                            Question ${answers.indexOf(answer) + 1}
                            <i class="fas fa-times"></i>
                        </span>
                        <div class="right-col">
                            <button class="action" data-id="${answer.questionId}">Close</button>
                        </div>

                        <div>
                            <p>
                                ${question.text}
                            </p>
                            <div class="s-answer">
                                <span class="s-incorrect">
                                    This is answer 1
                                    <i class="fas fa-times"></i>
                                    <strong>Your choice</strong>
                                </span>
                            </div>
                            <div class="s-answer">
                                <span class="s-correct">
                                    This is answer 2
                                    <i class="fas fa-check"></i>
                                    <strong>Correct answer</strong>
                                </span>
                            </div>
                            <div class="s-answer">
                                <span>
                                    This is answer 3
                                </span>
                            </div>
                        </div>
                    </article>`;
        }
        if(isCorrect) {
            return html`
                    <article class="preview">
                        <span class="s-correct">
                        Question ${answers.indexOf(answer) + 1}
                            <i class="fas fa-check"></i>
                        </span>
                        <div class="right-col">
                            <button class="action" data-id="${answer.questionId}">See question</button>
                        </div>
                    </article>`;
        } else {
            return html`
                    <article class="preview">
                        <span class="s-incorrect">
                        Question ${answers.indexOf(answer) + 1}
                            <i class="fas fa-times"></i>
                        </span>
                        <div class="right-col">
                            <button class="action" data-id="${answer.questionId}">Reveal answer</button>
                        </div>
                    </article>`;
        }
        
    }

}

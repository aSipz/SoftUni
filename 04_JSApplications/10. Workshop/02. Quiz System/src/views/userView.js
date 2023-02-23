import { html, nothing } from '../lib/lit-html.js';
import {repeat } from '../lib/directives/repeat.js';
import * as quizService from '../data/quiz.js'
import { createSubmitHandler } from '../util.js';


export async function showUser(ctx) {

    console.log(ctx.data);
    console.log(ctx.results);
    console.log(ctx.author);
    console.log(ctx.solutions);

    debugger

    const quizzes = ctx.data;
    const user = ctx.user;
    const solutions = ctx.solutions;

    const isAuthor = ctx.isCurrentUser;

    ctx.render(userTemplate(quizzes));

    function userTemplate() {
        return html`
        <section id="profile">
                

                ${isAuthor
                ? html`
                <header class="pad-large">
                    <h1>Profile Page</h1>
                </header>

                <div class="hero pad-large">
                    <article class="glass pad-large profile">
                        <h2>Profile Details</h2>
                        <p>
                            <span class="profile-info">Username:</span>
                            ${user.username}
                        </p>
                        <p>
                            <span class="profile-info">Email:</span>
                            ${user.email}
                        </p>
                        <h2>Your Quiz Results</h2>
                        <table class="quiz-results">
                            <tbody>
                                <tr class="results-row">
                                    <td class="cell-1">23. March 2021</td>
                                    <td class="cell-2"><a href="#">RISC Architecture</a></td>
                                    <td class="cell-3 s-correct">85%</td>
                                    <td class="cell-4 s-correct">12/15 correct answers</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                </div>`
                : nothing}

                <header class="pad-large">
                    <h2>Quizes created by ${isAuthor? 'you' : ctx.author.username}</h2>
                </header>

                <div class="pad-large alt-page">

                    ${repeat(quizzes, q => q.objectId, quizCard)}

                </div>

            </section>`

            function quizCard(quiz) {

                const taken = ctx.results.find(e => e.quiz.objectId == quiz.objectId).taken;

                return html`
                <article class="preview layout">
                        <div class="right-col">
                            <a class="action cta" href="/view/${quiz.objectId}">View Quiz</a>

                            ${isAuthor
                            ? html `
                            <a class="action cta" href="#"><i class="fas fa-edit"></i></a>
                            <a class="action cta" href="#"><i class="fas fa-trash-alt"></i></a>`
                            : nothing}
                            
                        </div>
                        <div class="left-col">
                            <h3><a class="quiz-title-link" href="/view/${quiz.objectId}">${quiz.title}</a></h3>
                            <span class="quiz-topic">Topic: ${quiz.topic}</span>
                            <div class="quiz-meta">
                                <span>${quiz.questionCount} questions</span>
                                <span>|</span>
                                <span>Taken ${taken} times</span>
                            </div>
                        </div>
                    </article>`;
            }
    }

}
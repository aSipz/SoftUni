import * as quizService from '../data/quiz.js';
import * as questionService from '../data/question.js';
import { repeat } from '../lib/directives/repeat.js';
import { html, nothing } from '../lib/lit-html.js';
import { createSubmitHandler } from '../util.js';

export function showEdit(ctx) {
    const userId = ctx.user.objectId;
    const quizId = ctx.params.id;
    const quiz = ctx.data;
    const questions = ctx.questions.results;
    const questionsCount = questions.length;

    ctx.render(editTemplate(quiz, questions));

    function editTemplate(quiz, questions, add, answers, submitted) {
        return html`
        <section id="editor">
        
            <header class="pad-large">
                <h1>Edit quiz</h1>
            </header>
        
            <div class="pad-large alt-page">
                <form @submit=${createSubmitHandler(submitQuiz)}>
                    <label class="editor-label layout">
                        <span class="label-col">Title:</span>
                        <input class="input i-med" type="text" name="title" .value=${quiz.title}></label>
                    <label class="editor-label layout">
                        <span class="label-col">Topic:</span>
                        <select class="input i-med" name="topic" .value=${quiz.topic}>
                            <option value="all">All Categories</option>
                            <option value="languages">Languages</option>
                            <option value="hardware">Hardware</option>
                            <option value="software">Tools and Software</option>
                        </select>
                    </label>
                    <input class="input submit action" type="submit" value="Save">
                </form>
            </div>
        
            <header class="pad-large">
                <h2>Questions</h2>
            </header>
        
            <div class="pad-large alt-page">
        
                ${questions.length
                    ? repeat(questions, q => q.objectId, questionCard)
                : nothing}

                ${add? addQuestion(answers, submitted): nothing}
        
                <article class="editor-question">
                    <div class="editor-input">
                        <button class="input submit action" @click=${onAdd}>
                            <i class="fas fa-plus-circle"></i>
                            Add question
                        </button>
                    </div>
                </article>
        
            </div>
        
        </section>`

    }

    async function submitQuiz({ title, topic }) {
    
        if (!title) {
            return alert('Title is required');
        }

        if (topic == 'all') {
            return alert('Topic is required');
        }

        await quizService.update(quizId, { title, topic }, userId);

        ctx.page.redirect('/edit/' + quizId);
    }
    
    async function submitQuestion(text, correctIndex, answers) {
    

        if (!text) {
            return alert('Question text is required');
        }

        if (!correctIndex) {
            return alert('Correct answer is required');
        }

        if (answers.includes('')) {
            return alert('All answers are required');
        }

        correctIndex = Number(correctIndex[1]);

       

        await questionService.create({text, answers, correctIndex}, quizId);
       
        ctx.page.redirect('/edit/' + quizId);
    }

    function onAdd() {
        ctx.render(editTemplate(quiz, questions, true));
    }

    function onCancel() {
        ctx.render(editTemplate(quiz, questions));
    }

    function questionCard(question) {
        debugger
        return html`
        <article class="editor-question">
            <div class="layout">
                <div class="question-control">
                    <button class="input submit action"><i class="fas fa-edit"></i> Edit</button>
                    <button class="input submit action"><i class="fas fa-trash-alt"></i> Delete</button>
                </div>
                <h3>Question ${questions.indexOf(question) + 1}</h3>
            </div>
            <form>
                <p class="editor-input">${question.text}</p>

                ${question.answers.map((answer, index) => answerCard(answer, index))}
                
            </form>
        </article>`;

        function answerCard(answer, index) {
            return html`
            <div class="editor-input">
                    <label class="radio">
                        <input class="input" type="radio" name="question-2" .value="${index}" disabled />
                        <i class="fas fa-check-circle"></i>
                    </label>
                    <span>${answer}</span>
                </div>`;
        }
    }

    function addQuestion(array, submitted) {
        
        let question;
        let answersArray;
        if (array) {
            question = array.shift();
            answersArray = array;
        } else {
            question = '';
            answersArray = ['','',''];
        }
       
        return html`
        <article class="editor-question">
                    <div class="layout">
                        <div class="question-control">
                            <button class="input submit action" type="submit" form="question-form"}><i class="fas fa-check-double"></i>
                                Save</button>
                            <button class="input submit action" @click=${onCancel}><i class="fas fa-times"></i> Cancel</button>
                        </div>
                        <h3>Question ${questions.length + 1}</h3>
                    </div>
                    <form id="question-form" @submit=${createSubmitHandler(onFormClick)}>
                        <textarea class="input editor-input editor-text" name="text" placeholder="Enter question" .value=${question}></textarea>
                        
                        ${answersArray.map((answer, index) => createChoiceCard(answer, index))}

                        <div class="editor-input">
                            <button class="input submit action"}>
                                <i class="fas fa-plus-circle"></i>
                                Add answer
                            </button>
                        </div>

                    </form>
                    ${submitted ? html`<div class="loading-overlay working"></div>` : nothing}
        </article>`;

        function onFormClick(data, event) {
            let array = Object.entries(data);
            const currentBtn = document.activeElement;
            if(currentBtn.textContent.trim() == 'Add answer') {
                array = array.filter(([k, v]) => k == 'text' || k.includes('answer')).map(el => el[1]);
                array.push('');
                ctx.render(editTemplate(quiz, questions, true, array));
            } else if (currentBtn.textContent.trim() == 'Save') {
                
                const text = data.text;
                const correctIndex = array.find(([k,v]) => k.includes('question'));
                const answers = array.filter(([k,v]) => k.includes('answer')).map(el => el[1]);
                array = array.filter(([k, v]) => k == 'text' || k.includes('answer')).map(el => el[1]);
                ctx.render(editTemplate(quiz, questions, true, array, true));
                submitQuestion(text, correctIndex, answers, array);
            } else {
                const index = currentBtn.previousElementSibling.name.split('-')[1];
                array = array.filter(([k, v]) => k == 'text' || k.includes('answer')).map(el => el[1]);
                array.splice(Number(index) + 1, 1);
                ctx.render(editTemplate(quiz, questions, true, array));
            }


        }

        function createChoiceCard(answer, index) {
            
         return html`
            <div class="editor-input">
        
                <label class="radio">
                <input class="input" type="radio" name="question-${questions.length + 1}" value="${index}" />
                <i class="fas fa-check-circle"></i>
                </label>
        
                <input class="input" type="text" name="answer-${index}" .value="${answer}" />
                <button class="input submit action" ><i class="fas fa-trash-alt"></i></button>
        </div>`;
        }
    }

}

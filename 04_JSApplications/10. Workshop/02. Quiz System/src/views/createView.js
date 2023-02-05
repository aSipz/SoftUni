import * as quizService from '../data/quiz.js';
import { html } from '../lib/lit-html.js';
import { createSubmitHandler } from '../util.js';

export function showCreate(ctx) {
    ctx.render(createTemplate());

    function createTemplate() {
        return html`
        <section id="editor">
        
            <header class="pad-large">
                <h1>New quiz</h1>
            </header>
        
            <div class="pad-large alt-page">
                <form @submit=${createSubmitHandler(submitQuiz)}>
                    <label class="editor-label layout">
                        <span class="label-col">Title:</span>
                        <input class="input i-med" type="text" name="title"></label>
                    <label class="editor-label layout">
                        <span class="label-col">Topic:</span>
                        <select class="input i-med" name="topic">
                            <option value="all">All Categories</option>
                            <option value="languages">Languages</option>
                            <option value="hardware">Hardware</option>
                            <option value="software">Tools and Software</option>
                        </select>
                    </label>
                    <input class="input submit action" type="submit" value="Save">
                </form>
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

        const userId = ctx.user.objectId;
        const result = await quizService.create({ title, topic }, userId);
        debugger

        ctx.page.redirect('/edit/' + result.objectId);
    }

}


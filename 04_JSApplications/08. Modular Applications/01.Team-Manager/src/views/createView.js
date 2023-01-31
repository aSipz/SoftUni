import { approveMembership, createTeam, requestMembership } from '../data/data.js';
import { html, nothing } from '../lib.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;

export async function showCreate(context) {
    ctx = context;

    ctx.render(createTemplate());
}

function createTemplate(error) {
    return html`
    <section id="create">
        <article class="narrow">
            <header class="pad-med">
                <h1>New Team</h1>
            </header>
            <form id="create-form" class="main-form pad-large" @submit=${createSubmitHandler(onSubmit)}>
            ${error && error.length ? html`<div class="error">${error.map(e => html`<p>${e}</p>`)}</div>` : nothing}
                <label>Team name: <input type="text" name="name"></label>
                <label>Logo URL: <input type="text" name="logoUrl"></label>
                <label>Description: <textarea name="description"></textarea></label>
                <input class="action cta" type="submit" value="Create Team">
            </form>
        </article>
    </section>`;
}

async function onSubmit({ name, logoUrl, description }, event) {
    let error = [];
    if (name.length < 4) {
        error.push('Name should be at least 4 characters');
    }
    if (!logoUrl) {
        error.push('logoUrl is required');
    }
    if (description.length < 10) {
        error.push('Description should be at least 10 characters');
    }
    if (error.length) {
        ctx.render(createTemplate(error));
        return;
    }

    event.target.reset();
    const data = await createTeam({name, logoUrl, description})
    const teamId = data._id;

    const membership = await requestMembership(teamId);
    const membershipId = membership._id;

    await approveMembership(membershipId);

    ctx.page.redirect('/details/' + teamId);
}
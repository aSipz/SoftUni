import { editTeam, forEdit } from '../data/data.js';
import { html, nothing } from '../lib.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;

export async function showEdit(context) {
    ctx = context;
    const user = ctx.user;
    const teamId = ctx.params.teamId;
    const team = await forEdit(teamId);
    ctx.team = team;
    ctx.render(createEditTemplate(team));
}

function createEditTemplate(team, error) {
    return html`
    <section id="edit">
        <article class="narrow">
            <header class="pad-med">
                <h1>Edit Team</h1>
            </header>
            <form id="edit-form" class="main-form pad-large" @submit=${createSubmitHandler(onSubmit)}>
                ${error && error.length ? html`<div class="error">${error.map(e => html`<p>${e}</p>`)}</div>` : nothing}
                <label>Team name: <input type="text" name="name" .value=${team.name}></label>
                <label>Logo URL: <input type="text" name="logoUrl" .value=${team.logoUrl}></label>
                <label>Description: <textarea name="description" .value=${team.description}></textarea></label>
                <input class="action cta" type="submit" value="Save Changes">
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
        ctx.render(createEditTemplate(ctx.team, error));
        return;
    }

    event.target.reset();
    const data = await editTeam(ctx.params.teamId, { name, description, logoUrl });

    ctx.page.redirect('/details/' + ctx.params.teamId);
}


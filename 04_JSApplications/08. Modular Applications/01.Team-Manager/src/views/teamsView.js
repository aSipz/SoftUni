import { getAllTeams } from '../data/data.js';
import { html, nothing, repeat } from '../lib.js';


export async function showTeams(ctx, next) {

    const user = ctx.user;
    ctx.render(createTemplate(user))

    const [members, teams] = await getAllTeams();

    ctx.render(createTemplate(user, teams, members))
}

function createTemplate(user, teams, members) {
    return html`
    <section id="browse">
    
        <article class="pad-med">
            <h1>Team Browser</h1>
        </article>
    
        ${user
            ? html`
        <article class="layout narrow">
            <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
        </article>`
        : nothing}
    
        ${teams
        ? html`${repeat(teams, i => i._id, i => createCard(i, members))}`
        : html`Loading...`}
    
    </section>`;
}

function createCard(team, members) {
    return html`
    <article class="layout">
        <img src=".${team.logoUrl}" class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${(members.filter(e => e.teamId == team._id)).length}</span>
            <div><a href="/details/${team._id}" class="action">See details</a></div>
        </div>
    </article>`;
}
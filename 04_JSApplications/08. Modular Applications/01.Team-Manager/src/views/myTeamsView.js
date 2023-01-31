import { getAllTeams, getMembersCount, getMyTeams } from '../data/data.js';
import { html, nothing, repeat } from '../lib.js';


export async function showMyTeams(ctx, next) {

    const userId = ctx.user.userId;
    ctx.render(createTemplate())
    
    const teams = await getMyTeams(userId);
    let members = [];
    if (teams.length) {
        const teamsId = teams.map(e => e.team._id);
        members = await getMembersCount(teamsId);
    }
    
    
    ctx.render(createTemplate(teams, members))

    
}

function createTemplate(teams, members) {
    return html`
    <section id="my-teams">

<article class="pad-med">
    <h1>My Teams</h1>
</article>
<article class="layout narrow">
<div class="pad-med">
${teams && teams.length 
? nothing
: html`
        <p>You are not a member of any team yet.</p>
        <p><a href="/teams">Browse all teams</a> to join one, or use the button bellow to cerate your own
            team.</p>
    `}
    </div>
    <div class=""><a href="/create" class="action cta">Create Team</a></div>
</article>

${teams
? repeat(teams, i => i.team._id, i => createTeamCard(i.team, members))
: nothing}


</section>`;
}

function createTeamCard(team, members) {
    return html `
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


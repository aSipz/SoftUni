import { getTeam, leaveTeam } from '../data/data.js';
import { html, nothing, repeat } from '../lib.js';

let ctx = null;

export async function showDetails(context, next) {

    ctx = context;
    
    const user = ctx.user;
    const teamId = ctx.params.teamId;

    const [team, members] = await getTeam(teamId);
    const activeMembers = members.filter(e => e.status == 'member');
    const pendingMembers = members.filter(e => e.status == 'pending');

    ctx.render(createTeamDetailsTemplate(team, activeMembers, pendingMembers, user));
}

function createTeamDetailsTemplate(team, activeMembers, pendingMembers, user) {
    return html`
    <section id="team-home">
        <article class="layout">
            <img src="..${team.logoUrl}" class="team-logo left-col">
            <div class="tm-preview">
                <h2>${team.name}</h2>
                <p>${team.description}</p>
                <span class="details">${activeMembers.length} Member${activeMembers.length != 1 ? html`s` : nothing}</span>
                ${user
                ? html`<div>
                    ${team._ownerId == user.userId ? html`<a href="/edit/${team._id}" class="action">Edit team</a>` :
                    nothing}
                    ${activeMembers.find(e => e.user._id == user.userId) || pendingMembers.find(e => e.user._id == user.userId)
                    ? nothing
                    : html`<a href="javascript:void(0)" class="action" data-team_id="${team._id}" @click=${join}>Join team</a>`
                }
                    ${activeMembers.find(e => e.user._id == user.userId) && team._ownerId != user.userId
                        ? html`<a href="javascript:void(0)" class="action invert" 
                        data-id="${(activeMembers.find(e => e.user._id == user.userId))._id}" 
                        data-team_id="${team._id}" @click=${cancel}>Leave team</a>`
                        : nothing}
                    ${pendingMembers.find(e => e.user._id == user.userId)
                    ? html`Membership pending. <a href="javascript:void(0)" 
                    data-id="${(pendingMembers.find(e => e.user._id == user.userId))._id}" 
                    data-team_id="${team._id}" @click=${cancel}>Cancel request</a>`
                    : nothing}
                </div>`
                : nothing}
            </div>
            <div class="pad-large">
                <h3>Members</h3>
                <ul class="tm-members">
                    ${repeat(activeMembers, i => i._id, i => createUserLi(i, user, team))}
                </ul>
            </div>
            ${user && team._ownerId == user.userId
            ? html`<div class="pad-large">
                <h3>Membership Requests</h3>
                <ul class="tm-members">
                    ${repeat(pendingMembers, i => i._id, i => createPendingLi(i, team))}
                </ul>
            </div>`
            : nothing}
        </article>
    </section>`;
}

function createUserLi(current, user, team, activeMembers) {
    return html`
    <li>${current.user.username}
        ${user && team._ownerId == user.userId && current.user._id != user.userId 
            ? html`
            <a href="javascript:void(0)" 
            data-id="${current._id}" 
            data-team_id="${team._id}"
            class="tm-control action" @click=${cancel}>Remove from team</a>` 
            : nothing}
    </li>`;
}

function createPendingLi(current, team) {
    return html`
    <li>${current.user.username}
        <a href="javascript:void(0)" data-id="${current._id}" data-team_id="${team._id}" class="tm-control action" @click=${approve}>Approve</a>
        <a href="javascript:void(0)" data-id="${current._id}" data-team_id="${team._id}" class="tm-control action" @click=${cancel}>Decline</a>
    </li>`;
}

async function approve(e) {
    const msg = 'Confirm membership approval';
    const membershipId = e.target.dataset.id;
    const teamId = e.target.dataset.team_id;
    ctx.modal(msg, 'approve', {teamId, membershipId}, ctx);
}

async function join(e) {
    const msg = 'Confirm your join request';
    const teamId = e.target.dataset.team_id;
    ctx.modal(msg, 'join', {teamId}, ctx);
}

async function cancel(e) {
    const msg = 'Are you sure?';
    const membershipId = e.target.dataset.id;
    const teamId = e.target.dataset.team_id;
    ctx.modal(msg, 'cancel', {teamId, membershipId}, ctx);
}


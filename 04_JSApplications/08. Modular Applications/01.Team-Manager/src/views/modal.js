import { approveMembership, leaveTeam, requestMembership } from '../data/data.js';
import { html, render} from '../lib.js'


const modalDiv = document.querySelector(`.overlay`);


export function showModal(msg, action, obj, ctx) {

    modalDiv.style.display = 'block';
    render(createTemplate(msg, action, obj, ctx), modalDiv);
}

function hideModal() {
    modalDiv.style.display = 'none';
    render(createTemplate(), modalDiv);
}

function createTemplate(msg, action, obj, ctx) {
    if (msg) {
        return html`
        <div class="modal" @click=${onClick}>
            <p>${msg}</p>
            <a href="javascript:void(0)" class="action" data-action="confirm">Confirm</a>
            <a href="javascript:void(0)" class="action" data-action="cancel">Cancel</a>
        </div>`;
    }
    return html``;

    async function onClick(e) {
        if (e.target.tagName != 'A') {
            return;
        }
        hideModal();
        const answer = e.target.dataset.action;
        if (answer == 'cancel') {
            return
        }

        if (action == 'approve') {
            const membershipId = obj.membershipId;
            const teamId = obj.teamId;
            await approveMembership(membershipId);
            ctx.page.redirect('/details/' + teamId);
            
        }
        if (action == 'join') {
            const teamId = obj.teamId;

            await requestMembership(teamId);
            ctx.page.redirect('/details/' + teamId);
        }
        if (action == 'cancel') {
            const membershipId = obj.membershipId;
            const teamId = obj.teamId;
            await leaveTeam(membershipId);
            ctx.page.redirect('/details/' + teamId);
        }
    
    }
}

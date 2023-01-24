import { html, render, nothing } from './node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js';

const data = contacts.map(el => Object.assign({}, el, { active: false }));
const host = document.getElementById('contacts');

host.addEventListener('click', onClick);

const contactCard = (contact) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${contact.name}</h2>
        <button class="detailsBtn" id="${contact.id}">Details</button>
          
        ${contact.active 
        ? html`<div class="details">
            <p>Phone number: ${contact.phoneNumber}</p>
            <p>Email: ${contact.email}</p>
        </div>`
        : nothing}
    </div>
</div>`;

render(data.map(contactCard), host);

function onClick(e) {
    if (e.target.tagName != 'BUTTON') {
        return;
    }
    const id = e.target.id;
    const contact = data.find(el => el.id == id);
    contact.active = !contact.active;
    render(data.map(contactCard), host);
}
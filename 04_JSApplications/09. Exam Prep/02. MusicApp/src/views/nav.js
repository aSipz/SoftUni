import { logout } from '../data/data.js';
import { html } from '../lib.js';
import { clearUserData } from '../util.js';

export function createNavTemplate(user) {
    return html`
        <nav>
            <img src="./images/headphones.png">
            <a href="/">Home</a>
            <ul>
    
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="/search">Search</a></li>
                ${user
                ? html`
                <li><a href="/create">Create Album</a></li>
                <li><a href="javascript:void(0)" @click=${onLogout}>Logout</a></li>`
                : html`
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>`}
                
            </ul>
        </nav>`;
}

async function onLogout() {
    logout()
    clearUserData();
    page.redirect('/');
}

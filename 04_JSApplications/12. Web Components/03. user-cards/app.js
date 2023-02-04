import { render as litRender, html, nothing } from '../node_modules/lit-html/lit-html.js'

class UserCard extends HTMLElement {
    #root;
    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'closed' });
        this._avatar = this.getAttribute('avatar');
        this._info = false;
    }

    connectedCallback() {
        this.render();
    }

    toggleInfo() {
        this._info = !this._info;
        this.render();
    }

    render() {
        litRender(createTemplate(this._avatar, this._info, this.toggleInfo), this.#root, { host: this });
    }
}

customElements.define('user-card', UserCard);

function createTemplate(avatar, info, toggle) {
    return html`
        <style>
            .user-card {
                display: flex;
                font-family: 'Arial', sans-serif;
                background-color: #EEE;
                border-bottom: 5px solid darkorchid;
                width: 100%;
            }

            .user-card img {
                width: 200px;
                height: 200px;
                border: 1px solid darkorchid;
            }

            .info {
                display: flex;
                flex-direction: column;
            }

            .info h3 {
                font-weight: bold;
                margin-top: 1em;
                text-align: center;
            }

            .info button {
                outline: none;
                border: none;
                cursor: pointer;
                background-color: darkorchid;
                color: white;
                padding: 0.5em 1em;
            }

            @media only screen and (max-width: 500px) {
                .user-card {
                    flex-direction: column;
                    margin-bottom: 1em;
                }

                .user-card figure,
                .info button {
                    align-self: center;
                }

                .info button {
                    margin-bottom: 1em;
                }

                .info p {
                    padding-left: 1em;
                }
            }
        </style>
        <div class="user-card">
            <figure>
                <img src="${avatar}" />
            </figure>
            <div class="info">
                <h3><slot></slot></h3>

                ${info
            ? html`
                <div>
                    <p>
                        <slot name="email" />
                    </p>
                    <p>
                        <slot name="phone" />
                    </p>
                </div>`
            : nothing}
                

                <button class="toggle-info-btn" @click=${toggle}>${info ? 'Hide Info' : 'Toggle Info'}</button>
            </div>
        </div>`;
}
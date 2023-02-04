import { html, render as litRender } from '../node_modules/lit-html/lit-html.js'

class MyList extends HTMLElement {
    #root;
    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'closed' });
        this._items = this.getAttribute('list-items').split(' ');
        this._addText = this.getAttribute('add-text');
    }

    connectedCallback() {
        this.render();
    }

    onClick(e) {
        if(e.target.tagName != 'BUTTON') {
            return;
        }

        if (e.target.className.includes('add')) {
            const input = e.target.previousElementSibling;
            const newItem = input.value;
            if (!newItem) {
                return;
            }
            input.value = '';
            this._items.push(newItem);
        }

        if (e.target.className.includes('remove')) {
            const item = e.target.previousElementSibling.textContent;
            const index = this._items.indexOf(item);
            this._items.splice(index, 1);
        }

        this.render();
    }

    render() {
        litRender(createTemplate(this._items, this._addText, this.onClick), this.#root, { host: this });
    }
}

customElements.define('my-list', MyList);

function createTemplate(list, addText, onClick) {
    return html`
     <style>
            .container {
                max-width: 500px;
                margin: 50px auto;
                border-radius: 20px;
                border: solid 8px #2c3033;
                background: white;
                box-shadow: 0 0 0px 1px rgba(255, 255, 255, .4), 0 0 0px 3px #2c3033;
            }

            .editable-list-header {
                margin: 0;
                border-radius: 10px 10px 0 0px;
                background-image: linear-gradient(#687480 0%, #3b4755 100%);
                font: bold 18px/50px arial;
                text-align: center;
                color: white;
                box-shadow: inset 0 -2px 3px 2px rgba(0, 0, 0, .4), 0 2px 2px 2px rgba(0, 0, 0, .4);
            }

            .editable-list {
                padding-left: 0;
            }

            .editable-list>li,
            .editable-list-add-container {
                display: flex;
                align-items: center;
            }

            .editable-list>li {
                justify-content: space-between;
                padding: 0 1em;
            }

            .editable-list-add-container {
                justify-content: space-evenly;
            }

            .editable-list>li:nth-child(odd) {
                background-color: rgb(229, 229, 234);
            }

            .editable-list>li:nth-child(even) {
                background-color: rgb(255, 255, 255);
            }

            .editable-list-add-container>label {
                font-weight: bold;
                text-transform: uppercase;
            }

            .icon {
                background: none;
                border: none;
                cursor: pointer;
                font-size: 1.8rem;
                outline: none;
            }
        </style>
        <article class="container" @click=${onClick}>
            <h1 class="editable-list-header"><slot></slot></h1>

            <ul class="editable-list">

                ${list.map(createItem)}
               
            </ul>

            <div class="editable-list-add-container">
                <label>${addText}</label>
                <input class="add-new-list-item-input" type="text"/>
                <button class="editable-list-add-item icon">&oplus;</button>
            </div>
        </article>`;
}

function createItem(item) {
    return html`
    <li>
        <p class="editable-list-item-value">${item}</p>
        <button class="editable-list-remove-item icon">
            &ominus;
        </button>
    </li>`
}
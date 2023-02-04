const template = document.getElementById('app-button');

class MyButton extends HTMLElement {
    #root;

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'closed' });
    }

    connectedCallback() {
        this.#root.appendChild(template.content.cloneNode(true));
        this.#root.querySelector('button').textContent = this.getAttribute('text');
        this.#root.querySelector('button').classList.add(this.getAttribute('type'));
    }


}

window.customElements.define('my-btn', MyButton);
const template = document.getElementById('popup-template');

class MyPopUp extends HTMLElement {
    #root;

    constructor() {
        super();
        this.#root = this.attachShadow({ mode: 'closed' });
    }

    connectedCallback() {
        this.#root.appendChild(template.content.cloneNode(true));
        const imgSrc = this.getAttribute('img');
        if (imgSrc) {
            this.#root.querySelector('img').src = imgSrc;
        }
    }
}

window.customElements.define('my-popup', MyPopUp);
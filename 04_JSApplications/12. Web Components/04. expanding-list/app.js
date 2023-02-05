class BetterUl extends HTMLUListElement {
    constructor() {
        self = super();
    }

    connectedCallback() {

        [...self.children].forEach(e => e.children[0] ? e.classList.add('closed') : e);

        [...self.children].forEach(e => e.children[0] ? e.children[0].style.display = 'none' : e);
        
        self.addEventListener('click', this.onClick);

    }

    onClick(e) {

        if (e.target.parentElement != this) {
            return;
        }

        if (!e.target.children[0]) {
            return;
        }

        e.target.className == 'closed' ? e.target.className = 'open' : e.target.className = 'closed';

        e.target.className == 'open'
            ? e.target.children[0] ? e.target.children[0].style.display = 'block' : ''
            : e.target.children[0] ? e.target.children[0].style.display = 'none' : '';
    }
}

customElements.define('better-ul', BetterUl, { extends: 'ul' })
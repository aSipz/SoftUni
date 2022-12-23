class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
        this.article = document.createElement('article');
    }
    get online() { return this._online }
    set online(value) {
        this._online = value;
        if (!this.article.children[0]) {
            return;
        }
        if (this._online) {
            this.article.children[0].classList.add('online');
        } else {
                this.article.children[0].classList.remove('online');
        }
    }
    render(id) {
        let outerDiv = document.getElementById(id);
        let innerHtml = `<div class="title">` +
            `${this.firstName} ${this.lastName}` +
            '<button>&#8505;</button>' +
            `</div>` +
            `<div class="info" style="display: none;">` +
            `<span>&phone; ${this.phone}</span>` +
            `<span>&#9993; ${this.email}</span>` +
            ` </div>`;
        this.article.innerHTML = innerHtml;
        this.article.addEventListener('click', reveal);
        if (this.online) {
            this.article.children[0].classList.add('online');
        }
        outerDiv.appendChild(this.article);

        function reveal(e) {
            if (e.target.nodeName != 'BUTTON') {
                return;
            }
            let hiddenDiv = e.target.parentElement.parentElement.children[1];
            if (hiddenDiv.style.display == 'none') {
                hiddenDiv.style.display = 'block';
            } else {
                hiddenDiv.style.display = 'none'
            }
        }
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts[0].online = true
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 2000);
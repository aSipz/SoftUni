function solve() {
    document.getElementById('add').addEventListener('click', onAdd);
    document.getElementById('reset').addEventListener('click', onReset);

    const inputs = Array.from(document.querySelectorAll('input, textarea'));
    const mails = [];
    const sentMails = [];

    const mailList = document.getElementById('list');
    const sentList = document.querySelector('.sent-list');
    const deletedList = document.querySelector('.delete-list');

    mailList.addEventListener('click', onMailsClick);
    sentList.addEventListener('click', onSentMailsClick);

    function onMailsClick(e) {
        if (e.target.tagName != 'BUTTON') {
            return;
        }

        const currentMail = e.target.parentElement.parentElement;
        const index = Array.from(mailList.children).indexOf(currentMail);

        if (e.target.textContent == 'Send') {
            createSentMailEntry(mails[index]);
            sentMails.push(mails.splice(index, 1));
        }

        if (e.target.textContent == 'Delete') {
            createSentMailEntry(mails[index], true);
            mails.splice(index, 1);
        }

        mailList.removeChild(currentMail);
    }

    function onSentMailsClick(e) {
        if (e.target.tagName != 'BUTTON') {
            return;
        }

        const currentMail = e.target.parentElement.parentElement;
        const index = Array.from(sentList.children).indexOf(currentMail);

        createSentMailEntry(sentMails[index], true);
        sentMails.splice(index, 1);
        sentList.removeChild(currentMail);
    }

    function onAdd(e) {
        e.preventDefault();
        if (inputs.some(i => !i.value.trim())) {
            return;
        }

        createMailEntry();
        mails.push(inputs.reduce((acc, curr) => ({ ...acc, [curr.id]: curr.value }), {}));
        inputs.forEach(i => i.value = '');
    }

    function onReset(e) {
        e.preventDefault();
        inputs.forEach(i => i.value = '');
    }

    function createMailEntry() {
        const listItem = document.createElement('li');
        const title = document.createElement('h4');
        title.textContent = `Title: ${inputs.find(i => i.id == 'title').value}`;
        const name = document.createElement('h4');
        name.textContent = `Recipient Name: ${inputs.find(i => i.id == 'recipientName').value}`;
        const text = document.createElement('span');
        text.textContent = inputs.find(i => i.id == 'message').value;
        const div = document.createElement('div');
        div.classList.add('list-action');
        addBtn(div, 'Send');
        addBtn(div, 'Delete');
        listItem.appendChild(title);
        listItem.appendChild(name);
        listItem.appendChild(text);
        listItem.appendChild(div);
        mailList.appendChild(listItem);
    }

    function addBtn(parentElement, text, btnClass) {
        const btn = document.createElement('button');
        btn.type = 'submit';
        if (!btnClass) {
            btn.id = text.toLowerCase();
        } else {
            btn.classList.add(text.toLowerCase());
        }

        btn.textContent = text;
        parentElement.appendChild(btn);
    }

    function createSentMailEntry(entry, deleteMail) {
        const listItem = document.createElement('li');
        const title = document.createElement('span');
        title.textContent = `Title: ${entry.title}`;
        const name = document.createElement('span');
        name.textContent = `To: ${entry.recipientName}`;
        const div = document.createElement('div');
        div.classList.add('btn');
        addBtn(div, 'Delete', true);

        listItem.appendChild(name);
        listItem.appendChild(title);

        if (!deleteMail) {
            listItem.appendChild(div);
            sentList.appendChild(listItem);
        } else {
            deletedList.appendChild(listItem)
        }
    }
}
solve();
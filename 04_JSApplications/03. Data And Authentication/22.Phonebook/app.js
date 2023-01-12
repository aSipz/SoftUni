function attachEvents() {
    const btnLoad = document.getElementById('btnLoad');
    const btnCreate = document.getElementById('btnCreate');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const ul = document.getElementById('phonebook');

    btnLoad.addEventListener('click', loadPhones);
    btnCreate.addEventListener('click', createEntry);
    ul.addEventListener('click', deleteEntry);

    async function createEntry() {
        if (!personInput.value || !phoneInput.value) {
            return;
        }
        const newEntry = JSON.stringify({
            person: personInput.value,
            phone: phoneInput.value
        });
        const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: newEntry
        });
        const data = await response.json();
        personInput.value = '';
        phoneInput.value = '';
        await loadPhones(data);
    }

    async function deleteEntry(e) {
        if (e.target.tagName != 'BUTTON' || e.target.parentElement.tagName != 'LI') {
            return;
        }
        const id = e.target.id;
        const response = await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
            method: 'delete'
        });
        const data = await response.json();
        e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }

    async function loadPhones() {
        const response = await fetch('http://localhost:3030/jsonstore/phonebook');
        const data = await response.json();
        const phonesList = Object.values(data).map(generateLi);
        ul.replaceChildren(...phonesList);
    }

    function generateLi(obj) {
        const li = document.createElement('li');
        li.textContent = `${obj.person}: ${obj.phone}`;
        const btn = document.createElement('button');
        btn.textContent = 'Delete';
        btn.id = obj._id;
        li.appendChild(btn);
        return li;
    }
}

attachEvents();
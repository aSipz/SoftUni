async function lockedProfile() {
    const main = document.getElementById('main');
    const userList = [];
    const data = await loadData();
    
    Object.values(data).forEach(person => {
        userList.push(createProfile(person));
    });
    main.replaceChildren(...userList);

    function createProfile(obj) {
        const result = e('div', { className: 'profile' },
            e('img', { className: 'userIcon', src: './iconProfile2.png' }),
            e('label', {}, 'Lock'),
            e('input', { type: 'radio', name: `${obj.username}Locked`, value: 'lock', checked: true }),
            e('label', {}, 'Unlock'),
            e('input', { type: 'radio', name: `${obj.username}Locked`, value: 'unlock' }),
            e('br', {}),
            e('hr', {}),
            e('label', {}, 'Username'),
            e('input', { type: 'text', name: `${obj.username}`, value: `${obj.username}`, disabled: true, readOnly: true }),
            e('div', { id: `${obj.username}HiddenFields` },
                e('hr', {}),
                e('label', {}, 'Email:'),
                e('input', { type: 'email', name: `${obj.username}Email`, value: `${obj.email}`, disabled: true, readOnly: true }),
                e('label', {}, 'Age:'),
                e('input', { type: 'email', name: `${obj.username}Age`, value: `${obj.age}`, disabled: true, readOnly: true })),
            e('button', { onClick: toggleInfo }, 'Show more'));
        result.querySelector(`#${obj.username}HiddenFields`).style.display = 'none';
        return result;

        function toggleInfo(e) {
            const locked = e.target.parentElement.children[2];
            if (locked.checked) {
                return
            }
            e.target.textContent == 'Show more' ? e.target.textContent = 'Hide it' : e.target.textContent = 'Show more';
            const hidden = e.target.previousSibling;
            hidden.style.display == 'none' ? hidden.style.display = '' : hidden.style.display = 'none';
        }
    }

    async function loadData() {
        try {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
            if (!response.ok) {
                throw new Error;
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }

        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });

        return result;
    }
}
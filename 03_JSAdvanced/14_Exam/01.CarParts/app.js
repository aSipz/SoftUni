window.addEventListener('load', solve);

function solve() {

        const nextBtn = document.getElementById('next-btn');

        nextBtn.addEventListener('click', clickHandler);

        const inputsArray = Array.from(document.querySelectorAll('input, select'));

        const infoList = document.querySelector('.info-list');

        const confirmList = document.querySelector('.confirm-list');

        infoList.addEventListener('click', onInfoClick);
        confirmList.addEventListener('click', onConfirmClick);

        let currentPart = {};

        const completeImg = document.getElementById('complete-img');
        const completeText = document.getElementById('complete-text');

        function onInfoClick(e) {
                if (e.target.tagName != 'BUTTON') {
                        return;
                }

                if (e.target.textContent == 'Edit') {
                        inputsArray.forEach(e => e.value = currentPart[e.id]);
                        nextBtn.disabled = false;
                        infoList.textContent = '';
                        currentPart = {};
                }

                if (e.target.textContent == 'Continue') {
                        const listItem = infoList.children[0];
                        listItem.querySelectorAll('button')[0].textContent = 'Confirm';
                        listItem.querySelectorAll('button')[0].className = 'confirm-btn';
                        listItem.querySelectorAll('button')[1].textContent = 'Cancel';
                        listItem.querySelectorAll('button')[1].className = 'cancel-btn';
                        confirmList.appendChild(listItem);
                }
        }

        function onConfirmClick(e) {
                if (e.target.tagName != 'BUTTON') {
                        return;
                }

                if (e.target.textContent == 'Confirm') {

                        completeImg.style.visibility = 'visible';
                        completeText.textContent = 'Part is Ordered!';
                }

                if (e.target.textContent == 'Cancel') {

                }

                nextBtn.disabled = false;
                confirmList.textContent = '';
                currentPart = {};
        }

        function clickHandler(e) {
                e.preventDefault();
                const carYear = Number(inputsArray.find(e => e.id == 'car-year').value);
                if (inputsArray.some(i => !i.value.trim())
                        || carYear < 1980 || carYear > 2023) {
                        return;
                }

                currentPart = inputsArray.reduce((acc, curr) => ({ ...acc, [curr.id]: curr.value }), {});

                createListItem();

                clearInputs();

                nextBtn.disabled = true;

                completeImg.style.visibility = 'hidden';
                completeText.textContent = '';

        }

        function createListItem() {
                const li = document.createElement('li');
                li.classList.add('part-content');
                const article = document.createElement('article');
                inputsArray.forEach(i => {
                        const p = document.createElement('p');
                        p.textContent = i.id.split('-').map(e => e[0].toUpperCase() + e.slice(1)).join(' ') + ':' + ` ${i.value}`;
                        article.appendChild(p);
                });

                li.appendChild(article);
                li.appendChild(addButton('edit-btn', 'Edit'));
                li.appendChild(addButton('continue-btn', 'Continue'));
                infoList.appendChild(li);
        }

        function clearInputs() {
                inputsArray.forEach(e => e.value = '');
        }

        function addButton(btnClass, btnText) {
                const btn = document.createElement('button');
                btn.classList.add(btnClass);
                btn.textContent = btnText;
                return btn;
        }
};
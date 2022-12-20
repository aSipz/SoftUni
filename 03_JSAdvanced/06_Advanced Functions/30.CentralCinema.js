function solve() {
    let nameInput = document.querySelectorAll('#container > input')[0];
    let hallInput = document.querySelectorAll('#container > input')[1];
    let priceInput = document.querySelectorAll('#container > input')[2];
    let startBtn = document.querySelector('#container > button');
    let onScreenUl = document.querySelector('#movies > ul');
    onScreenUl.textContent = '';
    let archiveUl = document.querySelector('#archive > ul');
    archiveUl.textContent = '';
    let clearBtn = document.querySelector('#archive > button');

    startBtn.addEventListener('click', add);
    clearBtn.addEventListener('click', clear);

    function add(e) {
        e.preventDefault();
        if (nameInput.value && hallInput.value && priceInput.value && !isNaN(priceInput.value)) {
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.textContent = nameInput.value;
            li.appendChild(span);
            let strong = document.createElement('strong');
            strong.textContent = 'Hall: ' + hallInput.value;
            li.appendChild(strong);
            let div = document.createElement('div');
            let strongDiv = document.createElement('strong');
            strongDiv.textContent = Number(priceInput.value).toFixed(2);
            div.appendChild(strongDiv);
            let input = document.createElement('input');
            input.placeholder = 'Tickets Sold';
            div.appendChild(input);
            div.appendChild(createBtn());
            li.appendChild(div);
            onScreenUl.appendChild(li);
            nameInput.value = '';
            hallInput.value = '';
            priceInput.value = '';
        }

        function createBtn() {
            let button = document.createElement('button');
            button.textContent = 'Archive';
            button.addEventListener('click', archive);
            return button;
        }

        function archive(e) {
            let inputField = e.target.parentElement.children[1];
            if (inputField.value && !isNaN(inputField.value)) {
                let li = e.target.parentElement.parentElement;
                archiveUl.appendChild(li);
                let div = e.target.parentElement;
                let price = Number(div.children[0].textContent);
                let strongTag = li.children[1];
                let total = Number(inputField.value) * price;
                strongTag.textContent = `Total amount: ${total.toFixed(2)}`;
                let btn = document.createElement('button');
                btn.textContent = 'Delete';
                btn.addEventListener('click', function(e) {
                    e.target.parentElement.remove();
                })
                li.appendChild(btn);
                li.removeChild(div);
            }
        }
    }

    function clear(e) {
        e.preventDefault();
        archiveUl.textContent = ''
    }
}
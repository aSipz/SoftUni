window.addEventListener("load", solve);
function solve() {
    let productField = document.getElementById('type-product');
    let descriptionField = document.getElementById('description');
    let nameField = document.getElementById('client-name');
    let phoneField = document.getElementById('client-phone');
    let receivedSection = document.getElementById('received-orders');
    let completedSection = document.getElementById('completed-orders');
    let main = document.querySelector('main');
    main.addEventListener('click', process);

    function process(e) {
        e.preventDefault();
        let targetClass = e.target.className;
        let targetType = e.target.type;
        let processObj = {
            'submit': createDiv,
            'clear-btn': clear,
            'start-btn': start,
            'finish-btn': finish
        }
        if (!processObj[targetClass] && !processObj[targetType]) {
            return
        }
        processObj[targetClass]? processObj[targetClass](): processObj[targetType]();

        function createDiv() {
            if (!productField.value || !phoneField.value || !descriptionField.value || !nameField.value) {
                return;
            }
            let div = document.createElement('div');
            div.classList.add('container');
            let h2 = document.createElement('h2');
            h2.textContent = `Product type for repair: ${productField.value}`;
            let h3 = document.createElement('h3');
            h3.textContent = `Client information: ${nameField.value}, ${phoneField.value}`
            let h4 = document.createElement('h4');
            h4.textContent = `Description of the problem: ${descriptionField.value}`;
            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(h4);
            div.appendChild(createBtn('start-btn', false, 'Start repair'));
            div.appendChild(createBtn('finish-btn', true, 'Finish repair'));
            receivedSection.appendChild(div);
            [productField, descriptionField, nameField, phoneField].forEach(field => field.value = '');

            function createBtn(className, disabled, text) {
                let btn = document.createElement('button');
                btn.classList.add(className);
                btn.disabled = disabled;
                btn.textContent = text;
                return btn;
            }
        }

        function start() {
            e.target.disabled = true;
            let div = e.target.parentElement;
            let finishBtn = div.children[div.children.length - 1];
            finishBtn.disabled = false;
        }

        function finish() {
            let div = e.target.parentElement;
            div.removeChild(div.children[div.children.length - 1]);
            div.removeChild(div.children[div.children.length - 1]);
            receivedSection.removeChild(div);
            completedSection.appendChild(div);
        }

        function clear() {
            while (completedSection.children.length > 3) {
                completedSection.removeChild(completedSection.children[completedSection.children.length - 1]);
            }
        }
    }
}
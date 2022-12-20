function solve() {
    let taskInput = document.getElementById('task');
    let descriptionInput = document.getElementById('description');
    let dateInput = document.getElementById('date');
    let addButton = document.getElementById('add');
    let openDiv = document.querySelector('section:nth-child(2) > div:nth-child(2)');
    let inProgressDiv = document.getElementById('in-progress');
    let completeDiv = document.querySelector('section:nth-child(4) > div:nth-child(2)');
    addButton.addEventListener('click', add);
    openDiv.textContent = '';
    inProgressDiv.textContent = '';

    function add(e) {
        e.preventDefault();
        if (taskInput.value && descriptionInput.value && dateInput.value) {
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            h3.textContent = taskInput.value;
            article.appendChild(h3);
            let p1 = document.createElement('p');
            p1.textContent = 'Description: ' + descriptionInput.value;
            article.appendChild(p1);
            let p2 = document.createElement('p');
            p2.textContent = 'Due Date: ' + dateInput.value;
            article.appendChild(p2);
            article.appendChild(createButtons());
            openDiv.appendChild(article);
        }
    }
    function createButtons() {
        let div = document.createElement('div');
        div.classList = 'flex';
        let btn1 = document.createElement('button');
        btn1.classList = 'green';
        btn1.textContent = 'Start'
        btn1.addEventListener('click', startBtn);
        div.appendChild(btn1);
        let btn2 = document.createElement('button');
        btn2.classList = 'red';
        btn2.textContent = 'Delete';
        btn2.addEventListener('click', del);
        div.appendChild(btn2);
        return div;

        function startBtn(e) {
            let parentArticle = e.target.parentElement.parentElement;
            e.target.removeEventListener('click', startBtn);
            e.target.addEventListener('click', del);
            e.target.classList.replace('green', 'red');
            e.target.textContent = 'Delete';
            let secondBtn = parentArticle.querySelectorAll('button')[1];
            secondBtn.removeEventListener('click', del);
            secondBtn.addEventListener('click', finish);
            secondBtn.classList.replace('red', 'orange');
            secondBtn.textContent = 'Finish';
            inProgressDiv.appendChild(parentArticle);
        }
        function del(e) {
            let parentArticle = e.target.parentElement.parentElement;
            parentArticle.remove();
        }
        function finish(e) {
            let parentArticle = e.target.parentElement.parentElement;
            let divToDelete = e.target.parentElement;
            divToDelete.remove();
            completeDiv.appendChild(parentArticle);
        }
    }
}
window.addEventListener("load", solve);
function solve() {
    let titleField = document.getElementById('post-title');
    let categoryField = document.getElementById('post-category');
    let contentField = document.getElementById('post-content');
    let mainDiv = document.getElementById('main-container');
    let reviewUl = document.getElementById('review-list');
    let publishedUl = document.getElementById('published-list');
    let inputFieldsArray = [titleField, categoryField, contentField];
    mainDiv.addEventListener('click', publish);
    function publish(e) {
        let targetId = e.target.id;
        let targetClassName = e.target.className;
        let btnObj = {
            'clear-btn': clear,
            'publish-btn': createLi,
            'action-btn edit': edit,
            'action-btn approve': approve
        }
        if (!btnObj[targetId] && !btnObj[targetClassName]) {
            return;
        }
        btnObj[targetId] ? btnObj[targetId]() : btnObj[targetClassName]();

        function createLi() {
            if (!titleField.value || !categoryField.value || !contentField.value) {
                return;
            }
            let li = document.createElement('li');
            li.classList.add('rpost');
            let article = document.createElement('article');
            let h4 = document.createElement('h4');
            h4.textContent = titleField.value;
            article.appendChild(h4);
            let p1 = document.createElement('p');
            p1.textContent = `Category: ${categoryField.value}`;
            article.appendChild(p1);
            let p2 = document.createElement('p');
            p2.textContent = `Content: ${contentField.value}`;
            article.appendChild(p2);
            li.appendChild(article);
            li.appendChild(createBtn('edit', 'Edit'));
            li.appendChild(createBtn('approve', 'Approve'));
            reviewUl.appendChild(li);
            inputFieldsArray.forEach(field => field.value = '');

            function createBtn(classInfo, text) {
                let btn = document.createElement('button');
                btn.classList.add('action-btn');
                btn.classList.add(classInfo);
                btn.textContent = text;
                return btn;
            }
        }
        function edit() {
            let article = e.target.parentElement.children[0];
            let li = e.target.parentElement;
            titleField.value = article.children[0].textContent;
            categoryField.value = article.children[1].textContent.slice(10);
            contentField.value = article.children[2].textContent.slice(9);
            li.parentElement.removeChild(li);
        }
        function approve() {
            let li = e.target.parentElement;
            li.removeChild(li.children[1]);
            li.removeChild(li.children[1]);
            li.parentElement.removeChild(li);
            publishedUl.appendChild(li);
        }
        function clear() {
            publishedUl.innerHTML = '';
        }
    }
}
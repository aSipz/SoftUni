async function solution() {
    const mainSection = document.getElementById('main');
    mainSection.a
    const data = await getData();
    const articleList = data.map(obj => generateDiv(obj));

    mainSection.textContent = '';
    articleList.forEach(el => mainSection.appendChild(el));
    mainSection.addEventListener('click', onClick);

    async function getData() {
        try {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
            if (!response.ok) {
                throw new Error;
            }
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    async function getMoreInfo(id) {
        try {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/details/' + id);
            if (!response.ok) {
                throw new Error;
            }
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    function generateDiv(obj) {
        let div = document.createElement('div');
        div.classList.add('accordion');
        div.innerHTML = `<div class="head">
            <span>${obj.title}</span>
            <button class="button" id="${obj._id}">More</button>
        </div>
          <div class="extra hidden">
                <p></p>
            </div>
        </div>`;
        return div;
    }

    async function onClick(e) {
        if (e.target.nodeName != 'BUTTON') {
            return
        }
        const hiddenDiv = e.target.parentElement.nextElementSibling;
      
        if (hiddenDiv.className.includes('hidden')) {
            e.target.textContent = 'Less';
            hiddenDiv.classList.remove('hidden');
            hiddenDiv.style.display = 'block';
            const id = e.target.id;
            const data = await getMoreInfo(id);
            hiddenDiv.children[0].textContent = data.content;
        } else {
            e.target.textContent = 'More';
            hiddenDiv.classList.add('hidden');
            hiddenDiv.style.display = 'none';
            hiddenDiv.children[0].textContent = '';
        }
    }
}

solution();
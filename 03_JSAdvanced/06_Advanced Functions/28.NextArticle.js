function getArticleGenerator(articles) {
    let div = document.querySelector('#content');
    return function() {
        if (articles.length > 0) {
            let currentText = articles.shift();
            let art = document.createElement('article');
            art.textContent = currentText;
            div.appendChild(art);
        }
    }
}
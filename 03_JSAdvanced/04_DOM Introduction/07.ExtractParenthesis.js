function extract(content) {
    let text = document.getElementById(content).textContent;
    let pattern = /\([^\)]+\)/g;
    let result = text.match(pattern).map(element => element.slice(1, element.length - 1));
    return result.join('; ')
}
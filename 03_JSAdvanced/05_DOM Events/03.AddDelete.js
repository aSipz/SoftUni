function addItem() {
    let input = document.getElementById('newItemText');
    let newLi = document.createElement('li');
    let ul = document.getElementById('items');
    ul.addEventListener('click', function(event) {
        if (event.target.nodeName == "A") {
            event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        } else {
            return;
        }
    });
    newLi.textContent = input.value;
    let a = document.createElement('a');
    a.textContent = '[Delete]';
    a.href = '#';
    newLi.appendChild(a);
    ul.appendChild(newLi);
    input.value = '';
}
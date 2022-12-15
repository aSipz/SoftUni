function addItem() {
    let input = document.getElementById('newItemText');
    let newLi = document.createElement('li');
    newLi.textContent = input.value;
    let ul = document.getElementById('items');
    ul.appendChild(newLi);
    input.value = '';
}
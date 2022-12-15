function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let newOption = document.createElement('option');
    newOption.textContent = text.value;
    newOption.value = value.value;
    document.getElementById('menu').appendChild(newOption);
    text.value = '';
    value.value = '';
}
function solve() {
    let selector = document.getElementById('selectMenuTo');
    let newOption = document.createElement('option');
    selector.appendChild(newOption);
    let binaryOption = selector.children[0];
    let hexaOption = selector.children[1];
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    hexaOption.value = 'hexadecimal';
    hexaOption.textContent = 'Hexadecimal';
    let button = document.querySelector('body button');
    button.addEventListener('click', convertor);
    function convertor() {
        let decimalNum = Number(document.getElementById('input').value);
        let convert = {
            binary: x => x.toString(2),
            hexadecimal: x => x.toString(16)
        }
        let selected = selector.children[selector.selectedIndex].value;
        let result = convert[selected](decimalNum);
        document.getElementById('result').value = result.toUpperCase();
    }
}
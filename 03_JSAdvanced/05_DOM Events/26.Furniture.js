function solve() {
  let inputTextarea = document.getElementsByTagName('textarea')[0];
  let outputTextarea = document.getElementsByTagName('textarea')[1];
  let generateBtn = document.querySelector('button');
  let buyBtn = document.getElementsByTagName('button')[1];
  let table = document.querySelector('table.table>tbody');
  let firstRow = table.children[0];
  let firstCheckBox = firstRow.children[firstRow.children.length - 1].children[0];
  firstCheckBox.disabled = false;
  generateBtn.addEventListener('click', function () {
    if (inputTextarea.value) {
      let input = JSON.parse(inputTextarea.value);
      if (typeof input == 'object') {
        input.forEach(obj => {
          let newRow = firstRow.cloneNode(true);
          let cells = Array.from(newRow.children);
          console.log(obj.img);
          cells[0].innerHTML = `<img src="${obj.img}">`;
          cells[1].innerHTML = `<p>${obj.name}</p>`
          cells[2].innerHTML = `<p>${obj.price}</p>`;
          cells[3].innerHTML = `<p>${obj.decFactor}</p>`;
          cells[4].innerHTML = '<input type="checkbox">';
          table.appendChild(newRow);
        });
      }
    }
  });
  buyBtn.addEventListener('click', function() {
    let cart = {name: [], price: 0, decFactor: 0};
    let rows = Array.from(table.children);
    rows.forEach(row => {
      let checkBox = row.children[row.children.length - 1].children[0];
      if (checkBox.checked) {
        let name = row.children[1].textContent;
        let price = Number(row.children[2].textContent);
        let decFactor = Number(row.children[3].textContent);
        cart.name.push(name);
        cart.price += price;
        cart.decFactor += decFactor;
      }
    });
      let output = `Bought furniture: ${cart.name.join(', ')}\nTotal price: ${cart.price.toFixed(2)}\nAverage decoration factor: ${cart.decFactor / cart.name.length}`;
      outputTextarea.value = output;
  });
}
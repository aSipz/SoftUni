window.addEventListener("load", solve);

function solve() {
  document.getElementById('publish').addEventListener('click', clickHandler);

  const inputsArray = Array.from(document.querySelectorAll('input, select'));

  const tableBody = document.getElementById('table-body');

  tableBody.addEventListener('click', tableClickHandler);

  const sellList = document.getElementById('cars-list');

  let totalProfit = 0;
  const profit = document.getElementById('profit');

  const tableEntries = [];

  function tableClickHandler(e) {
    if (e.target.tagName != 'BUTTON') {
      return;
    }

    const currentRow = e.target.parentElement.parentElement;
    const entryIndex = Array.from(tableBody.children).indexOf(currentRow);
    const currentEntry = tableEntries[entryIndex];

    tableBody.removeChild(currentRow);

    if (e.target.textContent == 'Edit') {
      inputsArray.forEach(e => e.value = currentEntry[e.id]);
    }

    if (e.target.textContent == 'Sell') {
      createListItem(currentEntry);
    }

    tableEntries.splice(entryIndex, 1);
  }

  function clickHandler(e) {
    e.preventDefault();
    if (inputsArray.some(i => !i.value.trim())
      || Number(inputsArray.find(e => e.id == 'car-year').value) > Number(inputsArray.find(e => e.id == 'selling-price').value)) {
      return;
    }

    tableEntries.push(inputsArray.reduce((acc, curr) => ({ ...acc, [curr.id]: curr.value }), {}));

    createTableRow();

    clearInputs();

  }

  function createTableRow() {
    const row = document.createElement('tr');
    row.classList.add('row');
    inputsArray.forEach(e => addCell(row, e.value));
    addCell(row);
    tableBody.appendChild(row);
  }

  function addCell(row, content) {
    const cell = document.createElement('td');
    if (content) {
      cell.textContent = content;
    } else {
      cell.appendChild(addButton('edit', 'Edit'));
      cell.appendChild(addButton('sell', 'Sell'));
    }
    row.appendChild(cell);
  }

  function addButton(btnClass, btnText) {
    const btn = document.createElement('button');
    btn.classList.add('action-btn', btnClass);
    btn.textContent = btnText;
    return btn;
  }

  function clearInputs() {
    inputsArray.forEach(e => e.value = '');
  }

  function createListItem(entry) {
    const currentProfit = Number(entry['selling-price']) - Number(entry['original-cost']);
    const listItem = document.createElement('li');
    listItem.classList.add('each-list');
    const span1 = document.createElement('span');
    span1.textContent = `${entry.make} ${entry.model}`;
    const span2 = document.createElement('span');
    span2.textContent = entry.year;
    const span3 = document.createElement('span');
    span3.textContent = currentProfit;
    listItem.appendChild(span1);
    listItem.appendChild(span2);
    listItem.appendChild(span3);
    sellList.appendChild(listItem);
    totalProfit += currentProfit;
    profit.textContent = totalProfit.toFixed(2);
  }
}
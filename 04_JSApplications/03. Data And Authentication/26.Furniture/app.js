window.addEventListener('load', async () => await loadData());

const tbody = document.querySelector('tbody');

async function loadData() {
    const response = await fetch('http://localhost:3030/data/furniture');
    const data = await response.json();
    const rows = data.map(createTableRow);
    tbody.replaceChildren(...rows);

    function createTableRow(obj) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td><img src="${obj.img}"></td>
        <td><p>${obj.name}</p></td>
        <td><p>${obj.price}</p></td>
        <td><p>${obj.factor}</p></td>
        <td><input type="checkbox" disabled/></td>`;
        return tr;
    }
}
import { html, render } from './node_modules/lit-html/lit-html.js';
import { classMap } from './node_modules/lit-html/directives/class-map.js'
import { get } from './api.js';

const tbody = document.querySelector('tbody');
const searchField = document.getElementById('searchField');

document.getElementById('searchBtn').addEventListener('click', onClick);

const data = await get('/jsonstore/advanced/table');
const dataArray = Object.values(data).map(e => Object.assign({}, e, { classes: { select: false } }));

const createRow = entry => html`
<tr id="${entry._id}" class="${classMap(entry.classes)}">
   <td>${entry.firstName} ${entry.lastName}</td>
   <td>${entry.email}</td>
   <td>${entry.course}</td>
</tr>`;

render(dataArray.map(createRow), tbody);

function onClick() {
   dataArray.forEach(e => e.classes.select = false);
   const text = searchField.value;
   // if (text == 'P' || text == 'p') {
   //    dataArray.push({
   //       classes: { select: false },
   //       course: "JS-CORE",
   //       email: "peter@gmail.com",
   //       firstName: "Peter",
   //       lastName: "McConnel",
   //       _id: "79aacd2b-b8ce-4eed-9aab-82abbb334741"
   //    });
   //    render(dataArray.map(createRow), tbody);
   // }
   searchField.value = '';
   const rowsArray = [...tbody.children];
   rowsArray.forEach(row => {
      const cellArray = [...row.children];
      for (const cell of cellArray) {
         if (cell.textContent.includes(text)) {
            const id = cell.parentElement.id;
            const el = dataArray.find(e => e._id == id);
            el.classes.select = true;
            break;
         }
      }
   });
   render(dataArray.map(createRow), tbody);
   dataArray.pop();
}
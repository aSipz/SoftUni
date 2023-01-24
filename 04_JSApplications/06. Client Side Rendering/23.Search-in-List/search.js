import { render, html } from './node_modules/lit-html/lit-html.js';
import { classMap } from './node_modules/lit-html/directives/class-map.js';
import { towns } from './towns.js';

const townsDiv = document.getElementById('towns');
const resultDiv = document.getElementById('result');
const input = document.getElementById('searchText');

document.querySelector('button').addEventListener('click', onClick);

const data = towns.map(e => Object.assign({}, { name: e }, { classes: { active: false } }));

const createTowns = data => html`
<ul>
   ${data.map(e => html`<li class="${classMap(e.classes)}">${e.name}</li>`)}
</ul>`;

render(createTowns(data), townsDiv);

function onClick() {
   const value = input.value;
   let count = 0;
   data.forEach(e => {
      if (e.name.includes(value)) {
         e.classes.active = true;
         count++;
      } else {
         e.classes.active = false;
      }
   });
   resultDiv.textContent = `${count} matches found`;

   render(createTowns(data), townsDiv);
}
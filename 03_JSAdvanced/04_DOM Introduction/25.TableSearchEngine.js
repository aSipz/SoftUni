function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let textSearch = document.getElementById('searchField');
      let cellsArray = Array.from(document.querySelectorAll('.container tbody tr td'));
      let rowsArray = Array.from(document.querySelectorAll('.container tbody tr'));
      rowsArray.forEach(row => {
         row.classList.remove('select');
      });
      if (textSearch.value) {
         cellsArray.forEach(cell => {
            if (cell.parentNode.classList != 'select' && cell.textContent.includes(textSearch.value)) {
               cell.parentNode.classList.add('select');
            }
         });
         textSearch.value = '';
      }
   }
}
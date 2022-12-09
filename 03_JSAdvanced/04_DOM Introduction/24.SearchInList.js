function search() {
   let towns = Array.from(document.getElementById('towns').children);
   let inputText = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   for (const town of towns) {
      town.style.textDecoration = 'none';
      town.style.fontWeight = 'normal';
   }
   let counter = 0;
   for (const town of towns) {
      if (town.textContent.includes(inputText)) {
         counter++;
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
      }
   }
   result.textContent = `${counter} matches found`;
}
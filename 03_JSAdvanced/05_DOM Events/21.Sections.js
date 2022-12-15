function create(words) {
   let outerDiv = document.getElementById('content');
   words.forEach(word => {
      const div = document.createElement('div');
      div.addEventListener('click', function(e){
         e.target.children[0].style.display = '';
      });
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      outerDiv.appendChild(div);
   });
}
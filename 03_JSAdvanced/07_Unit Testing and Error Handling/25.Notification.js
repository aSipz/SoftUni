function notify(message) {
  let outputField = document.getElementById('notification');
  let btn = document.querySelector('button');
  outputField.textContent = message;
  outputField.style.display = 'block';
  outputField.addEventListener('click', e => {
    e.target.style.display = 'none';
  });
}
function solve() {
  let outerDiv = document.getElementById('quizzie');
  let liBtn = document
  let sections = document.getElementsByTagName('section');
  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let outputField = document.querySelector('#results h1');
  let index = 0;
  let result = 0;
  outerDiv.addEventListener('click', click);

  function click(e) {
    if (e.target.className.includes('quiz-answer') || e.target.className == 'answer-text' || e.target.className == 'answer-wrap') {
      sections[index].classList = 'hidden';
      sections[index].style.display = 'none';
      if (e.target.textContent.trim() == correctAnswers[index]) {
        result++;
      }
      index++;
      if (index < 3) {
      sections[index].classList.remove('hidden');
      sections[index].style.display = 'block';
      } else {
        let outputText = '';
        result == 3? outputText = 'You are recognized as top JavaScript fan!': outputText = `You have ${result} right answers`;
        outputField.textContent = outputText;
        outputField.parentNode.parentNode.style.display = 'block';
      }
    }
  }
}
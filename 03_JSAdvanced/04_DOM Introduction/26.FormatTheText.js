function solve() {
  let textInput = document.getElementById('input').value;
  let sentenceArray = textInput.split('.');
  let pattern = /\s+/g;
  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i] == '' || sentenceArray[i] == pattern) {
      sentenceArray.splice(i,1);
      i--;
    }
  }
  let output = '';
  let count = 0;
  for (const sentence of sentenceArray) {
    if (count == 0) {
      output+= '<p>';
    }
    output += sentence + '.';
    count++;
    if (count == 3) {
      count = 0;
      output += '</p>\n'
    }
  }
  document.getElementById('output').innerHTML = output;
}
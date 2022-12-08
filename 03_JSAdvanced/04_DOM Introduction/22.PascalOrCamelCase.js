function solve() {
  let textInput = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let parse = {
    'Camel Case': camelCase,
    'Pascal Case': pascalCase,
  };
  let result = '';
  if (parse[convention]) {
    result = parse[convention](textInput);
  } else {
    result = 'Error!';
  }
  document.getElementById('result').textContent = result;

  function camelCase(text) {
    let wordsArray = text.split(' ');
    let result = '';
    wordsArray.forEach(word => {
      if (wordsArray.indexOf(word) == 0) {
        result += word.toLowerCase();
      } else {
        result += word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    });
    return result;
  }

  function pascalCase(text) {
    let wordsArray = text.split(' ');
    let result = '';
    wordsArray.forEach(word => {
      result += word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    return result;
  }
}